/* ==================================================================
 * VPAID 2.0 — Secure Demo (REAL VIDEO + REDUCE/EXPAND + 2 CTAs)
 * Drop-in file, compatible with sandboxed players.
 * - Uses environmentVars.slot / environmentVars.videoSlot
 * - Loads media from AdParameters.mediaFiles[0].uri
 * - Clicks via AdClickThru(url, id, true)
 * - Two CTAs (ids: cta-primary / cta-secondary)
 * - Reduce/Expand animates the video wrapper INSIDE the slot (no parent DOM)
 * - Full VPAID surface implemented
 * ================================================================== */

const Vpaid = class {
  constructor() {
    this.slot_ = null;
    this.videoSlot_ = null;
    this.eventsCallbacks_ = {};

    this.attributes_ = {
      width: 0,
      height: 0,
      viewMode: 'normal',
      volume: 1,
      linear: true,
      expanded: false,
      skippableState: false,
      duration: 30,
      remainingTime: 30,
      companions: '',
      icons: ''
    };

    this.parameters_ = {};
    this.defaultClickUrl = '';
    this.clickThroughUrls = [];

    this.isMinimized = false;
    this.startEpoch_ = null;
    this._quartilesBound = false;
  }

  /* ================= VPAID API ================= */
  handshakeVersion(){ return '2.0'; }

  initAd(width, height, viewMode, desiredBitrate, creativeData, environmentVars){
    // Save
    this.attributes_.width = width|0;
    this.attributes_.height = height|0;
    this.attributes_.viewMode = viewMode || 'normal';

    this.slot_ = environmentVars.slot;
    this.videoSlot_ = environmentVars.videoSlot; // may be null in some players

    // Slot styling (safe inside sandbox)
    if (this.slot_) {
      Object.assign(this.slot_.style, {
        position: 'relative', overflow: 'hidden',
        background: '#0b1220', borderRadius: '12px', transition: 'all .35s ease'
      });
    }

    // Parse AdParameters
    try {
      this.parameters_ = JSON.parse(creativeData.AdParameters || '{}');
    } catch(_) { this.parameters_ = {}; }
    this.clickThroughUrls = this.parameters_.clickThroughUrls || [];
    this.defaultClickUrl = this.parameters_.clickUrl || this.parameters_.clickTag || this.parameters_.clickThroughUrl || this.parameters_.landingPage || '';

    // Ensure video element
    this.ensureVideo_();

    // Build UI (CTAs, toggle, click-layer, wrapper)
    this.buildUI_();

    // Loaded
    this.safeEmit_('AdLoaded');
  }

  startAd(){
    this.startEpoch_ = Date.now();
    // Autoplay muted to be safe
    this.tryPlay_();
    this.bindQuartilesOnce_();
    this.safeEmit_('AdStarted');
    this.safeEmit_('AdImpression');
  }

  stopAd(){ this.safeEmit_('AdStopped'); }
  skipAd(){ if (this.attributes_.skippableState) this.safeEmit_('AdSkipped'); }

  resizeAd(width, height, viewMode){
    this.attributes_.width = width|0;
    this.attributes_.height = height|0;
    this.attributes_.viewMode = viewMode || this.attributes_.viewMode;
    this.safeEmit_('AdSizeChange');
  }

  pauseAd(){ try { this.videoSlot_ && this.videoSlot_.pause(); } catch(_){} this.safeEmit_('AdPaused'); }
  resumeAd(){ this.tryPlay_(); this.safeEmit_('AdPlaying'); }

  expandAd(){ this.attributes_.expanded = true; this.safeEmit_('AdExpanded'); }
  collapseAd(){ this.attributes_.expanded = false; }

  getAdLinear(){ return this.attributes_.linear; }
  getAdWidth(){ return this.attributes_.width; }
  getAdHeight(){ return this.attributes_.height; }
  getAdExpanded(){ return this.attributes_.expanded; }
  getAdSkippableState(){ return this.attributes_.skippableState; }
  getAdRemainingTime(){
    if (!this.startEpoch_) return this.attributes_.remainingTime;
    const elapsed = (Date.now() - this.startEpoch_) / 1000;
    const remain = Math.max(0, (this.videoSlot_?.duration || this.attributes_.duration) - elapsed);
    this.attributes_.remainingTime = remain;
    return remain;
  }
  getAdDuration(){ return (this.videoSlot_?.duration && isFinite(this.videoSlot_.duration)) ? this.videoSlot_.duration : this.attributes_.duration; }
  getAdVolume(){ return this.attributes_.volume; }
  setAdVolume(v){ this.attributes_.volume = +v || 0; if (this.videoSlot_) this.videoSlot_.volume = this.attributes_.volume; this.safeEmit_('AdVolumeChange'); }
  getAdCompanions(){ return this.attributes_.companions; }
  getAdIcons(){ return this.attributes_.icons; }

  subscribe(cb, eventName, ctx){ this.eventsCallbacks_[eventName] = cb && cb.bind ? cb.bind(ctx) : cb; }
  unsubscribe(eventName){ delete this.eventsCallbacks_[eventName]; }

  /* ================= Helpers ================= */
  log(...a){ console.log('[VPAID]', ...a); }
  safeEmit_(n, ...args){ try{ this.eventsCallbacks_[n] && this.eventsCallbacks_[n](...args); }catch(e){ this.log('emit error', n, e); } }

  ensureVideo_(){
    // If no valid video was provided by the player, create one
    if (!this.videoSlot_ || this.videoSlot_.nodeName !== 'VIDEO') {
      this.videoSlot_ = document.createElement('video');
      this.slot_.appendChild(this.videoSlot_);
    }
    const v = this.videoSlot_;
    v.playsInline = true; v.muted = true; v.controls = false; v.preload = 'auto';
    // style is handled by wrapper; keep basic block
    v.style.display = 'block'; v.style.width = '100%'; v.style.height = '100%'; v.style.objectFit = 'cover';

    // Source from AdParameters.mediaFiles[0]
    const mfs = Array.isArray(this.parameters_.mediaFiles) ? this.parameters_.mediaFiles : [];
    const first = mfs.find(m=> (m.type||'').includes('mp4') && m.uri) || mfs[0];
    if (first && first.uri) { try { v.src = first.uri; } catch(_){} }

    v.addEventListener('loadedmetadata', ()=>{ if (isFinite(v.duration)) { this.attributes_.duration = v.duration; this.safeEmit_('AdDurationChange'); } });
  }

  buildUI_(){
    // Wrapper that we animate for reduce/expand
    const wrap = document.createElement('div');
    wrap.id = 'bliink-video-wrap';
    Object.assign(wrap.style, {
      position: 'absolute', inset: '20px 20px 72px 20px', // leave space for CTAs
      borderRadius: '12px', overflow: 'hidden',
      boxShadow: '0 12px 28px rgba(0,0,0,.35)',
      transition: 'all .35s ease'
    });

    // Place the video inside the wrapper
    if (this.videoSlot_.parentElement !== wrap) {
      // If video already in slot, move it into wrapper
      wrap.appendChild(this.videoSlot_);
    }

    // Click layer (fallback global click)
    const clickLayer = document.createElement('div');
    Object.assign(clickLayer.style, { position: 'absolute', inset: 0, zIndex: 1 });
    clickLayer.id = 'bliink-click-layer';
    clickLayer.addEventListener('click', ()=> this.emitClickThru_(this.resolveClickUrl_(), 'default'));

    // CTAs
    const ctas = document.createElement('div');
    Object.assign(ctas.style, { position: 'absolute', left: '20px', right: '20px', bottom: '20px', display: 'flex', gap: '10px', justifyContent: 'center', zIndex: 2 });
    ctas.append(
      this.createCTA_('cta-primary',   'EN SAVOIR PLUS', '#2563eb', 'https://example.com/primary'),
      this.createCTA_('cta-secondary', 'VOIR L\u2019OFFRE',   '#f43f5e', 'https://example.com/secondary')
    );

    // Toggle reduce/expand
    const toggle = document.createElement('div');
    toggle.textContent = '\u2B07\uFE0F Réduire';
    Object.assign(toggle.style, { position: 'absolute', top: '10px', right: '14px', fontSize: '14px', color: '#fff', cursor: 'pointer', zIndex: 2, textShadow: '0 1px 2px rgba(0,0,0,.4)' });
    toggle.addEventListener('click', (ev)=>{ ev.stopPropagation(); this.isMinimized = !this.isMinimized; this.animateMini_(wrap, toggle); });

    // Assemble
    this.slot_.appendChild(wrap);
    this.slot_.appendChild(clickLayer);
    this.slot_.appendChild(ctas);
    this.slot_.appendChild(toggle);
  }

  createCTA_(id, label, color, url){
    const btn = document.createElement('div');
    Object.assign(btn.style, { background: color, color: '#fff', padding: '10px 16px', borderRadius: '8px', fontWeight: 600, fontSize: '14px', cursor: 'pointer', userSelect: 'none' });
    btn.textContent = label;
    btn.addEventListener('click', (ev)=>{ ev.stopPropagation(); this.emitClickThru_(url, id); });
    return btn;
  }

  resolveClickUrl_(){
    if (this.clickThroughUrls?.length && this.videoSlot_) {
      const t = this.videoSlot_.currentTime || 0;
      for (const i of this.clickThroughUrls) {
        const s = i.start||0, e = (i.end==null? Infinity : i.end);
        if (t >= s && t < e && i.url) return i.url;
      }
    }
    return this.defaultClickUrl || '';
  }

  emitClickThru_(url, id){
    if (!url) return;
    if (typeof this.eventsCallbacks_.AdClickThru === 'function') {
      try { this.eventsCallbacks_.AdClickThru(url, id||'default', true); } catch(e){ this.log('AdClickThru error', e); }
    }
  }

  animateMini_(wrap, toggleBtn){
    if (!this.isMinimized){
      // Expand
      Object.assign(wrap.style, { inset: '20px 20px 72px 20px' });
      toggleBtn.textContent = '\u2B07\uFE0F Réduire';
      this.safeEmit_('AdExpanded');
    } else {
      // Reduce inside slot (bottom-right mini)
      Object.assign(wrap.style, { inset: 'auto 12px 12px auto', width: '180px', height: '100px' });
      toggleBtn.textContent = '\u2B06\uFE0F Agrandir';
      this.attributes_.expanded = false;
    }
  }

  tryPlay_(){
    const v = this.videoSlot_;
    if (!v) return;
    try {
      const p = v.play();
      if (p && p.then) p.catch(()=>{});
    } catch(_) {}
  }

  bindQuartilesOnce_(){
    if (this._quartilesBound || !this.videoSlot_) return;
    this._quartilesBound = true;
    const v = this.videoSlot_;
    const marks = [0, .25, .5, .75, .99];
    const names = ['AdVideoStart','AdVideoFirstQuartile','AdVideoMidpoint','AdVideoThirdQuartile','AdVideoComplete'];
    let idx = 0;
    const onTime = ()=>{
      const dur = (v.duration && isFinite(v.duration)) ? v.duration : this.attributes_.duration;
      if (!dur) return;
      const p = v.currentTime / dur;
      if (idx < marks.length && p >= marks[idx]) { this.safeEmit_(names[idx]); idx++; }
    };
    v.addEventListener('timeupdate', onTime);
  }
};

var getVPAIDAd = function(){ return new Vpaid(); };
