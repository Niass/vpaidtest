const Vpaid = class {

  buttonCloseSwitch =
    '<svg id="bliink-switch-close" style="width:35px;height:35px;position:absolute;bottom:35%;z-index:50;right:0px;cursor: pointer;" version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\nviewBox="0 0 338 302" style="enable-background:new 0 0 338 302;" xml:space="preserve">\n<path d="M168.6,240.9c-49.7-0.2-89.7-40.6-89.5-90.4c0.2-49.7,40.5-89.6,90.4-89.5c49.2,0.1,89.5,40.7,89.4,90.1\nC258.8,200.8,218.2,241.1,168.6,240.9z M184.8,150.7c6.9-6.7,13.6-12.9,20-19.4c4.6-4.7,4.4-11.3,0.1-15.8\nc-4.4-4.6-11.2-4.8-16.2-0.4c-1.6,1.4-3.1,3-4.6,4.6c-5,5.1-9.9,10.1-15,15.4c-7-7.1-13.3-13.6-19.7-19.8c-3.9-3.7-9-4.3-13.4-1.9\nc-4.4,2.4-7.1,7.4-5.7,12.2c0.8,2.7,2.5,5.4,4.5,7.5c5.9,6.1,12.1,11.8,18.5,18c-7.2,7.1-13.7,13.3-20,19.7c-3.7,3.8-4.3,9.1-2,13.4\nc2.3,4.3,7,7,11.6,5.9c2.7-0.7,5.5-2.3,7.6-4.3c6.3-5.9,12.2-12.1,18.6-18.5c6.5,6.6,12.4,12.6,18.4,18.6c5.6,5.5,12.4,5.9,17.2,1.1\nc5-4.9,4.6-11.6-0.9-17.2C197.7,163.4,191.6,157.5,184.8,150.7z"/>\n</svg>'
  vpaidDom = 'https://creative-stg.bliink.io/switch_test/index.html?cb=1683043017'
  vpaidDomInImage = undefined
  videoStylesFormat =
    'position: absolute; width: 52%; height: 39%; top: 26%; bottom: 35%; left: 42%; right: 6%; '
  adDuration = 9000
  constructor() {
    /**
     * The slot is the div element on the main page that the ad is supposed to
     * occupy.
     * @private {Object}
     */
    this.slot_ = null

    /**
     * The video slot is the video element used by the ad to render video
     * content.
     * @private {Object}
     */
    this.videoSlot_ = null

    /**
     * An object containing all registered events. These events are all
     * callbacks for use by the VPAID ad.
     * @private {Object}
     */
    this.eventsCallbacks_ = {}

    /**
     * A list of getable and setable attributes.
     * @private {Object}
     */
    this.attributes_ = {
      companions: '',
      desiredBitrate: 256,
      duration: 10,
      expanded: false,
      height: 0,
      icons: '',
      linear: false,
      skippableState: false,
      viewMode: 'normal',
      width: 0,
      volume: 1.0,
    }

    /**
     * When the ad was started.
     * @private {number}
     */
    this.startTime_ = 0

    /**
     * A set of ad playback events to be reported.
     * @private {Object}
     */
    this.quartileEvents_ = [
      { event: 'AdImpression', value: 0 },
      { event: 'AdVideoStart', value: 0 },
      { event: 'AdVideoFirstQuartile', value: 25 },
      { event: 'AdVideoMidpoint', value: 50 },
      { event: 'AdVideoThirdQuartile', value: 75 },
      { event: 'AdVideoComplete', value: 100 },
    ]

    /**
     * @private {number} An index into what quartile was last reported.
     */
    this.nextQuartileIndex_ = 0

    /**
     * Parameters passed in from the AdParameters section of the VAST.
     * Used for video URL and MIME type.
     * @private {!Object}
     */
    this.parameters_ = {}
  }
  clickAd_() {
    if ('AdClickThru' in this.eventsCallbacks_) {
      this.eventsCallbacks_['AdClickThru']('', '0', true)
    }
  }
  /**
   * Returns the supported VPAID verion.
   * @param {string} version
   * @return {string}
   */
  handshakeVersion() {
    return '2.0'
  }

  /**
   * Initializes all attributes in the ad. The ad will not start until startAd
   * is called.
   * @param {number} width The ad width.
   * @param {number} height The ad height.
   * @param {string} viewMode The ad view mode.
   * @param {number} desiredBitrate The desired bitrate.
   * @param {Object} creativeData Data associated with the creative.
   * @param {Object} environmentVars Runtime variables associated with the
   *     creative like the slot and video slot.
   */
  initAd(width, height, viewMode, desiredBitrate, creativeData, environmentVars) {
    this.attributes_['width'] = width
    this.attributes_['height'] = height
    this.attributes_['viewMode'] = viewMode
    this.attributes_['desiredBitrate'] = desiredBitrate

    // slot and videoSlot are passed as part of the environmentVars
    this.slot_ = environmentVars.slot
    this.videoSlot_ = environmentVars.videoSlot

    // Parse the incoming ad parameters.
    this.parameters_ = JSON.parse(creativeData['AdParameters'])

    this.log('initAd ' + width + 'x' + height + ' ' + viewMode + ' ' + desiredBitrate)

    this.videoSlot_.addEventListener('loadedmetadata', this.loadedMetadata_.bind(this), false)
    this.videoSlot_.addEventListener('timeupdate', this.timeUpdateHandler_.bind(this), false)
    this.videoSlot_.addEventListener('ended', this.stopAd.bind(this), false)
    this.slot_.addEventListener('click', this.clickAd_.bind(this), false)
    const vpaidType = this.parameters_.vpaidType
    if (vpaidType === 'linear') {
      this.updateVideoSlot_()
    } else {
      console.log('no linear typ')
    }
    this.callEvent_('AdLoaded')
  }

  updateVideoSlot_ = () => {
    if (this.videoSlot_ == null) {
      this.videoSlot_ = document.createElement('video')
      this.log('Warning: No video element passed to ad, creating element.')
      this.slot_.appendChild(this.videoSlot_)
    }
    this.updateVideoPlayerSize_()
    let foundSource = false
    const videos = this.parameters_.mediaFiles || []
    for (let i = 0; i < videos.length; i++) {
      // Choose the first video with a supported mimetype.
      if (this.videoSlot_.canPlayType(videos[i].type) != '') {
        this.videoSlot_.setAttribute('src', videos[i].uri)
        foundSource = true
        if (videos[i].styles) {
          this.videoSlot_.style.cssText = videos[i].styles
        }
        break
      }
    }
    if (!foundSource) {
      // Unable to find a source video.
      this.callEvent_('AdError')
    }
  }

  /**
   * Helper function to update the size of the video player.
   * @private
   */

  /**
   * Helper function to update the size of the video player.
   * @private
   */
  updateVideoPlayerSize_() {
    this.videoSlot_.setAttribute('width', this.attributes_['width'])
    this.videoSlot_.setAttribute('height', this.attributes_['height'])
  }

  /**
   * Called by the wrapper to start the ad.
   */
  startAd() {
    const vpaidType = this.parameters_.vpaidType
    this.log('Starting ad')
    if (vpaidType === 'linear') {
      this.videoSlot_?.play()
      if (this.adDuration && !this.videoStylesFormat) {
        setTimeout(() => {
          this.stopAd()
        }, this.adDuration)
      }
    }
    const date = new Date()
    this.startTime_ = date.getTime()

    // Create an img tag and populate it with the image passed in to the ad
    // parameters.

    if (this.videoSlot_.nodeName) {
      if (vpaidType === 'linear') {
        const domSlot = this.slot_
        // domSlot.classList.add('percentage')
        // if (this.vpaidDom) {
        //   domSlot.insertAdjacentHTML('beforeend', this.vpaidDom)
        // }
        const src = 'https://creative-stg.bliink.io/switch_test/index.html?cb=1683043017'
      
        const iframe = document.createElement("iframe");
        iframe.src = src;
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.border = "none";
        domSlot.innerHTML = "";
        domSlot.appendChild(iframe);
        console.log("iframe inserted : ", iframe);
      } else {
        console.log("this.videoSlot_", this.videoSlot_);
        const container = this.videoSlot_?.parentElement?.parentElement.parentElement.parentElement
        const video = container.querySelector('video')
        const boundingClientRect = video.parentElement.getBoundingClientRect()
        const minHeight = boundingClientRect.height
        video.parentElement.style.minHeight = minHeight + 'px'
        video.parentElement.style.maxHeight = '360px'
        if (this.videoStylesFormat) {
          video.style.cssText = this.videoStylesFormat
          video.style.zIndex = 10
        }

        video.parentElement.insertAdjacentHTML('beforeend', this.vpaidDom)
    
      }
    } else {
      console.log('sorry secure mode is activated')
      setInterval(() => {
        console.log('checking this.videoSlot_', this.videoSlot_)
        console.log('checking this.videoSlot_.nodeName', this.videoSlot_.nodeName)
      }, 1000)
      this.slot_.insertAdjacentHTML('beforeend', this.vpaidDom)
      // Handle case no DOM access
      if (this.vpaidDomInImage) {
        this.slot_.insertAdjacentHTML('beforeend', this.vpaidDomInImage)
      }
    }

    this.callEvent_('AdStarted')
    this.callEvent_('AdImpression')
  }

  /**
   * Called when the non-linear ad is clicked.
   * @private
   */
  adClick_() {
    if ('AdClickThru' in this.eventsCallbacks_) {
      this.eventsCallbacks_['AdClickThru']('', '0', true)
    }
  }

  /**
   * Called by the video element when the video reaches specific points during
   * playback.
   * @private
   */
  timeUpdateHandler_() {
    if (this.nextQuartileIndex_ >= this.quartileEvents_.length) {
      return
    }
    const percentPlayed = (this.videoSlot_.currentTime * 100.0) / this.videoSlot_.duration
    const nextQuartile = this.quartileEvents_[this.nextQuartileIndex_]
    if (percentPlayed >= nextQuartile.value) {
      this.eventsCallbacks_[nextQuartile.event]()
      this.nextQuartileIndex_ += 1
    }
    if (this.videoSlot_.duration > 0) {
      this.attributes_['remainingTime'] = this.videoSlot_.duration - this.videoSlot_.currentTime
    }
  }

  /**
   * Called by the video element when video metadata is loaded.
   * @private
   */
  loadedMetadata_() {
    // The ad duration is not known until the media metadata is loaded.
    // Then, update the player with the duration change.
    this.attributes_['duration'] = this.videoSlot_.duration
    this.callEvent_('AdDurationChange')
  }

  /**
   * Called by the wrapper to stop the ad.
   */
  stopAd() {
    this.log('Stopping ad')
    // Calling AdStopped immediately terminates the ad. Setting a timeout allows
    // events to go through.
    const callback = this.callEvent_.bind(this)
    setTimeout(callback, 75, ['AdStopped'])
  }

  /**
   * Called when the video player changes the width/height of the container.
   * @param {number} width The new width.
   * @param {number} height A new height.
   * @param {string} viewMode A new view mode.
   */
  resizeAd(width, height, viewMode) {
    this.log('resizeAd ' + width + 'x' + height + ' ' + viewMode)
    this.attributes_['width'] = width
    this.attributes_['height'] = height
    this.attributes_['viewMode'] = viewMode
    this.updateVideoPlayerSize_()
    this.callEvent_('AdSizeChange')
  }

  /**
   * Pauses the ad.
   */
  pauseAd() {
    this.log('pauseAd')
    this.videoSlot_.pause()
    this.callEvent_('AdPaused')
  }

  /**
   * Resumes the ad.
   */
  resumeAd() {
    this.log('resumeAd')
    this.videoSlot_.play()
    this.callEvent_('AdPlaying')
  }

  /**
   * Expands the ad.
   */
  expandAd() {
    this.log('expandAd')
    this.attributes_['expanded'] = true
    this.callEvent_('AdExpanded')
  }

  /**
   * Collapses the ad.
   */
  collapseAd() {
    this.log('collapseAd')
    this.attributes_['expanded'] = false
  }

  /**
   * Skips the ad.
   */
  skipAd() {
    this.log('skipAd')
    if (this.attributes_['skippableState']) {
      this.callEvent_('AdSkipped')
    }
  }

  /**
   * Registers a callback for an event.
   * @param {Function} callback The callback function.
   * @param {string} eventName The callback type.
   * @param {Object} context The context for the callback.
   */

  subscribe(callback, eventName, context) {
    this.log('Subscribe ' + eventName)
    this.eventsCallbacks_[eventName] = callback.bind(context)
  }

  /**
   * Removes a callback based on the eventName.
   * @param {string} eventName The callback type.
   */
  unsubscribe(eventName) {
    this.log('unsubscribe ' + eventName)
    this.eventsCallbacks_[eventName] = null
  }

  /**
   * Returns whether the ad is linear.
   * @return {boolean} True if the ad is a linear, false for non linear.
   */
  getAdLinear() {
    return this.attributes_['linear']
  }

  /**
   * Returns ad width.
   * @return {number} The ad width.
   */
  getAdWidth() {
    return this.attributes_['width']
  }

  /**
   * Returns ad height.
   * @return {number} The ad height.
   */
  getAdHeight() {
    return this.attributes_['height']
  }

  /**
   * Returns true if the ad is expanded.
   * @return {boolean}
   */
  getAdExpanded() {
    this.log('getAdExpanded')
    return this.attributes_['expanded']
  }

  /**
   * Returns the skippable state of the ad.
   * @return {boolean}
   */
  getAdSkippableState() {
    this.log('getAdSkippableState')
    return this.attributes_['skippableState']
  }

  /**
   * Returns the remaining ad time, in seconds.
   * @return {number} The time remaining in the ad.
   */
  getAdRemainingTime() {
    const date = new Date()
    const currentTime = date.getTime()
    const remainingTime = this.attributes_.duration - (currentTime - this.startTime_) / 1000.0
    return remainingTime
  }

  /**
   * Returns the duration of the ad, in seconds.
   * @return {number} The duration of the ad.
   */
  getAdDuration() {
    return this.attributes_['duration']
  }

  /**
   * Returns the ad volume.
   * @return {number} The volume of the ad.
   */
  getAdVolume() {
    this.log('getAdVolume')
    return this.attributes_['volume']
  }

  /**
   * Sets the ad volume.
   * @param {number} value The volume in percentage.
   */
  setAdVolume(value) {
    this.attributes_['volume'] = value
    this.log('setAdVolume ' + value)
    this.callEvent_('AdVolumeChange')
  }

  /**
   * Returns a list of companion ads for the ad.
   * @return {string} List of companions in VAST XML.
   */
  getAdCompanions() {
    return this.attributes_['companions']
  }

  /**
   * Returns a list of icons.
   * @return {string} A list of icons.
   */
  getAdIcons() {
    return this.attributes_['icons']
  }

  /**
   * Logs events and messages.
   * @param {string} message
   */
  log(message) {
    console.log(message)
  }

  /**
   * Calls an event if there is a callback.
   * @param {string} eventType
   * @private
   */
  callEvent_(eventType) {
    if (eventType in this.eventsCallbacks_) {
      this.eventsCallbacks_[eventType]()
    }
  }
}

/**
 * Main function called by wrapper to get the VPAID ad.
 * @return {Object} The VPAID compliant ad.
 */
var getVPAIDAd = function () {
  return new Vpaid()
}
