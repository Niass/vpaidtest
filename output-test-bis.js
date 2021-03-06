const Vpaid = class {
  vpaidImages =
    '<div data-type="image" style="background: url(https://creative.bliink.io/62176bf34ab26d00189722a6/ZcXQ6Td.jpg) no-repeat center center; background-size: cover;position: absolute; width: 100%; height: auto !important; top: 0%; bottom: 0%; left: 0%; right: 0%; ; z-index: 0;"></div>$<div data-type="image"  style="background: url(https://creative.bliink.io/62176bf34ab26d00189722a6/NoOZtdN.png) no-repeat center center; background-size: contain;position: absolute; width: 19%; height: 23%; top: 77%; bottom: 0%; left: 70%; right: 11%; ; z-index: 1;"></div>$<div data-type="image"  style="background: url(https://creative.bliink.io/62176bf34ab26d00189722a6/Ui7FMiZ.png) no-repeat center center; background-size: contain;position: absolute; width: 34%; height: 5%; top: 88%; bottom: 7%; left: 2%; right: 63%; ; z-index: 2;"></div>$<div data-type="image"  style="background: url(https://creative.bliink.io/62176bf34ab26d00189722a6/e9AASXd.png) no-repeat center center; background-size: contain;position: absolute; width: 69%; height: 7%; top: 18%; bottom: 76%; left: 16%; right: 16%; ; z-index: 3;"></div>$<div data-type="image"  style="background: url(https://creative.bliink.io/62176bf34ab26d00189722a6/I6lWxuF.png) no-repeat center center; background-size: contain;position: absolute; width: 17%; height: 12%; top: 2%; bottom: 86%; left: 41%; right: 41%; ; z-index: 4;"></div>$<div data-type="image"  style="background: url(https://creative.bliink.io/62176bf34ab26d00189722a6/fCv9ded.png) no-repeat center center; background-size: contain;position: absolute; width: 39%; height: 3%; top: 95%; bottom: 3%; left: 2%; right: 58%; ; z-index: 5;"></div>$<div data-type="image"  style="background: url(https://creative.bliink.io/62176bf34ab26d00189722a6/WNUrW9X.png) no-repeat center center; background-size: contain;position: absolute; width: 25%; height: 8%; top: 77%; bottom: 16%; left: 35%; right: 40%; ; z-index: 6;"></div>';
  videoStylesFormat =
    'position: absolute; width: 60%; height: 45%; top: 28%; bottom: 27%; left: 19%; right: 21%;transition:all .1s ease-in-out; ';
  constructor() {
    /**
     * The slot is the div element on the main page that the ad is supposed to
     * occupy.
     * @private {Object}
     */
    this.slot_ = null;

    /**
     * The video slot is the video element used by the ad to render video
     * content.
     * @private {Object}
     */
    this.videoSlot_ = null;

    /**
     * An object containing all registered events. These events are all
     * callbacks for use by the VPAID ad.
     * @private {Object}
     */
    this.eventsCallbacks_ = {};

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
      linear: true,
      skippableState: false,
      viewMode: 'normal',
      width: 0,
      volume: 1.0,
    };


    /**
     * When the ad was started.
     * @private {number}
     */
    this.startTime_ = 0;

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
    ];

    /**
     * @private {number} An index into what quartile was last reported.
     */
    this.nextQuartileIndex_ = 0;

    /**
     * Parameters passed in from the AdParameters section of the VAST.
     * Used for video URL and MIME type.
     * @private {!Object}
     */
    this.parameters_ = {};
  }
  clickAd_() {
    if ('AdClickThru' in this.eventsCallbacks_) {
      this.eventsCallbacks_['AdClickThru']('', '0', true);
    }
  }
  /**
   * Returns the supported VPAID verion.
   * @param {string} version
   * @return {string}
   */
  handshakeVersion() {
    return '2.0';
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
    this.attributes_['width'] = width;
    this.attributes_['height'] = height;
    this.attributes_['viewMode'] = viewMode;
    this.attributes_['desiredBitrate'] = desiredBitrate;

    // slot and videoSlot are passed as part of the environmentVars
    this.slot_ = environmentVars.slot;
    this.videoSlot_ = environmentVars.videoSlot;

    // Parse the incoming ad parameters.
    this.parameters_ = JSON.parse(creativeData['AdParameters']);

    this.log('initAd ' + width + 'x' + height + ' ' + viewMode + ' ' + desiredBitrate);

    this.videoSlot_.addEventListener('loadedmetadata', this.loadedMetadata_.bind(this), false);
    this.videoSlot_.addEventListener('timeupdate', this.timeUpdateHandler_.bind(this), false);
    this.videoSlot_.addEventListener('ended', this.stopAd.bind(this), false);
    this.slot_.addEventListener('click', this.clickAd_.bind(this), false);
    const vpaidType = this.parameters_.vpaidType;
    if (vpaidType === 'linear') {
      this.updateVideoSlot_();
    } else {
      console.log('no linear typ');
    }
    this.callEvent_('AdLoaded');
  }

  updateVideoSlot_ = () => {
    if (this.videoSlot_ == null) {
      this.videoSlot_ = document.createElement('video');
      this.log('Warning: No video element passed to ad, creating element.');
      this.slot_.appendChild(this.videoSlot_);
    }
    this.updateVideoPlayerSize_();
    let foundSource = false;
    const videos = this.parameters_.mediaFiles || [];
    for (let i = 0; i < videos.length; i++) {
      // Choose the first video with a supported mimetype.
      if (this.videoSlot_.canPlayType(videos[i].type) != '') {
        this.videoSlot_.setAttribute('src', videos[i].uri);
        foundSource = true;
        if (videos[i].styles) {
          this.videoSlot_.style.cssText = videos[i].styles;
        }
        break;
      }
    }
    if (!foundSource) {
      // Unable to find a source video.
      this.callEvent_('AdError');
    }
  };

  /**
   * Helper function to update the size of the video player.
   * @private
   */

  /**
   * Helper function to update the size of the video player.
   * @private
   */
  updateVideoPlayerSize_() {
    this.videoSlot_.setAttribute('width', this.attributes_['width']);
    this.videoSlot_.setAttribute('height', this.attributes_['height']);
  }

  /**
   * Called by the wrapper to start the ad.
   */
  startAd() {
    const vpaidType = this.parameters_.vpaidType;
    this.log('Starting ad');
    if (vpaidType === 'linear') {
      this.videoSlot_.play();
    }
    const date = new Date();
    this.startTime_ = date.getTime();

    // Create an img tag and populate it with the image passed in to the ad
    // parameters.

    if (this.videoSlot_.nodeName) {
      if (vpaidType === 'linear') {
        const domSlot = this.slot_;
        domSlot.classList.add('percentage');
        const vpaidImagesArray = this.vpaidImages.split('$');
        console.log('vpaidImagesArray1', vpaidImagesArray);
        if (this.videoStylesFormat) {
          this.videoSlot_.style.transition = 'width 1s ease-in-out';
          this.videoSlot_.style.cssText = this.videoStylesFormat;
          this.videoSlot_.style.zIndex = vpaidImagesArray.length.toString();
          this.videoSlot_.parentElement.parentElement.classList.add('percentage');
        }
        vpaidImagesArray.forEach((data) => {
          domSlot.insertAdjacentHTML('beforeend', data);
        });
      } else {
        const container = this.videoSlot_?.parentElement?.parentElement.parentElement.parentElement;
        const video = container.querySelector('video');
        video.parentElement.style.minHeight = '350px';
        const vpaidImagesArray = this.vpaidImages.split('$');
        console.log('vpaidImagesArray', vpaidImagesArray);
        if (this.videoStylesFormat) {
          video.style.cssText = this.videoStylesFormat;
          video.style.zIndex = vpaidImagesArray.length.toString();
        }

        vpaidImagesArray.forEach((data) => {
          video.parentElement.insertAdjacentHTML('beforeend', data);
        });
      }
    } else {
      // Handle case no DOM access
    }

    this.callEvent_('AdStarted');
    this.callEvent_('AdImpression');
  }

  /**
   * Called when the non-linear ad is clicked.
   * @private
   */
  adClick_() {
    if ('AdClickThru' in this.eventsCallbacks_) {
      this.eventsCallbacks_['AdClickThru']('', '0', true);
    }
  }

  /**
   * Called by the video element when the video reaches specific points during
   * playback.
   * @private
   */
  timeUpdateHandler_() {
    if (this.nextQuartileIndex_ >= this.quartileEvents_.length) {
      return;
    }
    const percentPlayed = (this.videoSlot_.currentTime * 100.0) / this.videoSlot_.duration;
    const nextQuartile = this.quartileEvents_[this.nextQuartileIndex_];
    if (percentPlayed >= nextQuartile.value) {
      this.eventsCallbacks_[nextQuartile.event]();
      this.nextQuartileIndex_ += 1;
    }
    if (this.videoSlot_.duration > 0) {
      this.attributes_['remainingTime'] = this.videoSlot_.duration - this.videoSlot_.currentTime;
    }
  }

  /**
   * Called by the video element when video metadata is loaded.
   * @private
   */
  loadedMetadata_() {
    // The ad duration is not known until the media metadata is loaded.
    // Then, update the player with the duration change.
    this.attributes_['duration'] = this.videoSlot_.duration;
    this.callEvent_('AdDurationChange');
  }

  /**
   * Called by the wrapper to stop the ad.
   */
  stopAd() {
    this.log('Stopping ad');
    // Calling AdStopped immediately terminates the ad. Setting a timeout allows
    // events to go through.
    const callback = this.callEvent_.bind(this);
    setTimeout(callback, 75, ['AdStopped']);
  }

  /**
   * Called when the video player changes the width/height of the container.
   * @param {number} width The new width.
   * @param {number} height A new height.
   * @param {string} viewMode A new view mode.
   */
  resizeAd(width, height, viewMode) {
    this.log('resizeAd ' + width + 'x' + height + ' ' + viewMode);
    this.attributes_['width'] = width;
    this.attributes_['height'] = height;
    this.attributes_['viewMode'] = viewMode;
    this.updateVideoPlayerSize_();
    this.callEvent_('AdSizeChange');
  }

  /**
   * Pauses the ad.
   */
  pauseAd() {
    this.log('pauseAd');
    this.videoSlot_.pause();
    console.log('ad should pause$$$')
    this.callEvent_('AdPaused');
  }

  /**
   * Resumes the ad.
   */
  resumeAd() {
    this.log('resumeAd');
    this.videoSlot_.play();
    this.callEvent_('AdPlaying');
  }

  /**
   * Expands the ad.
   */
  expandAd() {
    this.log('expandAd');
    this.attributes_['expanded'] = true;
    this.callEvent_('AdExpanded');
  }

  /**
   * Collapses the ad.
   */
  collapseAd() {
    this.log('collapseAd');
    this.attributes_['expanded'] = false;
  }

  /**
   * Skips the ad.
   */
  skipAd() {
    this.log('skipAd');
    if (this.attributes_['skippableState']) {
      this.callEvent_('AdSkipped');
    }
  }

  /**
   * Registers a callback for an event.
   * @param {Function} callback The callback function.
   * @param {string} eventName The callback type.
   * @param {Object} context The context for the callback.
   */

  subscribe(callback, eventName, context) {
    this.log('Subscribe ' + eventName);
    this.eventsCallbacks_[eventName] = callback.bind(context);
  }

  /**
   * Removes a callback based on the eventName.
   * @param {string} eventName The callback type.
   */
  unsubscribe(eventName) {
    this.log('unsubscribe ' + eventName);
    this.eventsCallbacks_[eventName] = null;
  }

  /**
   * Returns whether the ad is linear.
   * @return {boolean} True if the ad is a linear, false for non linear.
   */
  getAdLinear() {
    return this.attributes_['linear'];
  }

  /**
   * Returns ad width.
   * @return {number} The ad width.
   */
  getAdWidth() {
    return this.attributes_['width'];
  }

  /**
   * Returns ad height.
   * @return {number} The ad height.
   */
  getAdHeight() {
    return this.attributes_['height'];
  }

  /**
   * Returns true if the ad is expanded.
   * @return {boolean}
   */
  getAdExpanded() {
    this.log('getAdExpanded');
    return this.attributes_['expanded'];
  }

  /**
   * Returns the skippable state of the ad.
   * @return {boolean}
   */
  getAdSkippableState() {
    this.log('getAdSkippableState');
    return this.attributes_['skippableState'];
  }

  /**
   * Returns the remaining ad time, in seconds.
   * @return {number} The time remaining in the ad.
   */
  getAdRemainingTime() {
    const date = new Date();
    const currentTime = date.getTime();
    const remainingTime = this.attributes_.duration - (currentTime - this.startTime_) / 1000.0;
    return remainingTime;
  }

  /**
   * Returns the duration of the ad, in seconds.
   * @return {number} The duration of the ad.
   */
  getAdDuration() {
    return this.attributes_['duration'];
  }

  /**
   * Returns the ad volume.
   * @return {number} The volume of the ad.
   */
  getAdVolume() {
    this.log('getAdVolume');
    return this.attributes_['volume'];
  }

  /**
   * Sets the ad volume.
   * @param {number} value The volume in percentage.
   */
  setAdVolume(value) {
    this.attributes_['volume'] = value;
    this.log('setAdVolume ' + value);
    this.callEvent_('AdVolumeChange');
  }

  /**
   * Returns a list of companion ads for the ad.
   * @return {string} List of companions in VAST XML.
   */
  getAdCompanions() {
    return this.attributes_['companions'];
  }

  /**
   * Returns a list of icons.
   * @return {string} A list of icons.
   */
  getAdIcons() {
    return this.attributes_['icons'];
  }

  /**
   * Logs events and messages.
   * @param {string} message
   */
  log(message) {
    console.log(message);
  }

  /**
   * Calls an event if there is a callback.
   * @param {string} eventType
   * @private
   */
  callEvent_(eventType) {
    if (eventType in this.eventsCallbacks_) {
      this.eventsCallbacks_[eventType]();
    }
  }
};

/**
 * Main function called by wrapper to get the VPAID ad.
 * @return {Object} The VPAID compliant ad.
 */
var getVPAIDAd = function () {
  return new Vpaid();
};
