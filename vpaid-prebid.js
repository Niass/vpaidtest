const Vpaid = class {
  buttonReduceSwitch = "<svg id=\"bliink-switch\" style=\"width:20px;height:20px;position:absolute;top:5px;z-index:50;right:10px;cursor: pointer;\" version=\"1.1\"\n id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n viewBox=\"0 0 170.8 113.3\" style=\"enable-background:new 0 0 170.8 113.3;\" xml:space=\"preserve\">\n <style type=\"text/css\">\n   .st0 {\n     opacity: 0.7;\n   }\n\n   .st1 {\n     fill: #FFFFFF;\n   }\n </style>\n <rect class=\"st0\" width=\"170.8\" height=\"113.3\" />\n <path class=\"st1\"\n   d=\"M88.8,63c-9.4,0-18.7,0-28.1,0c-5.1,0-8.5-3.4-6.6-6.7c1.1-1.9,3.6-3,6.8-3c11,0,22.1,0,33.1,0\nc7.7,0,15.5,0,23.2,0c3.5,0,6.5,1.9,6.8,4.2c0.4,2.5-1.9,4.8-5.4,5.3c-0.8,0.1-1.6,0.1-2.4,0.1C107.2,63,98,63,88.8,63z\" />\n</svg>"
  buttonCloseSwitch = "<svg id=\"bliink-switch-close\" style=\"width:35px;height:35px;position:absolute;bottom:35%;z-index:50;right:0px;cursor: pointer;\" version=\"1.1\" id=\"Calque_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\nviewBox=\"0 0 338 302\" style=\"enable-background:new 0 0 338 302;\" xml:space=\"preserve\">\n<path d=\"M168.6,240.9c-49.7-0.2-89.7-40.6-89.5-90.4c0.2-49.7,40.5-89.6,90.4-89.5c49.2,0.1,89.5,40.7,89.4,90.1\nC258.8,200.8,218.2,241.1,168.6,240.9z M184.8,150.7c6.9-6.7,13.6-12.9,20-19.4c4.6-4.7,4.4-11.3,0.1-15.8\nc-4.4-4.6-11.2-4.8-16.2-0.4c-1.6,1.4-3.1,3-4.6,4.6c-5,5.1-9.9,10.1-15,15.4c-7-7.1-13.3-13.6-19.7-19.8c-3.9-3.7-9-4.3-13.4-1.9\nc-4.4,2.4-7.1,7.4-5.7,12.2c0.8,2.7,2.5,5.4,4.5,7.5c5.9,6.1,12.1,11.8,18.5,18c-7.2,7.1-13.7,13.3-20,19.7c-3.7,3.8-4.3,9.1-2,13.4\nc2.3,4.3,7,7,11.6,5.9c2.7-0.7,5.5-2.3,7.6-4.3c6.3-5.9,12.2-12.1,18.6-18.5c6.5,6.6,12.4,12.6,18.4,18.6c5.6,5.5,12.4,5.9,17.2,1.1\nc5-4.9,4.6-11.6-0.9-17.2C197.7,163.4,191.6,157.5,184.8,150.7z\"/>\n</svg>"
  vpaidDom = "\n        <div\n            \n            data-transition-nextWrapperId=\"629796efee05d00018aeadbd\"\n            data-transition-enable=\"true\" data-transition-wrapperId=\"62979618ee05d00018aea93f\" data-transition-timing=\"45000\"\n            data-wrapperId=\"62979618ee05d00018aea93f\"\n            data-id=\"62979618ee05d00018aea93f\"\n            data-index=\"1\"\n            class=\"full-image hide\"\n            style=\"z-index: 1; transition: all .8s ease-in-out; position: absolute; left: 0.00%; top: 0.00%; width: 100.00%; height: 100.00%; transition: all ease-in-out 0.3s;\"\n        >   <IMG SRC=\"https://ad.doubleclick.net/ddm/trackimp/N105603.3558825DV360-FRANCE/B27893887.337739862;dc_trk_aid=530007094;dc_trk_cid=172384985;ord=[timestamp];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ltd=?\" BORDER=\"0\" HEIGHT=\"1\" WIDTH=\"1\" ALT=\"Advertisement\"><SCRIPT TYPE=\"application/javascript\" SRC=\"https://pixel.adsafeprotected.com/rjss/st/1060844/63536144/skeleton.js?ias_dspID=3&ias_campId=${INSERTION_ORDER_ID}&ias_pubId=${ADSXT_PUBLISHER_ID}&ias_chanId=${EXCHANGE_ID}&ias_placementId=${CAMPAIGN_ID}&bidurl=${SOURCE_URL_ENC}&ias_dealId=${INVENTORY_SOURCE_EXTERNAL_ID}&adsafe_par&ias_impId=v4~~${AUCTION_ID}\"></SCRIPT> <NOSCRIPT><IMG SRC=\"https://pixel.adsafeprotected.com/rfw/st/1060844/63536143/skeleton.gif?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_278}&gdpr_pd=${GDPR_PD}&ias_dspID=3&ias_campId=${INSERTION_ORDER_ID}&ias_pubId=${ADSXT_PUBLISHER_ID}&ias_chanId=${EXCHANGE_ID}&ias_placementId=${CAMPAIGN_ID}&bidurl=${SOURCE_URL_ENC}&ias_dealId=${INVENTORY_SOURCE_EXTERNAL_ID}&adsafe_par&ias_impId=v4~~${AUCTION_ID}\" BORDER=0 WIDTH=1 HEIGHT=1 ALT=\"\"></NOSCRIPT>\n            <div style=\"width:100%; height:100%; position: absolute; bottom: 0;overflow: hidden;\">\n                <div data-type=\"image\" style=\"background: url(https://creative.bliink.io/62979618ee05d00018aea93a/Fk1RmYG.jpg) no-repeat center center; background-size: cover;position: absolute; width: 120%; height: auto !important; top: 0%; bottom: 0%; left: -11%; right: -9%; ; z-index: 0;\"></div><div data-type=\"image\"  style=\"background: url(https://creative.bliink.io/62979618ee05d00018aea93a/mVABBkt.png) no-repeat center center; background-size: contain;position: absolute; width: 31%; height: 8%; top: 87%; bottom: 5%; left: 19%; right: 50%; ; z-index: 1;\"></div><div data-type=\"image\"  style=\"background: url(https://creative.bliink.io/62979618ee05d00018aea93a/Dt7Ugg6.png) no-repeat center center; background-size: contain;position: absolute; width: 44%; height: 13%; top: 6%; bottom: 82%; left: 4%; right: 52%; ; z-index: 2;\"></div><div data-type=\"image\"  style=\"background: url(https://creative.bliink.io/62979618ee05d00018aea93a/pCMTRRU.png) no-repeat center center; background-size: contain;position: absolute; width: 69%; height: 17%; top: 17%; bottom: 66%; left: 1%; right: 30%; ; z-index: 3;\"></div>\n            </div>\n    </div>"
  vpaidDomInImage = "\n        <div\n            \n            \n            \n            data-wrapperId=\"629796efee05d00018aeadbd\"\n            data-id=\"629796efee05d00018aeadbd\"\n            data-index=\"1\"\n            class=\"in-image hide\"\n            style=\"z-index: 1; transition: all .8s ease-in-out; overflow:hidden;opacity: 1;transition: all ease-in-out 0.3s;opacity:0;\"\n        >   <IMG SRC=\"https://ad.doubleclick.net/ddm/trackimp/N105603.3558825DV360-FRANCE/B27893887.337739862;dc_trk_aid=530007094;dc_trk_cid=172384985;ord=[timestamp];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ltd=?\" BORDER=\"0\" HEIGHT=\"1\" WIDTH=\"1\" ALT=\"Advertisement\"><SCRIPT TYPE=\"application/javascript\" SRC=\"https://pixel.adsafeprotected.com/rjss/st/1060844/63536144/skeleton.js?ias_dspID=3&ias_campId=${INSERTION_ORDER_ID}&ias_pubId=${ADSXT_PUBLISHER_ID}&ias_chanId=${EXCHANGE_ID}&ias_placementId=${CAMPAIGN_ID}&bidurl=${SOURCE_URL_ENC}&ias_dealId=${INVENTORY_SOURCE_EXTERNAL_ID}&adsafe_par&ias_impId=v4~~${AUCTION_ID}\"></SCRIPT> <NOSCRIPT><IMG SRC=\"https://pixel.adsafeprotected.com/rfw/st/1060844/63536143/skeleton.gif?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_278}&gdpr_pd=${GDPR_PD}&ias_dspID=3&ias_campId=${INSERTION_ORDER_ID}&ias_pubId=${ADSXT_PUBLISHER_ID}&ias_chanId=${EXCHANGE_ID}&ias_placementId=${CAMPAIGN_ID}&bidurl=${SOURCE_URL_ENC}&ias_dealId=${INVENTORY_SOURCE_EXTERNAL_ID}&adsafe_par&ias_impId=v4~~${AUCTION_ID}\" BORDER=0 WIDTH=1 HEIGHT=1 ALT=\"\"></NOSCRIPT>\n            <div style=\"width:100%; height:35%; position: absolute; bottom: 0;overflow: hidden;\">\n                <div data-type=\"image\" style=\"background: url(https://creative.bliink.io/62979618ee05d00018aea93a/qU9lyyq.jpg) no-repeat center center; background-size: cover;position: absolute; width: 100%; height: auto !important; top: 0%; bottom: 0%; left: 0%; right: 0%; ; z-index: 0;\"></div><div data-type=\"image\"  style=\"background: url(https://creative.bliink.io/62979618ee05d00018aea93a/EAEj2fd.png) no-repeat center center; background-size: contain;position: absolute; width: 69%; height: 52%; top: 31%; bottom: 17%; left: 16%; right: 16%; ; z-index: 1;\"></div><div data-type=\"image\"  style=\"background: url(https://creative.bliink.io/62979618ee05d00018aea93a/Dt7Ugg6.png) no-repeat center center; background-size: contain;position: absolute; width: 34%; height: 30%; top: 7%; bottom: 63%; left: 2%; right: 63%; ; z-index: 2;\"></div><div data-type=\"image\"  style=\"background: url(https://creative.bliink.io/62979618ee05d00018aea93a/mVABBkt.png) no-repeat center center; background-size: contain;position: absolute; width: 17%; height: 13%; top: 79%; bottom: 8%; left: 43%; right: 40%; ; z-index: 3;\"></div>\n            </div>\n    </div>"
  videoStylesFormat = 'position: absolute; width: 67%; height: 50%; top: 33%; bottom: 17%; left: 3%; right: 30%; ';
  adDuration = 48000
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
    this.isBliinkPlayer_ = false;
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
    console.log("this.videoSlot_", this.videoSlot_)
    const isBliinkPlayer = this.videoSlot_.classList?.contains("bliink-player__video");
          console.log("isBliinkPlayer", isBliinkPlayer);
    // Parse the incoming ad parameters.
    this.isBliinkPlayer_ = this.videoSlot_.classList?.contains("bliink-player__video");
    this.parameters_ = JSON.parse(creativeData['AdParameters']);

    this.log('initAd ' + width + 'x' + height + ' ' + viewMode + ' ' + desiredBitrate);
    console.log("this.parameters_", this.parameters_);
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
      this.videoSlot_?.play();
      if (this.adDuration && !this.videoStylesFormat) {
        setTimeout(() => {
          this.stopAd();
        }, this.adDuration);
      }
    }
    const date = new Date();
    this.startTime_ = date.getTime();

    // Create an img tag and populate it with the image passed in to the ad
    // parameters.

    if (this.videoSlot_.nodeName) {
      if (vpaidType === 'linear') {
        const domSlot = this.slot_;
        console.log("domSlot", domSlot)
        console.log("domSlot parentElement 1", domSlot?.parentElement)
        console.log("domSlot parentElement2", domSlot?.parentElement?.parentElement)
        domSlot.classList.add('percentage');
        if (this.videoStylesFormat) {
          this.videoSlot_.style.transition = 'width 1s ease-in-out';
          this.videoSlot_.style.cssText = this.videoStylesFormat;
          this.videoSlot_.style.zIndex = 10;
          this.videoSlot_.parentElement.parentElement.classList.add('percentage');
        }
        console.log("this.vpaidDom", this.vpaidDom)
        if (this.vpaidDom) {
          domSlot.insertAdjacentHTML('beforeend', this.vpaidDom);
          if (this.vpaidDomInImage) {
            domSlot.insertAdjacentHTML('beforeend', this.vpaidDomInImage);
          }
          console.log("this.isBliinkPlayer_", this.isBliinkPlayer_);
          if (this.buttonReduceSwitch && this.vpaidDomInImage) {
            domSlot.insertAdjacentHTML('beforeend', this.buttonReduceSwitch);
          } else if (this.buttonCloseSwitch) {
            const inImageWrapper = domSlot.parentElement.querySelector(
              '.in-image'
              )
              if(this.isBliinkPlayer_) return
              if(inImageWrapper) {
            inImageWrapper.style.top = 'auto'
            inImageWrapper.style.bottom = '0'
              domSlot.insertAdjacentHTML(
                  'beforeend',
                  this.buttonCloseSwitch
              )
              const closeSwitchButton = domSlot.parentElement.querySelector(
                  '#bliink-switch-close'
              )
              closeSwitchButton.addEventListener(
                  'click',
                  function () {
                      const inImageWrapper = domSlot.parentElement.querySelector(
                          '.in-image'
                      )
                      this.remove()
                      inImageWrapper.remove()
                  }
              )
          }
          }
          if (this.vpaidDomInImage) {
            const wrapper = domSlot.parentElement.querySelector('.full-image');
            const reduceSwitchButton = domSlot.parentElement.querySelector('#bliink-switch');
            if (reduceSwitchButton) {
              const that = this;
              const inImageWrapper = domSlot.parentElement.querySelector('.in-image');
              reduceSwitchButton.addEventListener('click', function () {
                wrapper.style.top = '100%';
                wrapper.style.opacity = 0;
                wrapper.style.display = 'none';
                inImageWrapper.style.opacity = 1;
                this.style.display = 'none';
                domSlot.insertAdjacentHTML('beforeend', that.buttonCloseSwitch);
                const closeSwitchButton =
                  domSlot.parentElement.querySelector('#bliink-switch-close');
                closeSwitchButton.addEventListener('click', function () {
                  const inImageWrapper =
                    domSlot.parentElement.querySelector('.in-image');
                  this.remove();
                  inImageWrapper.remove();
                });
              });
            }
            const inImageWrapper = domSlot.parentElement.querySelector('.in-image');
            const timing = +wrapper.dataset.transitionTiming;
            setTimeout(() => {
              const closeSwitchButton_ =
                domSlot.parentElement.querySelector('#bliink-switch-close');
              wrapper.style.top = '100%';
              wrapper.style.opacity = 0;
              wrapper.style.display = 'none';
              inImageWrapper.style.opacity = 1;
              const reduceSwitchButton =
              domSlot.parentElement.querySelector('#bliink-switch');
              if (reduceSwitchButton) {
                reduceSwitchButton.remove();
              }
              if (!closeSwitchButton_) {
                domSlot.insertAdjacentHTML('beforeend', this.buttonCloseSwitch);
                const closeSwitchButton =
                  domSlot.parentElement.querySelector('#bliink-switch-close');
                closeSwitchButton.addEventListener('click', function () {
                  const inImageWrapper =
                    domSlot.parentElement.querySelector('.in-image');
                  this.remove();
                  inImageWrapper.remove();
                });
              }
            }, timing);
          }
        }
      } else {
        const container = this.videoSlot_?.parentElement?.parentElement.parentElement.parentElement;
        const video = container.querySelector('video');
        const boundingClientRect = video.parentElement.getBoundingClientRect()
        const minHeight = boundingClientRect.height
        video.parentElement.style.minHeight = minHeight + 'px';
        video.parentElement.style.maxHeight = '360px';
        if (this.videoStylesFormat) {
          video.style.cssText = this.videoStylesFormat;
          video.style.zIndex = 10;
        }

        video.parentElement.insertAdjacentHTML('beforeend', this.vpaidDom);
        if (this.buttonReduceSwitch && this.vpaidDomInImage) {
          video.parentElement.insertAdjacentHTML('beforeend', this.buttonReduceSwitch);
        } else if (this.buttonCloseSwitch) {
          const inImageWrapper = video.parentElement.parentElement.querySelector(
            '.in-image'
        )
        if(inImageWrapper) {
          inImageWrapper.style.top = 'auto'
          inImageWrapper.style.bottom = '0'
            video.parentElement.insertAdjacentHTML(
                'beforeend',
                this.buttonCloseSwitch
            )
            const closeSwitchButton = video.parentElement.parentElement.querySelector(
                '#bliink-switch-close'
            )
            closeSwitchButton.addEventListener(
                'click',
                function () {
                    this.remove()
                    inImageWrapper.remove()
                }
            )
        }
          
        }
        if (this.vpaidDomInImage) {
          video.parentElement.insertAdjacentHTML('beforeend', this.vpaidDomInImage);
          const wrapper = video.parentElement.parentElement.querySelector('.full-image');
          const inImageWrapper = video.parentElement.parentElement.querySelector('.in-image');
          const reduceSwitchButton =
            video.parentElement.parentElement.querySelector('#bliink-switch');
          if (reduceSwitchButton) {
            const that = this;
            reduceSwitchButton.addEventListener('click', function () {
              wrapper.style.top = '100%';
              wrapper.style.opacity = 0;
              wrapper.style.display = 'none';
              inImageWrapper.style.opacity = 1;
              this.style.display = 'none';
              video.style.top = 0;
              video.style.left = 0;
              video.style.right = 0;
              video.style.bottom = 0;
              video.style.height = 'auto';
              video.style.width = '100%';
              video.style.zIndex = 0;
              if (that.buttonCloseSwitch) {
                video.parentElement.insertAdjacentHTML('beforeend', that.buttonCloseSwitch);
                const closeSwitchButton =
                  video.parentElement.parentElement.querySelector('#bliink-switch-close');
                closeSwitchButton.addEventListener('click', function () {
                  const inImageWrapper =
                    video.parentElement.parentElement.querySelector('.in-image');
                  this.remove();
                  inImageWrapper.remove();
                });
              }
            });
          }
          const timing = +wrapper.dataset.transitionTiming;
          setTimeout(() => {
            wrapper.style.top = '100%';
            wrapper.style.opacity = 0;
            wrapper.style.display = 'none';
            inImageWrapper.style.opacity = 1;
            const reduceSwitchButton =
              video.parentElement.parentElement.querySelector('#bliink-switch');
            if (reduceSwitchButton) {
              video.style.top = 0;
              video.style.left = 0;
              video.style.right = 0;
              video.style.bottom = 0;
              video.style.height = 'auto';
              video.style.width = '100%';
              video.style.zIndex = 0;
              reduceSwitchButton.remove();
            }
            const closeSwitchButton_ =
              video.parentElement.parentElement.querySelector('#bliink-switch-close');
            if (!closeSwitchButton_) {
              video.parentElement.insertAdjacentHTML('beforeend', this.buttonCloseSwitch);
              const closeSwitchButton =
                video.parentElement.parentElement.querySelector('#bliink-switch-close');
              closeSwitchButton.addEventListener('click', function () {
                const inImageWrapper = video.parentElement.parentElement.querySelector('.in-image');
                this.remove();
                inImageWrapper.remove();
              });
            }
          }, timing);
        }
      }
    } else {
      this.slot_.insertAdjacentHTML('beforeend', this.vpaidDom);
      // Handle case no DOM access
      if (this.vpaidDomInImage) {
        this.slot_.insertAdjacentHTML('beforeend', this.vpaidDomInImage);
      }
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
      
