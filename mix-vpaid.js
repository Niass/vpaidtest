/**
 * @fileoverview A sample non-linear VPAID ad useful for testing a VPAID JS
 * enabled player. This ad will show a non-linear ad which can also enter linear
 * mode.
 */

/** @unrestricted */
const VpaidNonLinear = class {
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
      linear: false,
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

  /**
   * Returns the supported VPAID verion.
   * @param {string} version
   * @return {string}
   */
  handshakeVersion(version) {
    return '2.0';
  }

  clickAd_() {
    if ('AdClickThru' in this.eventsCallbacks_) {
      this.eventsCallbacks_['AdClickThru']('', '0', true);
    }
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
    console.log('this.videoSlot_', this.videoSlot_);

    // Parse the incoming ad parameters.
    this.parameters_ = JSON.parse(creativeData['AdParameters']);

    this.log('initAd ' + width + 'x' + height + ' ' + viewMode + ' ' + desiredBitrate);

    var parent = this.videoSlot_.parentElement;
    const bgImages = this.parameters_.images?.find((image) => image.type === 'backgroundImage');
    console.log('bgImages****', bgImages);
    if (bgImages) {
      parent.style.cssText = bgImages.styles;
    }

    const htmlVideo = parent.querySelector('video');
    this.updateVideoSlot_();
    this.videoSlot_.addEventListener('timeupdate', this.timeUpdateHandler_.bind(this), false);
    this.videoSlot_.addEventListener('loadedmetadata', this.loadedMetadata_.bind(this), false);
    this.videoSlot_.addEventListener('ended', this.stopAd.bind(this), false);
    this.slot_.addEventListener('click', this.clickAd_.bind(this), false);
    this.callEvent_('AdLoaded');
  }

  pixelToPercentage(pos, frameSize) {
    return (pos * 100) / frameSize;
  }

  formattingSizing = (value, unit) => {
    if (typeof value === 'number') {
      return `${Math.round(value)}${unit}`;
    }

    return `${value}`;
  };
  isSizingSystem = (attribute, parentFrameSize, absolutePosition) => {
    const units = {
      top: '%',
      bottom: '%',
      left: '%',
      right: '%',
      width: '%',
      height: '%',
    };

    const sizing = {
      top: this.pixelToPercentage(absolutePosition.top, parentFrameSize.height),
      bottom: this.pixelToPercentage(absolutePosition.bottom, parentFrameSize.height),
      left: this.pixelToPercentage(absolutePosition.left, parentFrameSize.width),
      right: this.pixelToPercentage(absolutePosition.right, parentFrameSize.width),
      width: (absolutePosition.width / parentFrameSize.width) * 100,
      height: (absolutePosition.height / parentFrameSize.height) * 100,
    };

    return {
      width: this.formattingSizing(sizing.width, units.width),
      height:
        attribute?.image?.displayType === 'cover'
          ? 'auto !important'
          : this.formattingSizing(sizing.height, units.height),
      top: this.formattingSizing(sizing.top, units.top),
      bottom: this.formattingSizing(sizing.bottom, units.bottom),
      left: this.formattingSizing(sizing.left, units.left),
      right: this.formattingSizing(sizing.right, units.right),
    };
  };

  /**
   * Helper function to update the size of the video player.
   * @private
   */

  stylesFormatter = (attribute, parentSize) => {
    if (!parentSize) return '';

    const elementSize = {
      ...{
        xAxis: 0,
        yAxis: 0,
        width: 100,
        height: 100,
      },
      ...attribute.size,
    };

    const initialParentSize = {
      ...{ width: 580, height: 435, xAxis: 0, yAxis: 0 },
      ...parentSize,
    };

    const absolutePosition = {
      left: elementSize.xAxis ?? 0,
      top: elementSize.yAxis ?? 0,
      height: elementSize.height,
      width: elementSize.width,
      right: initialParentSize.width - elementSize.width - (elementSize.xAxis ?? 0),
      bottom: initialParentSize.height - elementSize.height - (elementSize.yAxis ?? 0),
    };
    console.log('absolutePosition', absolutePosition, parentSize);
    const size = this.isSizingSystem(attribute, parentSize, absolutePosition);

    const cssStyles = {
      position: 'absolute',
      ...size,
    };

    return Object.entries(cssStyles)
      .map(([key, value]) => `${key}: ${value}; `)
      .join('');
  };
  /**
   * Helper function to update the size of the video player.
   * @private
   */
  updateVideoPlayerSize_() {
    console.log('update updateVideoPlayerSize_ call');
    this.videoSlot_.setAttribute('width', this.attributes_['width']);
    this.videoSlot_.setAttribute('height', this.attributes_['height']);
  }

  overlayOnClick_() {
    this.callEvent_('AdClickThru');
  }

  /**
   * Called by the wrapper to start the ad.
   */
  
  startAd() {
    this.log('Starting ad');
    this.videoSlot_.play();
    const dynamicData = this.parameters_.dynamicData || [];
    if (this.videoSlot_.nodeName) {
      console.log('game in*****')
      console.log('this.parameters_', this.parameters_);
      const creaWrapper = dynamicData.find((data) => data.type === 'wrapper');
      const creaVideo = dynamicData.find((data) => data.type === 'video');
      const videoStylesFormat = this.stylesFormatter(creaVideo, creaWrapper.size);
      console.log('videoStylesFormat', videoStylesFormat)
      console.log('creaWrapper***', creaWrapper);
      const dynamicImages = dynamicData.filter((data) => data.type === 'image');
      const container = this.videoSlot_?.parentElement?.parentElement.parentElement.parentElement;
      const video = container.querySelector('video');
      video.parentElement.style.minHeight = '350px';
      video.parentElement.style.minwidth = creaWrapper.size.width + 'px';
      const domSlot = this.slot_
      dynamicImages.forEach((data, idx) => {
        const defaultAsset = data?.image?.defaultAsset;
        const stylesFormat = this.stylesFormatter(data, creaWrapper.size);
        console.log('stylesFormat', stylesFormat);
        let domElet
        if (data?.image?.displayType === 'cover') {
          if (!defaultAsset) {
            return 'defaultAsset is missing in attribute </br>';
          }
           domElet = `<div data-type="${data.type}" style="background: url(${
            defaultAsset?.url
          }) no-repeat center center; background-size: ${'cover'};${stylesFormat}; z-index: ${
            idx
          };"></div>`;
          // video.parentElement.appendChild(domElet)
        } else if(data?.image?.displayType === 'contain') {
          domElet = `<div data-type="${data.type}"  style="background: url(${defaultAsset?.url}) no-repeat center center; background-size: ${'contain'};${stylesFormat}; z-index: ${idx};"></div>`
        } else {
          domElet = `<div  data-type="${
            data.type
          }" style="${stylesFormat};"> <img  src="${
            defaultAsset?.size < 40000 && defaultAsset?.encodedImage
            ? defaultAsset?.encodedImage
            : defaultAsset?.url
          }" alt="" style="z-index: ${idx}; height: 100%; width: 100%;"/></div>`;
        }
          // domSlot.appendChild(domElet);
          domSlot.insertAdjacentHTML('beforeend', domElet);
        // video.parentElement.insertAdjacentHTML('beforeend', domElet);

      });
      console.log('dynamicImages**____', dynamicImages);

      
      console.log('imagesStyles***', imagesStyles);
      // this.slot_.appendChild(containerTwo);
   
  
      // if (videoStyles) {
      //   console.log('found video style****');
      //   video.style.cssText = videoStylesFormat;
      //   video.style.zIndex = dynamicData.length;
      // } 

      console.log('this.videoSlot_***', this.videoSlot_);
      console.log('container***', container);
    
    }

    const buttonOne = (elt, styles) => {
      const div = document.createElement('div');
      div.style.cssText = `
    background: url("https://creative.bliink.io/61e9934208e3290017764661/vhRdHcg.png") center center / contain no-repeat;
    position: absolute;
    width: 15vh;
    height: 15%;
    bottom: 5%;
    left: 19%;
    right: inherit;
    z-index: 2;
    cursor: pointer;
  }
`;
      this.slot_.appendChild(div);
    };
    // buttonOne();

    div.addEventListener('click', this.overlayOnClick_.bind(this), false);

    this.callEvent_('AdStarted');
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
    console.log('this.videoSlot_.src = ' + this.videoSlot_.src);
    const percentPlayed = (this.videoSlot_.currentTime * 100.0) / this.videoSlot_.duration;
    let nextQuartile = this.quartileEvents_[this.nextQuartileIndex_];
    if (percentPlayed >= nextQuartile.value) {
      this.eventsCallbacks_[nextQuartile.event]();
      this.nextQuartileIndex_ += 1;
    }
    if (this.videoSlot_.duration > 0) {
      this.attributes_['remainingTime'] = this.videoSlot_.duration - this.videoSlot_.currentTime;
    }
  }
  updateVideoSlot_ = () => {
    if (this.videoSlot_ == null) {
      this.videoSlot_ = document.createElement('video');
      this.log('Warning: No video element passed to ad, creating element.');
      this.slot_.appendChild(this.videoSlot_);
    }
    this.updateVideoPlayerSize_();
    var foundSource = false;
    var videos = this.parameters_.mediaFiles || [];
    for (var i = 0; i < videos.length; i++) {
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
    if (this.parameters_.images) {
      const images = this.parameters_.images.filter((image) => image.type === 'image');
      images.forEach((image) => {
        const div = document.createElement('div');
        div.style.cssText = image.styles;
        this.insertAfter(div, this.videoSlot_);
      });
      console.log('youpiiii', this.parameters_images);
    } else {
      console.log('no luck****', this.parameters_);
    }
    if (!foundSource) {
      // Unable to find a source video.
      this.callEvent_('AdError');
    }
  };

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
  return new VpaidNonLinear();
};
