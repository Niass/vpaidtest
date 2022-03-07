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
    console.log('environmentVars*', environmentVars);
    this.videoSlot_ = environmentVars.videoSlot;
    console.log('this.videoSlot_ src*$', this.videoSlot_.src);
    console.log('this.videoSlot_ currentTime*$', this.videoSlot_.currentTime);
    console.log('this.videoSlot_ duration*$', this.videoSlot_.duration);
    console.log('this.videoSlot_ ended*$', this.videoSlot_.ended);
    console.log('this.videoSlot_ playbackRate*$', this.videoSlot_.playbackRate);
    console.log('this.videoSlot_ type*$', this.videoSlot_.type);

    // this.videoSlot_.style.top = '15%';
    if (this.videoSlot_.nodeName) {
      var container = this.videoSlot_?.parentElement?.parentElement.parentElement.parentElement;
    }

    // Parse the incoming ad parameters.
    this.parameters_ = JSON.parse(creativeData['AdParameters']);

    this.log('initAd ' + width + 'x' + height + ' ' + viewMode + ' ' + desiredBitrate);
    this.callEvent_('AdLoaded');
  }
  pixelToPercentage(pos, frameSize) {
    return (pos * 100) / frameSize;
  }
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
      width: formattingSizing(sizing.width, units.width),
      height:
        attribute?.image?.displayType === 'cover'
          ? 'auto !important'
          : formattingSizing(sizing.height, units.height),
      top: formattingSizing(sizing.top, units.top),
      bottom: formattingSizing(sizing.bottom, units.bottom),
      left: formattingSizing(sizing.left, units.left),
      right: formattingSizing(sizing.right, units.right),
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

    const size = isSizingSystem(attribute, parentSize, absolutePosition);

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

  /**
   * Called by the wrapper to start the ad.
   */
  startAd() {
    this.log('Starting ad');

    const date = new Date();
    this.startTime_ = date.getTime();

    // Create a div to contain our ad elements.
    const overlays = this.parameters_.overlays || [];
    const dynamicData = this.parameters_.dynamicData || [];

    const containerOne = document.createElement('div');
    const containerTwo = document.createElement('div');
    containerTwo.style.cssText = `
      display: block;
      position:absolute;
      // width: 135%;
      left: 0;
      right: 0;
      top: 0;
    `;
    containerOne.style.display = 'block';
    containerOne.style.position = 'absolute';
    // containerOne.style.width = '135%';
    containerOne.style.bottom = '5%';
    containerOne.style.left = 0;
    containerOne.style.right = 0;

    // Create an img tag and populate it with the image passed in to the ad
    // parameters.
  
    const adImg = document.createElement('img');
    if (this.videoSlot_.nodeName) {
      console.log('this.parameters_', this.parameters_);
      const creaWrapper = dynamicData.find((data) => data.type === 'wrapper');
      console.log('creaWrapper***', creaWrapper);
      const dynamicImages = dynamicData.filter((data) => data.type === 'image');
      dynamicImages.forEach((data) => {
        const stylesFormat = this.stylesFormatter(data, creaWrapper.size)
        console.log('stylesFormat', stylesFormat)
        const container = document.createElement('div');
     
      });
      console.log('dynamicImages**____', dynamicImages);
      const bgImages = this.parameters_.styles?.find((style) => style.type === 'backgroundImage');
      const videoStyles = this.parameters_.styles?.find((style) => style.type === 'video');
      const imagesStyles = this.parameters_.styles?.filter((style) => style.type === 'image');
      console.log('imagesStyles***', imagesStyles);
      // this.slot_.appendChild(containerTwo);
      const adImgTwo = document.createElement('img');
      adImgTwo.src = overlays[1] || '';
      adImgTwo.style.margin = 'auto';
      adImgTwo.style.display = 'block';
      adImgTwo.style.maxHeight = '100px';
      // containerTwo.appendChild(adImgTwo);
      containerOne.appendChild(adImg);
      containerTwo.appendChild(adImgTwo);
      const container = this.videoSlot_?.parentElement?.parentElement.parentElement.parentElement;
      const video = container.querySelector('video');
      console.log('video***', video);
      // video.parentElement.appendChild(containerOne);
      // video.parentElement.appendChild(containerTwo);
      imagesStyles.forEach((style) => {
        const container = document.createElement('div');
        container.style.cssText = style.containerStyles;
        const image = document.createElement('img');
        container.appendChild(image);
        image.style.cssText = style.imageStyles;
        image.src = style.src || '';
        video.parentElement.appendChild(container);
      });
      if (videoStyles) {
        console.log('found video style****');
        video.style.cssText = videoStyles.styles;
      } else {
        video.style.cssText = `
        transition: all 0.2s linear;
            width: auto;
            right: 0;
            left: 0;
            top: 25%;
            height: 175px;
            position: absolute;
            border: 2px solid #ddc157;
            z-index: 2;
            border-radius: 5px;
            margin: 0 auto;
            `;
      }

      console.log('this.videoSlot_***', this.videoSlot_);
      console.log('container***', container);
      if (container) {
        if (bgImages) {
          console.log('found____');
          container.style.cssText = bgImages.styles;
        } else {
          console.log('not found____');
          container.style.cssText = `
          transition: background 0.2s;
          background: url(https://i.ibb.co/DCs08Kq/899fyB3.jpg) center center / cover no-repeat;
        inset: 0% 0% 0% 0%;
        z-index: 0;
        cursor: pointer;
        min-height: 360px;
      }
      `;
        }
        console.log('video____', video);
      }
    } else {
      this.slot_.appendChild(containerOne);
      containerOne.style.display = 'block';
      containerOne.style.position = 'absolute';
      containerOne.style.width = '100%';
      containerOne.style.bottom = '0%';
      containerOne.appendChild(adImg);
      console.log('type node name**', this.videoSlot_.nodeName);
      console.log('no instanceof element', this.videoSlot_);
    }
    console.log('overlays[1]', overlays[1]);
    console.log('overlays[0]', overlays[0]);
    adImg.src = overlays[0] || '';
    adImg.style.margin = 'auto';
    adImg.style.display = 'block';
    // adImg.style.marginBottom = '20px';
    adImg.addEventListener('click', this.adClick_.bind(this), false);
    // container.appendChild(adImg);

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
   * Called when the linear overlay is clicked.  Plays the video passed in the
   * parameters.
   * @private
   */
  linearButtonClick_() {
    this.log('Linear Button Click');
    // This will turn the ad into a linear ad.
    this.attributes_.linear = true;
    this.callEvent_('AdLinearChange');
    // Remove all elements.
    while (this.slot_.firstChild) {
      this.slot_.removeChild(this.slot_.firstChild);
    }

    this.updateVideoPlayerSize_();

    // Start a video.
    const videos = this.parameters_.videos || [];
    for (let i = 0; i < videos.length; i++) {
      // Choose the first video with a supported mimetype.
      if (this.videoSlot_.canPlayType(videos[i].mimetype) != '') {
        this.videoSlot_.setAttribute('src', videos[i].url);
        console.log('this.videoSlot_* src$', this.videoSlot_.src);
        // Set start time of linear ad to calculate remaining time.
        const date = new Date();
        this.startTime_ = date.getTime();

        this.videoSlot_.addEventListener('timeupdate', this.timeUpdateHandler_.bind(this), false);
        this.videoSlot_.addEventListener('loadedmetadata', this.loadedMetadata_.bind(this), false);
        this.videoSlot_.addEventListener('ended', this.stopAd.bind(this), false);

        this.videoSlot_.play();

        return;
      }
    }
    // Haven't found a video, so error.
    this.callEvent_('AdError');
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
