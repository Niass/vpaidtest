const Vpaid = class {
  buttonReduceSwitch =
    '<svg id="bliink-switch" style="width:20px;height:20px;position:absolute;top:5px;z-index:50;right:10px;cursor: pointer;" version="1.1"\n id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n viewBox="0 0 170.8 113.3" style="enable-background:new 0 0 170.8 113.3;" xml:space="preserve">\n <style type="text/css">\n   .st0 {\n     opacity: 0.7;\n   }\n\n   .st1 {\n     fill: #FFFFFF;\n   }\n </style>\n <rect class="st0" width="170.8" height="113.3" />\n <path class="st1"\n   d="M88.8,63c-9.4,0-18.7,0-28.1,0c-5.1,0-8.5-3.4-6.6-6.7c1.1-1.9,3.6-3,6.8-3c11,0,22.1,0,33.1,0\nc7.7,0,15.5,0,23.2,0c3.5,0,6.5,1.9,6.8,4.2c0.4,2.5-1.9,4.8-5.4,5.3c-0.8,0.1-1.6,0.1-2.4,0.1C107.2,63,98,63,88.8,63z" />\n</svg>'
  buttonCloseSwitch =
    '<svg id="bliink-switch-close" style="width:35px;height:35px;position:absolute;bottom:35%;z-index:50;right:0px;cursor: pointer;" version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\nviewBox="0 0 338 302" style="enable-background:new 0 0 338 302;" xml:space="preserve">\n<path d="M168.6,240.9c-49.7-0.2-89.7-40.6-89.5-90.4c0.2-49.7,40.5-89.6,90.4-89.5c49.2,0.1,89.5,40.7,89.4,90.1\nC258.8,200.8,218.2,241.1,168.6,240.9z M184.8,150.7c6.9-6.7,13.6-12.9,20-19.4c4.6-4.7,4.4-11.3,0.1-15.8\nc-4.4-4.6-11.2-4.8-16.2-0.4c-1.6,1.4-3.1,3-4.6,4.6c-5,5.1-9.9,10.1-15,15.4c-7-7.1-13.3-13.6-19.7-19.8c-3.9-3.7-9-4.3-13.4-1.9\nc-4.4,2.4-7.1,7.4-5.7,12.2c0.8,2.7,2.5,5.4,4.5,7.5c5.9,6.1,12.1,11.8,18.5,18c-7.2,7.1-13.7,13.3-20,19.7c-3.7,3.8-4.3,9.1-2,13.4\nc2.3,4.3,7,7,11.6,5.9c2.7-0.7,5.5-2.3,7.6-4.3c6.3-5.9,12.2-12.1,18.6-18.5c6.5,6.6,12.4,12.6,18.4,18.6c5.6,5.5,12.4,5.9,17.2,1.1\nc5-4.9,4.6-11.6-0.9-17.2C197.7,163.4,191.6,157.5,184.8,150.7z"/>\n</svg>'
  vpaidDom =
    '\n        <div\n            \n            data-transition-nextWrapperId="668f8fd6d493cd00181f6e35"\n            data-transition-enable="true" data-transition-wrapperId="668f8f65d493cd00181f6c28" data-transition-timing="7000"\n            data-wrapperId="668f8f65d493cd00181f6c28"\n            data-id="668f8f65d493cd00181f6c28"\n            data-index="1"\n            class="full-image hide"\n            style="z-index: 1; transition: all .8s ease-in-out; transition: all ease-in-out 0.3s;"\n        >   \n            <div style="width:100%; height:100%; position: absolute; bottom: 0;overflow: hidden;">\n                <div data-type="image" style="background: url(https://creative.bliink.io/668f8f65d493cd00181f6c23/F0AMqp2.jpg) no-repeat center center; background-size: cover;position: absolute; width: 100%; height: auto !important; top: 0.00%; bottom: 0.00%; left: 0.00%; right: 0.00%; ; z-index: 0;"></div><div data-type="image"  style="background: url(https://creative.bliink.io/668f8f65d493cd00181f6c23/yLGKNY4.png) no-repeat center center; background-size: contain;position: absolute; width: 59%; height: 20%; top: 3.50%; bottom: 76.25%; left: 37.88%; right: 3.25%; ; z-index: 1;"></div><div data-type="image"  style="background: url(https://creative.bliink.io/668f8f65d493cd00181f6c23/3oAvqvv.png) no-repeat center center; background-size: contain;position: absolute; width: 35%; height: 46vw; top: inherit; bottom: 0.00%; left: 10.38%; right: 55.00%; ; z-index: 2;"></div><div data-type="image"  style="background: url(https://creative.bliink.io/668f8f65d493cd00181f6c23/26LPopY.png) no-repeat center center; background-size: contain;position: absolute; width: 22%; height: 16%; top: 4.00%; bottom: 80.25%; left: 1.88%; right: 76.00%; ; z-index: 3;"></div>\n            </div>\n    </div>'
  script = ''
  vpaidDomInImage =
    '\n        <div\n            \n            \n            \n            data-wrapperId="668f8fd6d493cd00181f6e35"\n            data-id="668f8fd6d493cd00181f6e35"\n            data-index="1"\n            class="in-image hide"\n            style="z-index: 1; transition: all .8s ease-in-out; overflow:hidden;opacity: 1;transition: all ease-in-out 0.3s;opacity:0;"\n        >   \n            <div style="width:100%; height:35%; position: absolute; bottom: 0;overflow: hidden;">\n                <div data-type="image" style="background: url(https://creative.bliink.io/668f8f65d493cd00181f6c23/c3067nM.jpg) no-repeat center center; background-size: cover;position: absolute; width: 100%; height: auto !important; top: 10.63%; bottom: -12.50%; left: 0.13%; right: -0.13%; ; z-index: 0;"></div><div data-type="image"  style="background: url(https://creative.bliink.io/668f8f65d493cd00181f6c23/26LPopY.png) no-repeat center center; background-size: contain;position: absolute; width: 22%; height: 39%; top: 30.31%; bottom: 30.31%; left: 2.00%; right: 75.88%; ; z-index: 1;"></div><div data-type="image"  style="background: url(https://creative.bliink.io/668f8f65d493cd00181f6c23/3oAvqvv.png) no-repeat center center; background-size: contain;position: absolute; width: 15%; height: 98%; top: 1.88%; bottom: 0.63%; left: 80.75%; right: 4.50%; ; z-index: 2;"></div><div data-type="image"  style="background: url(https://creative.bliink.io/668f8f65d493cd00181f6c23/AlC2FSY.png) no-repeat center center; background-size: contain;position: absolute; width: 49%; height: 86%; top: 13.75%; bottom: 0.63%; left: 25.56%; right: 25.56%; ; z-index: 3;"></div>\n            </div>\n    </div>'
  videoStylesFormat =
    'position: absolute; width: 62%; height: 69%; top: 27.25%; bottom: 3.50%; left: 36.63%; right: 1.88%; '
  adDuration = 1e4
  constructor() {
    ;(this.slot_ = null),
      this.vpaidDom && (this.vpaidDom = this.vpaidDom.replace(/z-index:\s*\d+;/g, 'z-index: 999;')),
      (this.videoSlot_ = null),
      (this.eventsCallbacks_ = {}),
      (this.attributes_ = {
        companions: '',
        desiredBitrate: 256,
        duration: 10,
        expanded: !1,
        height: 0,
        icons: '',
        linear: !1,
        skippableState: !1,
        viewMode: 'normal',
        width: 0,
        volume: 1,
      }),
      (this.startTime_ = 0),
      (this.quartileEvents_ = [
        { event: 'AdVideoStart', value: 0 },
        { event: 'AdVideoFirstQuartile', value: 25 },
        { event: 'AdVideoMidpoint', value: 50 },
        { event: 'AdVideoThirdQuartile', value: 75 },
        { event: 'AdVideoComplete', value: 99 },
      ]),
      (this.nextQuartileIndex_ = 0),
      (this.parameters_ = {})
  }
  clickAd_() {
    console.log("clickAd_ called");
    const currentTime = this.videoSlot_.currentTime;
    let clickThroughUrl = '';

    // Définir l'URL de redirection en fonction du temps écoulé
    if (currentTime < 5) {
        clickThroughUrl = 'https://example.com/redirect1';
    } else if (currentTime >= 5 && currentTime < 10) {
        clickThroughUrl = 'https://example.com/redirect2';
    } else if (currentTime >= 10) {
        clickThroughUrl = 'https://example.com/redirect3';
    }

    // Déclencher l'événement AdClickThru avec l'URL appropriée
    if ('AdClickThru' in this.eventsCallbacks_) {
        this.eventsCallbacks_.AdClickThru(clickThroughUrl, '0', true);
    }

    console.log("ad clicked, AdClickThru event sent with URL:", clickThroughUrl);
}

  handshakeVersion() {
    return '2.0'
  }
  initAd(t, e, i, n, s, o) {
    ;(this.attributes_.width = t),
      (this.attributes_.height = e),
      (this.attributes_.viewMode = i),
      (this.attributes_.desiredBitrate = n),
      (this.slot_ = o.slot),
      (this.videoSlot_ = o.videoSlot),
      (this.parameters_ = JSON.parse(s.AdParameters)),
      this.log('initAd ' + t + 'x' + e + ' ' + i + ' ' + n),
      this.videoSlot_.addEventListener('loadedmetadata', this.loadedMetadata_.bind(this), !1),
      this.videoSlot_.addEventListener('timeupdate', this.timeUpdateHandler_.bind(this), !1),
      this.videoSlot_.addEventListener('ended', this.stopAd.bind(this), !1),
      this.slot_.addEventListener('click', this.clickAd_.bind(this), !1)
    'linear' === this.parameters_.vpaidType
      ? this.updateVideoSlot_()
      : console.log('no linear typ'),
      this.callEvent_('AdLoaded')
  }
  updateVideoSlot_ = () => {
    null == this.videoSlot_ &&
      ((this.videoSlot_ = document.createElement('video')),
      this.log('Warning: No video element passed to ad, creating element.'),
      this.slot_.appendChild(this.videoSlot_)),
      this.updateVideoPlayerSize_()
    let t = !1
    const e = this.parameters_.mediaFiles || []
    for (let i = 0; i < e.length; i++)
      if ('' != this.videoSlot_.canPlayType(e[i].type)) {
        this.videoSlot_.setAttribute('src', e[i].uri),
          (t = !0),
          e[i].styles && (this.videoSlot_.style.cssText = e[i].styles)
        break
      }
    t || this.callEvent_('AdError')
  }
  updateVideoPlayerSize_() {
    this.videoSlot_.setAttribute('width', this.attributes_.width),
      this.videoSlot_.setAttribute('height', this.attributes_.height)
  }
  startAd() {
    const vpaidType = this.parameters_.vpaidType;
    this.log('Starting ad');
    
    // Play video if the ad is linear
    if (vpaidType === 'linear' && this.videoSlot_) {
        this.videoSlot_.play();
    }

    // Record the start time
    this.startTime_ = new Date().getTime();
    // Process linear ads
    console.log("this.videoSlot", this.videoSlot_, this.videoSlot_?.nodeName);
    if (this.videoSlot_ && this.videoSlot_?.nodeName) {
      console.log("WIN 0");
      this.slot_.insertAdjacentHTML('beforeend', this.vpaidDom);
        if (vpaidType === 'linear') {
            const slot = this.slot_;
            slot.classList.add('percentage');

            if (this.videoStylesFormat) {
                this.applyVideoStyles(this.videoSlot_, slot);
            }

            if (this.vpaidDom) {
                this.injectVpaidDom(slot);
            }

            if (this.buttonReduceSwitch && this.vpaidDomInImage) {
                slot.insertAdjacentHTML('beforeend', this.buttonReduceSwitch);
            } else if (this.buttonCloseSwitch) {
                this.addCloseButton(slot);
            }

            if (this.vpaidDomInImage) {
                this.handleInImageAds(slot);
            }
        } else {
            this.handleNonLinearAds();
        }
    } else {
      console.log("WIN 1");
        this.insertNonLinearAd();
    }

    // Trigger events for ad start and impression
    this.callEvent_('AdStarted');
    this.callEvent_('AdImpression');
}

applyVideoStyles(videoSlot, slot) {
    videoSlot.style.transition = 'width 1s ease-in-out';
    videoSlot.style.cssText = this.videoStylesFormat;
    videoSlot.style.zIndex = 9999;
    videoSlot.parentElement.parentElement.classList.add('percentage');
}

injectVpaidDom(slot) {
    console.log("this.script$$$", this.script);
    if (this.script) {
        slot.insertAdjacentHTML('beforeend', this.script);
        this.processScripts(slot);
    }
    if (this.vpaidDomInImage) {
        slot.insertAdjacentHTML('beforeend', this.vpaidDomInImage);
    }
}

processScripts(container) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = this.script;
    const scripts = tempDiv.querySelectorAll('script');
    const images = tempDiv.querySelectorAll('img');

    scripts.forEach(script => {
        const newScript = document.createElement('script');
        newScript.src = script.src;
        newScript.type = 'application/javascript';
        container.appendChild(newScript);
        script.remove();
    });

    images.forEach(image => {
        const newImage = document.createElement('img');
        newImage.src = image.src;
        newImage.style.width = '0';
        newImage.style.height = '0';
        container.appendChild(newImage);
        image.remove();
    });

    container.appendChild(tempDiv);
}

addCloseButton(slot) {
    const inImageAd = slot.parentElement.querySelector('.in-image');
    if (inImageAd) {
        inImageAd.style.top = 'auto';
        inImageAd.style.bottom = '0';
        slot.insertAdjacentHTML('beforeend', this.buttonCloseSwitch);
        slot.parentElement.querySelector('#bliink-switch-close')
            .addEventListener('click', function() {
                inImageAd.remove();
                this.remove();
            });
    }
}

handleInImageAds(slot) {
    const fullImageAd = slot.parentElement.querySelector('.full-image');
    const inImageAd = slot.parentElement.querySelector('.in-image');
    const switchButton = slot.parentElement.querySelector('#bliink-switch');

    if (switchButton) {
        switchButton.addEventListener('click', () => {
            fullImageAd.style.top = '100%';
            fullImageAd.style.opacity = 0;
            fullImageAd.style.display = 'none';
            inImageAd.style.opacity = 1;
            switchButton.style.display = 'none';
            slot.insertAdjacentHTML('beforeend', this.buttonCloseSwitch);

            slot.parentElement.querySelector('#bliink-switch-close')
                .addEventListener('click', function() {
                    inImageAd.remove();
                    this.remove();
                });
        });
    }

    const transitionTiming = +fullImageAd?.dataset?.transitionTiming;
    console.log("transitionTiming 2", transitionTiming, this.videoSlot_?.duration);
    setTimeout(() => {
        if(!fullImageAd) return;
        fullImageAd.style.top = '100%';
        fullImageAd.style.opacity = 0;
        fullImageAd.style.display = 'none';
        inImageAd.style.opacity = 1;

        const closeSwitch = slot.parentElement.querySelector('#bliink-switch-close');
        if (!closeSwitch) {
            slot.insertAdjacentHTML('beforeend', this.buttonCloseSwitch);
            slot.parentElement.querySelector('#bliink-switch-close')
                .addEventListener('click', function() {
                    inImageAd.remove();
                    this.remove();
                });
        }
    }, transitionTiming);
}

handleNonLinearAds() {
  console.log("handleNonLinearAds ???");
    const parentContainer = this.videoSlot_.parentElement.parentElement.parentElement.parentElement;
    const video = parentContainer.querySelector('video');
    const containerHeight = video.parentElement.getBoundingClientRect().height;

    video.parentElement.style.minHeight = containerHeight + 'px';
    video.parentElement.style.maxHeight = '360px';

    if (this.videoStylesFormat) {
        video.style.cssText = this.videoStylesFormat;
        video.style.zIndex = 9999;
    }

    video.parentElement.insertAdjacentHTML('beforeend', this.vpaidDom);
    if (this.script) {
        this.processScripts(video.parentElement);
    }

    if (this.buttonReduceSwitch && this.vpaidDomInImage) {
        video.parentElement.insertAdjacentHTML('beforeend', this.buttonReduceSwitch);
    } else if (this.buttonCloseSwitch) {
        const inImageAd = video.parentElement.parentElement.querySelector('.in-image');
        if (inImageAd) {
            inImageAd.style.top = 'auto';
            inImageAd.style.bottom = '0';
            video.parentElement.insertAdjacentHTML('beforeend', this.buttonCloseSwitch);
            video.parentElement.parentElement.querySelector('#bliink-switch-close')
                .addEventListener('click', function() {
                    inImageAd.remove();
                    this.remove();
                });
        }
    }

    if (this.vpaidDomInImage) {
        video.parentElement.insertAdjacentHTML('beforeend', this.vpaidDomInImage);
        this.handleInImageAds(video.parentElement);
    }
}

insertNonLinearAd() {
    // this.slot_.insertAdjacentHTML('beforeend', this.vpaidDom);
    if (this.script) {
        this.processScripts(this.slot_);
    }

    if (this.vpaidDomInImage) {
        this.slot_.insertAdjacentHTML('beforeend', this.vpaidDomInImage);
    }
}

  adClick_() {
    console.log("adClick_ called");
    'AdClickThru' in this.eventsCallbacks_ && this.eventsCallbacks_.AdClickThru('', '0', !0)
  }
  timeUpdateHandler_() {
    console.log("timeUpdateHandler_ called", this.videoSlot_.duration);
    if (this.nextQuartileIndex_ >= this.quartileEvents_.length) return
    const t = (100 * this.videoSlot_.currentTime) / this.videoSlot_.duration,
      e = this.quartileEvents_[this.nextQuartileIndex_]
    t >= e.value && (this.eventsCallbacks_[e.event](), (this.nextQuartileIndex_ += 1)),
      this.videoSlot_.duration > 0 &&
        (this.attributes_.remainingTime = this.videoSlot_.duration - this.videoSlot_.currentTime)
  }
  loadedMetadata_() {
    ;(this.attributes_.duration = this.videoSlot_.duration), this.callEvent_('AdDurationChange')
  }
  stopAd() {
    this.log('Stopping ad')
    const t = this.callEvent_.bind(this)
    setTimeout(t, 75, ['AdStopped'])
  }
  resizeAd(t, e, i) {
    this.log('resizeAd ' + t + 'x' + e + ' ' + i),
      (this.attributes_.width = t),
      (this.attributes_.height = e),
      (this.attributes_.viewMode = i),
      this.updateVideoPlayerSize_(),
      this.callEvent_('AdSizeChange')
  }
  pauseAd() {
    this.log('pauseAd'), this.videoSlot_.pause(), this.callEvent_('AdPaused')
  }
  resumeAd() {
    this.log('resumeAd'), this.videoSlot_.play(), this.callEvent_('AdPlaying')
  }
  expandAd() {
    this.log('expandAd'), (this.attributes_.expanded = !0), this.callEvent_('AdExpanded')
  }
  collapseAd() {
    this.log('collapseAd'), (this.attributes_.expanded = !1)
  }
  skipAd() {
    this.log('skipAd'), this.attributes_.skippableState && this.callEvent_('AdSkipped')
  }
  subscribe(t, e, i) {
    this.log('Subscribe ' + e), (this.eventsCallbacks_[e] = t.bind(i))
  }
  unsubscribe(t) {
    this.log('unsubscribe ' + t), (this.eventsCallbacks_[t] = null)
  }
  getAdLinear() {
    return this.attributes_.linear
  }
  getAdWidth() {
    return this.attributes_.width
  }
  getAdHeight() {
    return this.attributes_.height
  }
  getAdExpanded() {
    return this.log('getAdExpanded'), this.attributes_.expanded
  }
  getAdSkippableState() {
    return this.log('getAdSkippableState'), this.attributes_.skippableState
  }
  getAdRemainingTime() {
    const t = new Date().getTime()
    return this.attributes_.duration - (t - this.startTime_) / 1e3
  }
  getAdDuration() {
    return this.attributes_.duration
  }
  getAdVolume() {
    return this.log('getAdVolume'), this.attributes_.volume
  }
  setAdVolume(t) {
    ;(this.attributes_.volume = t), this.log('setAdVolume ' + t), this.callEvent_('AdVolumeChange')
  }
  getAdCompanions() {
    return this.attributes_.companions
  }
  getAdIcons() {
    return this.attributes_.icons
  }
  log(t) {
    console.log(t)
  }
  callEvent_(t) {
    t in this.eventsCallbacks_ && this.eventsCallbacks_[t]()
  }
}
var getVPAIDAd = function () {
  return new Vpaid()
}
