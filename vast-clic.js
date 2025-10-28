/* VPAID JS — version corrigée
 * Corrections majeures :
 * 1) Boutons au-dessus du calque de clic (z-index: 10000)
 * 2) slot positionné en relative pour un stacking context propre
 * 3) Insertion des boutons non conditionnée à vpaidDomInImage / .in-image
 * 4) Calque de clic identifié (#bliink-click-layer)
 */

const Vpaid = class {
  buttonReduceSwitch = (
    '<svg id="bliink-switch" style="width:20px;height:20px;position:absolute;top:5px;z-index:10000;right:10px;cursor:pointer;" version="1.1"\n id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n viewBox="0 0 170.8 113.3" style="enable-background:new 0 0 170.8 113.3;" xml:space="preserve">\n <style type="text/css">\n   .st0 { opacity: 0.7; }\n   .st1 { fill: #FFFFFF; }\n </style>\n <rect class="st0" width="170.8" height="113.3" />\n <path class="st1"\n   d="M88.8,63c-9.4,0-18.7,0-28.1,0c-5.1,0-8.5-3.4-6.6-6.7c1.1-1.9,3.6-3,6.8-3c11,0,22.1,0,33.1,0\nc7.7,0,15.5,0,23.2,0c3.5,0,6.5,1.9,6.8,4.2c0.4,2.5-1.9,4.8-5.4,5.3c-0.8,0.1-1.6,0.1-2.4,0.1C107.2,63,98,63,88.8,63z" />\n</svg>'
  );

  buttonCloseSwitch = (
    '<svg id="bliink-switch-close" style="width:35px;height:35px;position:absolute;bottom:35%;z-index:10000;right:0;cursor:pointer;" version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\nviewBox="0 0 338 302" style="enable-background:new 0 0 338 302;" xml:space="preserve">\n<path d="M168.6,240.9c-49.7-0.2-89.7-40.6-89.5-90.4c0.2-49.7,40.5-89.6,90.4-89.5c49.2,0.1,89.5,40.7,89.4,90.1\nC258.8,200.8,218.2,241.1,168.6,240.9z M184.8,150.7c6.9-6.7,13.6-12.9,20-19.4c4.6-4.7,4.4-11.3,0.1-15.8\nc-4.4-4.6-11.2-4.8-16.2-0.4c-1.6,1.4-3.1,3-4.6,4.6c-5,5.1-9.9,10.1-15,15.4c-7-7.1-13.3-13.6-19.7-19.8c-3.9-3.7-9-4.3-13.4-1.9\nc-4.4,2.4-7.1,7.4-5.7,12.2c0.8,2.7,2.5,5.4,4.5,7.5c5.9,6.1,12.1,11.8,18.5,18c-7.2,7.1-13.7,13.3-20,19.7c-3.7,3.8-4.3,9.1-2,13.4\nc2.3,4.3,7,7,11.6,5.9c2.7-0.7,5.5-2.3,7.6-4.3c6.3-5.9,12.2-12.1,18.6-18.5c6.5,6.6,12.4,12.6,18.4,18.6c5.6,5.5,12.4,5.9,17.2,1.1\nc5-4.9,4.6-11.6-0.9-17.2C197.7,163.4,191.6,157.5,184.8,150.7z"/>\n</svg>'
  );

  vpaidDom = (
    '\n        <div\n            data-wrapperId="6900a0e968277a00114d5b4f"\n            data-id="6900a0e968277a00114d5b4f"\n            data-index="1"\n            class="full-image hide"\n            style="z-index: 1; transition: all .8s ease-in-out; position: absolute; left: 0.00%; top: 0.00%; width: 100%; height: 100%; transition: all ease-in-out 0.3s;"\n        >   \n            <div style="width:100%; height:100%; position: absolute; bottom: 0;overflow: hidden;">\n                <div data-type="image"  style="background: url(https://creative.bliink.io/6900a0e968277a00114d5b4a/8whdJXS.png) no-repeat center center; background-size: contain;position: absolute; width: 22%; height: 7%; top: 88.61%; bottom: 4.17%; left: 38.75%; right: 38.91%; ; z-index: 0;"></div>\n            </div>\n    </div>'
  );

  script = "";
  vpaidDomInImage = undefined;
  videoStylesFormat = "position: absolute; width: 640px; height: 360px; top: 0px; bottom: 0px; left: 0px; right: 0px; ";
  adDuration = 30000;

  constructor() {
    this.slot_ = null;
    if (this.vpaidDom) {
      // Normalise tout z-index trouvé à 999 dans le DOM injecté
      this.vpaidDom = this.vpaidDom.replace(/z-index:\s*\d+;/g, "z-index: 999;");
    }
    this.videoSlot_ = null;
    this.eventsCallbacks_ = {};
    this.attributes_ = {
      companions: "",
      desiredBitrate: 256,
      duration: 10,
      expanded: false,
      height: 0,
      icons: "",
      linear: false,
      skippableState: false,
      viewMode: "normal",
      width: 0,
      volume: 1,
    };
    this.startTime_ = 0;
    this.quartileEvents_ = [
      { event: "AdVideoStart", value: 0 },
      { event: "AdVideoFirstQuartile", value: 25 },
      { event: "AdVideoMidpoint", value: 50 },
      { event: "AdVideoThirdQuartile", value: 75 },
      { event: "AdVideoComplete", value: 99 },
    ];
    this.nextQuartileIndex_ = 0;
    this.parameters_ = {};
  }

  clickAd_() {
    console.log("Bliink ad clicked");
    if (this.clickThroughUrls?.length) {
      const t = this.videoSlot_.currentTime;
      let url = "";
      for (const i of this.clickThroughUrls) {
        if (t >= i.start && t < i.end) { url = i.url; break; }
      }
      if ("AdClickThru" in this.eventsCallbacks_) {
        this.eventsCallbacks_.AdClickThru(url, "0", true);
      }
    } else if ("AdClickThru" in this.eventsCallbacks_) {
      this.eventsCallbacks_.AdClickThru("", "0", true);
    }
  }

  handshakeVersion() { return "2.0"; }

  initAd(width, height, viewMode, desiredBitrate, creativeData, environmentVars) {
    this.attributes_.width = width;
    this.attributes_.height = height;
    this.attributes_.viewMode = viewMode;
    this.attributes_.desiredBitrate = desiredBitrate;
    this.slot_ = environmentVars.slot;
    this.videoSlot_ = environmentVars.videoSlot;

    // Assure un stacking context propre pour les éléments en position absolue
    if (this.slot_) {
      this.slot_.style.position = this.slot_.style.position || 'relative';
    }

    try {
      this.parameters_ = JSON.parse(creativeData.AdParameters);
      this.clickThroughUrls = this.parameters_.clickThroughUrls || [];
    } catch (err) {
      this.log("Error parsing AdParameters: " + err.message);
      this.callEvent_("AdError");
      return;
    }

    this.log(`initAd ${width}x${height} ${viewMode} ${desiredBitrate}`);

    if (this.videoSlot_) {
      this.videoSlot_.addEventListener("loadedmetadata", this.loadedMetadata_.bind(this), false);
      this.videoSlot_.addEventListener("timeupdate", this.timeUpdateHandler_.bind(this), false);
      this.videoSlot_.addEventListener("ended", this.stopAd.bind(this), false);
    }

    if (this.slot_) {
      const clickLayer = document.createElement("div");
      clickLayer.id = 'bliink-click-layer';
      clickLayer.style.position = "absolute";
      clickLayer.style.top = "0";
      clickLayer.style.left = "0";
      clickLayer.style.width = "100%";
      clickLayer.style.height = "100%";
      clickLayer.style.zIndex = "9999"; // les boutons sont à 10000
      clickLayer.addEventListener("click", this.clickAd_.bind(this), false);
      this.slot_.appendChild(clickLayer);
    }

    if (this.parameters_.vpaidType === "linear") {
      this.updateVideoSlot_();
    } else {
      this.log("no linear type");
    }

    this.callEvent_("AdLoaded");
  }

  updateVideoSlot_ = () => {
    if (!this.videoSlot_) {
      this.videoSlot_ = document.createElement("video");
      this.log("Warning: No video element passed to ad, creating element.");
      if (this.slot_) this.slot_.appendChild(this.videoSlot_);
    }
    this.updateVideoPlayerSize_();

    const media = this.parameters_.mediaFiles || [];
    let chosen = false;
    for (let i = 0; i < media.length; i++) {
      if (this.videoSlot_.canPlayType(media[i].type) !== "") {
        this.videoSlot_.setAttribute("src", media[i].uri);
        chosen = true;
        if (media[i].styles) this.videoSlot_.style.cssText = media[i].styles;
        break;
      }
    }
    if (!chosen) this.callEvent_("AdError");
  };

  updateVideoPlayerSize_() {
    if (!this.videoSlot_) return;
    this.videoSlot_.setAttribute("width", this.attributes_.width);
    this.videoSlot_.setAttribute("height", this.attributes_.height);
  }

  startAd() {
    this.log("Starting ad");
    if (this.parameters_.vpaidType === "linear" && this.videoSlot_) {
      this.videoSlot_.play();
    }
    this.startTime_ = new Date().getTime();

    if (this.videoSlot_ && this.videoSlot_.nodeName) {
      this.slot_.insertAdjacentHTML("beforeend", this.vpaidDom);
      if (this.parameters_.vpaidType === "linear") this.handleLinearAd();
      else this.handleNonLinearAd();
    } else if (this.slot_) {
      this.handleScriptAndImages(this.slot_);
    }

    this.callEvent_("AdStarted");
    this.callEvent_("AdImpression");
  }

  handleLinearAd() {
    const t = this.slot_;
    if (!t) return;
    t.classList.add("percentage");
    t.style.top = "0";
    this.handleVpaidDom(t);
    this.handleButtonSwitch(t);
  }

  handleNonLinearAd() {
    if (!this.videoSlot_) return;
    const container = this.videoSlot_.parentElement?.parentElement?.parentElement?.parentElement;
    if (!container) return;
    const e = container.querySelector("video");
    if (!e || !e.parentElement) return;

    const h = e.parentElement.getBoundingClientRect().height;
    e.parentElement.style.minHeight = h + "px";
    e.parentElement.style.maxHeight = "360px";
    e.parentElement.insertAdjacentHTML("beforeend", this.vpaidDom);
    this.handleScriptAndImages(e.parentElement);
    this.handleButtonSwitch(e.parentElement);
  }

  handleVpaidDom(t) {
    if (!this.vpaidDom) return;
    if (this.script) {
      t.insertAdjacentHTML("beforeend", this.script);
      this.handleScriptAndImages(t);
    }
    if (this.vpaidDomInImage) t.insertAdjacentHTML("beforeend", this.vpaidDomInImage);
  }

  handleScriptAndImages(t) {
    if (!this.script) return;
    const tmp = document.createElement("div");
    tmp.innerHTML = this.script;
    const scripts = tmp.querySelectorAll("script");
    const imgs = tmp.querySelectorAll("img");

    scripts.forEach((scr) => {
      const src = scr.src;
      const s = document.createElement("script");
      s.src = src;
      s.type = "application/javascript";
      t.appendChild(s);
      scr.parentNode.removeChild(scr);
    });

    imgs.forEach((im) => {
      const src = im.src;
      const i = document.createElement("img");
      i.src = src;
      i.style.width = "0";
      i.style.height = "0";
      t.appendChild(i);
      im.parentNode.removeChild(im);
    });

    t.appendChild(tmp);
  }

  // ⇣⇣⇣ CORRIGÉ : on insère désormais les boutons sans dépendre de vpaidDomInImage / .in-image
  handleButtonSwitch(t) {
    // Bouton reduce / switch
    if (this.buttonReduceSwitch) {
      t.insertAdjacentHTML("beforeend", this.buttonReduceSwitch);
    }

    // Bouton close toujours inséré
    if (this.buttonCloseSwitch) {
      t.insertAdjacentHTML("beforeend", this.buttonCloseSwitch);
      const closeBtn = t.querySelector("#bliink-switch-close");
      if (closeBtn) {
        closeBtn.addEventListener("click", function () {
          const inImg = t.parentElement?.querySelector(".in-image");
          if (this && inImg) { this.remove(); inImg.remove(); }
          else { this?.remove?.(); }
        });
      }
    }

    // Comportement spécial si vpaidDomInImage est présent (inchangé)
    if (this.vpaidDomInImage) {
      const full = t.parentElement.querySelector(".full-image");
      const inImg = t.parentElement.querySelector(".in-image");
      const switchBtn = t.parentElement.querySelector("#bliink-switch");

      if (switchBtn) {
        switchBtn.addEventListener("click", () => {
          if (full && inImg && switchBtn) {
            full.style.top = "100%";
            full.style.opacity = 0;
            full.style.display = "none";
            inImg.style.opacity = 1;
            switchBtn.style.display = "none";
            if (!t.parentElement.querySelector("#bliink-switch-close")) {
              t.insertAdjacentHTML("beforeend", this.buttonCloseSwitch);
              const e = t.parentElement.querySelector("#bliink-switch-close");
              e && e.addEventListener("click", function () {
                const ii = t.parentElement.querySelector(".in-image");
                if (this && ii) { this.remove(); ii.remove(); }
              });
            }
          }
        });
      }

      const n = +full?.dataset?.transitionTiming || 0;
      setTimeout(() => {
        if (full && inImg) {
          full.style.top = "100%";
          full.style.opacity = 0;
          full.style.display = "none";
          inImg.style.opacity = 1;
          if (!t.parentElement.querySelector("#bliink-switch-close")) {
            t.insertAdjacentHTML("beforeend", this.buttonCloseSwitch);
            const e = t.parentElement.querySelector("#bliink-switch-close");
            e && e.addEventListener("click", function () {
              const ii = t.parentElement.querySelector(".in-image");
              if (this && ii) { this.remove(); ii.remove(); }
            });
          }
        }
      }, n);
    }
  }

  timeUpdateHandler_() {
    if (this.nextQuartileIndex_ >= this.quartileEvents_.length) return;
    const pct = (100 * this.videoSlot_.currentTime) / this.videoSlot_.duration;
    const q = this.quartileEvents_[this.nextQuartileIndex_];
    if (pct >= q.value) {
      if (q.event in this.eventsCallbacks_) this.eventsCallbacks_[q.event]();
      this.nextQuartileIndex_ += 1;
    }
    if (this.videoSlot_.duration > 0) {
      this.attributes_.remainingTime = this.videoSlot_.duration - this.videoSlot_.currentTime;
    }
  }

  loadedMetadata_() {
    this.attributes_.duration = this.videoSlot_.duration;
    this.callEvent_("AdDurationChange");
  }

  stopAd() {
    this.log("Stopping ad");
    setTimeout(this.callEvent_.bind(this, "AdStopped"), 75);
  }

  resizeAd(width, height, viewMode) {
    this.log(`resizeAd ${width}x${height} ${viewMode}`);
    this.attributes_.width = width;
    this.attributes_.height = height;
    this.attributes_.viewMode = viewMode;
    this.updateVideoPlayerSize_();
    this.callEvent_("AdSizeChange");
  }

  pauseAd() {
    this.log("pauseAd");
    if (this.videoSlot_) {
      this.videoSlot_.pause();
      this.callEvent_("AdPaused");
    }
  }

  resumeAd() {
    this.log("resumeAd");
    if (this.videoSlot_) {
      this.videoSlot_.play();
      this.callEvent_("AdPlaying");
    }
  }

  expandAd() {
    this.log("expandAd");
    this.attributes_.expanded = true;
    this.callEvent_("AdExpanded");
  }

  collapseAd() {
    this.log("collapseAd");
    this.attributes_.expanded = false;
  }

  skipAd() {
    this.log("skipAd");
    if (this.attributes_.skippableState) this.callEvent_("AdSkipped");
  }

  subscribe(callback, eventName, ctx) {
    this.log("Subscribe " + eventName);
    this.eventsCallbacks_[eventName] = callback.bind(ctx);
  }

  unsubscribe(eventName) {
    this.log("unsubscribe " + eventName);
    this.eventsCallbacks_[eventName] = null;
  }

  getAdLinear() { return this.attributes_.linear; }
  getAdWidth() { return this.attributes_.width; }
  getAdHeight() { return this.attributes_.height; }
  getAdExpanded() { this.log("getAdExpanded"); return this.attributes_.expanded; }
  getAdSkippableState() { this.log("getAdSkippableState"); return this.attributes_.skippableState; }
  getAdRemainingTime() {
    const t = new Date().getTime();
    return this.attributes_.duration - (t - this.startTime_) / 1000;
  }
  getAdDuration() { return this.attributes_.duration; }
  getAdVolume() { this.log("getAdVolume"); return this.attributes_.volume; }
  setAdVolume(v) { this.attributes_.volume = v; this.log("setAdVolume " + v); this.callEvent_("AdVolumeChange"); }
  getAdCompanions() { return this.attributes_.companions; }
  getAdIcons() { return this.attributes_.icons; }

  log(msg) { console.log(msg); }

  callEvent_(name) {
    if (name in this.eventsCallbacks_) this.eventsCallbacks_[name]();
  }
};

var getVPAIDAd = function () { return new Vpaid(); };
