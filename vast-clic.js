/* ================================================================
 *  VPAID Secure Mode Demo — full-feature showcase (fixed)
 *  Patch: implements full VPAID 2.0 surface (incl. collapseAd)
 * ================================================================ */

const Vpaid = class {
  constructor() {
    // === Slots & environment ===
    this.slot_ = null;
    this.videoSlot_ = null;
    this.eventsCallbacks_ = {};

    // === Attributes per spec ===
    this.attributes_ = {
      width: 0,
      height: 0,
      volume: 1,
      linear: true,
      expanded: false,
      skippableState: false,
      duration: 30,
      remainingTime: 30,
      viewMode: 'normal',
      companions: '',
      icons: ''
    };

    this.parameters_ = {};
    this.defaultClickUrl = '';
    this.isMinimized = false;
    this.startEpoch_ = null;

    // Quartile demo timers (no real video in this demo)
    this.quartileTimers_ = [];
  }

  /* =============================
   *  VPAID REQUIRED INTERFACE
   * ============================= */
  handshakeVersion() { return '2.0'; }

  initAd(width, height, viewMode, desiredBitrate, creativeData, env) {
    // Save attrs
    this.attributes_.width = width|0;
    this.attributes_.height = height|0;
    this.attributes_.viewMode = viewMode || 'normal';

    this.slot_ = env.slot;
    this.videoSlot_ = env.videoSlot; // not used in demo, but kept for spec

    // Safe styling inside sandbox
    if (this.slot_) {
      Object.assign(this.slot_.style, {
        position: 'relative', overflow: 'hidden',
        background: '#0b1220', borderRadius: '12px', transition: 'all .4s ease'
      });
    }

    // Parse parameters (fallbacks)
    try {
      this.parameters_ = JSON.parse(creativeData.AdParameters || '{}');
    } catch (_) { this.parameters_ = {}; }
    this.defaultClickUrl = this.parameters_.clickUrl || 'https://example.com/default';

    // Build internal UI (secure-safe)
    this.buildUI();

    // Notify player
    this.safeEmit_('AdLoaded');
  }

  startAd() {
    this.startEpoch_ = Date.now();
    this.installQuartileTimers_();
    this.safeEmit_('AdStarted');
    this.safeEmit_('AdImpression');
  }

  stopAd() {
    this.clearQuartileTimers_();
    this.safeEmit_('AdStopped');
  }

  skipAd() {
    if (this.attributes_.skippableState) this.safeEmit_('AdSkipped');
  }

  resizeAd(width, height, viewMode) {
    this.attributes_.width = width|0;
    this.attributes_.height = height|0;
    this.attributes_.viewMode = viewMode || this.attributes_.viewMode;
    this.safeEmit_('AdSizeChange');
  }

  pauseAd() {
    this.safeEmit_('AdPaused');
  }

  resumeAd() {
    this.safeEmit_('AdPlaying');
  }

  expandAd() {
    this.attributes_.expanded = true;
    this.safeEmit_('AdExpanded');
  }

  collapseAd() {
    this.attributes_.expanded = false;
    // no dedicated event in spec besides AdExpanded; keep state only
  }

  /* =============================
   *  GETTERS / SETTERS per spec
   * ============================= */
  getAdLinear() { return this.attributes_.linear; }
  getAdWidth() { return this.attributes_.width; }
  getAdHeight() { return this.attributes_.height; }
  getAdExpanded() { return this.attributes_.expanded; }
  getAdSkippableState() { return this.attributes_.skippableState; }
  getAdRemainingTime() {
    if (!this.startEpoch_) return this.attributes_.remainingTime;
    const elapsed = (Date.now() - this.startEpoch_) / 1000;
    const remain = Math.max(0, this.attributes_.duration - elapsed);
    this.attributes_.remainingTime = remain;
    return remain;
  }
  getAdDuration() { return this.attributes_.duration; }
  getAdVolume() { return this.attributes_.volume; }
  setAdVolume(v) { this.attributes_.volume = +v || 0; this.safeEmit_('AdVolumeChange'); }
  getAdCompanions() { return this.attributes_.companions; }
  getAdIcons() { return this.attributes_.icons; }

  /* =============================
   *  SUBSCRIBE / UNSUBSCRIBE
   * ============================= */
  subscribe(cb, eventName, ctx) { this.eventsCallbacks_[eventName] = cb && cb.bind ? cb.bind(ctx) : cb; }
  unsubscribe(eventName) { delete this.eventsCallbacks_[eventName]; }

  /* =============================
   *  INTERNAL HELPERS
   * ============================= */
  safeEmit_(name, ...args) {
    try { if (this.eventsCallbacks_[name]) this.eventsCallbacks_[name](...args); } catch (e) { this.log('emit error', name, e); }
  }
  log(...args) { console.log('[SecureVPAID]', ...args); }

  /* =============================
   *  UI / BEHAVIOR (secure-safe)
   * ============================= */
  buildUI() {
    const container = document.createElement('div');
    Object.assign(container.style, {
      position: 'absolute', inset: '0', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', color: 'white',
      fontFamily: 'Inter, system-ui, sans-serif', textAlign: 'center', gap: '12px'
    });

    // Video placeholder (could be env.videoSlot)
    const video = document.createElement('div');
    Object.assign(video.style, {
      width: '90%', height: '60%', background: '#1e293b', borderRadius: '8px',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      transition: 'all .4s ease', color: '#94a3b8', fontSize: '18px',
      boxShadow: '0 8px 24px rgba(0,0,0,.35)'
    });
    video.textContent = '🎬 Video Placeholder (secure sandbox)';

    // CTAs
    const ctas = document.createElement('div');
    Object.assign(ctas.style, { display: 'flex', gap: '10px', marginTop: '8px' });
    ctas.append(
      this.createCTA('cta-primary', 'EN SAVOIR PLUS', '#2563eb', 'https://example.com/primary'),
      this.createCTA('cta-secondary', 'VOIR L’OFFRE',   '#f43f5e', 'https://example.com/secondary')
    );

    // Reduce / Expand toggle (visual only within slot)
    const toggle = document.createElement('div');
    toggle.textContent = '⬇️ Réduire';
    Object.assign(toggle.style, { position: 'absolute', top: '8px', right: '10px', cursor: 'pointer', fontSize: '14px' });
    toggle.addEventListener('click', () => { this.isMinimized = !this.isMinimized; this.animateMini_(video, toggle); });

    // Full click layer (fallback to defaultClickUrl)
    const clickLayer = document.createElement('div');
    Object.assign(clickLayer.style, { position: 'absolute', inset: 0, zIndex: 1 });
    clickLayer.addEventListener('click', () => this.emitClickThru_(this.defaultClickUrl, 'default'));

    // Layering
    container.append(video, ctas, toggle);
    this.slot_.appendChild(container);
    this.slot_.appendChild(clickLayer);

    // Bring CTAs above click layer
    ctas.style.position = 'relative';
    ctas.style.zIndex = 2;
    toggle.style.zIndex = 2;
  }

  createCTA(id, label, color, url) {
    const btn = document.createElement('div');
    Object.assign(btn.style, { background: color, padding: '10px 16px', borderRadius: '8px', cursor: 'pointer', fontWeight: 600, fontSize: '14px', userSelect: 'none' });
    btn.textContent = label;
    btn.addEventListener('click', (ev) => { ev.stopPropagation(); this.emitClickThru_(url, id); this.postToParent_({ type: 'ctaClick', id, url }); });
    return btn;
  }

  emitClickThru_(url, id) {
    if (!url) return; // avoid empty url per player rules
    if (typeof this.eventsCallbacks_.AdClickThru === 'function') {
      try { this.eventsCallbacks_.AdClickThru(url, id || 'default', true); } catch (e) { this.log('AdClickThru error', e); }
    }
  }

  animateMini_(video, toggleBtn) {
    if (!this.isMinimized) {
      Object.assign(video.style, { transform: 'scale(1)', width: '90%', height: '60%', opacity: '1' });
      Object.assign(this.slot_.style, { width: '100%', height: '100%', bottom: '0', right: '0', border: 'none' });
      toggleBtn.textContent = '⬇️ Réduire';
      this.postToParent_({ type: 'expand' });
    } else {
      Object.assign(video.style, { transform: 'scale(0.5)', opacity: '0.9', width: '160px', height: '90px' });
      Object.assign(this.slot_.style, { position: 'absolute', width: '180px', height: '100px', bottom: '12px', right: '12px', border: '2px solid #334155', borderRadius: '12px' });
      toggleBtn.textContent = '⬆️ Agrandir';
      this.postToParent_({ type: 'reduce' });
    }
  }

  postToParent_(payload) {
    try { window.parent && window.parent.postMessage && window.parent.postMessage({ source: 'SecureVPAID', ...payload }, '*'); } catch(_) {}
  }

  /* =============================
   *  SIMPLE QUARTILE NOTIFIER (demo)
   * ============================= */
  installQuartileTimers_() {
    this.clearQuartileTimers_();
    const fire = (name)=>()=>this.safeEmit_(name);
    this.quartileTimers_.push(setTimeout(fire('AdVideoStart'),          0));
    this.quartileTimers_.push(setTimeout(fire('AdVideoFirstQuartile'),  7500));
    this.quartileTimers_.push(setTimeout(fire('AdVideoMidpoint'),      15000));
    this.quartileTimers_.push(setTimeout(fire('AdVideoThirdQuartile'), 22500));
    this.quartileTimers_.push(setTimeout(fire('AdVideoComplete'),      30000));
  }
  clearQuartileTimers_() { this.quartileTimers_.forEach(clearTimeout); this.quartileTimers_ = []; }
};

var getVPAIDAd = function () { return new Vpaid(); };
