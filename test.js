/* AdRiver javascript VPAID container. Version: 1.11.8 Developed by Alexander Nikolaev. */
var _ = {
  isObject: function(t) {
      var e = typeof t;
      return "function" === e || "object" === e && !!t
  },
  allKeys: function(t) {
      if (!_.isObject(t))
          return [];
      var e, i = [];
      for (e in t)
          i.push(e);
      return i
  }
}
, createAssigner = function(t, e) {
  return function(i) {
      var s = arguments.length;
      if (2 > s || null === i)
          return i;
      for (var a = 1; a < s; a++)
          for (var r = arguments[a], n = t(r), o = n.length, d = 0; d < o; d++) {
              var h = n[d];
              e && void 0 !== i[h] || (i[h] = r[h])
          }
      return i
  }
};
_.extend = createAssigner(_.allKeys);
var d = []
, checkUrl = function(t, e) {
  return (/^\//.test(t) ? e : "") + t
}
, addEvent = function(t, e, i) {
  e && (e.addEventListener ? e.addEventListener(t, i, !1) : e.attachEvent ? e.attachEvent("on" + t, i) : e[t] = i)
}
, httplize = function(t) {
  return "http:" == location.protocol || "https:" == location.protocol ? (/^\/\//.test(t) ? location.protocol : "") + t : (/^\/\//.test(t) ? "https:" : "") + t
}
, ar_p = function(t, e) {
  return void 0 === e ? "" : t + "=" + e
}
, obj2str = function(t, e) {
  var i = [];
  for (var s in e = e || ";",
  t)
      i.push(ar_p(s, t[s]));
  return i.join(e)
}
, relDiff = function(t, e) {
  var i = Math.max(t, e)
    , s = Math.min(t, e);
  return 100 * Math.abs((i - s) / i)
}
, extendL = function(t, e) {
  for (var i in t)
      t[i] = e[i] || t[i];
  return t
}
, getFrameContentWindow = function(t) {
  return t.contentWindow ? t.contentWindow.document : t.contentDocument
}
, sendPixel = function(t) {
  if (t = httplize(t).split("![rnd]").join(~~(1e6 * Math.random())),
  document.createElement && document.body) {
      var e = document.createElement("img");
      e.style.position = "absolute",
      e.style.display = "none",
      e.style.width = e.style.height = "0px",
      e.setAttribute("referrerpolicy", "no-referrer-when-downgrade"),
      e.src = t,
      document.body.appendChild(e)
  } else {
      var i = new Image;
      i.setAttribute("referrerpolicy", "no-referrer-when-downgrade"),
      i.src = t
  }
}
, sendEclick = function(t, e, i) {
  return e && -1 == t.indexOf("&custom=") && (t += "&custom=" + e),
  void 0 !== i && (t += "&ct=" + i),
  sendPixel(t),
  this
}
, addCustomsToUrl = function(t, e, i) {
  return t = httplize(t).split("![rnd]").join(~~(1e6 * Math.random())),
  e && -1 == t.indexOf("&custom=") && (t += "&custom=" + e),
  void 0 !== i && (t += "&ct=" + i),
  t
}
, makeEvent = function(t) {
  return "//ad.adriver.ru/cgi-bin/event.cgi?" + obj2str(extendL({
      bid: 0,
      xpid: "",
      sid: t.site,
      bn: 0,
      ad: 0,
      sz: 0,
      bt: 0,
      pz: 0,
      rnd: "![rnd]"
  }, t), "&") + "&type=&tuid=-1"
}
, makeEclick = function(t) {
  return "//ad.adriver.ru/cgi-bin/eclick.cgi?" + obj2str(extendL({
      bid: 0,
      xpid: "",
      sid: t.site,
      bn: 0,
      ad: 0,
      sz: 0,
      bt: 0,
      pz: 0,
      rnd: "![rnd]"
  }, t), "&") + "&rleurl="
}
, makeClick = function(t) {
  return "//ad.adriver.ru/cgi-bin/click.cgi?" + obj2str(extendL({
      bid: 0,
      xpid: "",
      sid: t.site,
      bn: 0,
      ad: 0,
      sz: 0,
      bt: 0,
      pz: 0,
      rnd: "![rnd]"
  }, t), "&") + "&rleurl="
}
, isIOS = function() {
  return !!/iPad|iPhone|iPod/.test(navigator.platform) || navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform)
}
, setRefMeta = function() {
  var t;
  try {
      t = document.head.querySelector('meta[name="referrer"]').content
  } catch (e) {
      t = 0
  }
  if (0 === t) {
      var e = document.createElement("meta");
      e.setAttribute("name", "referrer"),
      e.content = "no-referrer-when-downgrade",
      document.getElementsByTagName("head")[0].appendChild(e)
  } else
      "no-referrer-when-downgrade" !== t && document.querySelector('meta[name="referrer"]').setAttribute("content", "no-referrer-when-downgrade")
}
, VpaidVideoPlayer = function() {
  this.videoSlot_ = this.slot_ = null,
  this.eventsCallbacks_ = {},
  this.quartileEvents_ = [{
      event: "AdVideoStart",
      custom: 2,
      value: 0
  }, {
      event: "AdVideoFirstQuartile",
      custom: 4,
      value: 25
  }, {
      event: "AdVideoMidpoint",
      custom: 3,
      value: 50
  }, {
      event: "AdVideoThirdQuartile",
      custom: 5,
      value: 75
  }, {
      event: "AdVideoComplete",
      custom: 6,
      value: 100
  }],
  this.adVolume = 0,
  this.adWidth = 100,
  this.adHeight = 100,
  this.viewMode = "normal",
  this.expanded = !1,
  this.skippableState = !1,
  this.skipTime = void 0,
  this.companions = "",
  this.icons = "",
  this.set = {
      a: 0,
      b: 0,
      c: "",
      d: 0
  },
  this.linear = !0,
  this.remainingTime = 0,
  this.duration = -2,
  this.desiredBitrate = 256,
  this.lastQuartileIndex_ = 0,
  this.parameters_ = {},
  this.mainDiv = void 0,
  this.mainClick = void 0,
  this.time_ = 0,
  this.muteTime = 0,
  this.startTime = (new Date).getTime(),
  this.oneSecPoint_ = 0,
  this.rnd = Math.round(1e8 * Math.random()).toString(),
  this.muteButton = "",
  this.unmuteButton = "",
  this.closeButton = "",
  this.buttonsReady = !1,
  this.buttonDrawStarted = !1,
  this.mouseCoords = {
      x: 0,
      y: 0
  },
  this.readyForViewability = !1,
  this.viewabilityStarted = !1,
  this.viewabilityEvent = 0,
  this.viewabilityEventStartTime = void 0,
  this.secondaryViewability = void 0,
  this.secondaryViewabilityStartTime = void 0,
  this.secondaryViewabilitySend = !1,
  this.ancestorLength = void 0,
  this.historyLength = "undefined" != typeof history ? history.length : "",
  this.slotWin = void 0,
  this.frameNode = void 0,
  this.frameElement = void 0,
  this.frameNodeDelay = void 0,
  this.frameNodeUrl = void 0,
  this.frameNodePause = !1,
  this.frameNodeContent = void 0,
  this.frameNodeTime = -1,
  this.frameNodeTimer = void 0,
  this.frameNodeDrawn = 0,
  this.quizzLoader = '<script src="//content.adriver.ru/html.js"></script><script>var ar_html_params=![ar_html_params];</script><link href="![domain]/images/0006677/0006677613/0/styles.css" rel="stylesheet" type="text/css"/><script src="![domain]/images/000![bidsep]/000![bid]/0/config.js"></script><script src="![domain]/images/0006677/0006677613/0/script.js"></script><div class="slider"></div>\r\n',
  this.quizzDraw = !1,
  this.wlapproved = !0,
  this.clickable = !0,
  this.pHandles = !1
};
VpaidVideoPlayer.prototype.initAd = function(t, e, i, s, a, r) {
  if (this.adWidth = t,
  this.adHeight = e,
  this.viewMode = i,
  this.desiredBitrate = s,
  this.slot_ = r.slot,
  "undefined" == typeof AdriverViewability) {
      window.AdriverViewability = !0,
      this.loadScript("//content.adriver.ru/banners/0002186/0002186173/0/AV.js", this.slot_);
      try {
          this.slotWin = this.slot_.ownerDocument.defaultView
      } catch (a) {}
  }
  this.videoSlot_ = r.videoSlot;
  var n = "undefined" == typeof adParameters ? {} : adParameters;
  if (this.parameters_ = _.extend(n, JSON.parse(a.AdParameters)),
  this.event = makeEvent(this.parameters_),
  void 0 === this.parameters_.chwl && (this.parameters_.chwl = ""),
  this.parameters_.chwl)
      this.makeWLRequest();
  else {
      this.eclick = makeEclick(this.parameters_),
      this.click = makeClick(this.parameters_),
      this.skipTime = this.setSkipTime(),
      this.ancestorLength = this.getAncestorLength();
      try {
          "" !== this.parameters_.cv.area && "" !== this.parameters_.cv.time && (this.secondaryViewability = this.parameters_.cv)
      } catch (a) {}
      try {
          0 === this.parameters_.clickable && (this.clickable = !1)
      } catch (a) {}
      try {
          1 === parseInt(this.parameters_.playerHandles) && (this.pHandles = !0)
      } catch (a) {}
      this.updateVideoSlot_(),
      this.videoSlot_.addEventListener("ended", this.stopAd.bind(this), !1),
      this.videoSlot_.addEventListener("pause", this.clearViewability.bind(this)),
      this.loadJSTrackers(),
      this.callEvent_("AdLoaded")
  }
}
,
VpaidVideoPlayer.prototype.callbackInit = function(t) {
  try {
      var e = t;
      this.wlapproved = 0 !== parseInt(e.chwl)
  } catch (t) {
      this.log("Parse error"),
      this.wlapproved = !0
  }
  if (this.wlapproved) {
      this.eclick = makeEclick(this.parameters_),
      this.click = makeClick(this.parameters_),
      this.skipTime = this.setSkipTime(),
      this.ancestorLength = this.getAncestorLength();
      try {
          "" !== this.parameters_.cv.area && "" !== this.parameters_.cv.time && (this.secondaryViewability = this.parameters_.cv)
      } catch (t) {}
      try {
          0 === this.parameters_.clickable && (this.clickable = !1)
      } catch (t) {}
      try {
          1 === parseInt(this.parameters_.playerHandles) && (this.pHandles = !0)
      } catch (t) {}
      this.updateVideoSlot_(),
      this.videoSlot_.addEventListener("ended", this.stopAd.bind(this), !1),
      this.videoSlot_.addEventListener("pause", this.clearViewability.bind(this)),
      this.loadJSTrackers(),
      this.callEvent_("AdLoaded")
  } else {
      var i = this.getCustoms(161, 162, 168, 176, 213, 214, 216, 217, 163);
      this.sendEvent(this.event, 70, i, 1),
      this.log("AdError: WL"),
      this.callEvent_("AdError")
  }
}
,
VpaidVideoPlayer.prototype.onMoreClick_ = function(t, e, i) {
  var s = this.getCustoms(161, 162, 164, 165, 166, 167, 170, 176, 178, 201);
  this.sendEvent(this.event, 21, s, 1),
  sendEclick(this.eclick, s, 2),
  window.open(t),
  this.callEvent_("AdClickThru", "", e, i)
}
,
VpaidVideoPlayer.prototype.onAdClick_ = function(t, e) {
  var i = this.getCustoms(161, 162, 164, 165, 166, 167, 170, 176, 178, 201)
    , s = "";
  !1 === this.pHandles ? (sendEclick(this.eclick, i),
  t && window.open(t)) : s = addCustomsToUrl(this.click, i),
  this.callEvent_("AdClickThru", s, e, this.pHandles)
}
,
VpaidVideoPlayer.prototype.buttonOnClick_ = function(t, e, i) {
  var s = this.getCustoms(161, 162, 164, 165, 166, 167, 170, 176, 178, 201);
  this.sendEvent(this.event, 20, s, 1),
  sendEclick(this.eclick, s, 1),
  this.callEvent_("AdInteraction"),
  window.open(t),
  this.callEvent_("AdClickThru", "", e, i)
}
,
VpaidVideoPlayer.prototype.timeUpdateHandler_ = function() {
  if (void 0 !== this.parameters_.duration && this.duration <= 0)
      try {
          var t = this.parameters_.duration.split(":");
          t = 3600 * Number(t[0]) + 60 * Number(t[1]) + Number(t[2]),
          this.setAdDuration(t)
      } catch (t) {}
  try {
      this.videoSlot_.duration != this.duration && (this.duration <= 0 || relDiff(this.videoSlot_.duration, this.duration) <= 5 && this.videoSlot_.duration > 0) && this.setAdDuration(this.videoSlot_.duration)
  } catch (t) {}
  var e = this.duration - this.videoSlot_.currentTime;
  this.duration > 0 && this.remainingTime != e && this.setAdRemainingTime(e),
  (!this.buttonDrawStarted && this.videoSlot_.duration > 0 && this.videoSlot_.currentTime <= 1 && this.videoSlot_.currentTime > 0 || !this.buttonDrawStarted && this.videoSlot_.currentTime > 1) && (this.buttonDrawStarted = !0,
  this.drawButtons());
  var i = this.viewability_.getViewability();
  if (void 0 !== this.viewabilityEventStartTime ? "viewable" !== i ? this.clearViewability(!0) : this.videoSlot_.currentTime - this.viewabilityEventStartTime >= 2 && this.sendViewability(!0) : this.viewabilityEvent || "viewable" !== i || (this.viewabilityEventStartTime = this.videoSlot_.currentTime),
  void 0 !== this.secondaryViewability) {
      var s = this.viewability_.getViewableProc();
      void 0 !== this.secondaryViewabilityStartTime ? s < this.secondaryViewability.area ? this.clearViewability(!1) : this.videoSlot_.currentTime - this.secondaryViewabilityStartTime >= this.secondaryViewability.time && this.sendViewability(!1) : s >= this.secondaryViewability.area && (this.secondaryViewabilityStartTime = this.videoSlot_.currentTime)
  }
  if (d[1] && this.videoSlot_.currentTime >= this.oneSecPoint_ && this.videoSlot_.currentTime < this.duration) {
      var a = this.getCustoms(161, 162, 164, 165, 166, 167, 170, 171, 176, 201);
      this.sendEvent(this.event, 50, a, 1),
      this.oneSecPoint_++
  }
  if (!(this.lastQuartileIndex_ >= this.quartileEvents_.length) && this.videoSlot_.currentTime / this.duration * 100 >= this.quartileEvents_[this.lastQuartileIndex_].value) {
      var r = this.quartileEvents_[this.lastQuartileIndex_].event
        , n = this.quartileEvents_[this.lastQuartileIndex_].custom;
      a = this.getCustoms(161, 162, 164, 165, 166, 167, 170, 171, 176, 201, 216, 217);
      this.sendEvent(this.event, n, a),
      100 === this.quartileEvents_[this.lastQuartileIndex_].value && this.sendEvent(this.event, 50, a, 1),
      this.eventsCallbacks_[r] && this.eventsCallbacks_[r](),
      this.lastQuartileIndex_ += 1
  }
  var o = this.muteButton
    , h = this.unmuteButton;
  if (o && h && (0 == this.adVolume || "block" == h.style.display && "none" == o.style.display || (o.style.display = "none",
  h.style.display = "block"),
  0 != this.adVolume || "none" == h.style.display && "block" == o.style.display || (o.style.display = "block",
  h.style.display = "none")),
  void 0 !== this.skipTime && this.buttonsReady ? !this.closeButton && this.videoSlot_.currentTime >= this.skipTime && !this.skippableState ? (this.skippableState = !0,
  this.callEvent_("AdSkippableStateChange")) : this.closeButton && this.videoSlot_.currentTime >= this.skipTime && "none" === this.closeButton.style.display && (this.closeButton.style.display = "block") : this.closeButton && "none" === this.closeButton.style.display && (this.closeButton.style.display = "block"),
  void 0 !== this.frameNode && void 0 !== this.frameNodeDelay && this.videoSlot_.currentTime >= this.frameNodeDelay && !this.frameNodeDrawn) {
      this.frameNodePause && this.pauseAd(),
      this.frameNode.style.display = "block";
      var l = void 0;
      if (void 0 !== this.frameNodeUrl && (this.frameNodeUrl = checkUrl(httplize(this.frameNodeUrl).split("![rnd]").join(this.rnd), this.parameters_.domain),
      l = void 0 !== this.parameters_.loader ? void 0 : this.frameNodeUrl),
      this.frameElement = this.newElement("iframe", this.frameNode, l, {
          scrolling: "no",
          marginwidth: 0,
          marginheight: 0,
          frameborder: 0,
          vspace: 0,
          hspace: 0,
          width: "100%",
          height: "100%"
      }),
      this.frameNodeDrawn = 1,
      this.quizzDraw && (this.parameters_.loader = this.quizzLoader),
      void 0 !== this.parameters_.loader) {
          if (-1 !== this.parameters_.loader.indexOf("![ar_html_params]")) {
              var c = {
                  bid: this.parameters_.bid,
                  xpid: this.parameters_.xpid,
                  sid: this.parameters_.site,
                  bn: this.parameters_.bn,
                  ad: this.parameters_.ad,
                  sz: this.parameters_.sz,
                  bt: this.parameters_.bt,
                  pz: this.parameters_.pz,
                  tuid: -1,
                  pid: this.parameters_.pid,
                  sliceid: this.parameters_.sliceid,
                  rnd: this.rnd
              };
              this.parameters_.loader = this.parameters_.loader.split("![ar_html_params]").join(JSON.stringify(c)).split("![domain]").join(this.parameters_.domain).split("![bid]").join(this.parameters_.bid).split("![bidsep]").join((this.parameters_.bid + "").substring(0, 4))
          }
          this.frameNodeTime >= 0 && (this.frameNodeTimer = setTimeout(this.adUserClose.bind(this), 1e3 * this.frameNodeTime));
          var u = this.frameElement.contentWindow || this.frameElement
            , p = getFrameContentWindow(this.frameElement);
          p.open(),
          p.defineMethods = function(t, e, i, s) {
              t.clearIframeTimeout = i.bind(e),
              t.closeAd = s.bind(e)
          }(u, this, this.clearIframeTimeout, this.adUserClose),
          p.write("<body>" + this.parameters_.loader + "</body>"),
          p.close()
      }
  }
}
,
VpaidVideoPlayer.prototype.clearIframeTimeout = function() {
  void 0 !== this.frameNodeTimer && clearTimeout(this.frameNodeTimer)
}
,
VpaidVideoPlayer.prototype.sendViewability = function(t) {
  var e = !1;
  if (t && "viewable" === this.viewability_.getViewability() && !this.viewabilityEvent) {
      this.viewabilityEvent = 1;
      var i = this.getCustoms(161, 162, 164, 165, 166, 167, 170, 176, 201, 216, 217);
      this.sendEvent(this.event, 53, i),
      e = !0
  } else if (!t && this.viewability_.getViewableProc() >= this.secondaryViewability.area && !this.secondaryViewabilitySend) {
      this.secondaryViewabilitySend = !0;
      i = this.getCustoms(161, 162, 164, 165, 166, 167, 170, 176, 201, 216, 217);
      this.sendEvent(this.event, 69, i),
      e = !0
  } else
      this.clearViewability(t);
  if (this.isOtherFullscreenMode() && e) {
      i = this.getCustoms(100, 101, 161, 162, 164, 165, 166, 167, 168, 170, 171, 173, 176, 177, 178, 201, 213, 214, 216, 217, 163);
      this.sendEvent(this.event, 71, i)
  }
}
,
VpaidVideoPlayer.prototype.clearViewability = function(t) {
  (t || "boolean" != typeof t) && (this.viewabilityEventStartTime = void 0),
  t && "boolean" == typeof t || (this.secondaryViewabilityStartTime = void 0)
}
,
VpaidVideoPlayer.prototype.viewability_ = {
  getViewability: function() {},
  getViewableProc: function() {},
  isMeasurable: function() {
      var t = navigator.userAgent;
      return (/trident/gi.test(t) || /msie/gi.test(t)) && this.isIframe ? 0 : 1
  },
  isTabVisible: function() {}
},
VpaidVideoPlayer.prototype.startViewabilityCheck = function() {
  "function" != typeof window.AdriverViewability && "function" != typeof this.slotWin.AdriverViewability || !this.readyForViewability || this.viewabilityStarted || (void 0 === this.slotWin ? "undefined" != typeof AdriverViewability && (this.viewability_ = new AdriverViewability(this.event,3,this.videoSlot_,2e3)) : this.viewability_ = new this.slotWin.AdriverViewability(this.event,3,this.slot_,2e3),
  this.viewabilityStarted = !0)
}
,
VpaidVideoPlayer.prototype.updateVideoSlot_ = function() {
  null == this.videoSlot_ && (this.videoSlot_ = document.createElement("video"),
  this.log("Warning: No video element passed to ad, creating element."),
  this.slot_.appendChild(this.videoSlot_)),
  this.setPar(),
  this.updateVideoPlayerSize_(),
  this.readyForViewability = !0,
  this.startViewabilityCheck(),
  void 0 === this.mainDiv && this.drawMainDiv();
  for (var t = !1, e = this.parameters_.mediaFiles || [], i = 0; i < e.length; i++)
      if ("" !== this.videoSlot_.canPlayType(e[i].type)) {
          t = checkUrl(this.parameters_.mediaFiles[i].uri, this.parameters_.domain),
          this.videoSlot_.setAttribute("src", t),
          t = !0;
          break
      }
  this.videoSlot_.load(),
  t || (this.log("AdError"),
  this.callEvent_("AdError"))
}
,
VpaidVideoPlayer.prototype.updateVideoPlayerSize_ = function() {
  this.slot_.setAttribute("width", this.adWidth),
  this.slot_.setAttribute("height", this.adHeight),
  1 === this.videoSlot_.nodeType && "VIDEO" === this.videoSlot_.nodeName.toUpperCase() && this.videoSlot_ && 0 != this.adWidth && 0 != this.adHeight && (this.videoSlot_.style.width = this.adWidth + "px",
  this.videoSlot_.style.height = this.adHeight + "px")
}
,
VpaidVideoPlayer.prototype.getPlayerHeight = function() {
  var t = this.slot_.getBoundingClientRect();
  if (t.height <= 0 && void 0 !== this.videoSlot_.getBoundingClientRect) {
      t = this.videoSlot_.getBoundingClientRect();
      return Math.round(t.height)
  }
  return Math.round(t.height)
}
,
VpaidVideoPlayer.prototype.getPlayerWidth = function() {
  var t = this.slot_.getBoundingClientRect();
  return Math.round(t.width)
}
,
VpaidVideoPlayer.prototype.getPlayerLocation = function() {
  var t, e, i, s, a = this.isIframe(0, 1);
  if (this.set.c)
      return this.set.c;
  if (t = 1 == a[0] ? window.location.href : void 0 === a[1] ? "" : a[1],
  -1 !== t.indexOf("doubleclick") || -1 !== t.indexOf("betweendigital") || -1 !== t.indexOf("vidroll.ru") || -1 !== t.indexOf("video-play.ru"))
      for (var r in -1 !== t.indexOf("doubleclick") ? i = "url" : -1 !== t.indexOf("betweendigital") ? i = "ref" : -1 === t.indexOf("vidroll.ru") && -1 === t.indexOf("video-play.ru") || (i = "wpl"),
      s = t.split("&"),
      s)
          e = s[r].split("="),
          void 0 !== e[1] && "" !== e[1] && e[0] == i && (t = e[1]);
  try {
      var n = window.location.ancestorOrigins;
      if (void 0 === n)
          return encodeURIComponent(t);
      n = n.length > 0 ? n[n.length - 1] : void 0;
      var o = n.split("/")[2];
      return t.split("/")[2] !== o && "" !== o ? encodeURIComponent(n) : encodeURIComponent(t)
  } catch (e) {
      return encodeURIComponent(t)
  }
}
,
VpaidVideoPlayer.prototype.setPar = function() {
  try {
      var t, e = window, i = 0;
      if ("undefined" == typeof playerParams)
          for (; e.parent != e && i < 10 && void 0 === e.playerParams && e.parent.document.domain === e.document.domain; )
              i++,
              void 0 !== e.parent.playerParams && (t = e.parent.playerParams),
              e = e.parent;
      else
          t = playerParams;
      void 0 !== t && "vk" === t.type && (void 0 !== t.params[0].referrer && (this.set.c = t.params[0].referrer),
      void 0 !== t.params[0].a && (this.set.a = t.params[0].a),
      void 0 !== t.params[0].g && (1 === t.params[0].g ? this.set.b = "m" : 2 === t.params[0].g && (this.set.b = "f")),
      void 0 !== t.params[0].viewer_id && (this.set.d = t.params[0].viewer_id))
  } catch (t) {}
}
,
VpaidVideoPlayer.prototype.isNum = function(t) {
  return !isNaN(parseFloat(t)) && isFinite(t)
}
,
VpaidVideoPlayer.prototype.isIframe = function(t, e) {
  function i(t, e) {
      try {
          if (window.top == window)
              return t.OnPage;
          for (var i = window; i.parent != i && r < 1e3; ) {
              if (r++,
              i.parent.document.domain != i.document.domain)
                  return t.Iframe;
              i = i.parent
          }
          return e ? t.SameDomainIframe : t.OnPage
      } catch (t) {}
      return t.Iframe
  }
  function s(t) {
      var e, i = [];
      try {
          if (window.top == window)
              return i.push(t.OnPage),
              i.push(window.document.referrer),
              i;
          for (var s = window; s.parent != s && r < 1e3; ) {
              if (r++,
              e = s,
              s.parent.document.domain != s.document.domain)
                  return i.push(t.Iframe),
                  i.push(s.document.referrer),
                  i;
              s = s.parent
          }
          return i.push(t.SameDomainIframe),
          i.push(s.document.location.href),
          i
      } catch (t) {}
      return e ? (i.push(t.Iframe),
      i.push(e.document.referrer)) : i.push(t.Iframe),
      i
  }
  var a = {
      OnPage: 1,
      Iframe: 2,
      SameDomainIframe: 3
  }
    , r = 0;
  if (e) {
      var n = s(a);
      return n
  }
  n = i(a, t);
  return !(t && 3 == n && r <= 1) && n != a.OnPage
}
,
VpaidVideoPlayer.prototype.getMuteTime = function() {
  var t = this.muteTime
    , e = Math.round(10 * this.getAdCurrentTime()) / 10;
  return this.muteTime = e,
  0 == t ? e : Math.round(e - t)
}
,
VpaidVideoPlayer.prototype.getCustoms = function(t) {
  for (var e = arguments, i = "", s = 0; s < e.length; s++)
      switch (e[s]) {
      case 100:
          0 !== this.set.b && (i += "100=" + this.set.b + ";");
          break;
      case 101:
          this.isNum(this.set.a) && this.set.a <= 100 && this.set.a > 0 && (i += "101=" + Math.round(this.set.a) + ";");
          break;
      case 113:
          i += "113=" + (void 0 !== this.secondaryViewability ? "1" : "0") + ";";
          break;
      case 161:
          i += "161=" + Math.round(this.getPlayerWidth()) + ";";
          break;
      case 162:
          i += "162=" + Math.round(this.getPlayerHeight()) + ";";
          break;
      case 163:
          i += "163=" + this.getPlayerLocation() + ";";
          break;
      case 164:
          i += "164=" + this.viewability_.getViewability() + ";";
          break;
      case 165:
          i += "165=" + this.viewability_.getViewableProc() + ";";
          break;
      case 166:
          i += "166=" + this.viewability_.isTabVisible() + ";";
          break;
      case 167:
          i += "167=" + Math.round(this.getAdCurrentTime()) + ";";
          break;
      case 168:
          i += "168=" + this.isIframe() + ";";
          break;
      case 169:
          i += "169=" + this.getMuteTime() + ";";
          break;
      case 170:
          i += "170=" + Math.round(10 * this.getPlayerVolume()) + ";";
          break;
      case 171:
          i += "171=" + Math.round(this.getAdDuration()) + ";";
          break;
      case 173:
          this.isNum(this.set.d) && 0 !== this.set.d && (i += "173=" + Math.round(this.set.d) + ";");
          break;
      case 176:
          i += "176=" + ((new Date).getTime() - this.startTime) + ";";
          break;
      case 177:
          i += "177=" + this.viewability_.isMeasurable() + ";";
          break;
      case 178:
          i += "178=js;";
          break;
      case 201:
          i += "201=" + Math.round(this.mouseCoords.x) + ";202=" + Math.round(this.mouseCoords.y) + ";";
          break;
      case 213:
          i += "213=" + this.ancestorLength + ";";
          break;
      case 214:
          i += "214=" + this.historyLength + ";";
          break;
      case 216:
          i += "216=" + window.screen.width + ";";
          break;
      case 217:
          i += "217=" + window.screen.height + ";"
      }
  return i.substr(0, i.length - 1)
}
,
VpaidVideoPlayer.prototype.handshakeVersion = function(t) {
  return "2.0"
}
,
VpaidVideoPlayer.prototype.drawMainDiv = function() {
  this.mainDiv = document.createElement("div"),
  this.mainDiv.id = "VPAIDcontrols" + this.rnd,
  this.mainDiv.onmouseenter = this.mouseEnter.bind(this),
  this.mainDiv.onmouseleave = this.mouseLeave.bind(this),
  this.mainDiv.style.height = this.mainDiv.style.width = "100%",
  this.mainDiv.style.position = "absolute",
  this.mainDiv.style.top = 0,
  this.mainDiv.style.left = 0,
  this.slot_.appendChild(this.mainDiv);
  for (var t = this.slot_.childNodes, e = 0; e < t.length; e++)
      if (t[e].id === "VPAIDcontrols" + this.rnd) {
          this.mainDiv = t[e];
          break
      }
  this.mainClick = document.createElement("img"),
  this.mainClick.src = "data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
  this.mainClick.style.height = this.mainClick.style.width = "100%",
  this.mainClick.style.cursor = "pointer",
  this.mainDiv.appendChild(this.mainClick),
  addEvent("mousemove", this.mainClick, this.checkMouseCoords.bind(this, this.slot_.childNodes))
}
,
VpaidVideoPlayer.prototype.drawButtons = function() {
  function t(t) {
      return /^\d+$/.test(t) ? t + "px" : t
  }
  function e(e) {
      for (var i = Object.keys(e), s = "", a = 0; a < i.length; a++)
          e[i[a]] && (s += i[a] + ":" + t(e[i[a]]) + ";");
      return s
  }
  void 0 === this.mainDiv && this.drawMainDiv();
  for (var i = "", s = this.parameters_.buttons.length; s--; )
      if (this.parameters_.buttons[s].image) {
          var a = document.createElement("div");
          switch (a.setAttribute("style", "z-index: 9999; " + e(this.parameters_.buttons[s].style) + "background-image: url(" + checkUrl(this.parameters_.buttons[s].image, this.parameters_.domain) + ")"),
          this.parameters_.buttons[s].name) {
          case "mute":
              a.id = "VPAIDMuteButton" + this.rnd;
              break;
          case "unmute":
              a.id = "VPAIDUnmuteButton" + this.rnd
          }
          switch (this.mainDiv.appendChild(a),
          this.parameters_.buttons[s].name) {
          case "buy":
              addEvent("click", a, this.buttonOnClick_.bind(this, this.parameters_.buttons[s].clickTracking[0].clickUrl, 1, !1));
              break;
          case "more":
              i = this.parameters_.buttons[s].clickTracking && this.parameters_.buttons[s].clickTracking[0].clickUrl,
              addEvent("click", a, this.onMoreClick_.bind(this, i, 2, !1));
              break;
          case "mute":
              this.muteButton = a,
              addEvent("click", a, this.muteButtonOnClick_.bind(this));
              break;
          case "unmute":
              this.unmuteButton = a,
              addEvent("click", a, this.muteButtonOnClick_.bind(this));
              break;
          case "close":
              this.closeButton = a,
              a.style.display = "none",
              addEvent("click", a, this.onSkipAd.bind(this))
          }
          addEvent("mousemove", a, this.checkMouseCoords.bind(this, this.slot_.childNodes))
      } else if ("iframe" === this.parameters_.buttons[s].name) {
          a = document.createElement("div");
          a.setAttribute("style", "z-index: 10000; " + e(this.parameters_.buttons[s].style)),
          a.style.display = "none",
          this.mainDiv.appendChild(a),
          this.frameNode = a,
          this.frameNodeDelay = this.parameters_.buttons[s].delay,
          this.frameNodeUrl = this.parameters_.buttons[s].url || "",
          void 0 !== this.parameters_.buttons[s].pause && (this.frameNodePause = this.parameters_.buttons[s].pause),
          void 0 !== this.parameters_.buttons[s].time && (this.frameNodeTime = this.parameters_.buttons[s].time),
          void 0 !== this.parameters_.buttons[s].quiz && (this.quizzDraw = this.parameters_.buttons[s].quiz),
          -1 !== this.frameNodeUrl.indexOf(".html") && -1 !== this.frameNodeUrl.indexOf(".htm") && void 0 === this.parameters_.loader && (this.frameNodeUrl += (/\?/.test(this.frameNodeUrl) ? "&" : "?") + "html_params=" + escape(obj2str(extendL({
              bid: 0,
              xpid: "",
              sid: this.parameters_.site,
              bn: 0,
              ad: 0,
              sz: 0,
              bt: 0,
              pz: 0,
              rnd: this.rnd
          }, this.parameters_), "&")))
      }
  this.clickable && (i = this.parameters_.url,
  addEvent("click", this.mainClick, this.onAdClick_.bind(this, i, 2))),
  this.buttonsReady = !0
}
,
VpaidVideoPlayer.prototype.startAd = function() {
  this.callEvent_("AdImpression"),
  this.callTrackingEvent("Impression");
  var t = this.getCustoms(100, 101, 113, 161, 162, 164, 165, 166, 167, 168, 170, 171, 173, 176, 177, 178, 201, 213, 214, 216, 217, 163);
  d[1] || (this.sendEvent(this.event, 1, t),
  this.callEvent_("AdStarted")),
  this.videoSlot_.addEventListener("timeupdate", this.timeUpdateHandler_.bind(this), !1),
  this.adVolume = 1;
  t = this.getCustoms(161, 162, 164, 165, 166, 167, 169, 170, 176, 201);
  this.sendEvent(this.event, 8, t, 1);
  try {
      this.videoSlot_.volume = this.adVolume
  } catch (t) {}
  this.videoSlot_.play()
}
,
VpaidVideoPlayer.prototype.stopAd = function() {
  var t = this.callEvent_.bind(this);
  this.videoSlot_.pause(),
  setTimeout(t, 1500, ["AdStopped"])
}
,
VpaidVideoPlayer.prototype.adUserClose = function() {
  var t = this.getCustoms(161, 162, 164, 165, 166, 167, 170, 176, 201);
  this.sendEvent(this.event, 15, t, 1),
  setTimeout(this.stopAd.bind(this), 300),
  this.callEvent_("AdUserClose")
}
,
VpaidVideoPlayer.prototype.onSkipAd = function() {
  var t = this.getCustoms(161, 162, 164, 165, 166, 167, 170, 176, 201);
  this.sendEvent(this.event, 18, t, 1);
  var e = this.callEvent_.bind(this);
  setTimeout(e, 200, ["AdSkipped"]),
  setTimeout(this.stopAd.bind(this), 300)
}
,
VpaidVideoPlayer.prototype.setAdVolume = function(t) {
  if (this.adVolume != t) {
      if (0 == this.adVolume && t > 0 || this.adVolume > 0 && 0 == t) {
          this.adVolume = t;
          var e = this.getCustoms(161, 162, 164, 165, 166, 167, 169, 170, 176, 201);
          t > 0 ? this.sendEvent(this.event, 8, e, 1) : this.sendEvent(this.event, 7, e, 1)
      } else
          this.adVolume = t;
      try {
          this.videoSlot_.volume = t
      } catch (t) {}
      this.callEvent_("AdVolumeChange")
  }
}
,
VpaidVideoPlayer.prototype.getAdVolume = function() {
  return this.adVolume
}
,
VpaidVideoPlayer.prototype.checkMouseCoords = function(t, e) {
  this.mouseCoords = this.getMouseCoords(e)
}
,
VpaidVideoPlayer.prototype.dropMouseCoords = function(t, e) {
  this.mouseCoords = {
      x: 0,
      y: 0
  }
}
,
VpaidVideoPlayer.prototype.getMouseCoords = function(t) {
  return {
      x: t.clientX,
      y: t.clientY
  }
}
,
VpaidVideoPlayer.prototype.resizeAd = function(t, e, i) {
  var s = this.viewMode;
  if (this.adWidth = t,
  this.adHeight = e,
  this.viewMode = i,
  this.updateVideoPlayerSize_(),
  this.viewMode != s && "fullscreen" == this.viewMode) {
      var a = this.getCustoms(161, 162, 164, 165, 166, 167, 170, 176, 201);
      this.sendEvent(this.event, 16, a, 1)
  } else if (this.viewMode != s && "fullscreen" == s) {
      a = this.getCustoms(161, 162, 164, 165, 166, 167, 170, 176, 201);
      this.sendEvent(this.event, 17, a, 1)
  }
  this.callEvent_("AdSizeChange")
}
,
VpaidVideoPlayer.prototype.newElement = function(t, e, i, s) {
  try {
      s = s || {};
      var a = document.createElement(t);
      for (var r in i && a.setAttribute("src", i),
      s)
          s.hasOwnProperty(r) && a.setAttribute(r, s[r]);
      return e ? e.appendChild(a) : document.body.appendChild(a),
      a
  } catch (a) {}
}
,
VpaidVideoPlayer.prototype.pauseAd = function() {
  this.videoSlot_.pause();
  var t = this.getCustoms(161, 162, 164, 165, 166, 167, 170, 176, 201);
  this.sendEvent(this.event, 9, t, 1),
  this.callEvent_("AdPaused")
}
,
VpaidVideoPlayer.prototype.resumeAd = function() {
  this.videoSlot_.play();
  var t = this.getCustoms(161, 162, 164, 165, 166, 167, 170, 176, 201);
  this.sendEvent(this.event, 11, t, 1),
  this.callEvent_("AdPlaying")
}
,
VpaidVideoPlayer.prototype.mouseEnter = function(t) {
  this.checkMouseCoords(this, t);
  var e = this.getCustoms(161, 162, 164, 165, 166, 167, 170, 176, 201);
  this.sendEvent(this.event, 51, e, 1)
}
,
VpaidVideoPlayer.prototype.mouseLeave = function() {
  this.dropMouseCoords();
  var t = this.getCustoms(161, 162, 164, 165, 166, 167, 170, 176, 201);
  this.sendEvent(this.event, 52, t, 1)
}
,
VpaidVideoPlayer.prototype.expandAd = function() {
  this.expanded = !0,
  this.callEvent_("AdExpanded")
}
,
VpaidVideoPlayer.prototype.getAdExpanded = function() {
  return this.expanded
}
,
VpaidVideoPlayer.prototype.collapseAd = function() {
  this.expanded = !1
}
,
VpaidVideoPlayer.prototype.getAdSkippableState = function() {
  return this.skippableState
}
,
VpaidVideoPlayer.prototype.skipAd = function() {
  this.skippableState && this.onSkipAd()
}
,
VpaidVideoPlayer.prototype.subscribe = function(t, e, i) {
  t = t.bind(i),
  this.eventsCallbacks_[e] = t
}
,
VpaidVideoPlayer.prototype.unsubscribe = function(t) {
  this.eventsCallbacks_[t] = null
}
,
VpaidVideoPlayer.prototype.getAdWidth = function() {
  return this.adWidth
}
,
VpaidVideoPlayer.prototype.getAdHeight = function() {
  return this.adHeight
}
,
VpaidVideoPlayer.prototype.getAdRemainingTime = function() {
  return this.remainingTime
}
,
VpaidVideoPlayer.prototype.setAdDuration = function(t) {
  this.duration = Number(t),
  this.callEvent_("AdDurationChange")
}
,
VpaidVideoPlayer.prototype.setAdRemainingTime = function(t) {
  this.remainingTime = t,
  this.callEvent_("AdRemainingTimeChange")
}
,
VpaidVideoPlayer.prototype.setSkipTime = function() {
  if (void 0 !== this.parameters_.skiptime)
      try {
          var t, e = this.parameters_.skiptime;
          return -1 !== e.indexOf("&#x3A;") ? t = "&#x3A;" : -1 !== e.indexOf(":") && (t = ":"),
          e = e.split(t),
          e = 3600 * Number(e[0]) + 60 * Number(e[1]) + Number(e[2]),
          e
      } catch (t) {}
}
,
VpaidVideoPlayer.prototype.getAdDuration = function() {
  return this.duration
}
,
VpaidVideoPlayer.prototype.getAdCurrentTime = function() {
  return this.videoSlot_.currentTime ? Math.floor(this.videoSlot_.currentTime) : 0
}
,
VpaidVideoPlayer.prototype.getAdCompanions = function() {
  return this.companions
}
,
VpaidVideoPlayer.prototype.getAdIcons = function() {
  return this.icons
}
,
VpaidVideoPlayer.prototype.getAdLinear = function() {
  return this.linear
}
,
VpaidVideoPlayer.prototype.getPlayerVolume = function() {
  return this.adVolume
}
,
VpaidVideoPlayer.prototype.log = function(t) {
  console.log(t)
}
,
VpaidVideoPlayer.prototype.muteButtonOnClick_ = function() {
  this.adVolume > 0 ? this.setAdVolume(0) : this.setAdVolume(1)
}
,
VpaidVideoPlayer.prototype.isOtherFullscreenMode = function() {
  try {
      if (isIOS())
          return !1;
      var t = window.outerWidth || 0
        , e = window.outerHeight || 0
        , i = window.screen.width || 0
        , s = window.screen.height || 0
        , a = this.getPlayerWidth()
        , r = this.getPlayerHeight()
        , n = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor) && -1 === navigator.userAgent.indexOf("Edge")
        , o = a / Math.max(i, t) * 100
        , d = r / Math.max(s, e) * 100;
      return !(!(window.fullScreen || document.mozFullScreen || document.webkitIsFullScreen || window.screenTop > 0 && window.screenLeft > 0 && screen.height - window.outerHeight < 30 && screen.height - window.outerHeight == 2 * window.screenTop && screen.width - window.outerWidth < 30 || window.navigator.platform.toUpperCase().indexOf("MAC") >= 0 && 0 == window.screenTop && 0 == window.screenLeft || n && this.isIframe() && a === window.screen.width && r === window.screen.height && (window.screen.width < window.outerWidth || window.screen.height < window.outerHeight)) || !(o <= 99 || d <= 90))
  } catch (t) {}
  return !1
}
,
VpaidVideoPlayer.prototype.loadScript = function(t, e) {
  try {
      var i = document.createElement("script");
      i.setAttribute("type", "text/javascript"),
      i.setAttribute("charset", "windows-1251"),
      i.setAttribute("src", t.split("![rnd]").join(Math.round(9999999 * Math.random()))),
      i.onreadystatechange = function() {
          /loaded|complete/.test(this.readyState) && (this.startViewabilityCheck(),
          e.removeChild(i),
          i.onload = null)
      }
      .bind(this),
      i.onload = function() {
          this.startViewabilityCheck(),
          e.removeChild(i)
      }
      .bind(this),
      e.insertBefore(i, e.firstChild)
  } catch (t) {}
}
,
VpaidVideoPlayer.prototype.makeWLRequest = function() {
  try {
      var t = this.getPlayerLocation();
      t = t.indexOf("//") > -1 ? t.split("/")[2] : t.split("/")[0],
      t = t.split(":")[0].split("?")[0];
      var e = "https://ad.adriver.ru/cgi-bin/json.cgi?sid=1&ad=" + this.parameters_.chwl + "&bt=21&rnd=" + ~~(1e8 * Math.random()) + "&tuid=1&tail256=" + t;
      if ("fetch"in window)
          fetch(e, {
              method: "GET",
              mode: "cors",
              credentials: "include",
              referrerPolicy: "no-referrer-when-downgrade"
          }).then(function(t) {
              var e = t.headers.get("content-type");
              if (e && e.includes("application/json"))
                  return t.json();
              throw new TypeError("Not json returned")
          }).then(function(t) {
              this.callbackInit(t)
          }
          .bind(this)).catch(function(t) {
              console.log(t)
          });
      else {
          setRefMeta();
          var i, s = !1, a = "GET", r = 4;
          window.XMLHttpRequest ? (i = new window.XMLHttpRequest,
          void 0 === i.responseType && (s = !0)) : s = !0,
          s ? (i = new window.XDomainRequest,
          i.onload = function() {
              this.callbackInit(JSON.parse(i.responseText), i)
          }
          .bind(this)) : i.onreadystatechange = function() {
              i.readyState === r && this.callbackInit(JSON.parse(i.responseText), i)
          }
          .bind(this),
          i.open(a, e),
          i.withCredentials = !0,
          s || i.setRequestHeader("Content-Type", "text/plain"),
          i.send()
      }
  } catch (t) {
      this.log("xhr construction", t)
  }
}
,
VpaidVideoPlayer.prototype.loadJSTrackers = function() {
  try {
      if (this.parameters_.jstracker.length > 0 && this.slot_)
          for (var t = 0; t < this.parameters_.jstracker.length; t++) {
              var e = document.createElement("script");
              e.setAttribute("type", "text/javascript"),
              e.setAttribute("charset", "windows-1251"),
              e.setAttribute("src", httplize(this.parameters_.jstracker[t].split("![rnd]").join(Math.round(9999999 * Math.random())))),
              this.slot_.appendChild(e)
          }
  } catch (t) {}
}
,
VpaidVideoPlayer.prototype.callEvent_ = function(t) {
  var e = Array.prototype.slice.call(arguments, 1);
  t in this.eventsCallbacks_ && this.eventsCallbacks_[t].apply(this, e)
}
,
VpaidVideoPlayer.prototype.sendEvent = function(t, e, i, s) {
  if (t && !d[e]) {
      switch (i && -1 == t.indexOf("&custom=") && (t += "&custom="),
      s || (d[e] = 1),
      e) {
      case 1:
          this.callTrackingEvent("creativeView");
          break;
      case 2:
          this.callTrackingEvent("start");
          break;
      case 3:
          this.callTrackingEvent("midpoint");
          break;
      case 4:
          this.callTrackingEvent("firstQuartile");
          break;
      case 5:
          this.callTrackingEvent("thirdQuartile");
          break;
      case 6:
          this.callTrackingEvent("complete");
          break;
      case 7:
          this.callTrackingEvent("mute");
          break;
      case 8:
          this.callTrackingEvent("unmute");
          break;
      case 9:
          this.callTrackingEvent("pause");
          break;
      case 11:
          this.callTrackingEvent("resume");
          break;
      case 16:
          this.callTrackingEvent("fullscreen");
          break;
      case 17:
          this.callTrackingEvent("exitFullscreen");
          break;
      case 18:
          this.callTrackingEvent("skip")
      }
      return t = t.split("&type=").join("&type=" + e),
      i && (t = t.split("&custom=").join("&custom=" + i)),
      sendPixel(t),
      this
  }
}
,
VpaidVideoPlayer.prototype.callTrackingEvent = function(t) {
  void 0 !== this.parameters_.TrackingEvents && t in this.parameters_.TrackingEvents && this.parameters_.TrackingEvents[t].forEach(function(t) {
      sendPixel(t)
  })
}
,
VpaidVideoPlayer.prototype.getAncestorLength = function() {
  try {
      var t = window.location.ancestorOrigins;
      return void 0 !== t ? t.length : ""
  } catch (t) {
      return ""
  }
}
;
var getVPAIDAd = function() {
  return new VpaidVideoPlayer
};