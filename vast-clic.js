/* ================================================================
 *  VPAID Secure Mode Demo — full-feature showcase (2025)
 * ================================================================
 *  Objectif : Montrer tout ce qu’un VPAID peut faire dans un iframe
 *  “secure” (sandbox allow-scripts / allow-same-origin).
 *
 *  ✅ Full interface VPAID 2.0 (AdLoaded, AdStarted, AdClickThru, etc.)
 *  ✅ Vidéo linéaire avec animation et mini-player interne
 *  ✅ Deux CTA cliquables (AdClickThru avec URLs différentes)
 *  ✅ Bouton Réduire / Agrandir avec animation CSS
 *  ✅ Canal postMessage (simulation communication parent)
 *  ✅ 100% safe en sandbox (aucun accès window.top/document.parent)
 * ================================================================ */

const Vpaid = class {
  constructor() {
    // === Slots & environnement ===
    this.slot_ = null;
    this.videoSlot_ = null;
    this.eventsCallbacks_ = {};

    // === États ===
    this.attributes_ = {
      width: 0,
      height: 0,
      volume: 1,
      linear: true,
      expanded: false,
      duration: 30,
      viewMode: 'normal'
    };

    this.parameters_ = {};
    this.defaultClickUrl = '';

    this.isMinimized = false;
  }

  /* =====================================================
   *  VPAID Interface — obligatoire pour compatibilité player
   * ===================================================== */
  handshakeVersion() { return '2.0'; }
  getAdLinear() { return this.attributes_.linear; }
  getAdExpanded() { return this.attributes_.expanded; }
  getAdVolume() { return this.attributes_.volume; }
  setAdVolume(v) { this.attributes_.volume = v; this.callEvent_('AdVolumeChange'); }
  getAdRemainingTime() { return 10; }

  subscribe(cb, eventName, ctx) { this.eventsCallbacks_[eventName] = cb.bind(ctx); }
  unsubscribe(eventName) { delete this.eventsCallbacks_[eventName]; }

  callEvent_(name, ...args) {
    if (this.eventsCallbacks_[name]) this.eventsCallbacks_[name](...args);
  }

  log(...args) { console.log('[SecureVPAID]', ...args); }

  /* =====================================================
   *  INIT AD
   * ===================================================== */
  initAd(width, height, viewMode, desiredBitrate, creativeData, env) {
    this.slot_ = env.slot;
    this.videoSlot_ = env.videoSlot;

    this.slot_.style.position = 'relative';
    this.slot_.style.overflow = 'hidden';
    this.slot_.style.background = '#0b1220';
    this.slot_.style.borderRadius = '12px';
    this.slot_.style.transition = 'all .4s ease';

    try {
      this.parameters_ = JSON.parse(creativeData.AdParameters);
      this.defaultClickUrl = this.parameters_.clickUrl || 'https://example.com/default';
    } catch (e) {
      this.log('No valid AdParameters');
      this.defaultClickUrl = 'https://example.com/default';
    }

    // Contenu visuel interne
    this.buildUI();

    this.callEvent_('AdLoaded');
  }

  /* =====================================================
   *  BUILD INTERNAL UI
   * ===================================================== */
  buildUI() {
    const container = document.createElement('div');
    Object.assign(container.style, {
      position: 'absolute',
      top: 0, left: 0, width: '100%', height: '100%',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      color: 'white', fontFamily: 'Inter, sans-serif', textAlign: 'center'
    });

    // Vidéo mock (tu peux remplacer par this.videoSlot_)
    const video = document.createElement('div');
    Object.assign(video.style, {
      width: '90%', height: '60%', background: '#1e293b', borderRadius: '8px',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      transition: 'all .4s ease', color: '#94a3b8', fontSize: '20px'
    });
    video.textContent = '🎬 Video Placeholder';

    // CTA Buttons
    const btn1 = this.createCTA('cta-primary', 'EN SAVOIR PLUS', '#2563eb', 'https://example.com/primary');
    const btn2 = this.createCTA('cta-secondary', 'VOIR L’OFFRE', '#f43f5e', 'https://example.com/secondary');

    const ctaWrapper = document.createElement('div');
    Object.assign(ctaWrapper.style, { marginTop: '20px', display: 'flex', gap: '10px' });
    ctaWrapper.append(btn1, btn2);

    // Réduire / Agrandir
    const toggleBtn = document.createElement('div');
    toggleBtn.textContent = '⬇️ Réduire';
    Object.assign(toggleBtn.style, {
      position: 'absolute', top: '8px', right: '8px', cursor: 'pointer', fontSize: '14px', color: '#fff'
    });

    toggleBtn.addEventListener('click', () => {
      this.isMinimized = !this.isMinimized;
      this.animateMiniPlayer(video, container, toggleBtn);
    });

    container.append(video, ctaWrapper, toggleBtn);
    this.slot_.appendChild(container);
  }

  /* =====================================================
   *  CTA CREATOR
   * ===================================================== */
  createCTA(id, label, color, url) {
    const btn = document.createElement('div');
    Object.assign(btn.style, {
      background: color,
      padding: '10px 16px',
      borderRadius: '8px',
      cursor: 'pointer',
      fontWeight: '600',
      fontSize: '14px'
    });
    btn.textContent = label;

    btn.addEventListener('click', (ev) => {
      ev.stopPropagation();
      this.log(`CTA click: ${id} → ${url}`);
      // PostMessage demo
      this.postToParent({ type: 'ctaClick', id, url });
      // Event VPAID standard
      if ('AdClickThru' in this.eventsCallbacks_) {
        this.eventsCallbacks_.AdClickThru(url, id, true);
      }
    });
    return btn;
  }

  /* =====================================================
   *  MINI-PLAYER / ANIMATION
   * ===================================================== */
  animateMiniPlayer(video, container, toggleBtn) {
    if (!this.isMinimized) {
      // Agrandir
      Object.assign(video.style, { transform: 'scale(1)', width: '90%', height: '60%', opacity: '1' });
      Object.assign(this.slot_.style, { width: '100%', height: '100%', bottom: '0', right: '0' });
      toggleBtn.textContent = '⬇️ Réduire';
      this.postToParent({ type: 'expand' });
    } else {
      // Réduire visuellement (dock interne)
      Object.assign(video.style, { transform: 'scale(0.5)', opacity: '0.8', width: '160px', height: '90px' });
      Object.assign(this.slot_.style, {
        position: 'absolute', width: '180px', height: '100px', bottom: '20px', right: '20px',
        border: '2px solid #334155', borderRadius: '12px'
      });
      toggleBtn.textContent = '⬆️ Agrandir';
      this.postToParent({ type: 'reduce' });
    }
  }

  /* =====================================================
   *  POSTMESSAGE SIMULATION
   * ===================================================== */
  postToParent(payload) {
    try {
      window.parent.postMessage({ source: 'SecureVPAID', ...payload }, '*');
      this.log('postMessage →', payload);
    } catch (e) {
      this.log('postMessage error (sandbox)', e.message);
    }
  }

  /* =====================================================
   *  START / STOP
   * ===================================================== */
  startAd() {
    this.log('Ad started');
    this.callEvent_('AdStarted');
    this.callEvent_('AdImpression');
  }

  stopAd() {
    this.log('Ad stopped');
    this.callEvent_('AdStopped');
  }
};

var getVPAIDAd = function () { return new Vpaid(); };