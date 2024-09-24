const Vpaid = class {
  buttonReduceSwitch =
    '<svg id="bliink-switch" style="width:20px;height:20px;position:absolute;top:5px;z-index:50;right:10px;cursor: pointer;" version="1.1"\n id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n viewBox="0 0 170.8 113.3" style="enable-background:new 0 0 170.8 113.3;" xml:space="preserve">\n <style type="text/css">\n   .st0 {\n     opacity: 0.7;\n   }\n\n   .st1 {\n     fill: #FFFFFF;\n   }\n </style>\n <rect class="st0" width="170.8" height="113.3" />\n <path class="st1"\n   d="M88.8,63c-9.4,0-18.7,0-28.1,0c-5.1,0-8.5-3.4-6.6-6.7c1.1-1.9,3.6-3,6.8-3c11,0,22.1,0,33.1,0\nc7.7,0,15.5,0,23.2,0c3.5,0,6.5,1.9,6.8,4.2c0.4,2.5-1.9,4.8-5.4,5.3c-0.8,0.1-1.6,0.1-2.4,0.1C107.2,63,98,63,88.8,63z" />\n</svg>'
  buttonCloseSwitch =
    '<svg id="bliink-switch-close" style="width:35px;height:35px;position:absolute;bottom:35%;z-index:50;right:0px;cursor: pointer;" version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\nviewBox="0 0 338 302" style="enable-background:new 0 0 338 302;" xml:space="preserve">\n<path d="M168.6,240.9c-49.7-0.2-89.7-40.6-89.5-90.4c0.2-49.7,40.5-89.6,90.4-89.5c49.2,0.1,89.5,40.7,89.4,90.1\nC258.8,200.8,218.2,241.1,168.6,240.9z M184.8,150.7c6.9-6.7,13.6-12.9,20-19.4c4.6-4.7,4.4-11.3,0.1-15.8\nc-4.4-4.6-11.2-4.8-16.2-0.4c-1.6,1.4-3.1,3-4.6,4.6c-5,5.1-9.9,10.1-15,15.4c-7-7.1-13.3-13.6-19.7-19.8c-3.9-3.7-9-4.3-13.4-1.9\nc-4.4,2.4-7.1,7.4-5.7,12.2c0.8,2.7,2.5,5.4,4.5,7.5c5.9,6.1,12.1,11.8,18.5,18c-7.2,7.1-13.7,13.3-20,19.7c-3.7,3.8-4.3,9.1-2,13.4\nc2.3,4.3,7,7,11.6,5.9c2.7-0.7,5.5-2.3,7.6-4.3c6.3-5.9,12.2-12.1,18.6-18.5c6.5,6.6,12.4,12.6,18.4,18.6c5.6,5.5,12.4,5.9,17.2,1.1\nc5-4.9,4.6-11.6-0.9-17.2C197.7,163.4,191.6,157.5,184.8,150.7z"/>\n</svg>'
  vpaidDom =
    '\n        <div\n            \n            \n            \n            data-wrapperId="66db2dcbec62a7001845d703"\n            data-id="66db2dcbec62a7001845d703"\n            data-index="1"\n            class="full-image hide"\n            style="z-index: 1; transition: all .8s ease-in-out; position: absolute; left: 0.00%; top: 0.00%; width: 100%; height: 100%; transition: all ease-in-out 0.3s;"\n        >   \n            <div style="width:100%; height:100%; position: absolute; bottom: 0;overflow: hidden;">\n                \n            </div>\n    </div>'
  script = ''
  vpaidDomInImage = void 0
  videoStylesFormat =
    'position: absolute; width: 640px; height: 361px; top: 0px; bottom: -1px; left: 0px; right: 0px; '
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
    if (this.clickThroughUrls?.length) {
      const t = this.videoSlot_.currentTime
      let e = ''
      for (const i of this.clickThroughUrls)
        if (t >= i.start && t < i.end) {
          e = i.url
          break
        }
      'AdClickThru' in this.eventsCallbacks_ && this.eventsCallbacks_.AdClickThru(e, '0', !0)
    } else 'AdClickThru' in this.eventsCallbacks_ && this.eventsCallbacks_.AdClickThru('', '0', !0)
  }
  handshakeVersion() {
    return '2.0'
  }
  initAd(t, e, i, s, n, a) {
    ;(this.attributes_.width = t),
      (this.attributes_.height = e),
      (this.attributes_.viewMode = i),
      (this.attributes_.desiredBitrate = s),
      (this.slot_ = a.slot),
      (this.videoSlot_ = a.videoSlot)
    try {
      ;(this.parameters_ = JSON.parse(n.AdParameters)),
        (this.clickThroughUrls = this.parameters_.clickThroughUrls || [])
    } catch (t) {
      return this.log('Error parsing AdParameters: ' + t.message), void this.callEvent_('AdError')
    }
    this.log('initAd ' + t + 'x' + e + ' ' + i + ' ' + s),
      this.videoSlot_ &&
        (this.videoSlot_.addEventListener('loadedmetadata', this.loadedMetadata_.bind(this), !1),
        this.videoSlot_.addEventListener('timeupdate', this.timeUpdateHandler_.bind(this), !1),
        this.videoSlot_.addEventListener('ended', this.stopAd.bind(this), !1)),
      this.slot_ && this.slot_.addEventListener('click', this.clickAd_.bind(this), !1),
      'linear' === this.parameters_.vpaidType
        ? this.updateVideoSlot_()
        : this.log('no linear type'),
      this.callEvent_('AdLoaded')
  }
  updateVideoSlot_ = () => {
    this.videoSlot_ ||
      ((this.videoSlot_ = document.createElement('video')),
      this.log('Warning: No video element passed to ad, creating element.'),
      this.slot_ && this.slot_.appendChild(this.videoSlot_)),
      this.updateVideoPlayerSize_()
    const t = this.parameters_.mediaFiles || []
    let e = !1
    for (let i = 0; i < t.length; i++)
      if ('' !== this.videoSlot_.canPlayType(t[i].type)) {
        this.videoSlot_.setAttribute('src', t[i].uri),
          (e = !0),
          t[i].styles && (this.videoSlot_.style.cssText = t[i].styles)
        break
      }
    e || this.callEvent_('AdError')
  }
  updateVideoPlayerSize_() {
    this.videoSlot_ &&
      (this.videoSlot_.setAttribute('width', this.attributes_.width),
      this.videoSlot_.setAttribute('height', this.attributes_.height))
  }
  startAd() {
    this.log('Starting ad'),
      'linear' === this.parameters_.vpaidType && this.videoSlot_ && this.videoSlot_.play(),
      (this.startTime_ = new Date().getTime()),
      this.videoSlot_ && this.videoSlot_.nodeName
        ? (this.slot_.insertAdjacentHTML('beforeend', this.vpaidDom),
          'linear' === this.parameters_.vpaidType
            ? this.handleLinearAd()
            : this.handleNonLinearAd())
        : this.slot_ && this.handleScriptAndImages(this.slot_),
      this.callEvent_('AdStarted'),
      this.callEvent_('AdImpression')
  }
  handleLinearAd() {
    const t = this.slot_
    t &&
      (t.classList.add('percentage'),
      this.videoStylesFormat &&
        ((this.videoSlot_.style.transition = 'width 1s ease-in-out'),
        (this.videoSlot_.style.zIndex = 9999),
        this.videoSlot_.parentElement &&
          this.videoSlot_.parentElement.parentElement &&
          this.videoSlot_.parentElement.parentElement.classList.add('percentage')),
      this.handleVpaidDom(t),
      this.handleButtonSwitch(t))
  }
  handleNonLinearAd() {
    if (this.videoSlot_) {
      const t =
        this.videoSlot_.parentElement &&
        this.videoSlot_.parentElement.parentElement &&
        this.videoSlot_.parentElement.parentElement.parentElement &&
        this.videoSlot_.parentElement.parentElement.parentElement.parentElement
      if (t) {
        const e = t.querySelector('video')
        if (e && e.parentElement) {
          const t = e.parentElement.getBoundingClientRect().height
          ;(e.parentElement.style.minHeight = t + 'px'),
            (e.parentElement.style.maxHeight = '360px'),
            e.parentElement.insertAdjacentHTML('beforeend', this.vpaidDom),
            this.handleScriptAndImages(e.parentElement),
            this.handleButtonSwitch(e.parentElement)
        }
      }
    }
  }
  handleVpaidDom(t) {
    this.vpaidDom &&
      (this.script &&
        (t.insertAdjacentHTML('beforeend', this.script), this.handleScriptAndImages(t)),
      this.vpaidDomInImage && t.insertAdjacentHTML('beforeend', this.vpaidDomInImage))
  }
  handleScriptAndImages(t) {
    if (this.script) {
      const e = document.createElement('div')
      e.innerHTML = this.script
      const i = e.querySelectorAll('script'),
        s = e.querySelectorAll('img')
      i.forEach(function (e) {
        const i = e.src,
          s = document.createElement('script')
        ;(s.src = i),
          (s.type = 'application/javascript'),
          t.appendChild(s),
          e.parentNode.removeChild(e)
      }),
        s.forEach(function (e) {
          const i = e.src,
            s = document.createElement('img')
          ;(s.src = i),
            (s.style.width = '0'),
            (s.style.height = '0'),
            t.appendChild(s),
            e.parentNode.removeChild(e)
        }),
        t.appendChild(e)
    }
  }
  handleButtonSwitch(t) {
    if (this.buttonReduceSwitch && this.vpaidDomInImage)
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
            this && e && (this.remove(), e.remove())
          })
      }
    }
    if (this.vpaidDomInImage) {
      const e = t.parentElement.querySelector('.full-image'),
        i = t.parentElement.querySelector('.in-image'),
        s = t.parentElement.querySelector('#bliink-switch')
      s &&
        s.addEventListener('click', () => {
          if (e && i && s) {
            ;(e.style.top = '100%'),
              (e.style.opacity = 0),
              (e.style.display = 'none'),
              (i.style.opacity = 1),
              (s.style.display = 'none'),
              t.insertAdjacentHTML('beforeend', this.buttonCloseSwitch)
            const n = t.parentElement.querySelector('#bliink-switch-close')
            n &&
              n.addEventListener('click', function () {
                const e = t.parentElement.querySelector('.in-image')
                this && e && (this.remove(), e.remove())
              })
          }
        })
      const n = +e.dataset.transitionTiming
      setTimeout(() => {
        if (e && i) {
          ;(e.style.top = '100%'),
            (e.style.opacity = 0),
            (e.style.display = 'none'),
            (i.style.opacity = 1)
          if (!t.parentElement.querySelector('#bliink-switch-close')) {
            t.insertAdjacentHTML('beforeend', this.buttonCloseSwitch)
            const e = t.parentElement.querySelector('#bliink-switch-close')
            e &&
              e.addEventListener('click', function () {
                const e = t.parentElement.querySelector('.in-image')
                this && e && (this.remove(), e.remove())
              })
          }
        }
      }, n)
    }
  }
  timeUpdateHandler_() {
    if (this.nextQuartileIndex_ >= this.quartileEvents_.length) return
    const t = (100 * this.videoSlot_.currentTime) / this.videoSlot_.duration,
      e = this.quartileEvents_[this.nextQuartileIndex_]
    t >= e.value &&
      (e.event in this.eventsCallbacks_ && this.eventsCallbacks_[e.event](),
      (this.nextQuartileIndex_ += 1)),
      this.videoSlot_.duration > 0 &&
        (this.attributes_.remainingTime = this.videoSlot_.duration - this.videoSlot_.currentTime)
  }
  loadedMetadata_() {
    ;(this.attributes_.duration = this.videoSlot_.duration), this.callEvent_('AdDurationChange')
  }
  stopAd() {
    this.log('Stopping ad'), setTimeout(this.callEvent_.bind(this, 'AdStopped'), 75)
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
    this.log('pauseAd'), this.videoSlot_ && (this.videoSlot_.pause(), this.callEvent_('AdPaused'))
  }
  resumeAd() {
    this.log('resumeAd'), this.videoSlot_ && (this.videoSlot_.play(), this.callEvent_('AdPlaying'))
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
