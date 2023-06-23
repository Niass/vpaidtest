const Vpaid = class {
  buttonReduceSwitch =
    '<svg id="bliink-switch" style="width:20px;height:20px;position:absolute;top:5px;z-index:50;right:10px;cursor: pointer;" version="1.1"\n id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n viewBox="0 0 170.8 113.3" style="enable-background:new 0 0 170.8 113.3;" xml:space="preserve">\n <style type="text/css">\n   .st0 {\n     opacity: 0.7;\n   }\n\n   .st1 {\n     fill: #FFFFFF;\n   }\n </style>\n <rect class="st0" width="170.8" height="113.3" />\n <path class="st1"\n   d="M88.8,63c-9.4,0-18.7,0-28.1,0c-5.1,0-8.5-3.4-6.6-6.7c1.1-1.9,3.6-3,6.8-3c11,0,22.1,0,33.1,0\nc7.7,0,15.5,0,23.2,0c3.5,0,6.5,1.9,6.8,4.2c0.4,2.5-1.9,4.8-5.4,5.3c-0.8,0.1-1.6,0.1-2.4,0.1C107.2,63,98,63,88.8,63z" />\n</svg>'
  buttonCloseSwitch =
    '<svg id="bliink-switch-close" style="width:35px;height:35px;position:absolute;bottom:35%;z-index:50;right:0px;cursor: pointer;" version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\nviewBox="0 0 338 302" style="enable-background:new 0 0 338 302;" xml:space="preserve">\n<path d="M168.6,240.9c-49.7-0.2-89.7-40.6-89.5-90.4c0.2-49.7,40.5-89.6,90.4-89.5c49.2,0.1,89.5,40.7,89.4,90.1\nC258.8,200.8,218.2,241.1,168.6,240.9z M184.8,150.7c6.9-6.7,13.6-12.9,20-19.4c4.6-4.7,4.4-11.3,0.1-15.8\nc-4.4-4.6-11.2-4.8-16.2-0.4c-1.6,1.4-3.1,3-4.6,4.6c-5,5.1-9.9,10.1-15,15.4c-7-7.1-13.3-13.6-19.7-19.8c-3.9-3.7-9-4.3-13.4-1.9\nc-4.4,2.4-7.1,7.4-5.7,12.2c0.8,2.7,2.5,5.4,4.5,7.5c5.9,6.1,12.1,11.8,18.5,18c-7.2,7.1-13.7,13.3-20,19.7c-3.7,3.8-4.3,9.1-2,13.4\nc2.3,4.3,7,7,11.6,5.9c2.7-0.7,5.5-2.3,7.6-4.3c6.3-5.9,12.2-12.1,18.6-18.5c6.5,6.6,12.4,12.6,18.4,18.6c5.6,5.5,12.4,5.9,17.2,1.1\nc5-4.9,4.6-11.6-0.9-17.2C197.7,163.4,191.6,157.5,184.8,150.7z"/>\n</svg>'
  vpaidDom =
    '\n        <a\n            data-wrapper-click="true" href="https://ad.doubleclick.net/ddm/trackclk/N1053267.3298035BLIINK/B30105233.369632946;dc_trk_aid=560157008;dc_trk_cid=193447726;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=;dc_tdv=1" target="_blank"\n            \n            \n            data-wrapperId="64915d7478bc820010f45978"\n            data-id="64915d7478bc820010f45978"\n            data-index="1"\n            class="full-image hide"\n            style="z-index: 1; transition: all .8s ease-in-out; position: absolute; left: 0.00%; top: 0.00%; width: 110.34%; height: 82.76%; transition: all ease-in-out 0.3s;"\n        >   <IMG SRC="https://ad.doubleclick.net/ddm/trackimp/N1053267.3298035BLIINK/B30105233.369632946;dc_trk_aid=560157008;dc_trk_cid=193447726;ord=[timestamp];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ltd=;dc_tdv=1?" attributionsrc BORDER="0" HEIGHT="1" WIDTH="1" ALT="Advertisement">\n<SCRIPT TYPE="text/javascript" SRC="https://pixel.adsafeprotected.com/rjss/st/1516049/72040583/skeleton.js"></SCRIPT> \n<NOSCRIPT><IMG SRC="https://pixel.adsafeprotected.com/rfw/st/1516049/72040582/skeleton.gif?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_278}&gdpr_pd=${GDPR_PD}" BORDER=0 WIDTH=1 HEIGHT=1 ALT=""></NOSCRIPT>\n            <div style="width:100%; height:100%; position: absolute; bottom: 0;overflow: hidden;">\n                \n            </div>\n    </a>'
  vpaidDomInImage = void 0
  videoStylesFormat = ''
  adDuration = 2e4
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
    'AdClickThru' in this.eventsCallbacks_ && this.eventsCallbacks_.AdClickThru('', '0', !0)
  }
  handshakeVersion() {
    return '2.0'
  }
  initAd(t, e, i, s, n, l) {
    ;(this.attributes_.width = t),
      (this.attributes_.height = e),
      (this.attributes_.viewMode = i),
      (this.attributes_.desiredBitrate = s),
      (this.slot_ = l.slot),
      (this.videoSlot_ = l.videoSlot),
      (this.parameters_ = JSON.parse(n.AdParameters)),
      this.log('initAd ' + t + 'x' + e + ' ' + i + ' ' + s),
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
    const t = this.parameters_.vpaidType
    this.log('Starting ad'),
      'linear' === t &&
        (this.videoSlot_?.play(),
        this.adDuration &&
          !this.videoStylesFormat &&
          setTimeout(() => {
            console.log("what the fuck???@");
            // this.stopAd()
          }, this.adDuration))
    const e = new Date()
    if (((this.startTime_ = e.getTime()), this.videoSlot_.nodeName))
      if ('linear' === t) {
        const t = this.slot_
        if (
          (t.classList.add('percentage'),
          this.videoStylesFormat &&
            ((this.videoSlot_.style.transition = 'width 1s ease-in-out'),
            (this.videoSlot_.style.cssText = this.videoStylesFormat),
            (this.videoSlot_.style.zIndex = 10),
            this.videoSlot_.parentElement.parentElement.classList.add('percentage')),
          this.vpaidDom)
        ) {
          if (
            (t.insertAdjacentHTML('beforeend', this.vpaidDom),
            this.vpaidDomInImage && t.insertAdjacentHTML('beforeend', this.vpaidDomInImage),
            this.buttonReduceSwitch && this.vpaidDomInImage)
          )
            t.insertAdjacentHTML('beforeend', this.buttonReduceSwitch)
          else if (this.buttonCloseSwitch) {
            const e = t.parentElement.querySelector('.in-image')
            if (e) {
              ;(e.style.top = 'auto'),
                (e.style.bottom = '0'),
                t.insertAdjacentHTML('beforeend', this.buttonCloseSwitch)
              t.parentElement
                .querySelector('#bliink-switch-close')
                .addEventListener('click', function () {
                  const e = t.parentElement.querySelector('.in-image')
                  this.remove(), e.remove()
                })
            }
          }
          if (this.vpaidDomInImage) {
            const e = t.parentElement.querySelector('.full-image'),
              i = t.parentElement.querySelector('#bliink-switch')
            if (i) {
              const s = this,
                n = t.parentElement.querySelector('.in-image')
              i.addEventListener('click', function () {
                ;(e.style.top = '100%'),
                  (e.style.opacity = 0),
                  (e.style.display = 'none'),
                  (n.style.opacity = 1),
                  (this.style.display = 'none'),
                  t.insertAdjacentHTML('beforeend', s.buttonCloseSwitch)
                t.parentElement
                  .querySelector('#bliink-switch-close')
                  .addEventListener('click', function () {
                    const e = t.parentElement.querySelector('.in-image')
                    this.remove(), e.remove()
                  })
              })
            }
            const s = t.parentElement.querySelector('.in-image'),
              n = +e.dataset.transitionTiming
            setTimeout(() => {
              const i = t.parentElement.querySelector('#bliink-switch-close')
              ;(e.style.top = '100%'),
                (e.style.opacity = 0),
                (e.style.display = 'none'),
                (s.style.opacity = 1)
              const n = t.parentElement.querySelector('#bliink-switch')
              if ((n && n.remove(), !i)) {
                t.insertAdjacentHTML('beforeend', this.buttonCloseSwitch)
                t.parentElement
                  .querySelector('#bliink-switch-close')
                  .addEventListener('click', function () {
                    const e = t.parentElement.querySelector('.in-image')
                    this.remove(), e.remove()
                  })
              }
            }, n)
          }
        }
      } else {
        const t = this.videoSlot_?.parentElement?.parentElement.parentElement.parentElement,
          e = t.querySelector('video'),
          i = e.parentElement.getBoundingClientRect().height
        if (
          ((e.parentElement.style.minHeight = i + 'px'),
          (e.parentElement.style.maxHeight = '360px'),
          this.videoStylesFormat &&
            ((e.style.cssText = this.videoStylesFormat), (e.style.zIndex = 10)),
          e.parentElement.insertAdjacentHTML('beforeend', this.vpaidDom),
          this.buttonReduceSwitch && this.vpaidDomInImage)
        )
          e.parentElement.insertAdjacentHTML('beforeend', this.buttonReduceSwitch)
        else if (this.buttonCloseSwitch) {
          const t = e.parentElement.parentElement.querySelector('.in-image')
          if (t) {
            ;(t.style.top = 'auto'),
              (t.style.bottom = '0'),
              e.parentElement.insertAdjacentHTML('beforeend', this.buttonCloseSwitch)
            e.parentElement.parentElement
              .querySelector('#bliink-switch-close')
              .addEventListener('click', function () {
                this.remove(), t.remove()
              })
          }
        }
        if (this.vpaidDomInImage) {
          e.parentElement.insertAdjacentHTML('beforeend', this.vpaidDomInImage)
          const t = e.parentElement.parentElement.querySelector('.full-image'),
            i = e.parentElement.parentElement.querySelector('.in-image'),
            s = e.parentElement.parentElement.querySelector('#bliink-switch')
          if (s) {
            const n = this
            s.addEventListener('click', function () {
              if (
                ((t.style.top = '100%'),
                (t.style.opacity = 0),
                (t.style.display = 'none'),
                (i.style.opacity = 1),
                (this.style.display = 'none'),
                (e.style.top = 0),
                (e.style.left = 0),
                (e.style.right = 0),
                (e.style.bottom = 0),
                (e.style.height = 'auto'),
                (e.style.width = '100%'),
                (e.style.zIndex = 0),
                n.buttonCloseSwitch)
              ) {
                e.parentElement.insertAdjacentHTML('beforeend', n.buttonCloseSwitch)
                e.parentElement.parentElement
                  .querySelector('#bliink-switch-close')
                  .addEventListener('click', function () {
                    const t = e.parentElement.parentElement.querySelector('.in-image')
                    this.remove(), t.remove()
                  })
              }
            })
          }
          const n = +t.dataset.transitionTiming
          setTimeout(() => {
            ;(t.style.top = '100%'),
              (t.style.opacity = 0),
              (t.style.display = 'none'),
              (i.style.opacity = 1)
            const s = e.parentElement.parentElement.querySelector('#bliink-switch')
            s &&
              ((e.style.top = 0),
              (e.style.left = 0),
              (e.style.right = 0),
              (e.style.bottom = 0),
              (e.style.height = 'auto'),
              (e.style.width = '100%'),
              (e.style.zIndex = 0),
              s.remove())
            if (!e.parentElement.parentElement.querySelector('#bliink-switch-close')) {
              e.parentElement.insertAdjacentHTML('beforeend', this.buttonCloseSwitch)
              e.parentElement.parentElement
                .querySelector('#bliink-switch-close')
                .addEventListener('click', function () {
                  const t = e.parentElement.parentElement.querySelector('.in-image')
                  this.remove(), t.remove()
                })
            }
          }, n)
        }
      }
    else {
      // console.log("success bliink");
      // var scriptUrl = 'https://pixel.adsafeprotected.com/rjss/st/1516049/72040583/skeleton.js';

      // var script = document.createElement('script');
      // script.src = scriptUrl;
      // script.type = 'application/javascript';
      // this.slot_.appendChild(script);
      

      this.slot_.insertAdjacentHTML('beforeend', this.vpaidDom),
        this.vpaidDomInImage && this.slot_.insertAdjacentHTML('beforeend', this.vpaidDomInImage)
    }
    this.callEvent_('AdStarted'), this.callEvent_('AdImpression')
  }
  adClick_() {
    'AdClickThru' in this.eventsCallbacks_ && this.eventsCallbacks_.AdClickThru('', '0', !0)
  }
  timeUpdateHandler_() {
    if (this.nextQuartileIndex_ >= this.quartileEvents_.length) {
      return;
    }
  
    const currentTime = this.videoSlot_.currentTime;
    const duration = this.videoSlot_.duration;
    const percentComplete = (100 * currentTime) / duration;
    const nextQuartileEvent = this.quartileEvents_[this.nextQuartileIndex_];
    console.log("percentComplete", percentComplete, nextQuartileEvent.value, this.videoSlot_.duration);
    if (percentComplete >= nextQuartileEvent.value) {
      this.eventsCallbacks_[nextQuartileEvent.event]();
      this.nextQuartileIndex_ += 1;
    }
  
    if (duration > 0) {
      this.attributes_.remainingTime = duration - currentTime;
    }
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
