/*!
 * 2022.01.25-14.02-bbbcb4c (c) 2022
 *
 * Dependencies
 * - https://www.npmjs.com/package/es6-error
 * - https://www.npmjs.com/package/esm
 * - https://www.npmjs.com/package/eventemitter3
 * - https://www.npmjs.com/package/iab-vast-error
 * - https://www.npmjs.com/package/iab-vast-loader
 * - https://www.npmjs.com/package/iab-vast-model
 * - https://www.npmjs.com/package/iab-vast-parser
 * - https://www.npmjs.com/package/unfetch
 * - https://www.npmjs.com/package/xmldom
 */

window.__IASVANS = function (z) {
  var A = (function () {
      var a,
        b = function () {
          var b = function (b) {
              return 'undefined' !== typeof b;
            },
            a = (function () {
              var a = 'u';
              try {
                b(d.getWindow().opera) && b(d.getWindow().opera.buildNumber)
                  ? (a = 'o')
                  : b(d.getWindow().mozInnerScreenY)
                  ? (a = 'g')
                  : b(d.getWindow().chrome) && b(d.getWindow().chrome.csi)
                  ? (a = 'c')
                  : b(d.getWindow().msWriteProfilerMark) && b(d.getWindow().crypto)
                  ? (a = 'e')
                  : b(d.getWindow().attachEvent) || b(d.getWindow().msCrypto)
                  ? (a = 'i')
                  : b(d.getWindow().WebKitPoint) && (a = 'w');
              } catch (c) {}
              return a;
            })(),
            c = function () {
              var b = d.getWindow().location;
              return b && b.ancestorOrigins ? b.ancestorOrigins : [];
            },
            e = (function () {
              var a = function (a) {
                  for (var c in a)
                    if (a.hasOwnProperty(c)) {
                      var d = a[c];
                      ('' !== d && 'null' !== d && 'undefined' !== d && null !== d && b(d)) ||
                        delete a[c];
                    }
                  return a;
                },
                e = function (a) {
                  var c = {},
                    d,
                    l;
                  for (l in a)
                    a.hasOwnProperty(l) && ((d = a[l]), b(c[d]) ? (c[d] += l) : (c[d] = l));
                  a = {};
                  for (l in c) c.hasOwnProperty(l) && ((d = c[l]), (a[d] = l));
                  return a;
                };
              return (function () {
                var g = function () {
                    var a = { g: '', q: '' };
                    try {
                      a.q =
                        d.getWindow().parent.parent.parent.parent.parent.parent.parent.parent.parent.parent.location.href;
                    } catch (c) {
                      var l = c.message,
                        l = l.substring(l.lastIndexOf('<') + 1, l.lastIndexOf('>')),
                        f;
                      if ((f = b(l)))
                        if (
                          ((f = !1),
                          b(d.getWindow().navigator) && b(d.getWindow().navigator.userAgent))
                        ) {
                          d.getWindow();
                          var e = d.getWindow().navigator.userAgent.match(/Firefox\/([\.0-9]+)/);
                          null !== e &&
                            2 == e.length &&
                            ((e = e[1].split('.')),
                            3 == parseInt(e[0], 10) &&
                              6 >= parseInt(e[1], 10) &&
                              (3 == e.length ? 13 >= parseInt(e[2], 10) && (f = !0) : (f = !0)));
                        }
                      f && (a.g = l);
                    }
                    return a;
                  },
                  f = {};
                try {
                  f.a = encodeURIComponent(d.getWindow().top.location.href);
                } catch (x) {}
                try {
                  f.b = encodeURIComponent(d.getWindow().parent.location.href);
                } catch (h) {}
                if (!d.windowIsTop()) {
                  try {
                    f.c = encodeURIComponent(d.getWindow().parent.document.referrer);
                  } catch (p) {}
                  try {
                    f.e = encodeURIComponent(d.getWindow().document.referrer);
                  } catch (m) {}
                }
                try {
                  f.d = encodeURIComponent(d.getWindow().location.href);
                } catch (q) {}
                try {
                  var n = g();
                  f.g = encodeURIComponent(n.g || '');
                  f.q = encodeURIComponent(n.q || '');
                  var r = c();
                  !s.isFriendly() &&
                    1 < r.length &&
                    !n.g &&
                    (f.g = encodeURIComponent(r[r.length - 1]));
                } catch (u) {}
                var f = a(f),
                  f = e(f),
                  g = [],
                  w;
                for (w in f) f.hasOwnProperty(w) && g.push({ key: w, val: f[w] });
                g.sort(function (a, b) {
                  return a.val.length > b.val.length ? 1 : a.val.length < b.val.length ? -1 : 0;
                });
                return g;
              })();
            })();
          return { br: a, urls: e };
        },
        c = function (a, b, c) {
          var g = [
            '//' + d.getFwServerDomain(),
            '/db2/video/',
            b + '/',
            c + '/',
            'skeleton.js?videoId=',
            n.getVideoId(),
          ].join('');
          b = function (a) {
            g = [g, '&adsafe_url=', a.val, '&adsafe_type=', a.key].join('');
          };
          try {
            a.urls.forEach(b), (g = [g, '&adsafe_jsinfo=br:', a.br].join(''));
          } catch (l) {
            p.report(e.DIAGNOSTIC.BUILD_VIDEOAPI_URL, l);
          }
          return g;
        },
        g = function () {
          if (this.readyState == e.XHR.READY_STATE.DONE)
            if (this.status == e.HTTP.STATUS_CODE.OK)
              try {
                a(
                  'failed' === JSON.parse(this.responseText).action
                    ? e.BLOCKING_RESPONSE.BLOCK
                    : e.BLOCKING_RESPONSE.SAFE
                );
              } catch (b) {
                p.report(e.DIAGNOSTIC.BLOCK_AD, b);
              }
            else p.report(e.DIAGNOSTIC.BLOCKING_URL_REQUEST_ERR, { message: this.status });
        };
      return {
        init: function (e, f, t) {
          var h = b();
          e = c(h, e, f);
          a = t;
          d.sendUrlRequest(e, g);
        },
      };
    })(),
    B = function () {
      var a = [];
      return {
        addCallback: function (b, c) {
          var d = 0;
          c = c || Number.MAX_VALUE;
          a.push(function () {
            d < c && (d++, b.apply({}, arguments));
          });
        },
        executeCallbacks: function () {
          var b = arguments;
          a.forEach(function (a) {
            a.apply({}, b);
          });
        },
      };
    },
    e = {
      INTERNAL_VERSION: '3.7.0',
      VIDEO_CHANNEL: 'jv3',
      PROD_DOMAIN: 'pixel.adsafeprotected.com',
      DIAGNOSTIC_MONITORING_DOMAIN: 'spixel.adsafeprotected.com',
      S4_ITERATIONS: 8,
      EVENTS: { AD_IMPRESSION: 'AdImpression' },
      PSUEDO_IMPRESSION_ID_PREFIX: 'vidId_',
      DIAGNOSTIC: {
        INIT_FW: 'ifw',
        INIT_CM: 'icm',
        FLUSH_UNSENT_EVENTS: 'fue',
        CACHE_MESSAGE: 'cm',
        SEND_EVENT: 'se',
        BLOCK_AD: 'ba',
        SEND_MONITORING_PIXEL: 'smp',
        SET_NODE_INTERFACE: 'sni',
        BUILD_SRC_URL: 'bsurl',
        BUILD_VIDEOAPI_URL: 'bvu',
        BLOCKING_URL_REQUEST_ERR: 'blk_url_req_err',
        DISPATCH_MESSAGE: 'dm',
        SET_CONTEXT: 'sc',
        STRINGIFY_EVENT_ERROR: 'ser',
      },
      MONITORING: {
        INJECTION_ERR: 'inj_err',
        VANS_INITIALIZED: 'init',
        HANDSHAKE_SUCCESS: 'hs',
        AD_IMPRESSION: 'ai',
        DEFERRED_INTERFACE: 'vans_defer',
        AD_STOPPED: 'adstop',
        AD_ERROR: 'aderr',
        AD_NODE_NULL: 'adnode_null',
        AD_NODE_DETACHED: 'adnode_detached',
        AD_NODE_NO_DOC: 'adnode_nodoc',
        AD_NODE_NO_WINDOW: 'adnode_nowin',
        AD_NODE_TYPE: 'adnode_type',
        FWJS_INJECTED: 'fwjsinj',
        FWJS_LOAD_SUCCESS: 'fwjsload',
        FWJS_LOAD_ERROR: 'fwjsload_err',
        IMPRESSION_DOMAIN_BLOCKING: 'impblock',
      },
      HTTP: { VERBS: { GET: 'GET' }, STATUS_CODE: { OK: 200 } },
      BLOCKING_RESPONSE: { BLOCK: 'block', SAFE: 'safe' },
      XHR: { READY_STATE: { DONE: 4 } },
    },
    s = (function () {
      var a = window;
      return {
        isFriendly: function () {
          var a = !1;
          try {
            a = !!this.getTop().document;
          } catch (c) {}
          return a;
        },
        getWin: function () {
          return a;
        },
        setWin: function (b) {
          (b = b && b.ownerDocument) && b.defaultView
            ? (a = b.defaultView)
            : b && b.parentWindow
            ? (a = b.parentWindow)
            : p.report(e.DIAGNOSTIC.SET_CONTEXT, { message: '' });
        },
        getTop: function () {
          return a.top;
        },
        getDoc: function () {
          return a.document;
        },
      };
    })(),
    m = (function () {
      var a,
        b = [],
        c = !1,
        g = function (a) {
          var b = '';
          Object.keys(a).forEach(function (c) {
            -1 === ['advEntityId', 'pubEntityId', 'partner', 'debug'].indexOf(c) &&
              (b += '&' + c + '=' + a[c]);
          });
          return b;
        },
        k = function (c) {
          if (n.isEstablished()) {
            var f;
            try {
              if ((f = d.stringify(c)))
                if ('AdImpression' === c.messageType) d.getWindow()[a](f);
                else d.getWindow().postMessage(f, '*');
            } catch (t) {
              p.report(e.DIAGNOSTIC.DISPATCH_MESSAGE, t);
            }
          } else if (n.canNeverBeEstablished()) {
            f = d.getFwServerDomain();
            var k = m.config;
            try {
              'AdImpression' === c.messageType &&
                (m.isCmTag
                  ? d.sendUrlRequest(['//' + f, '/mon?', g(k)].join(''))
                  : m.isFwTag &&
                    d.sendUrlRequest(
                      [
                        '//' + f,
                        '/rfw/st/',
                        k.advEntityId + '/' + k.pubEntityId,
                        '/skeleton.js',
                      ].join('')
                    ));
            } catch (h) {
              p.report(e.DIAGNOSTIC.DISPATCH_MESSAGE, h);
            }
          } else
            try {
              b.push(c);
            } catch (x) {
              p.report(e.DIAGNOSTIC.CACHE_MESSAGE, x);
            }
        },
        f = function (a, b) {
          d.sendMonitoringDebugPixel(e.MONITORING.AD_STOPPED, m.monitoringQS());
          t(a, b);
        },
        t = function (a, b) {
          try {
            k({
              messageType: a,
              id: n.getVideoId(),
              time: d.now(),
              partner: r.getPartnerCode(),
              eventData: b,
            });
          } catch (c) {
            p.report(e.DIAGNOSTIC.SEND_EVENT, c);
          }
        },
        x = {
          AdImpression: function (a, b) {
            var f = h.getInjector();
            c ||
              (b && (b.ext_passthrough = m.passThroughObj),
              (c = !0),
              d.sendMonitoringDebugPixel(e.MONITORING.AD_IMPRESSION, m.monitoringQS()),
              f.onInjectionResolution(function () {
                t(a, b);
              }),
              f.resolveInjection());
          },
          AdStopped: f,
          AdVideoComplete: f,
          AdError: function (a, b) {
            d.sendMonitoringDebugPixel(e.MONITORING.AD_ERROR, m.monitoringQS());
            t(a, b);
          },
        };
      return {
        sendEvent: function (a, b) {
          var c = x[a] || t;
          h.vans.hasBegun() && c(a, b);
        },
        setImpressionCallback: function (b) {
          a = b;
        },
        flushUnsentEvents: function () {
          try {
            b.forEach(k);
          } catch (a) {
            p.report(e.DIAGNOSTIC.FLUSH_UNSENT_EVENTS, a);
          }
        },
        passThroughObj: {},
        monitoringQS: function () {},
        clearSessionState: function () {
          c = !1;
          b.length = 0;
        },
      };
    })(),
    p = (function () {
      var a = {};
      return {
        report: function (b, c, e) {
          if (!a[b])
            try {
              a[b] = !0;
              var k =
                '//' +
                d.getFwServerDomain() +
                '/jsdiagnostic?code:vans-js_' +
                encodeURIComponent(r.getPartnerCode()) +
                '_' +
                b +
                '&err:' +
                encodeURIComponent(c.message);
              e && (k += '&config:' + encodeURIComponent(JSON.stringify(e)));
              d.sendUrlRequest(k);
            } catch (f) {}
        },
      };
    })(),
    y = (function () {
      var a = function (a, c, d, e) {
        n.setNodeInterface(d);
        'function' === typeof c.onMeasurementComplete &&
          new C().registerMeasurementCompleteHandler(c.onMeasurementComplete);
        var f = {};
        Object.getOwnPropertyNames(c).forEach(function (a) {
          'debug' !== a && 'onMeasurementComplete' !== a && (f[a] = c[a]);
        });
        e.injectTagScript(a, f);
      };
      return {
        initCM: function (b, c) {
          var g;
          if (!h.vans.hasBegun()) {
            if (!b || !b.partner) throw Error('Missing partner code');
            s.setWin(c);
            h.setPreErrorConfig(b, 'cm');
            try {
              if (!b.anId) throw Error('Missing anId');
              h.vans.begin();
              g = new u(c);
              h.setInjector(g);
              h.setConfig(b);
              d.sendMonitoringDebugPixel(e.MONITORING.VANS_INITIALIZED, q.buildMonitoringQS());
              d.sendMonitoringDebugPixel(
                e.MONITORING.IMPRESSION_DOMAIN_BLOCKING,
                q.buildMonitoringQS(),
                d.getFwServerDomain()
              );
              g.sendInjectionDiagnostics();
              a('/jsvid', b, c, g);
            } catch (k) {
              p.report(e.DIAGNOSTIC.INIT_CM, k);
            }
          }
        },
        initFW: function (b, c, g) {
          var k, f;
          if (!h.vans.hasBegun()) {
            if (!b || !b.partner) throw Error('Missing partner code');
            s.setWin(c);
            h.setPreErrorConfig(b, 'fw');
            try {
              if (!b.advEntityId || !b.pubEntityId)
                throw Error(
                  'Missing client id: advEntityId: ' +
                    b.advEntityId +
                    ' ,pubEntityId: ' +
                    b.pubEntityId
                );
              h.vans.begin();
              f = new u(c);
              h.setInjector(f);
              h.setConfig(b);
              d.sendMonitoringDebugPixel(e.MONITORING.VANS_INITIALIZED, q.buildMonitoringQS());
              d.sendMonitoringDebugPixel(
                e.MONITORING.IMPRESSION_DOMAIN_BLOCKING,
                q.buildMonitoringQS(),
                d.getFwServerDomain()
              );
              f.sendInjectionDiagnostics();
              g && A.init(b.advEntityId, b.pubEntityId, g);
              k = '/fwjsvid/st/' + b.advEntityId + '/' + b.pubEntityId + '/skeleton.js';
              a(k, b, c, f);
            } catch (t) {
              p.report(e.DIAGNOSTIC.INIT_FW, t);
            }
          }
        },
      };
    })(),
    r = (function () {
      return {
        initCM: function (a, b) {
          y.initCM(a, b);
        },
        initFW: function (a, b, c) {
          y.initFW(a, b, c);
        },
        getPartnerCode: function () {
          return h.get().partnerCode;
        },
        getPassThroughObj: function () {
          return h.get().passThroughObj;
        },
        getAltMonDomain: function () {
          return h.get().monDomain;
        },
        hasDebugEnabled: function () {
          return h.get().debugEnabled;
        },
      };
    })(),
    n = (function () {
      var a,
        b = !1,
        c = !1,
        g = function (a, c) {
          a == k() &&
            ((b = !0),
            m.setImpressionCallback(c),
            d.sendMonitoringDebugPixel(e.MONITORING.HANDSHAKE_SUCCESS, m.monitoringQS()),
            m.flushUnsentEvents());
          return b ? e.VIDEO_CHANNEL : null;
        },
        k = function () {
          a || (a = d.generateUID());
          return a;
        };
      return {
        getVideoId: k,
        setNodeInterface: function (a) {
          var b,
            c,
            l,
            h,
            v = k();
          try {
            (b = 'data-integralas-vid-' + v),
              (c = 'IASid' + v),
              (l = 'blockAd' + v),
              (h = 'getIasVidBridgeVersion' + v),
              a.setAttribute(b, ''),
              (a = s.getDoc().querySelector('*[' + b + ']') || a),
              (a[l] = d.noop),
              (a[c] = g),
              (a[h] = function () {
                return '2';
              }),
              (a.getVersion = function () {
                return e.INTERNAL_VERSION;
              });
          } catch (n) {
            p.report(e.DIAGNOSTIC.SET_NODE_INTERFACE, n);
          }
        },
        isEstablished: function () {
          return b;
        },
        canNeverBeEstablished: function () {
          return c;
        },
        giveUpOnHandshaking: function () {
          c = !0;
          m.flushUnsentEvents();
        },
        resetHandshake: function () {
          c = b = !1;
        },
      };
    })(),
    q = {
      buildMonitoringQS: function () {
        var a = e.PSUEDO_IMPRESSION_ID_PREFIX + n.getVideoId(),
          b = h.getInfoParams();
        return [
          '&chanId=' + b.anId,
          'planId=' + b.advEntityId,
          'placementId=' + b.pubEntityId,
          'advId=' + b.campId,
          'pubOrder=' + b.placementId,
          'pubCreative=' + b.creativeId,
          'impId=' + (b.impId || a),
          'ts=' + Date.now(),
          'custom=' + e.INTERNAL_VERSION,
          'custom2=jv3&custom3=' + h.get().tagType,
          'adsafe_par',
        ].join('&');
      },
    },
    D = function () {
      var a = B();
      return {
        addCallback: function (b) {
          a.addCallback(b, 1);
        },
        executeCallbacks: a.executeCallbacks,
      };
    },
    h = (function () {
      var a = {},
        b = !1,
        c = {},
        d,
        k = function (b) {
          'impId creativeId campId placementId advEntityId pubEntityId anId'
            .split(' ')
            .forEach(function (a) {
              c[a] = b[a];
            });
          c.monDomain = a.monDomain;
        },
        f = function (b) {
          m.monitoringQS = q.buildMonitoringQS;
          m.passThroughObj = a.passThroughObj;
          Object.keys(b).forEach(function (a) {
            m[a] = b[a];
          });
        };
      return {
        vans: {
          hasBegun: function () {
            return b;
          },
          begin: function () {
            b = !0;
          },
        },
        setInjector: function (a) {
          d = a;
        },
        getInjector: function () {
          return d;
        },
        setPreErrorConfig: function (b, c) {
          a.tagType = c;
          var d;
          d = b.partner;
          var e = /[^\w-.]/g;
          d = 'string' === typeof d ? d.replace(e, '') : d;
          a.partnerCode = d;
          a.debugEnabled = b.debug && b.debug.enabled;
          a.debugEnabled && (a.monDomain = b.debug.monDomain);
        },
        setConfig: function (b) {
          k(b);
          a.passThroughObj = {
            vv: e.INTERNAL_VERSION,
            vanstag: a.tagType,
            xcamp: c.campId,
            xplac: c.placementId,
            xcreat: c.creativeId,
            ximp: c.impId,
            xpc: a.partnerCode,
          };
          a.config = b;
          f({ isFwTag: 'fw' === a.tagType, isCmTag: 'cm' === a.tagType, config: b });
        },
        getInfoParams: function () {
          return c;
        },
        get: function () {
          return a;
        },
      };
    })(),
    u = function (a) {
      var b = !1,
        c = !1,
        g = new D(),
        k = !1,
        f = function (a, b) {
          var c,
            f = d.getFwServerDomain(),
            g = function (a) {
              var b = '';
              Object.keys(a).forEach(function (c) {
                'advEntityId' != c &&
                  'pubEntityId' != c &&
                  'partner' != c &&
                  (b += '&' + c + '=' + a[c]);
              });
              return b;
            };
          try {
            c = ['//', f, a, '?videoId=', n.getVideoId(), g(b)].join('');
          } catch (k) {
            p.report(e.DIAGNOSTIC.BUILD_SRC_URL, k);
          }
          return c;
        },
        h = function (f) {
          var h,
            m = function () {
              !b && a.parentNode
                ? (a.parentNode.appendChild(f),
                  clearInterval(h),
                  (c = b = !0),
                  d.sendMonitoringDebugPixel(e.MONITORING.FWJS_INJECTED, q.buildMonitoringQS()))
                : k && ((c = !0), clearInterval(h), n.giveUpOnHandshaking());
              c && g.executeCallbacks();
            };
          m();
          b || (h = setInterval(m, 200));
        },
        m = function () {
          var b = a && a.ownerDocument,
            c = b && b.parentWindow;
          return !!((b && b.defaultView) || c);
        };
      return {
        injectTagScript: function (a, b) {
          var g,
            k = d.getDocument();
          if (m()) {
            var p = function (a) {
                d.sendMonitoringDebugPixel(e.MONITORING.FWJS_LOAD_SUCCESS, q.buildMonitoringQS());
              },
              r = function (a) {
                n.giveUpOnHandshaking();
                d.sendMonitoringDebugPixel(e.MONITORING.FWJS_LOAD_ERROR, q.buildMonitoringQS());
              };
            try {
              (g = k.createElement('script')),
                (g.src = f(a, b)),
                g.addEventListener('load', p),
                g.addEventListener('error', r),
                h(g);
            } catch (s) {
              n.giveUpOnHandshaking(), d.sendMonitoringPixel(e.MONITORING.INJECTION_ERR);
            }
          } else (c = !0), n.giveUpOnHandshaking();
        },
        sendInjectionDiagnostics: function () {
          var b = a && a.ownerDocument,
            c = a && a.parentNode,
            f = b && (b.defaultView || b.parentWindow),
            g =
              e.MONITORING.AD_NODE_TYPE +
              '_' +
              (a ? a.constructor.name || a.nodeName || typeof a : 'null');
          a || d.sendMonitoringDebugPixel(e.MONITORING.AD_NODE_NULL, q.buildMonitoringQS());
          a &&
            !c &&
            d.sendMonitoringDebugPixel(e.MONITORING.AD_NODE_DETACHED, q.buildMonitoringQS());
          a && !b && d.sendMonitoringDebugPixel(e.MONITORING.AD_NODE_NO_DOC, q.buildMonitoringQS());
          b &&
            !f &&
            d.sendMonitoringDebugPixel(e.MONITORING.AD_NODE_NO_WINDOW, q.buildMonitoringQS());
          d.sendMonitoringDebugPixel(g, q.buildMonitoringQS());
        },
        onInjectionResolution: function (a) {
          g.addCallback(a);
          c && g.executeCallbacks();
        },
        resolveInjection: function () {
          k = !0;
        },
      };
    },
    C = function () {
      var a,
        b = !1,
        c = function (b) {
          var e,
            f = !1;
          try {
            (e = JSON.parse(b.data)), (f = 'unloadComplete' === e.msg && e.id == n.getVideoId());
          } catch (h) {}
          f && (a(), d.getWindow().removeEventListener('message', c));
        };
      return {
        registerMeasurementCompleteHandler: function (e) {
          a = e;
          b || (d.getWindow().addEventListener('message', c), (b = !0));
        },
      };
    },
    d = {
      now: function () {
        return new Date().getTime();
      },
      sendMonitoringPixel: function (a) {
        try {
          this.sendUrlRequest(
            [
              '//' + d.getFwServerDomain(),
              '/mon?anId=10173&campId=',
              encodeURIComponent(r.getPartnerCode()),
              '&pubId=',
              encodeURIComponent('vans-js_' + a),
            ].join('')
          );
        } catch (b) {
          p.report(e.DIAGNOSTIC.SEND_MONITORING_PIXEL, b);
        }
      },
      sendMonitoringDebugPixel: (function () {
        var a = [e.MONITORING.AD_STOPPED],
          b = {};
        return function (c, g, k) {
          var f = r.hasDebugEnabled(),
            h = -1 < a.indexOf(c) && b[c];
          if (f && !h)
            try {
              var m = e.DIAGNOSTIC_MONITORING_DOMAIN,
                l = r.getAltMonDomain();
              k = k || l || m;
              var l = k === l ? '925116' : '10173',
                n = d.addProtocolToDomain(k),
                q = encodeURIComponent(c),
                s = encodeURIComponent(r.getPartnerCode()),
                u;
              u = g.replace(/=undefined&/g, '=&');
              d.sendUrlRequest(n + '/mon?anId=' + l + '&campId=' + s + '&pubId=' + q + u);
              b[c] = !0;
            } catch (y) {
              p.report(e.DIAGNOSTIC.SEND_MONITORING_PIXEL, y);
            }
        };
      })(),
      sendUrlRequest: function (a, b) {
        var c, d;
        if (a) {
          c = this.getWindow();
          try {
            (d = new c.XMLHttpRequest()),
              b && (d.onreadystatechange = b),
              d.open(e.HTTP.VERBS.GET, a),
              d.send();
          } catch (h) {}
        }
      },
      stringify: function (a) {
        if ('AdImpression' !== a.messageType) return JSON.stringify(a);
        var b = {};
        b.passthroughObj = r.getPassThroughObj();
        var c = '';
        try {
          c = JSON.stringify(a);
        } catch (d) {
          p.report(e.DIAGNOSTIC.STRINGIFY_EVENT_ERROR, d, b);
          return;
        }
        return c;
      },
      addProtocolToDomain: function (a) {
        return a.match(/^[a-zA-Z]+:\/\//) ? a : 'https://' + a;
      },
      getWindow: function () {
        return s.getWin();
      },
      windowIsTop: function () {
        return s.getWin() === s.getTop();
      },
      getDocument: function () {
        return s.getDoc();
      },
      generateUID: function () {
        var a,
          b = '';
        try {
          for (a = 0; a < e.S4_ITERATIONS; a++)
            b = [
              b,
              Math.floor(65536 * (1 + Math.random()))
                .toString(16)
                .substring(1),
            ].join('');
        } catch (c) {}
        return b;
      },
      getFwServerDomain: function () {
        return z || e.PROD_DOMAIN;
      },
      noop: function () {},
    };
  return { initFW: r.initFW, initCM: r.initCM, sendEvent: m.sendEvent };
};
(function () {
  var p = p || {};
  p.scope = {};
  p.arrayIteratorImpl = function (f) {
    var g = 0;
    return function () {
      return g < f.length ? { done: !1, value: f[g++] } : { done: !0 };
    };
  };
  p.arrayIterator = function (f) {
    return { next: p.arrayIteratorImpl(f) };
  };
  p.ASSUME_ES5 = !1;
  p.ASSUME_NO_NATIVE_MAP = !1;
  p.ASSUME_NO_NATIVE_SET = !1;
  p.SIMPLE_FROUND_POLYFILL = !1;
  p.defineProperty =
    p.ASSUME_ES5 || 'function' == typeof Object.defineProperties
      ? Object.defineProperty
      : function (f, g, m) {
          f != Array.prototype && f != Object.prototype && (f[g] = m.value);
        };
  p.getGlobal = function (f) {
    return 'undefined' != typeof window && window === f
      ? f
      : 'undefined' != typeof global && null != global
      ? global
      : f;
  };
  p.global = p.getGlobal(this);
  p.SYMBOL_PREFIX = 'jscomp_symbol_';
  p.initSymbol = function () {
    p.initSymbol = function () {};
    p.global.Symbol || (p.global.Symbol = p.Symbol);
  };
  p.SymbolClass = function (f, g) {
    this.$jscomp$symbol$id_ = f;
    p.defineProperty(this, 'description', { configurable: !0, writable: !0, value: g });
  };
  p.SymbolClass.prototype.toString = function () {
    return this.$jscomp$symbol$id_;
  };
  p.Symbol = (function () {
    function f(m) {
      if (this instanceof f) throw new TypeError('Symbol is not a constructor');
      return new p.SymbolClass(p.SYMBOL_PREFIX + (m || '') + '_' + g++, m);
    }
    var g = 0;
    return f;
  })();
  p.initSymbolIterator = function () {
    p.initSymbol();
    var f = p.global.Symbol.iterator;
    f || (f = p.global.Symbol.iterator = p.global.Symbol('Symbol.iterator'));
    'function' != typeof Array.prototype[f] &&
      p.defineProperty(Array.prototype, f, {
        configurable: !0,
        writable: !0,
        value: function () {
          return p.iteratorPrototype(p.arrayIteratorImpl(this));
        },
      });
    p.initSymbolIterator = function () {};
  };
  p.initSymbolAsyncIterator = function () {
    p.initSymbol();
    var f = p.global.Symbol.asyncIterator;
    f || (f = p.global.Symbol.asyncIterator = p.global.Symbol('Symbol.asyncIterator'));
    p.initSymbolAsyncIterator = function () {};
  };
  p.iteratorPrototype = function (f) {
    p.initSymbolIterator();
    f = { next: f };
    f[p.global.Symbol.iterator] = function () {
      return this;
    };
    return f;
  };
  p.makeIterator = function (f) {
    var g = 'undefined' != typeof Symbol && Symbol.iterator && f[Symbol.iterator];
    return g ? g.call(f) : p.arrayIterator(f);
  };
  p.arrayFromIterator = function (f) {
    for (var g, m = []; !(g = f.next()).done; ) m.push(g.value);
    return m;
  };
  p.arrayFromIterable = function (f) {
    return f instanceof Array ? f : p.arrayFromIterator(p.makeIterator(f));
  };
  p.objectCreate =
    p.ASSUME_ES5 || 'function' == typeof Object.create
      ? Object.create
      : function (f) {
          function g() {}
          g.prototype = f;
          return new g();
        };
  p.underscoreProtoCanBeSet = function () {
    var f = { a: !0 },
      g = {};
    try {
      return (g.__proto__ = f), g.a;
    } catch (m) {}
    return !1;
  };
  p.setPrototypeOf =
    'function' == typeof Object.setPrototypeOf
      ? Object.setPrototypeOf
      : p.underscoreProtoCanBeSet()
      ? function (f, g) {
          f.__proto__ = g;
          if (f.__proto__ !== g) throw new TypeError(f + ' is not extensible');
          return f;
        }
      : null;
  p.inherits = function (f, g) {
    f.prototype = p.objectCreate(g.prototype);
    f.prototype.constructor = f;
    if (p.setPrototypeOf) (0, p.setPrototypeOf)(f, g);
    else
      for (var m in g)
        if ('prototype' != m)
          if (Object.defineProperties) {
            var l = Object.getOwnPropertyDescriptor(g, m);
            l && Object.defineProperty(f, m, l);
          } else f[m] = g[m];
    f.superClass_ = g.prototype;
  };
  p.iteratorFromArray = function (f, g) {
    p.initSymbolIterator();
    f instanceof String && (f += '');
    var m = 0,
      l = {
        next: function () {
          if (m < f.length) {
            var x = m++;
            return { value: g(x, f[x]), done: !1 };
          }
          l.next = function () {
            return { done: !0, value: void 0 };
          };
          return l.next();
        },
      };
    l[Symbol.iterator] = function () {
      return l;
    };
    return l;
  };
  p.polyfill = function (f, g) {
    if (g) {
      var m = p.global;
      f = f.split('.');
      for (var l = 0; l < f.length - 1; l++) {
        var x = f[l];
        x in m || (m[x] = {});
        m = m[x];
      }
      f = f[f.length - 1];
      l = m[f];
      g = g(l);
      g != l && null != g && p.defineProperty(m, f, { configurable: !0, writable: !0, value: g });
    }
  };
  p.polyfill(
    'Array.prototype.keys',
    function (f) {
      return f
        ? f
        : function () {
            return p.iteratorFromArray(this, function (g) {
              return g;
            });
          };
    },
    'es6',
    'es3'
  );
  p.FORCE_POLYFILL_PROMISE = !1;
  p.polyfill(
    'Promise',
    function (f) {
      function g(g) {
        this.state_ = 0;
        this.result_ = void 0;
        this.onSettledCallbacks_ = [];
        var f = this.createResolveAndReject_();
        try {
          g(f.resolve, f.reject);
        } catch (I) {
          f.reject(I);
        }
      }
      function m() {
        this.batch_ = null;
      }
      function l(f) {
        return f instanceof g
          ? f
          : new g(function (g) {
              g(f);
            });
      }
      if (f && !p.FORCE_POLYFILL_PROMISE) return f;
      m.prototype.asyncExecute = function (g) {
        if (null == this.batch_) {
          this.batch_ = [];
          var f = this;
          this.asyncExecuteFunction(function () {
            f.executeBatch_();
          });
        }
        this.batch_.push(g);
      };
      var x = p.global.setTimeout;
      m.prototype.asyncExecuteFunction = function (g) {
        x(g, 0);
      };
      m.prototype.executeBatch_ = function () {
        for (; this.batch_ && this.batch_.length; ) {
          var g = this.batch_;
          this.batch_ = [];
          for (var f = 0; f < g.length; ++f) {
            var l = g[f];
            g[f] = null;
            try {
              l();
            } catch (R) {
              this.asyncThrow_(R);
            }
          }
        }
        this.batch_ = null;
      };
      m.prototype.asyncThrow_ = function (g) {
        this.asyncExecuteFunction(function () {
          throw g;
        });
      };
      g.prototype.createResolveAndReject_ = function () {
        function g(g) {
          return function (m) {
            l || ((l = !0), g.call(f, m));
          };
        }
        var f = this,
          l = !1;
        return { resolve: g(this.resolveTo_), reject: g(this.reject_) };
      };
      g.prototype.resolveTo_ = function (f) {
        if (f === this) this.reject_(new TypeError('A Promise cannot resolve to itself'));
        else if (f instanceof g) this.settleSameAsPromise_(f);
        else {
          a: switch (typeof f) {
            case 'object':
              var l = null != f;
              break a;
            case 'function':
              l = !0;
              break a;
            default:
              l = !1;
          }
          l ? this.resolveToNonPromiseObj_(f) : this.fulfill_(f);
        }
      };
      g.prototype.resolveToNonPromiseObj_ = function (g) {
        var f = void 0;
        try {
          f = g.then;
        } catch (I) {
          this.reject_(I);
          return;
        }
        'function' == typeof f ? this.settleSameAsThenable_(f, g) : this.fulfill_(g);
      };
      g.prototype.reject_ = function (g) {
        this.settle_(2, g);
      };
      g.prototype.fulfill_ = function (g) {
        this.settle_(1, g);
      };
      g.prototype.settle_ = function (g, f) {
        if (0 != this.state_)
          throw Error(
            'Cannot settle(' + g + ', ' + f + '): Promise already settled in state' + this.state_
          );
        this.state_ = g;
        this.result_ = f;
        this.executeOnSettledCallbacks_();
      };
      g.prototype.executeOnSettledCallbacks_ = function () {
        if (null != this.onSettledCallbacks_) {
          for (var g = 0; g < this.onSettledCallbacks_.length; ++g)
            t.asyncExecute(this.onSettledCallbacks_[g]);
          this.onSettledCallbacks_ = null;
        }
      };
      var t = new m();
      g.prototype.settleSameAsPromise_ = function (g) {
        var f = this.createResolveAndReject_();
        g.callWhenSettled_(f.resolve, f.reject);
      };
      g.prototype.settleSameAsThenable_ = function (g, f) {
        var l = this.createResolveAndReject_();
        try {
          g.call(f, l.resolve, l.reject);
        } catch (R) {
          l.reject(R);
        }
      };
      g.prototype.then = function (f, l) {
        function m(g, f) {
          return 'function' == typeof g
            ? function (f) {
                try {
                  x(g(f));
                } catch (Ca) {
                  t(Ca);
                }
              }
            : f;
        }
        var x,
          t,
          A = new g(function (g, f) {
            x = g;
            t = f;
          });
        this.callWhenSettled_(m(f, x), m(l, t));
        return A;
      };
      g.prototype.catch = function (g) {
        return this.then(void 0, g);
      };
      g.prototype.callWhenSettled_ = function (g, f) {
        function l() {
          switch (m.state_) {
            case 1:
              g(m.result_);
              break;
            case 2:
              f(m.result_);
              break;
            default:
              throw Error('Unexpected state: ' + m.state_);
          }
        }
        var m = this;
        null == this.onSettledCallbacks_ ? t.asyncExecute(l) : this.onSettledCallbacks_.push(l);
      };
      g.resolve = l;
      g.reject = function (f) {
        return new g(function (g, l) {
          l(f);
        });
      };
      g.race = function (f) {
        return new g(function (g, m) {
          for (var x = p.makeIterator(f), t = x.next(); !t.done; t = x.next())
            l(t.value).callWhenSettled_(g, m);
        });
      };
      g.all = function (f) {
        var m = p.makeIterator(f),
          x = m.next();
        return x.done
          ? l([])
          : new g(function (g, f) {
              function t(f) {
                return function (l) {
                  A[f] = l;
                  I--;
                  0 == I && g(A);
                };
              }
              var A = [],
                I = 0;
              do
                A.push(void 0),
                  I++,
                  l(x.value).callWhenSettled_(t(A.length - 1), f),
                  (x = m.next());
              while (!x.done);
            });
      };
      return g;
    },
    'es6',
    'es3'
  );
  p.checkStringArgs = function (f, g, m) {
    if (null == f)
      throw new TypeError(
        "The 'this' value for String.prototype." + m + ' must not be null or undefined'
      );
    if (g instanceof RegExp)
      throw new TypeError(
        'First argument to String.prototype.' + m + ' must not be a regular expression'
      );
    return f + '';
  };
  p.polyfill(
    'String.prototype.endsWith',
    function (f) {
      return f
        ? f
        : function (g, f) {
            var l = p.checkStringArgs(this, g, 'endsWith');
            g += '';
            void 0 === f && (f = l.length);
            f = Math.max(0, Math.min(f | 0, l.length));
            for (var m = g.length; 0 < m && 0 < f; ) if (l[--f] != g[--m]) return !1;
            return 0 >= m;
          };
    },
    'es6',
    'es3'
  );
  p.owns = function (f, g) {
    return Object.prototype.hasOwnProperty.call(f, g);
  };
  p.assign =
    'function' == typeof Object.assign
      ? Object.assign
      : function (f, g) {
          for (var m = 1; m < arguments.length; m++) {
            var l = arguments[m];
            if (l) for (var x in l) p.owns(l, x) && (f[x] = l[x]);
          }
          return f;
        };
  p.polyfill(
    'Object.assign',
    function (f) {
      return f || p.assign;
    },
    'es6',
    'es3'
  );
  p.polyfill(
    'String.prototype.repeat',
    function (f) {
      return f
        ? f
        : function (g) {
            var f = p.checkStringArgs(this, null, 'repeat');
            if (0 > g || 1342177279 < g) throw new RangeError('Invalid count value');
            g |= 0;
            for (var l = ''; g; ) if ((g & 1 && (l += f), (g >>>= 1))) f += f;
            return l;
          };
    },
    'es6',
    'es3'
  );
  p.stringPadding = function (f, g) {
    f = void 0 !== f ? String(f) : ' ';
    return 0 < g && f ? f.repeat(Math.ceil(g / f.length)).substring(0, g) : '';
  };
  p.polyfill(
    'String.prototype.padStart',
    function (f) {
      return f
        ? f
        : function (g, f) {
            var l = p.checkStringArgs(this, null, 'padStart');
            return p.stringPadding(f, g - l.length) + l;
          };
    },
    'es8',
    'es3'
  );
  p.polyfill(
    'Object.is',
    function (f) {
      return f
        ? f
        : function (f, m) {
            return f === m ? 0 !== f || 1 / f === 1 / m : f !== f && m !== m;
          };
    },
    'es6',
    'es3'
  );
  p.polyfill(
    'Array.prototype.includes',
    function (f) {
      return f
        ? f
        : function (f, m) {
            var g = this;
            g instanceof String && (g = String(g));
            var x = g.length;
            m = m || 0;
            for (0 > m && (m = Math.max(m + x, 0)); m < x; m++) {
              var t = g[m];
              if (t === f || Object.is(t, f)) return !0;
            }
            return !1;
          };
    },
    'es7',
    'es3'
  );
  p.polyfill(
    'String.prototype.includes',
    function (f) {
      return f
        ? f
        : function (f, m) {
            return -1 !== p.checkStringArgs(this, f, 'includes').indexOf(f, m || 0);
          };
    },
    'es6',
    'es3'
  );
  p.polyfill(
    'Array.from',
    function (f) {
      return f
        ? f
        : function (f, m, l) {
            m =
              null != m
                ? m
                : function (f) {
                    return f;
                  };
            var g = [],
              t = 'undefined' != typeof Symbol && Symbol.iterator && f[Symbol.iterator];
            if ('function' == typeof t) {
              f = t.call(f);
              for (var A = 0; !(t = f.next()).done; ) g.push(m.call(l, t.value, A++));
            } else for (t = f.length, A = 0; A < t; A++) g.push(m.call(l, f[A], A));
            return g;
          };
    },
    'es6',
    'es3'
  );
  p.polyfill(
    'String.prototype.startsWith',
    function (f) {
      return f
        ? f
        : function (f, m) {
            var g = p.checkStringArgs(this, f, 'startsWith');
            f += '';
            var x = g.length,
              t = f.length;
            m = Math.max(0, Math.min(m | 0, g.length));
            for (var A = 0; A < t && m < x; ) if (g[m++] != f[A++]) return !1;
            return A >= t;
          };
    },
    'es6',
    'es3'
  );
  (function (f, g, m) {
    function l() {
      var b = this;
      this.isFullscreen = function () {
        return !!Qa(b.$g('slot')).document.fullscreenElement;
      };
      this.events = [];
      this.evs = [];
      var a = {};
      this.attrs = Jd(
        {},
        ((a.companions = ''),
        (a.desiredBitrate = 256),
        (a.duration = -2),
        (a.expanded = !1),
        (a.icons = ''),
        (a.linear = !0),
        (a.remainingTime = -2),
        (a.skippableState = !1),
        (a.viewMode = 'normal'),
        (a.height = 0),
        (a.width = 0),
        a)
      );
      a = {};
      this.state = new R(
        'new',
        ((a['new'] = ['init', 'stopped']),
        (a.init = ['started', 'stopped']),
        (a.started = ['skipped', 'stopped']),
        (a.skipped = ['stopped']),
        (a.stopped = ['destroyed']),
        (a.destroyed = []),
        a)
      );
    }
    function x(b) {
      this.vpaidWrapper = b;
      this.funcs = [];
      this.adStopped = this.adLoaded = !1;
    }
    function t(b) {
      var a = this;
      this.timeUpdateHandler_ = function (b) {
        var c = a.$g('video');
        if (b || !c.paused)
          (a.quartiles = Kd(
            a.quartiles,
            b ? 100 : (100 * c.currentTime) / c.duration,
            function (b) {
              b.forEach(function (b) {
                'AdSkippableStateChange' === b && a.$s('skippableState', !0);
                a.$e(b);
                'AdVideoStart' === b && a.$e('AdImpression');
              });
            }
          )),
            1 <= c.currentTime - a.lastTime &&
              ((a.lastTime = c.currentTime),
              (b = c.duration - c.currentTime),
              a.$s('remainingTime', b),
              a.$e('AdRemainingTimeChange', b));
      };
      this.vpaidWrapper = b;
      this.quartiles = [Ld, Md, Nd, Od, Pd];
      this.evs = [];
      this.lastTime = -1;
    }
    function A(b, a, c) {
      var e = wb.call(this) || this;
      e._uri = b;
      null != c
        ? ((e._root = c._root), (e._options = e._root._options), (e._depth = c._depth + 1))
        : ((e._root = e),
          (e._options = Object.assign({}, Qd, a)),
          (e._depth = 1),
          (e._fetch = null != e._options.fetch ? e._options.fetch : A.fetch));
      return e;
    }
    function ub(b, a) {
      var c = aa.call(this, 'HTTP ' + b + (null != a && '' !== a ? ': ' + a : '')) || this;
      c.status = b;
      c.statusText = a;
      c.$type = 'HTTPError';
      return c;
    }
    function I(b, a, c) {
      a = void 0 === a ? null : a;
      c = void 0 === c ? null : c;
      b = Ra.call(this, b) || this;
      b.cause = a;
      b.uri = c;
      b.$type = 'VASTLoaderError';
      return b;
    }
    function R(b, a) {
      this.$n = b;
      this.$m = a;
      Object.keys(a).forEach(function (b) {
        var c = a[b];
        c = Array.isArray(c) ? c : [];
        a[b] = c;
      });
    }
    function Id(b, a) {
      Object.keys(a).forEach(function (c) {
        a.hasOwnProperty(c) && b.setAttribute(c, '' + a[c]);
      });
    }
    function vb(b, a) {
      b = m.createElement(b);
      a && (a.as && ((b.as = a.as), delete a.as), Id(b, a));
      return b;
    }
    function S(b, a, c) {
      b &&
        a &&
        Object.keys(a).forEach(function (e) {
          b.style.setProperty(e, a[e], !0 === c ? 'important' : '');
        });
    }
    function Oa(b, a) {
      return function (c, e) {
        c = '[debug]';
        return function (d) {
          for (var h = [], k = 0; k < arguments.length; ++k) h[k - 0] = arguments[k];
          xb < (e || a) || (h.unshift(c), console[b].apply(console, h));
        };
      };
    }
    function Pa(b, a, c) {
      if (0 > a || 901 < a) a = 901;
      b = Error(b + ':' + a);
      b.code = a;
      c && (b.innerError = c);
      return b;
    }
    function Ca() {}
    function ja(b, a, c) {
      if (!b) return Ca;
      b.addEventListener(a, c, !1);
      return function () {
        b && b.removeEventListener(a, c, !1);
      };
    }
    function Sa(b) {
      try {
        'function' === typeof b && b();
      } catch (a) {
        Rd('failed to exec', a);
      }
    }
    function Ta(b, a, c) {
      var e = this;
      0 > b && (b = 1);
      var d = 0;
      return function (h) {
        for (var k = [], r = 0; r < arguments.length; ++r) k[r - 0] = arguments[r];
        d += 1;
        d === b && a && a.apply(c || e, k);
      };
    }
    function Qa(b) {
      try {
        var a = b && b.ownerDocument;
        if (a && a.defaultView) return a.defaultView;
        if (a && a.parentWindow) return a.parentWindow;
      } catch (c) {}
      return g;
    }
    function yb(b) {
      var a = null;
      try {
        a = b.document.baseURI;
      } catch (c) {}
      return null != a && Sd.test(a) ? a : null;
    }
    function Ua(b, a, c) {
      try {
        if (c()) return Promise.resolve();
      } catch (e) {}
      return new Promise(function (e, d) {
        var h = 0,
          k = setInterval(function () {
            try {
              if (c()) {
                clearInterval(k);
                e();
                return;
              }
            } catch (r) {}
            h >= b ? (clearInterval(k), d()) : (h += 1);
          }, a);
      });
    }
    function zb(b, a) {
      b = parseFloat(b);
      return isNaN(b) ? a : 1 < b ? 1 : 0 > b ? 0 : b;
    }
    function Ab(b, a) {
      b = zb(b, a);
      var c;
      0 < a && 0 === b && (c = !0);
      0 === a && 0 < b && (c = !1);
      return { volume: b, muted: c };
    }
    function Kd(b, a, c) {
      if (isNaN(a) || 'number' !== typeof a) return b;
      b.sort(function (a, b) {
        return b.value - a.value;
      });
      for (var e = {}, d = b.length - 1; 0 <= d && !(a < b[d].value); --d)
        (e[b[d].event] = !0), b.pop();
      c(Object.keys(e));
      return b;
    }
    function ka(b, a) {
      return Va.test(b.type) ? (Va.test(a.type) ? 0 : -1) : Va.test(a.type) ? 1 : 0;
    }
    function Bb(b) {
      try {
        var a = parseInt(getComputedStyle(b).width, 10);
        return isNaN(a)
          ? ka
          : function (b, e) {
              var d = ka(b, e);
              return 0 === d
                ? ((d = Math.abs(b.width - a) - Math.abs(e.width - a)),
                  0 === d ? (b.width > e.width ? -1 : 1) : 0 < d ? 1 : -1)
                : d;
            };
      } catch (c) {
        return ka;
      }
    }
    function Td() {
      return !0;
    }
    function Wa(b, a, c, e) {
      return new Promise(function (d, h) {
        function k(a, b) {
          a: {
            try {
              var c = b ? [].concat(r).sort(b) : r;
              for (b = 0; b < c.length; b++)
                if (a(c[b])) {
                  var h = c[b];
                  break a;
                }
            } catch (J) {}
            h = null;
          }
          return (a = h) ? (d(a), !0) : !1;
        }
        var r = [].concat(a).filter(function (a) {
          return a && 'string' === typeof a.uri && '' !== a.uri.trim();
        });
        if (
          !(
            (c &&
              k(function (a) {
                return 'text/xml+vast' === a.type;
              })) ||
            k(function (a) {
              return a.type.endsWith('javascript') && (e || Td)(a.uri);
            }) ||
            k(function (a) {
              return 'probably' === b.canPlayType(a.type);
            }, Bb(b)) ||
            k(function (a) {
              return 'maybe' === b.canPlayType(a.type);
            }, Bb(b))
          )
        ) {
          var u = m.createElement('video');
          k(function (a) {
            return 'probably' === u.canPlayType(a.type);
          }, ka) ||
            k(function (a) {
              return 'maybe' === u.canPlayType(a.type);
            }, ka) ||
            h(Ud);
        }
      });
    }
    function Vd(b) {
      return encodeURIComponent(b).replace(/[!'()*]/g, function (a) {
        return '%' + a.charCodeAt(0).toString(16);
      });
    }
    function Wd(b, a, c) {
      if (Array.isArray(b)) {
        var e = {},
          d = Object.assign(((e.TIMESTAMP = new Date().toISOString()), e), a),
          h = Object.assign({ isCustomCode: !1 }, c);
        Object.keys(d).forEach(function (b) {
          null !== d[b] &&
            void 0 !== d[b] &&
            (d[b] = 'function' === typeof Cb[b] ? Cb[b](b, a, h) : Vd('' + d[b]));
        });
        d.RANDOM =
          d.random =
          d.CACHEBUSTING =
            Math.round(1e8 * Math.random())
              .toString()
              .padStart(8, '0');
        return b.map(function (a) {
          Object.keys(d).forEach(function (b) {
            null !== d[b] &&
              void 0 !== d[b] &&
              (a = a.replace('[' + b + ']', d[b]).replace('%%' + b + '%%', d[b]));
          });
          return a;
        });
      }
      return [];
    }
    function ba(b) {
      new Image().src = b;
    }
    function Db(b) {
      try {
        if (b.includes('doubleclick.net'))
          return 'https://unified.adsafeprotected.com' + '/click?csw=true&u=' + btoa(b);
      } catch (a) {}
      return b;
    }
    function C(b, a, c, e, d) {
      ('impression' !== b && 'firstQuartile' !== b && 'complete' !== b && 'clickTracking' !== b) ||
        ba(
          'https://unified.adsafeprotected.com' +
            ('error' === b ? '/error.png' : '/pixel.png') +
            '?' +
            btoa(JSON.stringify(('error' === b ? Xd : Yd)(b, c, e)))
        );
      a &&
        Array.isArray(a[b]) &&
        0 !== a[b].length &&
        ((a = Wd(a[b], c, d)),
        Zd('TRCK', b, c ? JSON.stringify(c, null, 2) : '', a),
        a.forEach(ba));
    }
    function Eb(b) {
      Object.keys(b).forEach(function (a) {
        'string' === typeof b[a] && (b[a] = b[a].trim());
        (void 0 !== b[a] && null !== b[a] && '' !== b[a]) || delete b[a];
      });
      return b;
    }
    function Fb() {
      var b =
        la(function () {
          return top.location.href;
        }) ||
        la(function () {
          return parent.location.href;
        }) ||
        (g !== top &&
          la(function () {
            return parent.document.referrer;
          })) ||
        (g !== top &&
          la(function () {
            return g.document.referrer;
          })) ||
        la(function () {
          return g.location.href;
        });
      if (b) return { site: { page: b } };
    }
    function Xd(b, a, c) {
      return Eb(
        Object.assign(
          {
            code: parseInt(a.ERRORCODE, 10) || 900,
            message: a.PBMSG,
            bid_request: Fb(),
            site_uuid: 'afddef5d-c204-40a9-b4fb-965a145d0696',
            cb: Date.now(),
          },
          c
        )
      );
    }
    function la(b, a) {
      try {
        return '' + b();
      } catch (c) {
        return a || '';
      }
    }
    function Yd(b, a, c) {
      return Eb(
        Object.assign(
          {
            type: $d[b],
            site_uuid: 'afddef5d-c204-40a9-b4fb-965a145d0696',
            bid_request: Fb(),
            cb: Date.now(),
          },
          c
        )
      );
    }
    function n(b) {
      return b && b.__esModule && Object.prototype.hasOwnProperty.call(b, 'default')
        ? b.default
        : b;
    }
    function q(b, a) {
      return (a = { exports: {} }), b(a, a.exports), a.exports;
    }
    function Gb() {}
    function ae(b, a, c, e, d) {
      function h(a) {
        var b = a.slice(1, -1);
        if (b in c) return c[b];
        if ('#' === b.charAt(0))
          return (
            (a = parseInt(b.substr(1).replace('x', '0x'))),
            65535 < a
              ? ((a -= 65536), (a = String.fromCharCode(55296 + (a >> 10), 56320 + (a & 1023))))
              : (a = String.fromCharCode(a)),
            a
          );
        d.error('entity not found:' + a);
        return a;
      }
      function k(a) {
        if (a > J) {
          var d = b.substring(J, a).replace(/&#?\w+;/g, h);
          f && r(J);
          e.characters(d, 0, a - J);
          J = a;
        }
      }
      function r(a, d) {
        for (; a >= v && (d = w.exec(b)); ) (u = d.index), (v = u + d[0].length), f.lineNumber++;
        f.columnNumber = a - u + 1;
      }
      var u = 0,
        v = 0,
        w = /.*(?:\r\n?|\n)|.*$/g,
        f = e.locator;
      a = [{ currentNSMap: a }];
      for (var g = {}, J = 0; ; ) {
        try {
          var E = b.indexOf('<', J);
          if (0 > E) {
            if (!b.substr(J).match(/^\s*$/)) {
              var l = e.doc,
                q = l.createTextNode(b.substr(J));
              l.appendChild(q);
              e.currentElement = q;
            }
            break;
          }
          E > J && k(E);
          switch (b.charAt(E + 1)) {
            case '/':
              var n = b.indexOf('>', E + 3),
                m = b.substring(E + 2, n),
                t = a.pop();
              0 > n
                ? ((m = b.substring(E + 2).replace(/[\s<].*/, '')),
                  d.error('end tag name: ' + m + ' is not complete:' + t.tagName),
                  (n = E + 1 + m.length))
                : m.match(/\s</) &&
                  ((m = m.replace(/[\s<].*/, '')),
                  d.error('end tag name: ' + m + ' maybe not complete'),
                  (n = E + 1 + m.length));
              var x = t.localNSMap,
                z = t.tagName == m;
              if (z || (t.tagName && t.tagName.toLowerCase() == m.toLowerCase())) {
                e.endElement(t.uri, t.localName, m);
                if (x) for (var A in x) e.endPrefixMapping(A);
                z ||
                  d.fatalError(
                    'end tag name: ' + m + ' is not match the current start tagName:' + t.tagName
                  );
              } else a.push(t);
              n++;
              break;
            case '?':
              f && r(E);
              n = de(b, E, e);
              break;
            case '!':
              f && r(E);
              n = ee(b, E, e, d);
              break;
            default:
              f && r(E);
              var y = new Hb(),
                B = a[a.length - 1].currentNSMap;
              n = fe(b, E, y, B, h, d);
              var C = y.length;
              !y.closed &&
                ge(b, n, y.tagName, g) &&
                ((y.closed = !0), c.nbsp || d.warning('unclosed xml attribute'));
              if (f && C) {
                for (var F = Ib(f, {}), D = 0; D < C; D++) {
                  var G = y[D];
                  r(G.offset);
                  G.locator = Ib(f, {});
                }
                e.locator = F;
                Jb(y, e, B) && a.push(y);
                e.locator = f;
              } else Jb(y, e, B) && a.push(y);
              'http://www.w3.org/1999/xhtml' !== y.uri || y.closed
                ? n++
                : (n = he(b, n, y.tagName, h, e));
          }
        } catch (be) {
          d.error('element parse error: ' + be), (n = -1);
        }
        n > J ? (J = n) : k(Math.max(E, J) + 1);
      }
    }
    function Ib(b, a) {
      a.lineNumber = b.lineNumber;
      a.columnNumber = b.columnNumber;
      return a;
    }
    function fe(b, a, c, e, d, h) {
      for (var k, r, u = ++a, v = 0; ; ) {
        var w = b.charAt(u);
        switch (w) {
          case '=':
            if (1 === v) (k = b.slice(a, u)), (v = 3);
            else if (2 === v) v = 3;
            else throw Error('attribute equal must after attrName');
            break;
          case "'":
          case '"':
            if (3 === v || 1 === v)
              if (
                (1 === v && (h.warning('attribute value must after "="'), (k = b.slice(a, u))),
                (a = u + 1),
                (u = b.indexOf(w, a)),
                0 < u)
              )
                (r = b.slice(a, u).replace(/&#?\w+;/g, d)), c.add(k, r, a - 1), (v = 5);
              else throw Error("attribute value no end '" + w + "' match");
            else if (4 == v)
              (r = b.slice(a, u).replace(/&#?\w+;/g, d)),
                c.add(k, r, a),
                h.warning('attribute "' + k + '" missed start quot(' + w + ')!!'),
                (a = u + 1),
                (v = 5);
            else throw Error('attribute value must after "="');
            break;
          case '/':
            switch (v) {
              case 0:
                c.setTagName(b.slice(a, u));
              case 5:
              case 6:
              case 7:
                (v = 7), (c.closed = !0);
              case 4:
              case 1:
              case 2:
                break;
              default:
                throw Error("attribute invalid close char('/')");
            }
            break;
          case '':
            return h.error('unexpected end of input'), 0 == v && c.setTagName(b.slice(a, u)), u;
          case '>':
            switch (v) {
              case 0:
                c.setTagName(b.slice(a, u));
              case 5:
              case 6:
              case 7:
                break;
              case 4:
              case 1:
                (r = b.slice(a, u)), '/' === r.slice(-1) && ((c.closed = !0), (r = r.slice(0, -1)));
              case 2:
                2 === v && (r = k);
                4 == v
                  ? (h.warning('attribute "' + r + '" missed quot(")!!'),
                    c.add(k, r.replace(/&#?\w+;/g, d), a))
                  : (('http://www.w3.org/1999/xhtml' === e[''] &&
                      r.match(/^(?:disabled|checked|selected)$/i)) ||
                      h.warning('attribute "' + r + '" missed value!! "' + r + '" instead!!'),
                    c.add(r, r, a));
                break;
              case 3:
                throw Error('attribute value missed!!');
            }
            return u;
          case '\u0080':
            w = ' ';
          default:
            if (' ' >= w)
              switch (v) {
                case 0:
                  c.setTagName(b.slice(a, u));
                  v = 6;
                  break;
                case 1:
                  k = b.slice(a, u);
                  v = 2;
                  break;
                case 4:
                  (r = b.slice(a, u).replace(/&#?\w+;/g, d)),
                    h.warning('attribute "' + r + '" missed quot(")!!'),
                    c.add(k, r, a);
                case 5:
                  v = 6;
              }
            else
              switch (v) {
                case 2:
                  ('http://www.w3.org/1999/xhtml' === e[''] &&
                    k.match(/^(?:disabled|checked|selected)$/i)) ||
                    h.warning('attribute "' + k + '" missed value!! "' + k + '" instead2!!');
                  c.add(k, k, a);
                  a = u;
                  v = 1;
                  break;
                case 5:
                  h.warning('attribute space is required"' + k + '"!!');
                case 6:
                  v = 1;
                  a = u;
                  break;
                case 3:
                  v = 4;
                  a = u;
                  break;
                case 7:
                  throw Error("elements closed character '/' and '>' must be connected to");
              }
        }
        u++;
      }
    }
    function Jb(b, a, c) {
      for (var e = b.tagName, d = null, h = b.length; h--; ) {
        var k = b[h],
          r = k.qName,
          u = k.value,
          v = r.indexOf(':');
        if (0 < v) {
          var w = (k.prefix = r.slice(0, v));
          v = r.slice(v + 1);
          w = 'xmlns' === w && v;
        } else (v = r), (w = 'xmlns' === r && '');
        k.localName = v;
        if (!1 !== w) {
          if (null == d) {
            d = {};
            v = void 0;
            r = c;
            var f = (c = {});
            for (v in r) f[v] = r[v];
          }
          c[w] = d[w] = u;
          k.uri = 'http://www.w3.org/2000/xmlns/';
          a.startPrefixMapping(w, u);
        }
      }
      for (h = b.length; h--; )
        if (((k = b[h]), (w = k.prefix)))
          'xml' === w && (k.uri = 'http://www.w3.org/XML/1998/namespace'),
            'xmlns' !== w && (k.uri = c[w || '']);
      v = e.indexOf(':');
      0 < v
        ? ((w = b.prefix = e.slice(0, v)), (v = b.localName = e.slice(v + 1)))
        : ((w = null), (v = b.localName = e));
      h = b.uri = c[w || ''];
      a.startElement(h, v, e, b);
      if (b.closed) {
        if ((a.endElement(h, v, e), d)) for (w in d) a.endPrefixMapping(w);
      } else return (b.currentNSMap = c), (b.localNSMap = d), !0;
    }
    function he(b, a, c, e, d) {
      if (/^(?:script|textarea)$/i.test(c)) {
        var h = b.indexOf('</' + c + '>', a);
        b = b.substring(a + 1, h);
        if (/[&<]/.test(b)) {
          if (/^script$/i.test(c)) return d.characters(b, 0, b.length), h;
          b = b.replace(/&#?\w+;/g, e);
          d.characters(b, 0, b.length);
          return h;
        }
      }
      return a + 1;
    }
    function ge(b, a, c, e) {
      var d = e[c];
      null == d &&
        ((d = b.lastIndexOf('</' + c + '>')), d < a && (d = b.lastIndexOf('</' + c)), (e[c] = d));
      return d < a;
    }
    function ee(b, a, c, e) {
      switch (b.charAt(a + 2)) {
        case '-':
          if ('-' === b.charAt(a + 3)) {
            var d = b.indexOf('--\x3e', a + 4);
            if (d > a) return c.comment(b, a + 4, d - a - 4), d + 3;
            e.error('Unclosed comment');
          }
          break;
        default:
          if ('CDATA[' == b.substr(a + 3, 6))
            return (
              (d = b.indexOf(']]\x3e', a + 9)),
              c.startCDATA(),
              c.characters(b, a + 9, d - a - 9),
              c.endCDATA(),
              d + 3
            );
          a: {
            e = [];
            d = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
            d.lastIndex = a;
            for (d.exec(b); (a = d.exec(b)); )
              if ((e.push(a), a[1])) {
                d = e;
                break a;
              }
            d = void 0;
          }
          var h = d.length;
          if (1 < h && /!doctype/i.test(d[0][0]))
            return (
              (b = d[1][0]),
              (a = 3 < h && /^public$/i.test(d[2][0]) && d[3][0]),
              (e = 4 < h && d[4][0]),
              (d = d[h - 1]),
              c.startDTD(
                b,
                a && a.replace(/^(['"])(.*?)\1$/, '$2'),
                e && e.replace(/^(['"])(.*?)\1$/, '$2')
              ),
              c.endDTD(),
              d.index + d[0].length
            );
      }
      return -1;
    }
    function de(b, a, c) {
      var e = b.indexOf('?>', a);
      return e && (b = b.substring(a, e).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/))
        ? (c.processingInstruction(b[1], b[2]), e + 2)
        : -1;
    }
    function Hb() {}
    function Da(b, a) {
      b.__proto__ = a;
      return b;
    }
    function ma(b, a) {
      for (var c in b) a[c] = b[c];
    }
    function K(b, a) {
      var c = b.prototype;
      if (Object.create) {
        var e = Object.create(a.prototype);
        c.__proto__ = e;
      }
      c instanceof a ||
        ((e = function () {}),
        (e.prototype = a.prototype),
        (e = new e()),
        ma(c, e),
        (b.prototype = c = e));
      c.constructor != b && (c.constructor = b);
    }
    function ca(b, a) {
      if (a instanceof Error) var c = a;
      else
        (c = this),
          Error.call(this, F[b]),
          (this.message = F[b]),
          Error.captureStackTrace && Error.captureStackTrace(this, ca);
      c.code = b;
      a && (this.message = this.message + ': ' + a);
      return c;
    }
    function Y() {}
    function na(b, a) {
      this._node = b;
      this._refresh = a;
      Ya(this);
    }
    function Ya(b) {
      var a = b._node._inc || b._node.ownerDocument._inc;
      if (b._inc != a) {
        var c = b._refresh(b._node);
        Kb(b, 'length', c.length);
        ma(c, b);
        b._inc = a;
      }
    }
    function Ea() {}
    function Lb(b, a) {
      for (var c = b.length; c--; ) if (b[c] === a) return c;
    }
    function Mb(b, a, c, e) {
      e ? (a[Lb(a, e)] = c) : (a[a.length++] = c);
      b &&
        ((c.ownerElement = b), (a = b.ownerDocument)) &&
        (e && Nb(a, b, e),
        a && a._inc++,
        'http://www.w3.org/2000/xmlns/' == c.namespaceURI &&
          (b._nsMap[c.prefix ? c.localName : ''] = c.value));
    }
    function Ob(b, a, c) {
      var e = Lb(a, c);
      if (0 <= e) {
        for (var d = a.length - 1; e < d; ) a[e] = a[++e];
        a.length = d;
        b && (a = b.ownerDocument) && (Nb(a, b, c), (c.ownerElement = null));
      } else throw ca(ie, Error(b.tagName + '@' + c));
    }
    function Pb(b) {
      this._features = {};
      if (b) for (var a in b) this._features = b[a];
    }
    function H() {}
    function Qb(b) {
      return (
        ('<' == b && '&lt;') ||
        ('>' == b && '&gt;') ||
        ('&' == b && '&amp;') ||
        ('"' == b && '&quot;') ||
        '&#' + b.charCodeAt() + ';'
      );
    }
    function Fa(b, a) {
      if (a(b)) return !0;
      if ((b = b.firstChild)) {
        do if (Fa(b, a)) return !0;
        while ((b = b.nextSibling));
      }
    }
    function oa() {}
    function Nb(b, a, c) {
      b && b._inc++;
      'http://www.w3.org/2000/xmlns/' == c.namespaceURI &&
        delete a._nsMap[c.prefix ? c.localName : ''];
    }
    function Za(b, a, c) {
      if (b && b._inc)
        if ((b._inc++, (b = a.childNodes), c)) b[b.length++] = c;
        else {
          a = a.firstChild;
          for (c = 0; a; ) (b[c++] = a), (a = a.nextSibling);
          b.length = c;
        }
    }
    function Rb(b, a) {
      var c = a.previousSibling,
        e = a.nextSibling;
      c ? (c.nextSibling = e) : (b.firstChild = e);
      e ? (e.previousSibling = c) : (b.lastChild = c);
      Za(b.ownerDocument, b);
      return a;
    }
    function Sb(b, a, c) {
      var e = a.parentNode;
      e && e.removeChild(a);
      if (a.nodeType === T) {
        e = a.firstChild;
        if (null == e) return a;
        var d = a.lastChild;
      } else e = d = a;
      var h = c ? c.previousSibling : b.lastChild;
      e.previousSibling = h;
      d.nextSibling = c;
      h ? (h.nextSibling = e) : (b.firstChild = e);
      null == c ? (b.lastChild = d) : (c.previousSibling = d);
      do e.parentNode = b;
      while (e !== d && (e = e.nextSibling));
      Za(b.ownerDocument || b, b);
      a.nodeType == T && (a.firstChild = a.lastChild = null);
      return a;
    }
    function da() {
      this._nsMap = {};
    }
    function Ga() {}
    function pa() {}
    function $a() {}
    function ab() {}
    function bb() {}
    function cb() {}
    function Tb() {}
    function Ub() {}
    function db() {}
    function Ha() {}
    function eb() {}
    function Vb() {}
    function Wb(b, a) {
      var c = [],
        e = 9 == this.nodeType ? this.documentElement : this,
        d = e.prefix,
        h = e.namespaceURI;
      if (h && null == d && ((d = e.lookupPrefix(h)), null == d))
        var k = [{ namespace: h, prefix: null }];
      ea(this, c, b, a, k);
      return c.join('');
    }
    function Xb(b, a, c) {
      a = b.prefix || '';
      b = b.namespaceURI;
      if (
        (!a && !b) ||
        ('xml' === a && 'http://www.w3.org/XML/1998/namespace' === b) ||
        'http://www.w3.org/2000/xmlns/' == b
      )
        return !1;
      for (var e = c.length; e--; ) {
        var d = c[e];
        if (d.prefix == a) return d.namespace != b;
      }
      return !0;
    }
    function ea(b, a, c, e, d) {
      if (e)
        if ((b = e(b))) {
          if ('string' == typeof b) {
            a.push(b);
            return;
          }
        } else return;
      switch (b.nodeType) {
        case Q:
          d || (d = []);
          var h = b.attributes,
            k = h.length,
            r = b.firstChild,
            u = b.tagName;
          c = 'http://www.w3.org/1999/xhtml' === b.namespaceURI || c;
          a.push('<', u);
          for (var v = 0; v < k; v++) {
            var w = h.item(v);
            'xmlns' == w.prefix
              ? d.push({ prefix: w.localName, namespace: w.value })
              : 'xmlns' == w.nodeName && d.push({ prefix: '', namespace: w.value });
          }
          for (v = 0; v < k; v++) {
            w = h.item(v);
            if (Xb(w, c, d)) {
              var f = w.prefix || '',
                g = w.namespaceURI;
              a.push(f ? ' xmlns:' + f : ' xmlns', '="', g, '"');
              d.push({ prefix: f, namespace: g });
            }
            ea(w, a, c, e, d);
          }
          Xb(b, c, d) &&
            ((f = b.prefix || ''),
            (g = b.namespaceURI),
            a.push(f ? ' xmlns:' + f : ' xmlns', '="', g, '"'),
            d.push({ prefix: f, namespace: g }));
          if (r || (c && !/^(?:meta|link|img|br|hr|input)$/i.test(u))) {
            a.push('>');
            if (c && /^script$/i.test(u))
              for (; r; ) r.data ? a.push(r.data) : ea(r, a, c, e, d), (r = r.nextSibling);
            else for (; r; ) ea(r, a, c, e, d), (r = r.nextSibling);
            a.push('</', u, '>');
          } else a.push('/>');
          break;
        case Yb:
        case T:
          for (r = b.firstChild; r; ) ea(r, a, c, e, d), (r = r.nextSibling);
          break;
        case fa:
          return a.push(' ', b.name, '="', b.value.replace(/[<&"]/g, Qb), '"');
        case Ia:
          return a.push(b.data.replace(/[<&]/g, Qb));
        case Zb:
          return a.push('<![CDATA[', b.data, ']]\x3e');
        case $b:
          return a.push('\x3c!--', b.data, '--\x3e');
        case ac:
          c = b.publicId;
          e = b.systemId;
          a.push('<!DOCTYPE ', b.name);
          c
            ? (a.push(' PUBLIC "', c), e && '.' != e && a.push('" "', e), a.push('">'))
            : e && '.' != e
            ? a.push(' SYSTEM "', e, '">')
            : ((b = b.internalSubset) && a.push(' [', b, ']'), a.push('>'));
          break;
        case bc:
          return a.push('<?', b.target, ' ', b.data, '?>');
        case cc:
          return a.push('&', b.nodeName, ';');
        default:
          a.push('??', b.nodeName);
      }
    }
    function dc(b, a, c) {
      switch (a.nodeType) {
        case Q:
          var e = a.cloneNode(!1);
          e.ownerDocument = b;
        case T:
          break;
        case fa:
          c = !0;
      }
      e || (e = a.cloneNode(!1));
      e.ownerDocument = b;
      e.parentNode = null;
      if (c) for (a = a.firstChild; a; ) e.appendChild(dc(b, a, c)), (a = a.nextSibling);
      return e;
    }
    function fb(b, a, c) {
      var e = new a.constructor();
      for (h in a) {
        var d = a[h];
        'object' != typeof d && d != e[h] && (e[h] = d);
      }
      a.childNodes && (e.childNodes = new Y());
      e.ownerDocument = b;
      switch (e.nodeType) {
        case Q:
          var h = a.attributes;
          var k = (e.attributes = new Ea());
          d = h.length;
          k._ownerElement = e;
          for (k = 0; k < d; k++) e.setAttributeNode(fb(b, h.item(k), !0));
          break;
        case fa:
          c = !0;
      }
      if (c) for (a = a.firstChild; a; ) e.appendChild(fb(b, a, c)), (a = a.nextSibling);
      return e;
    }
    function Kb(b, a, c) {
      b[a] = c;
    }
    function ec(b, a) {
      if (!b) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !a || ('object' !== typeof a && 'function' !== typeof a) ? b : a;
    }
    function je(b, a) {
      if ('function' !== typeof a && null !== a)
        throw new TypeError('Super expression must either be null or a function, not ' + typeof a);
      b.prototype = Object.create(a && a.prototype, {
        constructor: { value: b, enumerable: !1, writable: !0, configurable: !0 },
      });
      a && (Object.setPrototypeOf ? Object.setPrototypeOf(b, a) : (b.__proto__ = a));
    }
    function fc(b, a) {
      for (var c = 0; c < b.length && a(b.get(c), c, b); c += 1);
    }
    function ke(b, a) {
      return a ? ('RelativeTimeOffset' === a.$type ? ~~((100 * a.value * b) / 100) : a.value) : -2;
    }
    function le(b) {
      return b && b.clickThrough && b.clickThrough.uri ? b.clickThrough.uri : '';
    }
    function me(b) {
      if (b && b.clickTrackings) {
        for (var a = [], c = 0; c < b.clickTrackings.length; c++) a.push(b.clickTrackings[c].uri);
        return a;
      }
      return [];
    }
    function gc(b) {
      return (b || []).map(function (a) {
        return a.uri;
      });
    }
    function ne(b, a) {
      var c = { impression: gc(b.impressions), error: b.errors };
      b.viewableImpression &&
        ((c.viViewable = b && b.viewableImpression && b.viewableImpression.viewables),
        (c.viNotViewable = b && b.viewableImpression && b.viewableImpression.notViewables),
        (c.viViewUndetermined =
          b && b.viewableImpression && b.viewableImpression.viewUndetermineds));
      a.trackingEvents &&
        Array.isArray(a.trackingEvents.types) &&
        a.trackingEvents.types.forEach(function (b) {
          c[b] = gc(a.trackingEvents.get(b));
        });
      return c;
    }
    function hc(b) {
      var a = [];
      fc(b, function (b) {
        fc(b.creatives, function (c) {
          var d = {};
          c.linear &&
            ((c = c.linear),
            (d.linear = {
              adParameters: c.adParameters || '',
              duration: c.duration,
              skipOffset: ke(c.duration, c.skipoffset),
              clickThroughUrl: le(c.videoClicks),
              clickTrackingUrl: me(c.videoClicks),
              linear: !0,
              mediaFiles: c.mediaFiles.map(function (a) {
                var b = {
                  height: a.height,
                  width: a.width,
                  type: a.type,
                  delivery: a.delivery,
                  uri: a.uri,
                  bitrate: a.bitrate,
                  apiFramework: a.apiFramework,
                };
                void 0 !== a.id && (b.id = '' + a.id);
                void 0 !== a.maintainAspectRatio &&
                  (b.maintainAspectRatio = '' + a.maintainAspectRatio);
                void 0 !== a.scalable && (b.scalable = '' + a.scalable);
                return b;
              }),
              events: ne(b, c),
            }),
            b.adSystem && b.adSystem.name && (d.linear.adSystem = b.adSystem.name));
          d.linear && a.push(d);
          return !0;
        });
        return !0;
      });
      return a;
    }
    function oe(b) {
      return new A(b).load().then(function (a) {
        var b = [];
        a.forEach(function (a) {
          a.ads && 0 < a.ads.length && (b = b.concat(hc(a.ads)));
          a.adPod && 0 < a.adPod.ads.length && (b = b.concat(hc(a.adPod.ads)));
        });
        return b;
      });
    }
    function ic(b) {
      if (b[Ja]) return gb(b[Ja], Ja);
      var a = Ja.split('-')[0];
      return b[a] ? gb(b[a], a) : gb(b.en, 'en');
    }
    function gb(b, a) {
      return 'en' !== a ? decodeURIComponent(b) : b;
    }
    function hb(b) {
      return (b = b.play()) ? b : Promise.resolve();
    }
    function pe(b) {
      b = b || {};
      var a = m.createElement('iframe');
      a.id = b.id || 'pb_' + Date.now();
      a.src = b.src || 'about:blank';
      b.cssText && (a.style.cssText = b.cssText);
      b.border && (a.frameBorder = b.border);
      b.scrolling && (a.scrolling = b.scrolling);
      return a;
    }
    function qe(b, a) {
      var c = !1,
        e = ja(b, 'load', function () {
          c = !0;
        });
      return Ua(a / 100, 100, function () {
        return c || (!!b.contentWindow && !!b.contentDocument);
      }).then(e);
    }
    function re(b, a) {
      var c = !1;
      b = ja(b, 'load', function () {
        c = !0;
      });
      return Ua(a / 100, 100, function () {
        return c;
      }).then(b);
    }
    function se(b, a) {
      return new Promise(function (c, e) {
        if (b) a(b, c, e);
        else return e(ib);
      });
    }
    function Z(b, a) {
      return b ? (a(b), Promise.resolve()) : Promise.reject(ib);
    }
    function te(b, a) {
      return function (c) {
        try {
          b.push(a), b[0] instanceof Error && (b[0] = '' + b[0].message), c.fn.apply(c.ctx || g, b);
        } catch (e) {
          D('emitEvents ERROR', e);
        }
      };
    }
    function jc(b, a) {
      var c = Object.assign({}, a);
      c.showPlayButton = !1;
      c.hideCountdown = !0;
      c.skipOffset = b.skipOffset;
      b.hasOwnProperty('plugins') &&
        0 < b.plugins.length &&
        b.plugins.forEach(function (a) {
          a.hasOwnProperty('id') &&
            ('force.click.continue' === a.id
              ? (c.forceClickContinue = !0)
              : 'play' === a.id
              ? (c.showPlayButton = !0)
              : 'ias.countdown' === a.id && (c.hideCountdown = !1),
            a.hasOwnProperty('config') && /^ias/i.test(a.id) && (c = Object.assign(c, a.config)));
        });
      b.hasOwnProperty('flags') && 2 === b.flags && (c.ignoreImaVpaid = !0);
      c.partner || (c.partner = 'iasp');
      if (O(c.debug) || ('object' === typeof c.debug && O(c.debug.enabled)))
        'object' !== typeof c.debug && (c.debug = {}), (c.debug.enabled = !0);
      c.monDomain &&
        ('object' !== typeof c.debug && (c.debug = {}), (c.debug.monDomain = c.monDomain));
      c.debug && c.debug.enabled && (xb = 1);
      ['planId', 'uId', 'impId', 'bidPr', 'bidurl'].some(function (a) {
        a = c[a];
        return !(a && (null == a || '' === a || (Array.isArray(a) && null == a.length)));
      }) && (c.adsafe_par = '');
      c.forceClickContinue = O(c.forceClickContinue);
      c.showPlayButton = O(c.showPlayButton);
      c.hideCountdown = O(c.hideCountdown);
      c.skipOffset = kc(c.skipOffset, -1, { min: 0 });
      c.logTestResults = O(c.logTestResults);
      c.ignoreImaVpaid = O(c.ignoreImaVpaid);
      c.includeFlash = O(c.includeFlash);
      c.includeHtml5 = O(c.includeHtml5, !0);
      c.includeVideo = O(c.includeVideo, !0);
      c.includeOmid = O(c.includeOmid);
      c.isMonitoring = O(c.isMonitoring);
      c.fwtimeout = kc(c.fwtimeout, 1500);
      c.expectedInteractions &&
        (c.expectedInteractions = encodeURIComponent(c.expectedInteractions));
      var e = { originalvast: !0, vasturl: !0 };
      Object.keys(c).forEach(function (a) {
        e[a.toLowerCase()] && delete c[a];
      });
      return c;
    }
    function ue(b) {
      b = Object.assign({}, b);
      delete b.forceClickContinue;
      delete b.showPlayButton;
      delete b.hideCountdown;
      delete b.skipAccept;
      delete b.skipOffset;
      delete b.flags;
      delete b.fwServerDomain;
      delete b.ignoreImaVpaid;
      delete b.IAS_VID_OPTS;
      delete b.clickUrl;
      delete b.includeFlash;
      delete b.includeHtml5;
      delete b.includeVideo;
      delete b.includeOmid;
      delete b.fwtimeout;
      delete b.isMonitoring;
      return b;
    }
    function kc(b, a, c) {
      b = 'number' === typeof b ? b : parseInt('' + b, 10);
      return isNaN(b) ||
        (c &&
          (('number' === typeof c.min && ((c.minInclusive && b === c.min) || b < c.min)) ||
            ('number' === typeof c.max && ((c.maxInclusive && b === c.max) || b > c.max))))
        ? a
        : b;
    }
    function O(b, a) {
      if ('boolean' === typeof b) return b;
      b = ('' + b).toLowerCase();
      return 'true' === b || '1' === b
        ? !0
        : 'false' === b || '0' === b
        ? !1
        : 'undefined' !== typeof a
        ? a
        : !1;
    }
    function jb(b) {
      return 'string' === typeof b && !!b;
    }
    function lc(b, a, c) {
      switch (b) {
        case 'currentViewMode':
        case 'companions':
          if ('string' === typeof a) return a;
          break;
        case 'icons':
        case 'linear':
        case 'expanded':
        case 'skippableState':
          if ('boolean' === typeof a) return a;
          if ('string' === typeof a && /^(true|false)$/i.test(a)) return 'true' === a;
          break;
        case 'desiredBitrate':
        case 'width':
        case 'height':
          a = parseInt(a, 10);
          if (0 <= a) return a;
          break;
        case 'currentVol':
        case 'duration':
        case 'remainingTime':
          a = parseFloat(a);
          if (-2 <= a) return a;
          break;
        case 'viewMode':
          if (/^(normal|thumbnail|fullscreen)$/i.test(a)) return a;
          break;
        case 'media':
        case 'iascr':
        case 'crdata':
        case 'pversion':
        case 'video':
        case 'slot':
        case 'IASConfig':
        case 'NormalizeIASConfig':
          return a;
        case 'params':
          return mc(a);
      }
      return c;
    }
    function mc(b) {
      try {
        return JSON.parse(b);
      } catch (a) {
        D('failed to parse adparams', a);
      }
      return {};
    }
    function Jd(b, a) {
      if (null === a || Array.isArray(a) || 'object' !== typeof a) return b;
      Object.keys(a).forEach(function (c) {
        b[c] = lc(c, a[c], b[c]);
      });
      return b;
    }
    function nc() {
      try {
        var b = g.parent.google.ima.VERSION;
      } catch (a) {
        b = '';
      }
      return b ? !0 : ve.test(g.location.href);
    }
    function we(b) {
      var a = parseInt('' + b, 10);
      if (isNaN(a)) return '';
      var c = a / 3600,
        e = (a / 60) % 60,
        d = a % 60;
      b = parseInt('' + 100 * (b - a), 10);
      return (
        ('' + c).padStart(2, '0') +
        ':' +
        ('' + e).padStart(2, '0') +
        ':' +
        ('' + d).padStart(2, '0') +
        '.' +
        ('' + b).padStart(3, '0')
      );
    }
    function xe(b) {
      return !!b && /^(https?:)?\/\/([a-z0-9]+?\.)?adsafeprotected\.com/i.test(b.trim());
    }
    function oc(b, a, c, e, d, h) {
      y('request vast', c);
      return oe(c).then(function (c) {
        var k = c.map(function (a) {
          return a.linear;
        });
        return Wa(a, k[0].mediaFiles, 4 > b, h).then(function (c) {
          if (c.type.endsWith('javascript') && xe(c.uri))
            return (
              (c = mc(k[0].adParameters)),
              (d = Object.assign(d, jc(c))),
              Wa(a, c.mediaFiles, 4 > b + 1, h).then(function (c) {
                if ('text/xml+vast' === c.type) return oc(b + 2, a, c.uri, k[0].events, d, h);
                k[0].mediaFile = c;
                Object.keys(e).forEach(function (a) {
                  k[0].events[a] = (k[0].events[a] || []).concat(e[a] || []);
                });
                return Promise.resolve({ creatives: k, creativeIdx: 0, iasconfig: d });
              })
            );
          k[0].mediaFile = c;
          Object.keys(e).forEach(function (a) {
            k[0].events[a] = (k[0].events[a] || []).concat(e[a] || []);
          });
          return Promise.resolve({ creatives: k, creativeIdx: 0, iasconfig: d });
        });
      });
    }
    function pc() {
      return new l();
    }
    var xb = parseInt('0', 10),
      kb = Oa('info', 1),
      qc = Oa('error', 1),
      rc = Oa('warn', 2);
    R.prototype.to = function (b) {
      var a = this.next();
      if (!this.$m.hasOwnProperty(b)) return !1;
      for (var c = 0; c < a.length; c += 1) if (b === a[c]) return (this.$n = a[c]), !0;
      return !1;
    };
    R.prototype.now = function () {
      return this.$n;
    };
    R.prototype.is = function (b) {
      for (var a = 0; a < b.length; a += 1) if (this.now() === b[a]) return !0;
      return !1;
    };
    R.prototype.next = function () {
      return this.$m[this.$n];
    };
    var Rd = qc('UTIL'),
      Sd = /^https?:\/\//,
      Ld = { event: 'AdVideoStart', value: 0 },
      Md = { event: 'AdVideoFirstQuartile', value: 25 },
      Nd = { event: 'AdVideoMidpoint', value: 50 },
      Od = { event: 'AdVideoThirdQuartile', value: 75 },
      Pd = { event: 'AdVideoComplete', value: 100 },
      ye =
        'AdLoaded AdStarted AdStopped AdImpression AdVideoStart AdVideoFirstQuartile AdVideoMidpoint AdVideoThirdQuartile AdVideoComplete AdUserMinimize AdSkipped AdUserClose AdPaused AdPlaying AdLinearChange AdExpandedChange AdVolumeChange AdClickThru AdError AdSizeChange AdRemainingTimeChange AdDurationChange'.split(
          ' '
        ),
      Va = /video\/mp4/,
      Ud = Error('failed to find media'),
      Zd = kb('TRCK', 3),
      lb = {},
      Cb =
        ((lb.ERRORCODE = function (b, a, c) {
          return c.isCustomCode || /^[0-9]{3}$/.test('' + a[b]) ? a[b] : '900';
        }),
        (lb.CONTENTPLAYHEAD = function (b, a) {
          if (/\d{2}:\d{2}:\d{2}(\.\d{1,3})?/.test('' + a[b])) return '' + a[b];
        }),
        lb),
      B = {},
      $d =
        ((B.impression = 303),
        (B.creativeView = 417),
        (B.start = 400),
        (B.firstQuartile = 403),
        (B.midpoint = 404),
        (B.thirdQuartile = 405),
        (B.complete = 406),
        (B.mute = 407),
        (B.unmute = 408),
        (B.pause = 409),
        (B.resume = 410),
        (B.rewind = 411),
        (B.fullscreen = 412),
        (B.exitFullscreen = 413),
        (B.acceptInvitationLinear = 414),
        (B.closeLinear = 415),
        (B.close = 415),
        (B.skip = 401),
        (B.progress = 416),
        (B.clickTracking = 421),
        B),
      wb = q(function (b) {
        function a() {}
        function c(a, b, d) {
          this.fn = a;
          this.context = b;
          this.once = d || !1;
        }
        function e(a, b, d, h, e) {
          if ('function' !== typeof d) throw new TypeError('The listener must be a function');
          d = new c(d, h || a, e);
          b = r ? r + b : b;
          a._events[b]
            ? a._events[b].fn
              ? (a._events[b] = [a._events[b], d])
              : a._events[b].push(d)
            : ((a._events[b] = d), a._eventsCount++);
          return a;
        }
        function d(b, d) {
          0 === --b._eventsCount ? (b._events = new a()) : delete b._events[d];
        }
        function h() {
          this._events = new a();
          this._eventsCount = 0;
        }
        var k = Object.prototype.hasOwnProperty,
          r = '~';
        Object.create && ((a.prototype = Object.create(null)), new a().__proto__ || (r = !1));
        h.prototype.eventNames = function () {
          var a = [],
            b,
            d;
          if (0 === this._eventsCount) return a;
          for (d in (b = this._events)) k.call(b, d) && a.push(r ? d.slice(1) : d);
          return Object.getOwnPropertySymbols ? a.concat(Object.getOwnPropertySymbols(b)) : a;
        };
        h.prototype.listeners = function (a) {
          a = this._events[r ? r + a : a];
          if (!a) return [];
          if (a.fn) return [a.fn];
          for (var b = 0, d = a.length, c = Array(d); b < d; b++) c[b] = a[b].fn;
          return c;
        };
        h.prototype.listenerCount = function (a) {
          return (a = this._events[r ? r + a : a]) ? (a.fn ? 1 : a.length) : 0;
        };
        h.prototype.emit = function (a, b, d, c, h, e) {
          var k = r ? r + a : a;
          if (!this._events[k]) return !1;
          k = this._events[k];
          var u = arguments.length,
            f;
          if (k.fn) {
            k.once && this.removeListener(a, k.fn, void 0, !0);
            switch (u) {
              case 1:
                return k.fn.call(k.context), !0;
              case 2:
                return k.fn.call(k.context, b), !0;
              case 3:
                return k.fn.call(k.context, b, d), !0;
              case 4:
                return k.fn.call(k.context, b, d, c), !0;
              case 5:
                return k.fn.call(k.context, b, d, c, h), !0;
              case 6:
                return k.fn.call(k.context, b, d, c, h, e), !0;
            }
            var w = 1;
            for (f = Array(u - 1); w < u; w++) f[w - 1] = arguments[w];
            k.fn.apply(k.context, f);
          } else {
            var v = k.length;
            for (w = 0; w < v; w++)
              switch ((k[w].once && this.removeListener(a, k[w].fn, void 0, !0), u)) {
                case 1:
                  k[w].fn.call(k[w].context);
                  break;
                case 2:
                  k[w].fn.call(k[w].context, b);
                  break;
                case 3:
                  k[w].fn.call(k[w].context, b, d);
                  break;
                case 4:
                  k[w].fn.call(k[w].context, b, d, c);
                  break;
                default:
                  if (!f) {
                    var g = 1;
                    for (f = Array(u - 1); g < u; g++) f[g - 1] = arguments[g];
                  }
                  k[w].fn.apply(k[w].context, f);
              }
          }
          return !0;
        };
        h.prototype.on = function (a, b, d) {
          return e(this, a, b, d, !1);
        };
        h.prototype.once = function (a, b, d) {
          return e(this, a, b, d, !0);
        };
        h.prototype.removeListener = function (a, b, c, h) {
          a = r ? r + a : a;
          if (!this._events[a]) return this;
          if (!b) return d(this, a), this;
          var e = this._events[a];
          if (e.fn) e.fn !== b || (h && !e.once) || (c && e.context !== c) || d(this, a);
          else {
            for (var k = 0, u = [], f = e.length; k < f; k++)
              (e[k].fn !== b || (h && !e[k].once) || (c && e[k].context !== c)) && u.push(e[k]);
            u.length ? (this._events[a] = 1 === u.length ? u[0] : u) : d(this, a);
          }
          return this;
        };
        h.prototype.removeAllListeners = function (b) {
          b
            ? ((b = r ? r + b : b), this._events[b] && d(this, b))
            : ((this._events = new a()), (this._eventsCount = 0));
          return this;
        };
        h.prototype.off = h.prototype.removeListener;
        h.prototype.addListener = h.prototype.on;
        h.prefixed = r;
        h.EventEmitter = h;
        b.exports = h;
      }),
      mb =
        /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
      sc = new RegExp(
        '[\\-\\.0-9' + mb.source.slice(1, -1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'
      ),
      tc = new RegExp('^' + mb.source + sc.source + '*(?::' + mb.source + sc.source + '*)?$');
    Gb.prototype = {
      parse: function (b, a, c) {
        var e = this.domBuilder;
        e.startDocument();
        var d = a,
          h = (a = {}),
          k;
        for (k in d) h[k] = d[k];
        ae(b, a, c, e, this.errorHandler);
        e.endDocument();
      },
    };
    Hb.prototype = {
      setTagName: function (b) {
        if (!tc.test(b)) throw Error('invalid tagName:' + b);
        this.tagName = b;
      },
      add: function (b, a, c) {
        if (!tc.test(b)) throw Error('invalid attribute:' + b);
        this[this.length++] = { qName: b, value: a, offset: c };
      },
      length: 0,
      getLocalName: function (b) {
        return this[b].localName;
      },
      getLocator: function (b) {
        return this[b].locator;
      },
      getQName: function (b) {
        return this[b].qName;
      },
      getURI: function (b) {
        return this[b].uri;
      },
      getValue: function (b) {
        return this[b].value;
      },
    };
    Da({}, Da.prototype) instanceof Da ||
      (Da = function (b, a) {
        function c() {}
        c.prototype = a;
        c = new c();
        for (a in b) c[a] = b[a];
        return c;
      });
    var L = {},
      Q = (L.ELEMENT_NODE = 1),
      fa = (L.ATTRIBUTE_NODE = 2),
      Ia = (L.TEXT_NODE = 3),
      Zb = (L.CDATA_SECTION_NODE = 4),
      cc = (L.ENTITY_REFERENCE_NODE = 5),
      ze = (L.ENTITY_NODE = 6),
      bc = (L.PROCESSING_INSTRUCTION_NODE = 7),
      $b = (L.COMMENT_NODE = 8),
      Yb = (L.DOCUMENT_NODE = 9),
      ac = (L.DOCUMENT_TYPE_NODE = 10),
      T = (L.DOCUMENT_FRAGMENT_NODE = 11),
      Ae = (L.NOTATION_NODE = 12),
      G = {},
      F = {};
    G.INDEX_SIZE_ERR = ((F[1] = 'Index size error'), 1);
    G.DOMSTRING_SIZE_ERR = ((F[2] = 'DOMString size error'), 2);
    var Be = (G.HIERARCHY_REQUEST_ERR = ((F[3] = 'Hierarchy request error'), 3));
    G.WRONG_DOCUMENT_ERR = ((F[4] = 'Wrong document'), 4);
    G.INVALID_CHARACTER_ERR = ((F[5] = 'Invalid character'), 5);
    G.NO_DATA_ALLOWED_ERR = ((F[6] = 'No data allowed'), 6);
    G.NO_MODIFICATION_ALLOWED_ERR = ((F[7] = 'No modification allowed'), 7);
    var ie = (G.NOT_FOUND_ERR = ((F[8] = 'Not found'), 8));
    G.NOT_SUPPORTED_ERR = ((F[9] = 'Not supported'), 9);
    var uc = (G.INUSE_ATTRIBUTE_ERR = ((F[10] = 'Attribute in use'), 10));
    G.INVALID_STATE_ERR = ((F[11] = 'Invalid state'), 11);
    G.SYNTAX_ERR = ((F[12] = 'Syntax error'), 12);
    G.INVALID_MODIFICATION_ERR = ((F[13] = 'Invalid modification'), 13);
    G.NAMESPACE_ERR = ((F[14] = 'Invalid namespace'), 14);
    G.INVALID_ACCESS_ERR = ((F[15] = 'Invalid access'), 15);
    ca.prototype = Error.prototype;
    ma(G, ca);
    Y.prototype = {
      length: 0,
      item: function (b) {
        return this[b] || null;
      },
      toString: function (b, a) {
        for (var c = [], e = 0; e < this.length; e++) ea(this[e], c, b, a);
        return c.join('');
      },
    };
    na.prototype.item = function (b) {
      Ya(this);
      return this[b];
    };
    K(na, Y);
    Ea.prototype = {
      length: 0,
      item: Y.prototype.item,
      getNamedItem: function (b) {
        for (var a = this.length; a--; ) {
          var c = this[a];
          if (c.nodeName == b) return c;
        }
      },
      setNamedItem: function (b) {
        var a = b.ownerElement;
        if (a && a != this._ownerElement) throw new ca(uc);
        a = this.getNamedItem(b.nodeName);
        Mb(this._ownerElement, this, b, a);
        return a;
      },
      setNamedItemNS: function (b) {
        var a = b.ownerElement;
        if (a && a != this._ownerElement) throw new ca(uc);
        a = this.getNamedItemNS(b.namespaceURI, b.localName);
        Mb(this._ownerElement, this, b, a);
        return a;
      },
      removeNamedItem: function (b) {
        b = this.getNamedItem(b);
        Ob(this._ownerElement, this, b);
        return b;
      },
      removeNamedItemNS: function (b, a) {
        b = this.getNamedItemNS(b, a);
        Ob(this._ownerElement, this, b);
        return b;
      },
      getNamedItemNS: function (b, a) {
        for (var c = this.length; c--; ) {
          var e = this[c];
          if (e.localName == a && e.namespaceURI == b) return e;
        }
        return null;
      },
    };
    Pb.prototype = {
      hasFeature: function (b, a) {
        return (b = this._features[b.toLowerCase()]) && (!a || a in b) ? !0 : !1;
      },
      createDocument: function (b, a, c) {
        var e = new oa();
        e.implementation = this;
        e.childNodes = new Y();
        (e.doctype = c) && e.appendChild(c);
        a && ((b = e.createElementNS(b, a)), e.appendChild(b));
        return e;
      },
      createDocumentType: function (b, a, c) {
        var e = new cb();
        e.name = b;
        e.nodeName = b;
        e.publicId = a;
        e.systemId = c;
        return e;
      },
    };
    H.prototype = {
      firstChild: null,
      lastChild: null,
      previousSibling: null,
      nextSibling: null,
      attributes: null,
      parentNode: null,
      childNodes: null,
      ownerDocument: null,
      nodeValue: null,
      namespaceURI: null,
      prefix: null,
      localName: null,
      insertBefore: function (b, a) {
        return Sb(this, b, a);
      },
      replaceChild: function (b, a) {
        this.insertBefore(b, a);
        a && this.removeChild(a);
      },
      removeChild: function (b) {
        return Rb(this, b);
      },
      appendChild: function (b) {
        return this.insertBefore(b, null);
      },
      hasChildNodes: function () {
        return null != this.firstChild;
      },
      cloneNode: function (b) {
        return fb(this.ownerDocument || this, this, b);
      },
      normalize: function () {
        for (var b = this.firstChild; b; ) {
          var a = b.nextSibling;
          a && a.nodeType == Ia && b.nodeType == Ia
            ? (this.removeChild(a), b.appendData(a.data))
            : (b.normalize(), (b = a));
        }
      },
      isSupported: function (b, a) {
        return this.ownerDocument.implementation.hasFeature(b, a);
      },
      hasAttributes: function () {
        return 0 < this.attributes.length;
      },
      lookupPrefix: function (b) {
        for (var a = this; a; ) {
          var c = a._nsMap;
          if (c) for (var e in c) if (c[e] == b) return e;
          a = a.nodeType == fa ? a.ownerDocument : a.parentNode;
        }
        return null;
      },
      lookupNamespaceURI: function (b) {
        for (var a = this; a; ) {
          var c = a._nsMap;
          if (c && b in c) return c[b];
          a = a.nodeType == fa ? a.ownerDocument : a.parentNode;
        }
        return null;
      },
      isDefaultNamespace: function (b) {
        return null == this.lookupPrefix(b);
      },
    };
    ma(L, H);
    ma(L, H.prototype);
    oa.prototype = {
      nodeName: '#document',
      nodeType: Yb,
      doctype: null,
      documentElement: null,
      _inc: 1,
      insertBefore: function (b, a) {
        if (b.nodeType == T) {
          for (var c = b.firstChild; c; ) {
            var e = c.nextSibling;
            this.insertBefore(c, a);
            c = e;
          }
          return b;
        }
        null == this.documentElement && b.nodeType == Q && (this.documentElement = b);
        return Sb(this, b, a), (b.ownerDocument = this), b;
      },
      removeChild: function (b) {
        this.documentElement == b && (this.documentElement = null);
        return Rb(this, b);
      },
      importNode: function (b, a) {
        return dc(this, b, a);
      },
      getElementById: function (b) {
        var a = null;
        Fa(this.documentElement, function (c) {
          if (c.nodeType == Q && c.getAttribute('id') == b) return (a = c), !0;
        });
        return a;
      },
      createElement: function (b) {
        var a = new da();
        a.ownerDocument = this;
        a.nodeName = b;
        a.tagName = b;
        a.childNodes = new Y();
        return ((a.attributes = new Ea())._ownerElement = a);
      },
      createDocumentFragment: function () {
        var b = new Ha();
        b.ownerDocument = this;
        b.childNodes = new Y();
        return b;
      },
      createTextNode: function (b) {
        var a = new $a();
        a.ownerDocument = this;
        a.appendData(b);
        return a;
      },
      createComment: function (b) {
        var a = new ab();
        a.ownerDocument = this;
        a.appendData(b);
        return a;
      },
      createCDATASection: function (b) {
        var a = new bb();
        a.ownerDocument = this;
        a.appendData(b);
        return a;
      },
      createProcessingInstruction: function (b, a) {
        var c = new eb();
        c.ownerDocument = this;
        c.tagName = c.target = b;
        c.nodeValue = c.data = a;
        return c;
      },
      createAttribute: function (b) {
        var a = new Ga();
        a.ownerDocument = this;
        a.name = b;
        a.nodeName = b;
        a.localName = b;
        a.specified = !0;
        return a;
      },
      createEntityReference: function (b) {
        var a = new db();
        a.ownerDocument = this;
        a.nodeName = b;
        return a;
      },
      createElementNS: function (b, a) {
        var c = new da(),
          e = a.split(':'),
          d = (c.attributes = new Ea());
        c.childNodes = new Y();
        c.ownerDocument = this;
        c.nodeName = a;
        c.tagName = a;
        c.namespaceURI = b;
        2 == e.length ? ((c.prefix = e[0]), (c.localName = e[1])) : (c.localName = a);
        return (d._ownerElement = c);
      },
      createAttributeNS: function (b, a) {
        var c = new Ga(),
          e = a.split(':');
        c.ownerDocument = this;
        c.nodeName = a;
        c.name = a;
        c.namespaceURI = b;
        c.specified = !0;
        2 == e.length ? ((c.prefix = e[0]), (c.localName = e[1])) : (c.localName = a);
        return c;
      },
    };
    K(oa, H);
    da.prototype = {
      nodeType: Q,
      hasAttribute: function (b) {
        return null != this.getAttributeNode(b);
      },
      getAttribute: function (b) {
        return ((b = this.getAttributeNode(b)) && b.value) || '';
      },
      getAttributeNode: function (b) {
        return this.attributes.getNamedItem(b);
      },
      setAttribute: function (b, a) {
        b = this.ownerDocument.createAttribute(b);
        b.value = b.nodeValue = '' + a;
        this.setAttributeNode(b);
      },
      removeAttribute: function (b) {
        (b = this.getAttributeNode(b)) && this.removeAttributeNode(b);
      },
      appendChild: function (b) {
        if (b.nodeType === T) return this.insertBefore(b, null);
        var a = b.parentNode;
        a && a.removeChild(b);
        a = this.lastChild;
        b.parentNode = this;
        b.previousSibling = a;
        b.nextSibling = null;
        a ? (a.nextSibling = b) : (this.firstChild = b);
        this.lastChild = b;
        Za(this.ownerDocument, this, b);
        return b;
      },
      setAttributeNode: function (b) {
        return this.attributes.setNamedItem(b);
      },
      setAttributeNodeNS: function (b) {
        return this.attributes.setNamedItemNS(b);
      },
      removeAttributeNode: function (b) {
        return this.attributes.removeNamedItem(b.nodeName);
      },
      removeAttributeNS: function (b, a) {
        (b = this.getAttributeNodeNS(b, a)) && this.removeAttributeNode(b);
      },
      hasAttributeNS: function (b, a) {
        return null != this.getAttributeNodeNS(b, a);
      },
      getAttributeNS: function (b, a) {
        return ((b = this.getAttributeNodeNS(b, a)) && b.value) || '';
      },
      setAttributeNS: function (b, a, c) {
        b = this.ownerDocument.createAttributeNS(b, a);
        b.value = b.nodeValue = '' + c;
        this.setAttributeNode(b);
      },
      getAttributeNodeNS: function (b, a) {
        return this.attributes.getNamedItemNS(b, a);
      },
      getElementsByTagName: function (b) {
        return new na(this, function (a) {
          var c = [];
          Fa(a, function (e) {
            e === a || e.nodeType != Q || ('*' !== b && e.tagName != b) || c.push(e);
          });
          return c;
        });
      },
      getElementsByTagNameNS: function (b, a) {
        return new na(this, function (c) {
          var e = [];
          Fa(c, function (d) {
            d === c ||
              d.nodeType !== Q ||
              ('*' !== b && d.namespaceURI !== b) ||
              ('*' !== a && d.localName != a) ||
              e.push(d);
          });
          return e;
        });
      },
    };
    oa.prototype.getElementsByTagName = da.prototype.getElementsByTagName;
    oa.prototype.getElementsByTagNameNS = da.prototype.getElementsByTagNameNS;
    K(da, H);
    Ga.prototype.nodeType = fa;
    K(Ga, H);
    pa.prototype = {
      data: '',
      substringData: function (b, a) {
        return this.data.substring(b, b + a);
      },
      appendData: function (b) {
        this.nodeValue = this.data = b = this.data + b;
        this.length = b.length;
      },
      insertData: function (b, a) {
        this.replaceData(b, 0, a);
      },
      appendChild: function () {
        throw Error(F[Be]);
      },
      deleteData: function (b, a) {
        this.replaceData(b, a, '');
      },
      replaceData: function (b, a, c) {
        var e = this.data.substring(0, b);
        b = this.data.substring(b + a);
        this.nodeValue = this.data = c = e + c + b;
        this.length = c.length;
      },
    };
    K(pa, H);
    $a.prototype = {
      nodeName: '#text',
      nodeType: Ia,
      splitText: function (b) {
        var a = this.data,
          c = a.substring(b);
        this.data = this.nodeValue = a = a.substring(0, b);
        this.length = a.length;
        b = this.ownerDocument.createTextNode(c);
        this.parentNode && this.parentNode.insertBefore(b, this.nextSibling);
        return b;
      },
    };
    K($a, pa);
    ab.prototype = { nodeName: '#comment', nodeType: $b };
    K(ab, pa);
    bb.prototype = { nodeName: '#cdata-section', nodeType: Zb };
    K(bb, pa);
    cb.prototype.nodeType = ac;
    K(cb, H);
    Tb.prototype.nodeType = Ae;
    K(Tb, H);
    Ub.prototype.nodeType = ze;
    K(Ub, H);
    db.prototype.nodeType = cc;
    K(db, H);
    Ha.prototype.nodeName = '#document-fragment';
    Ha.prototype.nodeType = T;
    K(Ha, H);
    eb.prototype.nodeType = bc;
    K(eb, H);
    Vb.prototype.serializeToString = function (b, a, c) {
      return Wb.call(b, a, c);
    };
    H.prototype.toString = Wb;
    try {
      if (Object.defineProperty) {
        var vc = function (b) {
          switch (b.nodeType) {
            case Q:
            case T:
              var a = [];
              for (b = b.firstChild; b; )
                7 !== b.nodeType && 8 !== b.nodeType && a.push(vc(b)), (b = b.nextSibling);
              return a.join('');
            default:
              return b.nodeValue;
          }
        };
        Object.defineProperty(na.prototype, 'length', {
          get: function () {
            Ya(this);
            return this.$$length;
          },
        });
        Object.defineProperty(H.prototype, 'textContent', {
          get: function () {
            return vc(this);
          },
          set: function (b) {
            switch (this.nodeType) {
              case Q:
              case T:
                for (; this.firstChild; ) this.removeChild(this.firstChild);
                (b || String(b)) && this.appendChild(this.ownerDocument.createTextNode(b));
                break;
              default:
                this.nodeValue = this.value = this.data = b;
            }
          },
        });
        Kb = function (b, a, c) {
          b['$$' + a] = c;
        };
      }
    } catch (b) {}
    var Ce = q(function (b, a) {
        function c(a) {
          this.options = a || { locator: {} };
        }
        function e(a, b, c) {
          function h(b) {
            var d = a[b];
            !d &&
              k &&
              (d =
                2 == a.length
                  ? function (d) {
                      a(b, d);
                    }
                  : a);
            e[b] =
              (d &&
                function (a) {
                  var h = d;
                  var e = c
                    ? '\n@' +
                      (c.systemId || '') +
                      '#[line:' +
                      c.lineNumber +
                      ',col:' +
                      c.columnNumber +
                      ']'
                    : void 0;
                  h('[xmldom ' + b + ']\t' + a + e);
                }) ||
              function () {};
          }
          if (!a) {
            if (b instanceof d) return b;
            a = b;
          }
          var e = {},
            k = a instanceof Function;
          c = c || {};
          h('warning');
          h('error');
          h('fatalError');
          return e;
        }
        function d() {
          this.cdata = !1;
        }
        function h(a, b) {
          b.lineNumber = a.lineNumber;
          b.columnNumber = a.columnNumber;
        }
        function k(a, b, d) {
          return 'string' == typeof a
            ? a.substr(b, d)
            : a.length >= b + d || b
            ? new java.lang.String(a, b, d) + ''
            : a;
        }
        function r(a, b) {
          a.currentElement ? a.currentElement.appendChild(b) : a.doc.appendChild(b);
        }
        c.prototype.parseFromString = function (a, b) {
          var c = this.options,
            h = new u(),
            k = c.domBuilder || new d(),
            r = c.errorHandler,
            f = c.locator,
            v = c.xmlns || {},
            w = { lt: '<', gt: '>', amp: '&', quot: '"', apos: "'" };
          f && k.setDocumentLocator(f);
          h.errorHandler = e(r, k, f);
          h.domBuilder = c.domBuilder || k;
          /\/x?html?$/.test(b) &&
            ((w.nbsp = '\u00a0'), (w.copy = '\u00a9'), (v[''] = 'http://www.w3.org/1999/xhtml'));
          v.xml = v.xml || 'http://www.w3.org/XML/1998/namespace';
          a ? h.parse(a, v, w) : h.errorHandler.error('invalid doc source');
          return k.doc;
        };
        d.prototype = {
          startDocument: function () {
            this.doc = new f().createDocument(null, null, null);
            this.locator && (this.doc.documentURI = this.locator.systemId);
          },
          startElement: function (a, b, d, c) {
            var e = this.doc;
            b = e.createElementNS(a, d || b);
            var k = c.length;
            r(this, b);
            this.currentElement = b;
            this.locator && h(this.locator, b);
            for (var u = 0; u < k; u++) {
              a = c.getURI(u);
              var f = c.getValue(u);
              d = c.getQName(u);
              a = e.createAttributeNS(a, d);
              this.locator && h(c.getLocator(u), a);
              a.value = a.nodeValue = f;
              b.setAttributeNode(a);
            }
          },
          endElement: function () {
            this.currentElement = this.currentElement.parentNode;
          },
          startPrefixMapping: function () {},
          endPrefixMapping: function () {},
          processingInstruction: function (a, b) {
            a = this.doc.createProcessingInstruction(a, b);
            this.locator && h(this.locator, a);
            r(this, a);
          },
          ignorableWhitespace: function () {},
          characters: function (a, b, d) {
            if ((a = k.apply(this, arguments))) {
              var c = this.cdata ? this.doc.createCDATASection(a) : this.doc.createTextNode(a);
              this.currentElement
                ? this.currentElement.appendChild(c)
                : /^\s*$/.test(a) && this.doc.appendChild(c);
              this.locator && h(this.locator, c);
            }
          },
          skippedEntity: function () {},
          endDocument: function () {
            this.doc.normalize();
          },
          setDocumentLocator: function (a) {
            if ((this.locator = a)) a.lineNumber = 0;
          },
          comment: function (a, b, d) {
            a = k.apply(this, arguments);
            var c = this.doc.createComment(a);
            this.locator && h(this.locator, c);
            r(this, c);
          },
          startCDATA: function () {
            this.cdata = !0;
          },
          endCDATA: function () {
            this.cdata = !1;
          },
          startDTD: function (a, b, d) {
            var c = this.doc.implementation;
            c &&
              c.createDocumentType &&
              ((a = c.createDocumentType(a, b, d)), this.locator && h(this.locator, a), r(this, a));
          },
          warning: function () {},
          error: function () {},
          fatalError: function (a) {
            throw a;
          },
        };
        'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'.replace(
          /\w+/g,
          function (a) {
            d.prototype[a] = function () {
              return null;
            };
          }
        );
        var u = Gb,
          f = (a.DOMImplementation = Pb);
        a.XMLSerializer = Vb;
        a.DOMParser = c;
      }),
      Ka = q(function (b, a) {
        function c(a) {
          return d(a) || h(a);
        }
        function e(a) {
          return function (b) {
            return b.nodeType === a;
          };
        }
        Object.defineProperty(a, '__esModule', { value: !0 });
        a.isElement = e(1);
        var d = (a.isText = e(3)),
          h = (a.isCdata = e(4)),
          k = (a.getChildren = function (a, b) {
            return Array.prototype.filter.call(a.childNodes, b);
          });
        a.getText = function (a) {
          return k(a, c)
            .map(function (a) {
              return a.nodeValue;
            })
            .join('')
            .trim();
        };
      });
    n(Ka);
    var U = q(function (b, a) {
      Object.defineProperty(a, '__esModule', { value: !0 });
      a.default = { bool: 'b', int: 'i', float: 'f', time: 't' };
    });
    n(U);
    var V = q(function (b, a) {
      Object.defineProperty(a, '__esModule', { value: !0 });
      var c = /^\s*(\d+):(\d+):(\d+(?:\.\d+)?)\s*$/;
      a.default = function (a) {
        var b = c.exec(a);
        if (null == b) throw Error('Failed to parse time "' + a + '"');
        return 60 * (60 * parseInt(b[1], 10) + parseInt(b[2], 10)) + parseFloat(b[3]);
      };
    });
    n(V);
    var qa = q(function (b, a) {
      function c(a, b, d) {
        b in a
          ? Object.defineProperty(a, b, {
              value: d,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (a[b] = d);
        return a;
      }
      Object.defineProperty(a, '__esModule', { value: !0 });
      var e;
      b = U && U.__esModule ? U : { default: U };
      var d = V && V.__esModule ? V : { default: V };
      a.default =
        ((e = {}),
        c(e, b.default.bool, function (a) {
          return 'true' === a || '1' === a;
        }),
        c(e, b.default.int, function (a) {
          return parseInt(a, 10);
        }),
        c(e, b.default.float, parseFloat),
        c(e, b.default.time, d.default),
        e);
    });
    n(qa);
    var wc = q(function (b, a) {
      Object.defineProperty(a, '__esModule', { value: !0 });
      var c = (function () {
          function a(a, b) {
            for (var d = 0; d < b.length; d++) {
              var c = b[d];
              c.enumerable = c.enumerable || !1;
              c.configurable = !0;
              'value' in c && (c.writable = !0);
              Object.defineProperty(a, c.key, c);
            }
          }
          return function (b, d, c) {
            d && a(b.prototype, d);
            c && a(b, c);
            return b;
          };
        })(),
        e = qa && qa.__esModule ? qa : { default: qa },
        d = (function () {
          function a(a) {
            return 1 === a.length
              ? a.toLowerCase()
              : a.substr(0, a.length - 1).toLowerCase() + a.charAt(a.length - 1);
          }
          var b = /^[A-Z]+/;
          return function (d) {
            return d.replace(b, a);
          };
        })();
      b = (function () {
        function a(b) {
          var d = b.collections,
            c = b.freeforms;
          b = b.types;
          if (!(this instanceof a)) throw new TypeError('Cannot call a class as a function');
          this._collections = d;
          this._freeforms = c;
          this._types = b;
        }
        c(a, [
          {
            key: 'unmarshal',
            value: function (a) {
              return this._createNode(a);
            },
          },
          {
            key: '_createNode',
            value: function (a) {
              var b = Object.create(null);
              b._value = this._convertPropertyValue((0, Ka.getText)(a), a.nodeName, '_value');
              this._copyAttributes(b, a);
              this._createCollections(b, a);
              this._createChildren(b, a);
              return b;
            },
          },
          {
            key: '_createFreeformNode',
            value: function (a) {
              var b = Object.create(null);
              this._copyAttributes(b, a);
              b._value = a;
              return b;
            },
          },
          {
            key: '_copyAttributes',
            value: function (a, b) {
              for (var d = b.nodeName, c = 0; c < b.attributes.length; ++c) {
                var h = b.attributes[c],
                  e = h.nodeName;
                a[e] = this._convertPropertyValue(h.nodeValue, d, e);
              }
            },
          },
          {
            key: '_createCollections',
            value: function (a, b) {
              null != this._collections[b.nodeName] &&
                this._collections[b.nodeName].forEach(function (b) {
                  a[d(b)] = [];
                });
            },
          },
          {
            key: '_createChildren',
            value: function (a, b) {
              var c = this,
                h = b.nodeName;
              (0, Ka.getChildren)(b, Ka.isElement).forEach(function (b) {
                var e = b.nodeName,
                  k = d(e);
                c._isFreeformParent(h)
                  ? c._isFreeformChild(h, e) && c._addFreeformChild(b, k, a)
                  : c._addNodeChild(b, k, a, h, e);
              });
            },
          },
          {
            key: '_addNodeChild',
            value: function (a, b, c, d, h) {
              a = this._createNode(a);
              if (null == c[b]) c[b] = a;
              else if (this._isCollection(d, h)) c[b].push(a);
              else throw Error('Multiple values for ' + d + '.' + h);
            },
          },
          {
            key: '_addFreeformChild',
            value: function (a, b, c) {
              c[b] = c[b] || [];
              c[b].push(this._createFreeformNode(a));
            },
          },
          {
            key: '_convertPropertyValue',
            value: function (a, b, c) {
              b = null != this._types[b] ? this._types[b][c] : null;
              return null != b ? e.default[b](a) : a;
            },
          },
          {
            key: '_isCollection',
            value: function (a, b) {
              var c = this._collections;
              return null != c[a] && ~c[a].indexOf(b);
            },
          },
          {
            key: '_isFreeformParent',
            value: function (a) {
              return null != this._freeforms[a];
            },
          },
          {
            key: '_isFreeformChild',
            value: function (a, b) {
              var c = this._freeforms;
              return null != c[a] && ~c[a].indexOf(b);
            },
          },
        ]);
        return a;
      })();
      a.default = b;
    });
    n(wc);
    var xc = q(function (b, a) {
      Object.defineProperty(a, '__esModule', { value: !0 });
      b = U && U.__esModule ? U : { default: U };
      a.default = {
        collections: {
          AdVerifications: ['Verification'],
          Companion: ['CompanionClickTracking'],
          CompanionAds: ['Companion'],
          CreativeExtensions: ['CreativeExtension'],
          Creatives: ['Creative'],
          Extensions: ['Extension'],
          Icon: ['IconViewTracking'],
          IconClicks: ['IconClickTracking'],
          Icons: ['Icon'],
          InLine: ['Category', 'Error', 'Impression', 'Survey'],
          MediaFiles: ['MediaFile', 'InteractiveCreativeFile'],
          NonLinear: ['NonLinearClickTracking'],
          NonLinearAds: ['NonLinear'],
          TrackingEvents: ['Tracking'],
          VAST: ['Error', 'Ad'],
          Verification: ['JavaScriptResource', 'FlashResource'],
          ViewableImpression: ['Viewable', 'NotViewable', 'ViewUndetermined'],
          VideoClicks: ['ClickTracking', 'CustomClick'],
          Wrapper: ['Impression', 'Error'],
        },
        freeforms: { CreativeExtensions: ['CreativeExtension'], Extensions: ['Extension'] },
        types: {
          Ad: { sequence: b.default.int },
          AdParameters: { xmlEncoded: b.default.bool },
          Companion: {
            width: b.default.int,
            height: b.default.int,
            expandedWidth: b.default.int,
            expandedHeight: b.default.int,
          },
          Creative: { sequence: b.default.int },
          Duration: { _value: b.default.time },
          Icon: {
            width: b.default.int,
            height: b.default.int,
            offset: b.default.time,
            duration: b.default.time,
          },
          MediaFile: {
            bitrate: b.default.int,
            minBitrate: b.default.int,
            maxBitrate: b.default.int,
            width: b.default.int,
            height: b.default.int,
            scalable: b.default.bool,
            maintainAspectRatio: b.default.bool,
          },
          NonLinear: {
            width: b.default.int,
            height: b.default.int,
            assetWidth: b.default.int,
            assetHeight: b.default.int,
            expandedWidth: b.default.int,
            expandedHeight: b.default.int,
            scalable: b.default.bool,
            maintainAspectRatio: b.default.bool,
            minSuggestedDuration: b.default.time,
          },
          Pricing: { _value: b.default.float },
          Wrapper: {
            followAdditionalWrappers: b.default.bool,
            allowMultipleAds: b.default.bool,
            fallbackOnNoAd: b.default.bool,
          },
        },
      };
    });
    n(xc);
    var La = q(function (b, a) {
      Object.defineProperty(a, '__esModule', { value: !0 });
      var c = (function () {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || !1;
            d.configurable = !0;
            'value' in d && (d.writable = !0);
            Object.defineProperty(a, d.key, d);
          }
        }
        return function (b, c, e) {
          c && a(b.prototype, c);
          e && a(b, e);
          return b;
        };
      })();
      a.SortedListItem = (function () {
        function a() {
          if (!(this instanceof a)) throw new TypeError('Cannot call a class as a function');
          this._sequence = null;
        }
        c(a, [
          {
            key: 'sequence',
            get: function () {
              return this._sequence;
            },
            set: function (a) {
              this._sequence = a;
            },
          },
        ]);
        return a;
      })();
    });
    n(La);
    var ra = q(function (b, a) {
      Object.defineProperty(a, '__esModule', { value: !0 });
      var c = (function () {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || !1;
            d.configurable = !0;
            'value' in d && (d.writable = !0);
            Object.defineProperty(a, d.key, d);
          }
        }
        return function (b, c, e) {
          c && a(b.prototype, c);
          e && a(b, e);
          return b;
        };
      })();
      a.SortedList = (function () {
        function a() {
          if (!(this instanceof a)) throw new TypeError('Cannot call a class as a function');
          this._contents = [];
        }
        p.initSymbol();
        p.initSymbolIterator();
        c(a, [
          {
            key: 'add',
            value: function (a) {
              this._contents.push(a);
              this._contents.sort(function (a, b) {
                return (a.sequence || 0) - (b.sequence || 0);
              });
            },
          },
          {
            key: 'remove',
            value: function (a) {
              for (var b = this._contents.indexOf(a); 0 <= b; )
                this._contents.splice(b, 1), (b = this._contents.indexOf(a, b));
            },
          },
          {
            key: 'get',
            value: function (a) {
              return this._contents[a];
            },
          },
          {
            key: 'clear',
            value: function () {
              this._contents.length = 0;
            },
          },
          {
            key: Symbol.iterator,
            value: function () {
              var a = this,
                b = 0;
              return {
                next: function () {
                  return b < a.length
                    ? { value: a.get(b++), done: !1 }
                    : { value: void 0, done: !0 };
                },
              };
            },
          },
          {
            key: 'toArray',
            value: function () {
              return this._contents.slice();
            },
          },
          {
            key: 'length',
            get: function () {
              return this._contents.length;
            },
          },
          {
            key: '$type',
            get: function () {
              return 'SortedList';
            },
          },
        ]);
        return a;
      })();
    });
    n(ra);
    var nb = q(function (b, a) {
      function c(a, b) {
        if ('function' !== typeof b && null !== b)
          throw new TypeError(
            'Super expression must either be null or a function, not ' + typeof b
          );
        a.prototype = Object.create(b && b.prototype, {
          constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
        });
        b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : (a.__proto__ = b));
      }
      Object.defineProperty(a, '__esModule', { value: !0 });
      a.AbstractAd = void 0;
      var e = (function () {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || !1;
            d.configurable = !0;
            'value' in d && (d.writable = !0);
            Object.defineProperty(a, d.key, d);
          }
        }
        return function (b, c, d) {
          c && a(b.prototype, c);
          d && a(b, d);
          return b;
        };
      })();
      a.AbstractAd = (function (a) {
        function b() {
          if (!(this instanceof b)) throw new TypeError('Cannot call a class as a function');
          var a = (b.__proto__ || Object.getPrototypeOf(b)).call(this);
          if (!this)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          a = !a || ('object' !== typeof a && 'function' !== typeof a) ? this : a;
          a._id = null;
          a._conditionalAd = !1;
          a._adSystem = null;
          a._impressions = [];
          a._pricing = null;
          a._errors = [];
          a._viewableImpression = null;
          a._verifications = [];
          a._extensions = [];
          a._creatives = new ra.SortedList();
          return a;
        }
        c(b, a);
        e(b, [
          {
            key: 'id',
            get: function () {
              return this._id;
            },
            set: function (a) {
              this._id = a;
            },
          },
          {
            key: 'conditionalAd',
            get: function () {
              return this._conditionalAd;
            },
            set: function (a) {
              this._conditionalAd = a;
            },
          },
          {
            key: 'adSystem',
            get: function () {
              return this._adSystem;
            },
            set: function (a) {
              this._adSystem = a;
            },
          },
          {
            key: 'impressions',
            get: function () {
              return this._impressions;
            },
          },
          {
            key: 'pricing',
            get: function () {
              return this._pricing;
            },
            set: function (a) {
              this._pricing = a;
            },
          },
          {
            key: 'errors',
            get: function () {
              return this._errors;
            },
          },
          {
            key: 'viewableImpression',
            get: function () {
              return this._viewableImpression;
            },
            set: function (a) {
              this._viewableImpression = a;
            },
          },
          {
            key: 'verifications',
            get: function () {
              return this._verifications;
            },
          },
          {
            key: 'extensions',
            get: function () {
              return this._extensions;
            },
          },
          {
            key: 'creatives',
            get: function () {
              return this._creatives;
            },
          },
        ]);
        return b;
      })(La.SortedListItem);
    });
    n(nb);
    var yc = q(function (b, a) {
      function c(a, b) {
        if ('function' !== typeof b && null !== b)
          throw new TypeError(
            'Super expression must either be null or a function, not ' + typeof b
          );
        a.prototype = Object.create(b && b.prototype, {
          constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
        });
        b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : (a.__proto__ = b));
      }
      Object.defineProperty(a, '__esModule', { value: !0 });
      a.InLine = void 0;
      var e = (function () {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || !1;
            d.configurable = !0;
            'value' in d && (d.writable = !0);
            Object.defineProperty(a, d.key, d);
          }
        }
        return function (b, c, d) {
          c && a(b.prototype, c);
          d && a(b, d);
          return b;
        };
      })();
      a.InLine = (function (a) {
        function b() {
          if (!(this instanceof b)) throw new TypeError('Cannot call a class as a function');
          var a = (b.__proto__ || Object.getPrototypeOf(b)).call(this);
          if (!this)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          a = !a || ('object' !== typeof a && 'function' !== typeof a) ? this : a;
          a._adTitle = null;
          a._categories = [];
          a._description = null;
          a._surveys = [];
          return a;
        }
        c(b, a);
        e(b, [
          {
            key: 'adTitle',
            get: function () {
              return this._adTitle;
            },
            set: function (a) {
              this._adTitle = a;
            },
          },
          {
            key: 'categories',
            get: function () {
              return this._categories;
            },
          },
          {
            key: 'description',
            get: function () {
              return this._description;
            },
            set: function (a) {
              this._description = a;
            },
          },
          {
            key: 'advertiser',
            get: function () {
              return this._advertiser;
            },
            set: function (a) {
              this._advertiser = a;
            },
          },
          {
            key: 'surveys',
            get: function () {
              return this._surveys;
            },
          },
          {
            key: '$type',
            get: function () {
              return 'InLine';
            },
          },
        ]);
        return b;
      })(nb.AbstractAd);
    });
    n(yc);
    var zc = q(function (b, a) {
      function c(a, b) {
        if ('function' !== typeof b && null !== b)
          throw new TypeError(
            'Super expression must either be null or a function, not ' + typeof b
          );
        a.prototype = Object.create(b && b.prototype, {
          constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
        });
        b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : (a.__proto__ = b));
      }
      Object.defineProperty(a, '__esModule', { value: !0 });
      a.Wrapper = void 0;
      var e = (function () {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || !1;
            d.configurable = !0;
            'value' in d && (d.writable = !0);
            Object.defineProperty(a, d.key, d);
          }
        }
        return function (b, c, d) {
          c && a(b.prototype, c);
          d && a(b, d);
          return b;
        };
      })();
      a.Wrapper = (function (a) {
        function b() {
          if (!(this instanceof b)) throw new TypeError('Cannot call a class as a function');
          var a = (b.__proto__ || Object.getPrototypeOf(b)).call(this);
          if (!this)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          a = !a || ('object' !== typeof a && 'function' !== typeof a) ? this : a;
          a._followAdditionalWrappers = !0;
          a._allowMultipleAds = !1;
          a._fallbackOnNoAd = !1;
          a._vastAdTagURI = null;
          return a;
        }
        c(b, a);
        e(b, [
          {
            key: 'followAdditionalWrappers',
            get: function () {
              return this._followAdditionalWrappers;
            },
            set: function (a) {
              this._followAdditionalWrappers = a;
            },
          },
          {
            key: 'allowMultipleAds',
            get: function () {
              return this._allowMultipleAds;
            },
            set: function (a) {
              this._allowMultipleAds = a;
            },
          },
          {
            key: 'fallbackOnNoAd',
            get: function () {
              return this._fallbackOnNoAd;
            },
            set: function (a) {
              this._fallbackOnNoAd = a;
            },
          },
          {
            key: 'vastAdTagURI',
            get: function () {
              return this._vastAdTagURI;
            },
            set: function (a) {
              this._vastAdTagURI = a;
            },
          },
          {
            key: '$type',
            get: function () {
              return 'Wrapper';
            },
          },
        ]);
        return b;
      })(nb.AbstractAd);
    });
    n(zc);
    var ob = q(function (b, a) {
      Object.defineProperty(a, '__esModule', { value: !0 });
      var c = (function () {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || !1;
            d.configurable = !0;
            'value' in d && (d.writable = !0);
            Object.defineProperty(a, d.key, d);
          }
        }
        return function (b, c, e) {
          c && a(b.prototype, c);
          e && a(b, e);
          return b;
        };
      })();
      a.AbstractClicks = (function () {
        function a() {
          if (!(this instanceof a)) throw new TypeError('Cannot call a class as a function');
          this._clickThrough = null;
          this._clickTrackings = [];
        }
        c(a, [
          {
            key: 'clickThrough',
            get: function () {
              return this._clickThrough;
            },
            set: function (a) {
              this._clickThrough = a;
            },
          },
          {
            key: 'clickTrackings',
            get: function () {
              return this._clickTrackings;
            },
          },
        ]);
        return a;
      })();
    });
    n(ob);
    var Ac = q(function (b, a) {
      function c(a, b) {
        if ('function' !== typeof b && null !== b)
          throw new TypeError(
            'Super expression must either be null or a function, not ' + typeof b
          );
        a.prototype = Object.create(b && b.prototype, {
          constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
        });
        b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : (a.__proto__ = b));
      }
      Object.defineProperty(a, '__esModule', { value: !0 });
      a.IconClicks = void 0;
      var e = (function () {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || !1;
            d.configurable = !0;
            'value' in d && (d.writable = !0);
            Object.defineProperty(a, d.key, d);
          }
        }
        return function (b, c, d) {
          c && a(b.prototype, c);
          d && a(b, d);
          return b;
        };
      })();
      a.IconClicks = (function (a) {
        function b() {
          if (!(this instanceof b)) throw new TypeError('Cannot call a class as a function');
          var a = (b.__proto__ || Object.getPrototypeOf(b)).apply(this, arguments);
          if (!this)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !a || ('object' !== typeof a && 'function' !== typeof a) ? this : a;
        }
        c(b, a);
        e(b, [
          {
            key: '$type',
            get: function () {
              return 'IconClicks';
            },
          },
        ]);
        return b;
      })(ob.AbstractClicks);
    });
    n(Ac);
    var Bc = q(function (b, a) {
      function c(a, b) {
        if ('function' !== typeof b && null !== b)
          throw new TypeError(
            'Super expression must either be null or a function, not ' + typeof b
          );
        a.prototype = Object.create(b && b.prototype, {
          constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
        });
        b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : (a.__proto__ = b));
      }
      Object.defineProperty(a, '__esModule', { value: !0 });
      a.VideoClicks = void 0;
      var e = (function () {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || !1;
            d.configurable = !0;
            'value' in d && (d.writable = !0);
            Object.defineProperty(a, d.key, d);
          }
        }
        return function (b, c, d) {
          c && a(b.prototype, c);
          d && a(b, d);
          return b;
        };
      })();
      a.VideoClicks = (function (a) {
        function b() {
          if (!(this instanceof b)) throw new TypeError('Cannot call a class as a function');
          var a = (b.__proto__ || Object.getPrototypeOf(b)).call(this);
          if (!this)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          a = !a || ('object' !== typeof a && 'function' !== typeof a) ? this : a;
          a._customClicks = [];
          return a;
        }
        c(b, a);
        e(b, [
          {
            key: 'customClicks',
            get: function () {
              return this._customClicks;
            },
          },
          {
            key: '$type',
            get: function () {
              return 'VideoClicks';
            },
          },
        ]);
        return b;
      })(ob.AbstractClicks);
    });
    n(Bc);
    var Cc = q(function (b, a) {
      Object.defineProperty(a, '__esModule', { value: !0 });
      var c = (function () {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || !1;
            d.configurable = !0;
            'value' in d && (d.writable = !0);
            Object.defineProperty(a, d.key, d);
          }
        }
        return function (b, c, e) {
          c && a(b.prototype, c);
          e && a(b, e);
          return b;
        };
      })();
      a.AdSystem = (function () {
        function a() {
          if (!(this instanceof a)) throw new TypeError('Cannot call a class as a function');
          this._name = this._version = null;
        }
        c(a, [
          {
            key: 'version',
            get: function () {
              return this._version;
            },
            set: function (a) {
              this._version = a;
            },
          },
          {
            key: 'name',
            get: function () {
              return this._name;
            },
            set: function (a) {
              this._name = a;
            },
          },
          {
            key: '$type',
            get: function () {
              return 'AdSystem';
            },
          },
        ]);
        return a;
      })();
    });
    n(Cc);
    var Dc = q(function (b, a) {
      Object.defineProperty(a, '__esModule', { value: !0 });
      var c = (function () {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || !1;
            d.configurable = !0;
            'value' in d && (d.writable = !0);
            Object.defineProperty(a, d.key, d);
          }
        }
        return function (b, c, e) {
          c && a(b.prototype, c);
          e && a(b, e);
          return b;
        };
      })();
      a.Category = (function () {
        function a() {
          if (!(this instanceof a)) throw new TypeError('Cannot call a class as a function');
          this._code = this._authority = null;
        }
        c(a, [
          {
            key: 'authority',
            get: function () {
              return this._authority;
            },
            set: function (a) {
              this._authority = a;
            },
          },
          {
            key: 'code',
            get: function () {
              return this._code;
            },
            set: function (a) {
              this._code = a;
            },
          },
          {
            key: '$type',
            get: function () {
              return 'Category';
            },
          },
        ]);
        return a;
      })();
    });
    n(Dc);
    var Ec = q(function (b, a) {
      Object.defineProperty(a, '__esModule', { value: !0 });
      var c = (function () {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || !1;
            d.configurable = !0;
            'value' in d && (d.writable = !0);
            Object.defineProperty(a, d.key, d);
          }
        }
        return function (b, c, e) {
          c && a(b.prototype, c);
          e && a(b, e);
          return b;
        };
      })();
      a.Click = (function () {
        function a() {
          if (!(this instanceof a)) throw new TypeError('Cannot call a class as a function');
          this._uri = this._id = null;
        }
        c(a, [
          {
            key: 'id',
            get: function () {
              return this._id;
            },
            set: function (a) {
              this._id = a;
            },
          },
          {
            key: 'uri',
            get: function () {
              return this._uri;
            },
            set: function (a) {
              this._uri = a;
            },
          },
          {
            key: '$type',
            get: function () {
              return 'Click';
            },
          },
        ]);
        return a;
      })();
    });
    n(Ec);
    var Fc = q(function (b, a) {
      function c(a, b) {
        if ('function' !== typeof b && null !== b)
          throw new TypeError(
            'Super expression must either be null or a function, not ' + typeof b
          );
        a.prototype = Object.create(b && b.prototype, {
          constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
        });
        b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : (a.__proto__ = b));
      }
      Object.defineProperty(a, '__esModule', { value: !0 });
      a.Creative = void 0;
      var e = (function () {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || !1;
            d.configurable = !0;
            'value' in d && (d.writable = !0);
            Object.defineProperty(a, d.key, d);
          }
        }
        return function (b, c, d) {
          c && a(b.prototype, c);
          d && a(b, d);
          return b;
        };
      })();
      a.Creative = (function (a) {
        function b() {
          if (!(this instanceof b)) throw new TypeError('Cannot call a class as a function');
          var a = (b.__proto__ || Object.getPrototypeOf(b)).call(this);
          if (!this)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          a = !a || ('object' !== typeof a && 'function' !== typeof a) ? this : a;
          a._id = null;
          a._adID = null;
          a._apiFramework = null;
          a._universalAdId = null;
          a._extensions = [];
          a._linear = null;
          a._companionAds = null;
          a._nonLinearAds = null;
          return a;
        }
        c(b, a);
        e(b, [
          {
            key: 'id',
            get: function () {
              return this._id;
            },
            set: function (a) {
              this._id = a;
            },
          },
          {
            key: 'adID',
            get: function () {
              return this._adID;
            },
            set: function (a) {
              this._adID = a;
            },
          },
          {
            key: 'apiFramework',
            get: function () {
              return this._apiFramework;
            },
            set: function (a) {
              this._apiFramework = a;
            },
          },
          {
            key: 'universalAdId',
            get: function () {
              return this._universalAdId;
            },
            set: function (a) {
              this._universalAdId = a;
            },
          },
          {
            key: 'extensions',
            get: function () {
              return this._extensions;
            },
          },
          {
            key: 'linear',
            get: function () {
              return this._linear;
            },
            set: function (a) {
              this._linear = a;
            },
          },
          {
            key: 'companionAds',
            get: function () {
              return this._companionAds;
            },
            set: function (a) {
              this._companionAds = a;
            },
          },
          {
            key: 'nonLinearAds',
            get: function () {
              return this._nonLinearAds;
            },
            set: function (a) {
              this._nonLinearAds = a;
            },
          },
          {
            key: '$type',
            get: function () {
              return 'Creative';
            },
          },
        ]);
        return b;
      })(La.SortedListItem);
    });
    n(Fc);
    var Gc = q(function (b, a) {
      Object.defineProperty(a, '__esModule', { value: !0 });
      var c = (function () {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || !1;
            d.configurable = !0;
            'value' in d && (d.writable = !0);
            Object.defineProperty(a, d.key, d);
          }
        }
        return function (b, c, e) {
          c && a(b.prototype, c);
          e && a(b, e);
          return b;
        };
      })();
      a.Icon = (function () {
        function a() {
          if (!(this instanceof a)) throw new TypeError('Cannot call a class as a function');
          this._clicks =
            this._resource =
            this._pxratio =
            this._apiFramework =
            this._offset =
            this._duration =
            this._yPosition =
            this._xPosition =
            this._height =
            this._width =
            this._program =
              null;
          this._viewTrackings = [];
        }
        c(a, [
          {
            key: 'program',
            get: function () {
              return this._program;
            },
            set: function (a) {
              this._program = a;
            },
          },
          {
            key: 'width',
            get: function () {
              return this._width;
            },
            set: function (a) {
              this._width = a;
            },
          },
          {
            key: 'height',
            get: function () {
              return this._height;
            },
            set: function (a) {
              this._height = a;
            },
          },
          {
            key: 'xPosition',
            get: function () {
              return this._xPosition;
            },
            set: function (a) {
              this._xPosition = a;
            },
          },
          {
            key: 'yPosition',
            get: function () {
              return this._yPosition;
            },
            set: function (a) {
              this._yPosition = a;
            },
          },
          {
            key: 'duration',
            get: function () {
              return this._duration;
            },
            set: function (a) {
              this._duration = a;
            },
          },
          {
            key: 'offset',
            get: function () {
              return this._offset;
            },
            set: function (a) {
              this._offset = a;
            },
          },
          {
            key: 'apiFramework',
            get: function () {
              return this._apiFramework;
            },
            set: function (a) {
              this._apiFramework = a;
            },
          },
          {
            key: 'pxratio',
            get: function () {
              return this._pxratio;
            },
            set: function (a) {
              this._pxratio = a;
            },
          },
          {
            key: 'resource',
            get: function () {
              return this._resource;
            },
            set: function (a) {
              this._resource = a;
            },
          },
          {
            key: 'clicks',
            get: function () {
              return this._clicks;
            },
            set: function (a) {
              this._clicks = a;
            },
          },
          {
            key: 'viewTrackings',
            get: function () {
              return this._viewTrackings;
            },
          },
          {
            key: '$type',
            get: function () {
              return 'Icon';
            },
          },
        ]);
        return a;
      })();
    });
    n(Gc);
    var Hc = q(function (b, a) {
      Object.defineProperty(a, '__esModule', { value: !0 });
      var c = (function () {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || !1;
            d.configurable = !0;
            'value' in d && (d.writable = !0);
            Object.defineProperty(a, d.key, d);
          }
        }
        return function (b, c, e) {
          c && a(b.prototype, c);
          e && a(b, e);
          return b;
        };
      })();
      a.Impression = (function () {
        function a() {
          if (!(this instanceof a)) throw new TypeError('Cannot call a class as a function');
          this._uri = this._id = null;
        }
        c(a, [
          {
            key: 'id',
            get: function () {
              return this._id;
            },
            set: function (a) {
              this._id = a;
            },
          },
          {
            key: 'uri',
            get: function () {
              return this._uri;
            },
            set: function (a) {
              this._uri = a;
            },
          },
          {
            key: '$type',
            get: function () {
              return 'Impression';
            },
          },
        ]);
        return a;
      })();
    });
    n(Hc);
    var Ic = q(function (b, a) {
      Object.defineProperty(a, '__esModule', { value: !0 });
      var c = (function () {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || !1;
            d.configurable = !0;
            'value' in d && (d.writable = !0);
            Object.defineProperty(a, d.key, d);
          }
        }
        return function (b, c, e) {
          c && a(b.prototype, c);
          e && a(b, e);
          return b;
        };
      })();
      a.InteractiveCreativeFile = (function () {
        function a() {
          if (!(this instanceof a)) throw new TypeError('Cannot call a class as a function');
          this._url = this._apiFramework = this._type = null;
        }
        c(a, [
          {
            key: 'type',
            get: function () {
              return this._type;
            },
            set: function (a) {
              this._type = a;
            },
          },
          {
            key: 'apiFramework',
            get: function () {
              return this._apiFramework;
            },
            set: function (a) {
              this._apiFramework = a;
            },
          },
          {
            key: 'uri',
            get: function () {
              return this._uri;
            },
            set: function (a) {
              this._uri = a;
            },
          },
          {
            key: '$type',
            get: function () {
              return 'InteractiveCreativeFile';
            },
          },
        ]);
        return a;
      })();
    });
    n(Ic);
    var Jc = q(function (b, a) {
      Object.defineProperty(a, '__esModule', { value: !0 });
      var c = (function () {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || !1;
            d.configurable = !0;
            'value' in d && (d.writable = !0);
            Object.defineProperty(a, d.key, d);
          }
        }
        return function (b, c, e) {
          c && a(b.prototype, c);
          e && a(b, e);
          return b;
        };
      })();
      a.MediaFile = (function () {
        function a() {
          if (!(this instanceof a)) throw new TypeError('Cannot call a class as a function');
          this._maxBitrate =
            this._minBitrate =
            this._bitrate =
            this._id =
            this._codec =
            this._height =
            this._width =
            this._type =
            this._delivery =
              null;
          this._maintainAspectRatio = this._scalable = !1;
          this._uri = this._apiFramework = null;
        }
        c(a, [
          {
            key: 'delivery',
            get: function () {
              return this._delivery;
            },
            set: function (a) {
              this._delivery = a;
            },
          },
          {
            key: 'type',
            get: function () {
              return this._type;
            },
            set: function (a) {
              this._type = a;
            },
          },
          {
            key: 'width',
            get: function () {
              return this._width;
            },
            set: function (a) {
              this._width = a;
            },
          },
          {
            key: 'height',
            get: function () {
              return this._height;
            },
            set: function (a) {
              this._height = a;
            },
          },
          {
            key: 'codec',
            get: function () {
              return this._codec;
            },
            set: function (a) {
              this._codec = a;
            },
          },
          {
            key: 'id',
            get: function () {
              return this._id;
            },
            set: function (a) {
              this._id = a;
            },
          },
          {
            key: 'bitrate',
            get: function () {
              return this._bitrate;
            },
            set: function (a) {
              this._bitrate = a;
            },
          },
          {
            key: 'minBitrate',
            get: function () {
              return this._minBitrate;
            },
            set: function (a) {
              this._minBitrate = a;
            },
          },
          {
            key: 'maxBitrate',
            get: function () {
              return this._maxBitrate;
            },
            set: function (a) {
              this._maxBitrate = a;
            },
          },
          {
            key: 'scalable',
            get: function () {
              return this._scalable;
            },
            set: function (a) {
              this._scalable = a;
            },
          },
          {
            key: 'maintainAspectRatio',
            get: function () {
              return this._maintainAspectRatio;
            },
            set: function (a) {
              this._maintainAspectRatio = a;
            },
          },
          {
            key: 'apiFramework',
            get: function () {
              return this._apiFramework;
            },
            set: function (a) {
              this._apiFramework = a;
            },
          },
          {
            key: 'uri',
            get: function () {
              return this._uri;
            },
            set: function (a) {
              this._uri = a;
            },
          },
          {
            key: '$type',
            get: function () {
              return 'MediaFile';
            },
          },
        ]);
        return a;
      })();
    });
    n(Jc);
    var Kc = q(function (b, a) {
      Object.defineProperty(a, '__esModule', { value: !0 });
      var c = (function () {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || !1;
            d.configurable = !0;
            'value' in d && (d.writable = !0);
            Object.defineProperty(a, d.key, d);
          }
        }
        return function (b, c, e) {
          c && a(b.prototype, c);
          e && a(b, e);
          return b;
        };
      })();
      a.Pricing = (function () {
        function a() {
          if (!(this instanceof a)) throw new TypeError('Cannot call a class as a function');
          this._value = this._currency = this._model = null;
        }
        c(a, [
          {
            key: 'model',
            get: function () {
              return this._model;
            },
            set: function (a) {
              this._model = a;
            },
          },
          {
            key: 'currency',
            get: function () {
              return this._currency;
            },
            set: function (a) {
              this._currency = a;
            },
          },
          {
            key: 'value',
            get: function () {
              return this._value;
            },
            set: function (a) {
              this._value = a;
            },
          },
          {
            key: '$type',
            get: function () {
              return 'Pricing';
            },
          },
        ]);
        return a;
      })();
    });
    n(Kc);
    var Lc = q(function (b, a) {
      Object.defineProperty(a, '__esModule', { value: !0 });
      var c = (function () {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || !1;
            d.configurable = !0;
            'value' in d && (d.writable = !0);
            Object.defineProperty(a, d.key, d);
          }
        }
        return function (b, c, e) {
          c && a(b.prototype, c);
          e && a(b, e);
          return b;
        };
      })();
      a.Survey = (function () {
        function a() {
          if (!(this instanceof a)) throw new TypeError('Cannot call a class as a function');
          this._uri = this._type = null;
        }
        c(a, [
          {
            key: 'type',
            get: function () {
              return this._type;
            },
            set: function (a) {
              this._type = a;
            },
          },
          {
            key: 'uri',
            get: function () {
              return this._uri;
            },
            set: function (a) {
              this._uri = a;
            },
          },
          {
            key: '$type',
            get: function () {
              return 'Survey';
            },
          },
        ]);
        return a;
      })();
    });
    n(Lc);
    var Mc = q(function (b, a) {
      Object.defineProperty(a, '__esModule', { value: !0 });
      var c = (function () {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || !1;
            d.configurable = !0;
            'value' in d && (d.writable = !0);
            Object.defineProperty(a, d.key, d);
          }
        }
        return function (b, c, e) {
          c && a(b.prototype, c);
          e && a(b, e);
          return b;
        };
      })();
      a.TrackingEvent = (function () {
        function a() {
          if (!(this instanceof a)) throw new TypeError('Cannot call a class as a function');
          this._offset = this._uri = null;
        }
        c(a, [
          {
            key: 'uri',
            get: function () {
              return this._uri;
            },
            set: function (a) {
              this._uri = a;
            },
          },
          {
            key: 'offset',
            get: function () {
              return this._offset;
            },
            set: function (a) {
              this._offset = a;
            },
          },
          {
            key: '$type',
            get: function () {
              return 'TrackingEvent';
            },
          },
        ]);
        return a;
      })();
    });
    n(Mc);
    var Nc = q(function (b, a) {
      Object.defineProperty(a, '__esModule', { value: !0 });
      var c = (function () {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || !1;
            d.configurable = !0;
            'value' in d && (d.writable = !0);
            Object.defineProperty(a, d.key, d);
          }
        }
        return function (b, c, e) {
          c && a(b.prototype, c);
          e && a(b, e);
          return b;
        };
      })();
      a.TrackingEvents = (function () {
        function a() {
          if (!(this instanceof a)) throw new TypeError('Cannot call a class as a function');
          this._map = Object.create(null);
        }
        c(a, [
          {
            key: 'get',
            value: function (a) {
              return this._map[a] || [];
            },
          },
          {
            key: 'add',
            value: function (a, b) {
              this._map[a] = this._map[a] || [];
              this._map[a].push(b);
            },
          },
          {
            key: 'types',
            get: function () {
              return Object.keys(this._map);
            },
          },
          {
            key: '$type',
            get: function () {
              return 'TrackingEvents';
            },
          },
        ]);
        return a;
      })();
    });
    n(Nc);
    var Oc = q(function (b, a) {
      Object.defineProperty(a, '__esModule', { value: !0 });
      var c = (function () {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || !1;
            d.configurable = !0;
            'value' in d && (d.writable = !0);
            Object.defineProperty(a, d.key, d);
          }
        }
        return function (b, c, e) {
          c && a(b.prototype, c);
          e && a(b, e);
          return b;
        };
      })();
      a.UniversalAdId = (function () {
        function a() {
          if (!(this instanceof a)) throw new TypeError('Cannot call a class as a function');
          this._idValue = this._idRegistry = 'unknown';
          this._creativeIdentifier = null;
        }
        c(a, [
          {
            key: 'idRegistry',
            get: function () {
              return this._idRegistry;
            },
            set: function (a) {
              this._idRegistry = a;
            },
          },
          {
            key: 'idValue',
            get: function () {
              return this._idValue;
            },
            set: function (a) {
              this._idValue = a;
            },
          },
          {
            key: 'creativeIdentifier',
            get: function () {
              return this._creativeIdentifier;
            },
            set: function (a) {
              this._creativeIdentifier = a;
            },
          },
          {
            key: '$type',
            get: function () {
              return 'UniversalAdId';
            },
          },
        ]);
        return a;
      })();
    });
    n(Oc);
    var pb = q(function (b, a) {
      Object.defineProperty(a, '__esModule', { value: !0 });
      a.AdBuffet = void 0;
      var c = (function () {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || !1;
            d.configurable = !0;
            'value' in d && (d.writable = !0);
            Object.defineProperty(a, d.key, d);
          }
        }
        return function (b, c, e) {
          c && a(b.prototype, c);
          e && a(b, e);
          return b;
        };
      })();
      a.AdBuffet = (function () {
        function a() {
          if (!(this instanceof a)) throw new TypeError('Cannot call a class as a function');
          this._ads = new ra.SortedList();
          this._adPod = null;
        }
        c(a, [
          {
            key: 'ads',
            get: function () {
              return this._ads;
            },
          },
          {
            key: 'adPod',
            get: function () {
              return this._adPod;
            },
            set: function (a) {
              this._adPod = a;
            },
          },
          {
            key: '$type',
            get: function () {
              return 'AdBuffet';
            },
          },
        ]);
        return a;
      })();
    });
    n(pb);
    var Pc = q(function (b, a) {
      function c(a, b) {
        if ('function' !== typeof b && null !== b)
          throw new TypeError(
            'Super expression must either be null or a function, not ' + typeof b
          );
        a.prototype = Object.create(b && b.prototype, {
          constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
        });
        b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : (a.__proto__ = b));
      }
      Object.defineProperty(a, '__esModule', { value: !0 });
      a.VAST = void 0;
      var e = (function () {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || !1;
            d.configurable = !0;
            'value' in d && (d.writable = !0);
            Object.defineProperty(a, d.key, d);
          }
        }
        return function (b, c, d) {
          c && a(b.prototype, c);
          d && a(b, d);
          return b;
        };
      })();
      a.VAST = (function (a) {
        function b() {
          if (!(this instanceof b)) throw new TypeError('Cannot call a class as a function');
          var a = (b.__proto__ || Object.getPrototypeOf(b)).call(this);
          if (!this)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          a = !a || ('object' !== typeof a && 'function' !== typeof a) ? this : a;
          a._uri = null;
          a._version = null;
          a._errors = [];
          return a;
        }
        c(b, a);
        e(b, [
          {
            key: 'uri',
            get: function () {
              return this._uri;
            },
            set: function (a) {
              this._uri = a;
            },
          },
          {
            key: 'version',
            get: function () {
              return this._version;
            },
            set: function (a) {
              this._version = a;
            },
          },
          {
            key: 'errors',
            get: function () {
              return this._errors;
            },
          },
          {
            key: '$type',
            get: function () {
              return 'VAST';
            },
          },
        ]);
        return b;
      })(pb.AdBuffet);
    });
    n(Pc);
    var Qc = q(function (b, a) {
      Object.defineProperty(a, '__esModule', { value: !0 });
      var c = (function () {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || !1;
            d.configurable = !0;
            'value' in d && (d.writable = !0);
            Object.defineProperty(a, d.key, d);
          }
        }
        return function (b, c, e) {
          c && a(b.prototype, c);
          e && a(b, e);
          return b;
        };
      })();
      a.Verification = (function () {
        function a() {
          if (!(this instanceof a)) throw new TypeError('Cannot call a class as a function');
          this._vendor = null;
          this._javaScriptResources = [];
          this._flashResources = [];
          this._viewableImpression = null;
        }
        c(a, [
          {
            key: 'vendor',
            get: function () {
              return this._vendor;
            },
            set: function (a) {
              this._vendor = a;
            },
          },
          {
            key: 'javaScriptResources',
            get: function () {
              return this._javaScriptResources;
            },
          },
          {
            key: 'flashResources',
            get: function () {
              return this._flashResources;
            },
          },
          {
            key: 'viewableImpression',
            get: function () {
              return this._viewableImpression;
            },
            set: function (a) {
              this._viewableImpression = a;
            },
          },
          {
            key: '$type',
            get: function () {
              return 'Verification';
            },
          },
        ]);
        return a;
      })();
    });
    n(Qc);
    var Rc = q(function (b, a) {
      Object.defineProperty(a, '__esModule', { value: !0 });
      var c = (function () {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || !1;
            d.configurable = !0;
            'value' in d && (d.writable = !0);
            Object.defineProperty(a, d.key, d);
          }
        }
        return function (b, c, e) {
          c && a(b.prototype, c);
          e && a(b, e);
          return b;
        };
      })();
      a.ViewableImpression = (function () {
        function a() {
          if (!(this instanceof a)) throw new TypeError('Cannot call a class as a function');
          this._id = null;
          this._viewables = [];
          this._notViewables = [];
          this._viewUndetermineds = [];
        }
        c(a, [
          {
            key: 'id',
            get: function () {
              return this._id;
            },
            set: function (a) {
              this._id = a;
            },
          },
          {
            key: 'viewables',
            get: function () {
              return this._viewables;
            },
          },
          {
            key: 'notViewables',
            get: function () {
              return this._notViewables;
            },
          },
          {
            key: 'viewUndetermineds',
            get: function () {
              return this._viewUndetermineds;
            },
          },
          {
            key: '$type',
            get: function () {
              return 'ViewableImpression';
            },
          },
        ]);
        return a;
      })();
    });
    n(Rc);
    var Sc = q(function (b, a) {
      Object.defineProperty(a, '__esModule', { value: !0 });
      var c = (function () {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || !1;
            d.configurable = !0;
            'value' in d && (d.writable = !0);
            Object.defineProperty(a, d.key, d);
          }
        }
        return function (b, c, e) {
          c && a(b.prototype, c);
          e && a(b, e);
          return b;
        };
      })();
      a.CompanionAds = (function () {
        function a() {
          if (!(this instanceof a)) throw new TypeError('Cannot call a class as a function');
          this._required = null;
          this._companions = [];
        }
        c(a, [
          {
            key: 'required',
            get: function () {
              return this._required;
            },
            set: function (a) {
              this._required = a;
            },
          },
          {
            key: 'companions',
            get: function () {
              return this._companions;
            },
          },
          {
            key: '$type',
            get: function () {
              return 'CompanionAds';
            },
          },
        ]);
        return a;
      })();
    });
    n(Sc);
    var Tc = q(function (b, a) {
      Object.defineProperty(a, '__esModule', { value: !0 });
      var c = (function () {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || !1;
            d.configurable = !0;
            'value' in d && (d.writable = !0);
            Object.defineProperty(a, d.key, d);
          }
        }
        return function (b, c, e) {
          c && a(b.prototype, c);
          e && a(b, e);
          return b;
        };
      })();
      a.Companion = (function () {
        function a() {
          if (!(this instanceof a)) throw new TypeError('Cannot call a class as a function');
          this._clickThrough =
            this._altText =
            this._adParameters =
            this._resource =
            this._pxratio =
            this._adSlotID =
            this._apiFramework =
            this._expandedHeight =
            this._expandedWidth =
            this._assetHeight =
            this._assetWidth =
            this._height =
            this._width =
            this._id =
              null;
          this._clickTrackings = [];
          this._trackingEvents = null;
        }
        c(a, [
          {
            key: 'id',
            get: function () {
              return this._id;
            },
            set: function (a) {
              this._id = a;
            },
          },
          {
            key: 'width',
            get: function () {
              return this._width;
            },
            set: function (a) {
              this._width = a;
            },
          },
          {
            key: 'height',
            get: function () {
              return this._height;
            },
            set: function (a) {
              this._height = a;
            },
          },
          {
            key: 'assetWidth',
            get: function () {
              return this._assetWidth;
            },
            set: function (a) {
              this._assetWidth = a;
            },
          },
          {
            key: 'assetHeight',
            get: function () {
              return this._assetHeight;
            },
            set: function (a) {
              this._assetHeight = a;
            },
          },
          {
            key: 'expandedWidth',
            get: function () {
              return this._expandedWidth;
            },
            set: function (a) {
              this._expandedWidth = a;
            },
          },
          {
            key: 'expandedHeight',
            get: function () {
              return this._expandedHeight;
            },
            set: function (a) {
              this._expandedHeight = a;
            },
          },
          {
            key: 'apiFramework',
            get: function () {
              return this._apiFramework;
            },
            set: function (a) {
              this._apiFramework = a;
            },
          },
          {
            key: 'adSlotID',
            get: function () {
              return this._adSlotID;
            },
            set: function (a) {
              this._adSlotID = a;
            },
          },
          {
            key: 'pxratio',
            get: function () {
              return this._pxratio;
            },
            set: function (a) {
              this._pxratio = a;
            },
          },
          {
            key: 'resource',
            get: function () {
              return this._resource;
            },
            set: function (a) {
              this._resource = a;
            },
          },
          {
            key: 'adParameters',
            get: function () {
              return this._adParameters;
            },
            set: function (a) {
              this._adParameters = a;
            },
          },
          {
            key: 'altText',
            get: function () {
              return this._altText;
            },
            set: function (a) {
              this._altText = a;
            },
          },
          {
            key: 'clickThrough',
            get: function () {
              return this._clickThrough;
            },
            set: function (a) {
              this._clickThrough = a;
            },
          },
          {
            key: 'clickTrackings',
            get: function () {
              return this._clickTrackings;
            },
          },
          {
            key: 'trackingEvents',
            get: function () {
              return this._trackingEvents;
            },
            set: function (a) {
              this._trackingEvents = a;
            },
          },
          {
            key: '$type',
            get: function () {
              return 'Companion';
            },
          },
        ]);
        return a;
      })();
    });
    n(Tc);
    var Uc = q(function (b, a) {
      Object.defineProperty(a, '__esModule', { value: !0 });
      var c = (function () {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || !1;
            d.configurable = !0;
            'value' in d && (d.writable = !0);
            Object.defineProperty(a, d.key, d);
          }
        }
        return function (b, c, e) {
          c && a(b.prototype, c);
          e && a(b, e);
          return b;
        };
      })();
      a.Linear = (function () {
        function a() {
          if (!(this instanceof a)) throw new TypeError('Cannot call a class as a function');
          this._mezzanine = this._duration = this._skipoffset = null;
          this._mediaFiles = [];
          this._interactiveCreativeFiles = [];
          this._trackingEvents = this._videoClicks = this._adParameters = null;
          this._icons = [];
        }
        c(a, [
          {
            key: 'skipoffset',
            get: function () {
              return this._skipoffset;
            },
            set: function (a) {
              this._skipoffset = a;
            },
          },
          {
            key: 'duration',
            get: function () {
              return this._duration;
            },
            set: function (a) {
              this._duration = a;
            },
          },
          {
            key: 'mezzanine',
            get: function () {
              return this._mezzanine;
            },
            set: function (a) {
              this._mezzanine = a;
            },
          },
          {
            key: 'mediaFiles',
            get: function () {
              return this._mediaFiles;
            },
          },
          {
            key: 'interactiveCreativeFiles',
            get: function () {
              return this._interactiveCreativeFiles;
            },
          },
          {
            key: 'adParameters',
            get: function () {
              return this._adParameters;
            },
            set: function (a) {
              this._adParameters = a;
            },
          },
          {
            key: 'videoClicks',
            get: function () {
              return this._videoClicks;
            },
            set: function (a) {
              this._videoClicks = a;
            },
          },
          {
            key: 'trackingEvents',
            get: function () {
              return this._trackingEvents;
            },
            set: function (a) {
              this._trackingEvents = a;
            },
          },
          {
            key: 'icons',
            get: function () {
              return this._icons;
            },
          },
          {
            key: '$type',
            get: function () {
              return 'Linear';
            },
          },
        ]);
        return a;
      })();
    });
    n(Uc);
    var Vc = q(function (b, a) {
      Object.defineProperty(a, '__esModule', { value: !0 });
      var c = (function () {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || !1;
            d.configurable = !0;
            'value' in d && (d.writable = !0);
            Object.defineProperty(a, d.key, d);
          }
        }
        return function (b, c, e) {
          c && a(b.prototype, c);
          e && a(b, e);
          return b;
        };
      })();
      a.NonLinearAds = (function () {
        function a() {
          if (!(this instanceof a)) throw new TypeError('Cannot call a class as a function');
          this._nonLinears = [];
          this._trackingEvents = null;
        }
        c(a, [
          {
            key: 'nonLinears',
            get: function () {
              return this._nonLinears;
            },
          },
          {
            key: 'trackingEvents',
            get: function () {
              return this._trackingEvents;
            },
            set: function (a) {
              this._trackingEvents = a;
            },
          },
          {
            key: '$type',
            get: function () {
              return 'NonLinearAds';
            },
          },
        ]);
        return a;
      })();
    });
    n(Vc);
    var Wc = q(function (b, a) {
      Object.defineProperty(a, '__esModule', { value: !0 });
      var c = (function () {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || !1;
            d.configurable = !0;
            'value' in d && (d.writable = !0);
            Object.defineProperty(a, d.key, d);
          }
        }
        return function (b, c, e) {
          c && a(b.prototype, c);
          e && a(b, e);
          return b;
        };
      })();
      a.NonLinear = (function () {
        function a() {
          if (!(this instanceof a)) throw new TypeError('Cannot call a class as a function');
          this._expandedHeight = this._expandedWidth = this._height = this._width = this._id = null;
          this._maintainAspectRatio = this._scalable = !1;
          this._clickThrough =
            this._adParameters =
            this._resource =
            this._apiFramework =
            this._minSuggestedDuration =
              null;
          this._clickTrackings = [];
        }
        c(a, [
          {
            key: 'id',
            get: function () {
              return this._id;
            },
            set: function (a) {
              this._id = a;
            },
          },
          {
            key: 'width',
            get: function () {
              return this._width;
            },
            set: function (a) {
              this._width = a;
            },
          },
          {
            key: 'height',
            get: function () {
              return this._height;
            },
            set: function (a) {
              this._height = a;
            },
          },
          {
            key: 'expandedWidth',
            get: function () {
              return this._expandedWidth;
            },
            set: function (a) {
              this._expandedWidth = a;
            },
          },
          {
            key: 'expandedHeight',
            get: function () {
              return this._expandedHeight;
            },
            set: function (a) {
              this._expandedHeight = a;
            },
          },
          {
            key: 'scalable',
            get: function () {
              return this._scalable;
            },
            set: function (a) {
              this._scalable = a;
            },
          },
          {
            key: 'maintainAspectRatio',
            get: function () {
              return this._maintainAspectRatio;
            },
            set: function (a) {
              this._maintainAspectRatio = a;
            },
          },
          {
            key: 'minSuggestedDuration',
            get: function () {
              return this._minSuggestedDuration;
            },
            set: function (a) {
              this._minSuggestedDuration = a;
            },
          },
          {
            key: 'apiFramework',
            get: function () {
              return this._apiFramework;
            },
            set: function (a) {
              this._apiFramework = a;
            },
          },
          {
            key: 'resource',
            get: function () {
              return this._resource;
            },
            set: function (a) {
              this._resource = a;
            },
          },
          {
            key: 'adParameters',
            get: function () {
              return this._adParameters;
            },
            set: function (a) {
              this._adParameters = a;
            },
          },
          {
            key: 'clickThrough',
            get: function () {
              return this._clickThrough;
            },
            set: function (a) {
              this._clickThrough = a;
            },
          },
          {
            key: 'clickTrackings',
            get: function () {
              return this._clickTrackings;
            },
          },
          {
            key: '$type',
            get: function () {
              return 'NonLinear';
            },
          },
        ]);
        return a;
      })();
    });
    n(Wc);
    var qb = q(function (b, a) {
      Object.defineProperty(a, '__esModule', { value: !0 });
      var c = (function () {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || !1;
            d.configurable = !0;
            'value' in d && (d.writable = !0);
            Object.defineProperty(a, d.key, d);
          }
        }
        return function (b, c, e) {
          c && a(b.prototype, c);
          e && a(b, e);
          return b;
        };
      })();
      a.AbstractExtension = (function () {
        function a() {
          if (!(this instanceof a)) throw new TypeError('Cannot call a class as a function');
          this._xmlElement = this._type = null;
        }
        c(a, [
          {
            key: 'type',
            get: function () {
              return this._type;
            },
            set: function (a) {
              this._type = a;
            },
          },
          {
            key: 'xmlElement',
            get: function () {
              return this._xmlElement;
            },
            set: function (a) {
              this._xmlElement = a;
            },
          },
        ]);
        return a;
      })();
    });
    n(qb);
    var Xc = q(function (b, a) {
      function c(a, b) {
        if ('function' !== typeof b && null !== b)
          throw new TypeError(
            'Super expression must either be null or a function, not ' + typeof b
          );
        a.prototype = Object.create(b && b.prototype, {
          constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
        });
        b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : (a.__proto__ = b));
      }
      Object.defineProperty(a, '__esModule', { value: !0 });
      a.CreativeExtension = void 0;
      var e = (function () {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || !1;
            d.configurable = !0;
            'value' in d && (d.writable = !0);
            Object.defineProperty(a, d.key, d);
          }
        }
        return function (b, c, d) {
          c && a(b.prototype, c);
          d && a(b, d);
          return b;
        };
      })();
      a.CreativeExtension = (function (a) {
        function b() {
          if (!(this instanceof b)) throw new TypeError('Cannot call a class as a function');
          var a = (b.__proto__ || Object.getPrototypeOf(b)).apply(this, arguments);
          if (!this)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !a || ('object' !== typeof a && 'function' !== typeof a) ? this : a;
        }
        c(b, a);
        e(b, [
          {
            key: '$type',
            get: function () {
              return 'CreativeExtension';
            },
          },
        ]);
        return b;
      })(qb.AbstractExtension);
    });
    n(Xc);
    var Yc = q(function (b, a) {
      function c(a, b) {
        if ('function' !== typeof b && null !== b)
          throw new TypeError(
            'Super expression must either be null or a function, not ' + typeof b
          );
        a.prototype = Object.create(b && b.prototype, {
          constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
        });
        b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : (a.__proto__ = b));
      }
      Object.defineProperty(a, '__esModule', { value: !0 });
      a.Extension = void 0;
      var e = (function () {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || !1;
            d.configurable = !0;
            'value' in d && (d.writable = !0);
            Object.defineProperty(a, d.key, d);
          }
        }
        return function (b, c, d) {
          c && a(b.prototype, c);
          d && a(b, d);
          return b;
        };
      })();
      a.Extension = (function (a) {
        function b() {
          if (!(this instanceof b)) throw new TypeError('Cannot call a class as a function');
          var a = (b.__proto__ || Object.getPrototypeOf(b)).apply(this, arguments);
          if (!this)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !a || ('object' !== typeof a && 'function' !== typeof a) ? this : a;
        }
        c(b, a);
        e(b, [
          {
            key: '$type',
            get: function () {
              return 'Extension';
            },
          },
        ]);
        return b;
      })(qb.AbstractExtension);
    });
    n(Yc);
    var sa = q(function (b, a) {
      Object.defineProperty(a, '__esModule', { value: !0 });
      var c = (function () {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || !1;
            d.configurable = !0;
            'value' in d && (d.writable = !0);
            Object.defineProperty(a, d.key, d);
          }
        }
        return function (b, c, e) {
          c && a(b.prototype, c);
          e && a(b, e);
          return b;
        };
      })();
      a.AbstractResource = (function () {
        function a() {
          if (!(this instanceof a)) throw new TypeError('Cannot call a class as a function');
          this._uri = null;
        }
        c(a, [
          {
            key: 'uri',
            get: function () {
              return this._uri;
            },
            set: function (a) {
              this._uri = a;
            },
          },
        ]);
        return a;
      })();
    });
    n(sa);
    var Zc = q(function (b, a) {
      function c(a, b) {
        if ('function' !== typeof b && null !== b)
          throw new TypeError(
            'Super expression must either be null or a function, not ' + typeof b
          );
        a.prototype = Object.create(b && b.prototype, {
          constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
        });
        b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : (a.__proto__ = b));
      }
      Object.defineProperty(a, '__esModule', { value: !0 });
      a.HTMLResource = void 0;
      var e = (function () {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || !1;
            d.configurable = !0;
            'value' in d && (d.writable = !0);
            Object.defineProperty(a, d.key, d);
          }
        }
        return function (b, c, d) {
          c && a(b.prototype, c);
          d && a(b, d);
          return b;
        };
      })();
      a.HTMLResource = (function (a) {
        function b() {
          if (!(this instanceof b)) throw new TypeError('Cannot call a class as a function');
          var a = (b.__proto__ || Object.getPrototypeOf(b)).apply(this, arguments);
          if (!this)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !a || ('object' !== typeof a && 'function' !== typeof a) ? this : a;
        }
        c(b, a);
        e(b, [
          {
            key: '$type',
            get: function () {
              return 'HTMLResource';
            },
          },
        ]);
        return b;
      })(sa.AbstractResource);
    });
    n(Zc);
    var $c = q(function (b, a) {
      function c(a, b) {
        if ('function' !== typeof b && null !== b)
          throw new TypeError(
            'Super expression must either be null or a function, not ' + typeof b
          );
        a.prototype = Object.create(b && b.prototype, {
          constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
        });
        b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : (a.__proto__ = b));
      }
      Object.defineProperty(a, '__esModule', { value: !0 });
      a.IFrameResource = void 0;
      var e = (function () {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || !1;
            d.configurable = !0;
            'value' in d && (d.writable = !0);
            Object.defineProperty(a, d.key, d);
          }
        }
        return function (b, c, d) {
          c && a(b.prototype, c);
          d && a(b, d);
          return b;
        };
      })();
      a.IFrameResource = (function (a) {
        function b() {
          if (!(this instanceof b)) throw new TypeError('Cannot call a class as a function');
          var a = (b.__proto__ || Object.getPrototypeOf(b)).apply(this, arguments);
          if (!this)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !a || ('object' !== typeof a && 'function' !== typeof a) ? this : a;
        }
        c(b, a);
        e(b, [
          {
            key: '$type',
            get: function () {
              return 'IFrameResource';
            },
          },
        ]);
        return b;
      })(sa.AbstractResource);
    });
    n($c);
    var ad = q(function (b, a) {
      function c(a, b) {
        if ('function' !== typeof b && null !== b)
          throw new TypeError(
            'Super expression must either be null or a function, not ' + typeof b
          );
        a.prototype = Object.create(b && b.prototype, {
          constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
        });
        b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : (a.__proto__ = b));
      }
      Object.defineProperty(a, '__esModule', { value: !0 });
      a.StaticResource = void 0;
      var e = (function () {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || !1;
            d.configurable = !0;
            'value' in d && (d.writable = !0);
            Object.defineProperty(a, d.key, d);
          }
        }
        return function (b, c, d) {
          c && a(b.prototype, c);
          d && a(b, d);
          return b;
        };
      })();
      a.StaticResource = (function (a) {
        function b() {
          if (!(this instanceof b)) throw new TypeError('Cannot call a class as a function');
          var a = (b.__proto__ || Object.getPrototypeOf(b)).call(this);
          if (!this)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          a = !a || ('object' !== typeof a && 'function' !== typeof a) ? this : a;
          a._creativeType = null;
          return a;
        }
        c(b, a);
        e(b, [
          {
            key: 'creativeType',
            get: function () {
              return this._creativeType;
            },
            set: function (a) {
              this._creativeType = a;
            },
          },
          {
            key: '$type',
            get: function () {
              return 'StaticResource';
            },
          },
        ]);
        return b;
      })(sa.AbstractResource);
    });
    n(ad);
    var rb = q(function (b, a) {
      function c(a, b) {
        if ('function' !== typeof b && null !== b)
          throw new TypeError(
            'Super expression must either be null or a function, not ' + typeof b
          );
        a.prototype = Object.create(b && b.prototype, {
          constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
        });
        b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : (a.__proto__ = b));
      }
      Object.defineProperty(a, '__esModule', { value: !0 });
      a.AbstractVerificationResource = void 0;
      var e = (function () {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || !1;
            d.configurable = !0;
            'value' in d && (d.writable = !0);
            Object.defineProperty(a, d.key, d);
          }
        }
        return function (b, c, d) {
          c && a(b.prototype, c);
          d && a(b, d);
          return b;
        };
      })();
      a.AbstractVerificationResource = (function (a) {
        function b() {
          if (!(this instanceof b)) throw new TypeError('Cannot call a class as a function');
          var a = (b.__proto__ || Object.getPrototypeOf(b)).call(this);
          if (!this)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          a = !a || ('object' !== typeof a && 'function' !== typeof a) ? this : a;
          a._apiFramework = null;
          return a;
        }
        c(b, a);
        e(b, [
          {
            key: 'apiFramework',
            get: function () {
              return this._apiFramework;
            },
            set: function (a) {
              this._apiFramework = a;
            },
          },
        ]);
        return b;
      })(sa.AbstractResource);
    });
    n(rb);
    var bd = q(function (b, a) {
      function c(a, b) {
        if ('function' !== typeof b && null !== b)
          throw new TypeError(
            'Super expression must either be null or a function, not ' + typeof b
          );
        a.prototype = Object.create(b && b.prototype, {
          constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
        });
        b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : (a.__proto__ = b));
      }
      Object.defineProperty(a, '__esModule', { value: !0 });
      a.FlashResource = void 0;
      var e = (function () {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || !1;
            d.configurable = !0;
            'value' in d && (d.writable = !0);
            Object.defineProperty(a, d.key, d);
          }
        }
        return function (b, c, d) {
          c && a(b.prototype, c);
          d && a(b, d);
          return b;
        };
      })();
      a.FlashResource = (function (a) {
        function b() {
          if (!(this instanceof b)) throw new TypeError('Cannot call a class as a function');
          var a = (b.__proto__ || Object.getPrototypeOf(b)).apply(this, arguments);
          if (!this)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !a || ('object' !== typeof a && 'function' !== typeof a) ? this : a;
        }
        c(b, a);
        e(b, [
          {
            key: '$type',
            get: function () {
              return 'FlashResource';
            },
          },
        ]);
        return b;
      })(rb.AbstractVerificationResource);
    });
    n(bd);
    var cd = q(function (b, a) {
      function c(a, b) {
        if ('function' !== typeof b && null !== b)
          throw new TypeError(
            'Super expression must either be null or a function, not ' + typeof b
          );
        a.prototype = Object.create(b && b.prototype, {
          constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
        });
        b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : (a.__proto__ = b));
      }
      Object.defineProperty(a, '__esModule', { value: !0 });
      a.JavaScriptResource = void 0;
      var e = (function () {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || !1;
            d.configurable = !0;
            'value' in d && (d.writable = !0);
            Object.defineProperty(a, d.key, d);
          }
        }
        return function (b, c, d) {
          c && a(b.prototype, c);
          d && a(b, d);
          return b;
        };
      })();
      a.JavaScriptResource = (function (a) {
        function b() {
          if (!(this instanceof b)) throw new TypeError('Cannot call a class as a function');
          var a = (b.__proto__ || Object.getPrototypeOf(b)).apply(this, arguments);
          if (!this)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !a || ('object' !== typeof a && 'function' !== typeof a) ? this : a;
        }
        c(b, a);
        e(b, [
          {
            key: '$type',
            get: function () {
              return 'JavaScriptResource';
            },
          },
        ]);
        return b;
      })(rb.AbstractVerificationResource);
    });
    n(cd);
    var sb = q(function (b, a) {
      Object.defineProperty(a, '__esModule', { value: !0 });
      var c = (function () {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || !1;
            d.configurable = !0;
            'value' in d && (d.writable = !0);
            Object.defineProperty(a, d.key, d);
          }
        }
        return function (b, c, e) {
          c && a(b.prototype, c);
          e && a(b, e);
          return b;
        };
      })();
      a.AbstractTimeOffset = (function () {
        function a() {
          if (!(this instanceof a)) throw new TypeError('Cannot call a class as a function');
          this._value = null;
        }
        c(a, [
          {
            key: 'value',
            get: function () {
              return this._value;
            },
            set: function (a) {
              this._value = a;
            },
          },
        ]);
        return a;
      })();
    });
    n(sb);
    var dd = q(function (b, a) {
      function c(a, b) {
        if ('function' !== typeof b && null !== b)
          throw new TypeError(
            'Super expression must either be null or a function, not ' + typeof b
          );
        a.prototype = Object.create(b && b.prototype, {
          constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
        });
        b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : (a.__proto__ = b));
      }
      Object.defineProperty(a, '__esModule', { value: !0 });
      a.AbsoluteTimeOffset = void 0;
      var e = (function () {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || !1;
            d.configurable = !0;
            'value' in d && (d.writable = !0);
            Object.defineProperty(a, d.key, d);
          }
        }
        return function (b, c, d) {
          c && a(b.prototype, c);
          d && a(b, d);
          return b;
        };
      })();
      a.AbsoluteTimeOffset = (function (a) {
        function b() {
          if (!(this instanceof b)) throw new TypeError('Cannot call a class as a function');
          var a = (b.__proto__ || Object.getPrototypeOf(b)).apply(this, arguments);
          if (!this)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !a || ('object' !== typeof a && 'function' !== typeof a) ? this : a;
        }
        c(b, a);
        e(b, [
          {
            key: '$type',
            get: function () {
              return 'AbsoluteTimeOffset';
            },
          },
        ]);
        return b;
      })(sb.AbstractTimeOffset);
    });
    n(dd);
    var ed = q(function (b, a) {
      function c(a, b) {
        if ('function' !== typeof b && null !== b)
          throw new TypeError(
            'Super expression must either be null or a function, not ' + typeof b
          );
        a.prototype = Object.create(b && b.prototype, {
          constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
        });
        b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : (a.__proto__ = b));
      }
      Object.defineProperty(a, '__esModule', { value: !0 });
      a.RelativeTimeOffset = void 0;
      var e = (function () {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || !1;
            d.configurable = !0;
            'value' in d && (d.writable = !0);
            Object.defineProperty(a, d.key, d);
          }
        }
        return function (b, c, d) {
          c && a(b.prototype, c);
          d && a(b, d);
          return b;
        };
      })();
      a.RelativeTimeOffset = (function (a) {
        function b() {
          if (!(this instanceof b)) throw new TypeError('Cannot call a class as a function');
          var a = (b.__proto__ || Object.getPrototypeOf(b)).apply(this, arguments);
          if (!this)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !a || ('object' !== typeof a && 'function' !== typeof a) ? this : a;
        }
        c(b, a);
        e(b, [
          {
            key: '$type',
            get: function () {
              return 'RelativeTimeOffset';
            },
          },
        ]);
        return b;
      })(sb.AbstractTimeOffset);
    });
    n(ed);
    var fd = q(function (b, a) {
      Object.defineProperty(a, '__esModule', { value: !0 });
      a.AdPod = void 0;
      var c = (function () {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || !1;
            d.configurable = !0;
            'value' in d && (d.writable = !0);
            Object.defineProperty(a, d.key, d);
          }
        }
        return function (b, c, e) {
          c && a(b.prototype, c);
          e && a(b, e);
          return b;
        };
      })();
      a.AdPod = (function () {
        function a() {
          if (!(this instanceof a)) throw new TypeError('Cannot call a class as a function');
          this._ads = new ra.SortedList();
        }
        c(a, [
          {
            key: 'ads',
            get: function () {
              return this._ads;
            },
          },
          {
            key: '$type',
            get: function () {
              return 'AdPod';
            },
          },
        ]);
        return a;
      })();
    });
    n(fd);
    var z = q(function (b, a) {
      Object.defineProperty(a, '__esModule', { value: !0 });
      Object.defineProperty(a, 'InLine', {
        enumerable: !0,
        get: function () {
          return yc.InLine;
        },
      });
      Object.defineProperty(a, 'Wrapper', {
        enumerable: !0,
        get: function () {
          return zc.Wrapper;
        },
      });
      Object.defineProperty(a, 'IconClicks', {
        enumerable: !0,
        get: function () {
          return Ac.IconClicks;
        },
      });
      Object.defineProperty(a, 'VideoClicks', {
        enumerable: !0,
        get: function () {
          return Bc.VideoClicks;
        },
      });
      Object.defineProperty(a, 'AdSystem', {
        enumerable: !0,
        get: function () {
          return Cc.AdSystem;
        },
      });
      Object.defineProperty(a, 'Category', {
        enumerable: !0,
        get: function () {
          return Dc.Category;
        },
      });
      Object.defineProperty(a, 'Click', {
        enumerable: !0,
        get: function () {
          return Ec.Click;
        },
      });
      Object.defineProperty(a, 'Creative', {
        enumerable: !0,
        get: function () {
          return Fc.Creative;
        },
      });
      Object.defineProperty(a, 'Icon', {
        enumerable: !0,
        get: function () {
          return Gc.Icon;
        },
      });
      Object.defineProperty(a, 'Impression', {
        enumerable: !0,
        get: function () {
          return Hc.Impression;
        },
      });
      Object.defineProperty(a, 'InteractiveCreativeFile', {
        enumerable: !0,
        get: function () {
          return Ic.InteractiveCreativeFile;
        },
      });
      Object.defineProperty(a, 'MediaFile', {
        enumerable: !0,
        get: function () {
          return Jc.MediaFile;
        },
      });
      Object.defineProperty(a, 'Pricing', {
        enumerable: !0,
        get: function () {
          return Kc.Pricing;
        },
      });
      Object.defineProperty(a, 'Survey', {
        enumerable: !0,
        get: function () {
          return Lc.Survey;
        },
      });
      Object.defineProperty(a, 'TrackingEvent', {
        enumerable: !0,
        get: function () {
          return Mc.TrackingEvent;
        },
      });
      Object.defineProperty(a, 'TrackingEvents', {
        enumerable: !0,
        get: function () {
          return Nc.TrackingEvents;
        },
      });
      Object.defineProperty(a, 'UniversalAdId', {
        enumerable: !0,
        get: function () {
          return Oc.UniversalAdId;
        },
      });
      Object.defineProperty(a, 'VAST', {
        enumerable: !0,
        get: function () {
          return Pc.VAST;
        },
      });
      Object.defineProperty(a, 'Verification', {
        enumerable: !0,
        get: function () {
          return Qc.Verification;
        },
      });
      Object.defineProperty(a, 'ViewableImpression', {
        enumerable: !0,
        get: function () {
          return Rc.ViewableImpression;
        },
      });
      Object.defineProperty(a, 'CompanionAds', {
        enumerable: !0,
        get: function () {
          return Sc.CompanionAds;
        },
      });
      Object.defineProperty(a, 'Companion', {
        enumerable: !0,
        get: function () {
          return Tc.Companion;
        },
      });
      Object.defineProperty(a, 'Linear', {
        enumerable: !0,
        get: function () {
          return Uc.Linear;
        },
      });
      Object.defineProperty(a, 'NonLinearAds', {
        enumerable: !0,
        get: function () {
          return Vc.NonLinearAds;
        },
      });
      Object.defineProperty(a, 'NonLinear', {
        enumerable: !0,
        get: function () {
          return Wc.NonLinear;
        },
      });
      Object.defineProperty(a, 'CreativeExtension', {
        enumerable: !0,
        get: function () {
          return Xc.CreativeExtension;
        },
      });
      Object.defineProperty(a, 'Extension', {
        enumerable: !0,
        get: function () {
          return Yc.Extension;
        },
      });
      Object.defineProperty(a, 'HTMLResource', {
        enumerable: !0,
        get: function () {
          return Zc.HTMLResource;
        },
      });
      Object.defineProperty(a, 'IFrameResource', {
        enumerable: !0,
        get: function () {
          return $c.IFrameResource;
        },
      });
      Object.defineProperty(a, 'StaticResource', {
        enumerable: !0,
        get: function () {
          return ad.StaticResource;
        },
      });
      Object.defineProperty(a, 'FlashResource', {
        enumerable: !0,
        get: function () {
          return bd.FlashResource;
        },
      });
      Object.defineProperty(a, 'JavaScriptResource', {
        enumerable: !0,
        get: function () {
          return cd.JavaScriptResource;
        },
      });
      Object.defineProperty(a, 'AbsoluteTimeOffset', {
        enumerable: !0,
        get: function () {
          return dd.AbsoluteTimeOffset;
        },
      });
      Object.defineProperty(a, 'RelativeTimeOffset', {
        enumerable: !0,
        get: function () {
          return ed.RelativeTimeOffset;
        },
      });
      Object.defineProperty(a, 'AdBuffet', {
        enumerable: !0,
        get: function () {
          return pb.AdBuffet;
        },
      });
      Object.defineProperty(a, 'AdPod', {
        enumerable: !0,
        get: function () {
          return fd.AdPod;
        },
      });
      Object.defineProperty(a, 'SortedListItem', {
        enumerable: !0,
        get: function () {
          return La.SortedListItem;
        },
      });
      Object.defineProperty(a, 'SortedList', {
        enumerable: !0,
        get: function () {
          return ra.SortedList;
        },
      });
    });
    n(z);
    var De = z.Wrapper,
      gd = q(function (b, a) {
        Object.defineProperty(a, '__esModule', { value: !0 });
        a.default = function (a) {
          var b = new z.AdSystem();
          b.version = a.version;
          b.name = a._value;
          return b;
        };
      });
    n(gd);
    var hd = q(function (b, a) {
      Object.defineProperty(a, '__esModule', { value: !0 });
      a.default = function (a) {
        var b = new z.UniversalAdId();
        null != a.idRegistry && (b.idRegistry = a.idRegistry);
        null != a.idValue && (b.idValue = a.idValue);
        b.creativeIdentifier = a._value;
        return b;
      };
    });
    n(hd);
    var id = q(function (b, a) {
      Object.defineProperty(a, '__esModule', { value: !0 });
      a.default = function (a) {
        var b = new z.CreativeExtension();
        b.type = a.type;
        b.xmlElement = a._value;
        return b;
      };
    });
    n(id);
    var jd = q(function (b, a) {
      Object.defineProperty(a, '__esModule', { value: !0 });
      a.default = function (a) {
        var b = new z.MediaFile();
        b.id = a.id;
        b.delivery = a.delivery;
        b.type = a.type;
        b.bitrate = a.bitrate;
        b.minBitrate = a.minBitrate;
        b.maxBitrate = a.maxBitrate;
        b.width = a.width;
        b.height = a.height;
        b.scalable = a.scalable;
        b.maintainAspectRatio = a.maintainAspectRatio;
        b.codec = a.codec;
        b.apiFramework = a.apiFramework;
        b.uri = a._value;
        return b;
      };
    });
    n(jd);
    var kd = q(function (b, a) {
      Object.defineProperty(a, '__esModule', { value: !0 });
      a.default = function (a) {
        var b = new z.InteractiveCreativeFile();
        b.type = a.type;
        b.apiFramework = a.apiFramework;
        b.uri = a._value;
        return b;
      };
    });
    n(kd);
    var ld = q(function (b, a) {
      Object.defineProperty(a, '__esModule', { value: !0 });
      a.default = function (a) {
        var b = new z.StaticResource();
        b.creativeType = a.creativeType;
        b.uri = a._value;
        return b;
      };
    });
    n(ld);
    var md = q(function (b, a) {
      Object.defineProperty(a, '__esModule', { value: !0 });
      a.default = function (a) {
        var b = new z.IFrameResource();
        b.uri = a._value;
        return b;
      };
    });
    n(md);
    var nd = q(function (b, a) {
      Object.defineProperty(a, '__esModule', { value: !0 });
      a.default = function (a) {
        var b = new z.HTMLResource();
        b.uri = a._value;
        return b;
      };
    });
    n(nd);
    var Ma = q(function (b, a) {
      function c(a) {
        return a && a.__esModule ? a : { default: a };
      }
      Object.defineProperty(a, '__esModule', { value: !0 });
      var e = c(ld),
        d = c(md),
        h = c(nd);
      a.default = function (a) {
        return null != a.staticResource
          ? (0, e.default)(a.staticResource)
          : null != a.iFrameResource
          ? (0, d.default)(a.iFrameResource)
          : null != a.htmlResource
          ? (0, h.default)(a.htmlResource)
          : null;
      };
    });
    n(Ma);
    var W = q(function (b, a) {
      Object.defineProperty(a, '__esModule', { value: !0 });
      a.default = function (a) {
        var b = new z.Click();
        b.id = a.id;
        b.uri = a._value;
        return b;
      };
    });
    n(W);
    var P = q(function (b, a) {
      Object.defineProperty(a, '__esModule', { value: !0 });
      a.default = function (a) {
        return 'string' === typeof a && 0 < a.length;
      };
    });
    n(P);
    var X = q(function (b, a) {
      Object.defineProperty(a, '__esModule', { value: !0 });
      var c = P && P.__esModule ? P : { default: P };
      a.default = function (a) {
        return null != a && (0, c.default)(a._value);
      };
    });
    n(X);
    var od = q(function (b, a) {
      function c(a) {
        if (Array.isArray(a)) {
          for (var b = 0, c = Array(a.length); b < a.length; b++) c[b] = a[b];
          return c;
        }
        return Array.from(a);
      }
      Object.defineProperty(a, '__esModule', { value: !0 });
      var e = W && W.__esModule ? W : { default: W },
        d = X && X.__esModule ? X : { default: X };
      a.default = function (a) {
        var b = new z.IconClicks();
        null != a.iconClickThrough &&
          (0, d.default)(a.iconClickThrough) &&
          (b.clickThrough = (0, e.default)(a.iconClickThrough));
        if (null != a.iconClickTracking) {
          var h;
          (h = b.clickTrackings).push.apply(
            h,
            c(a.iconClickTracking.filter(d.default).map(e.default))
          );
        }
        return b;
      };
    });
    n(od);
    var ta = q(function (b, a) {
      Object.defineProperty(a, '__esModule', { value: !0 });
      a.default = function (a) {
        return Array.isArray(a) && 0 < a.length;
      };
    });
    n(ta);
    var pd = q(function (b, a) {
      function c(a, b) {
        return null == a ? a : 0 > b.indexOf(a) ? parseInt(a, 0) : a;
      }
      function e(a) {
        return a && a.__esModule ? a : { default: a };
      }
      function d(a) {
        if (Array.isArray(a)) {
          for (var b = 0, c = Array(a.length); b < a.length; b++) c[b] = a[b];
          return c;
        }
        return Array.from(a);
      }
      Object.defineProperty(a, '__esModule', { value: !0 });
      var h = e(Ma),
        f = e(W),
        r = e(od),
        g = e(X),
        v = e(ta);
      a.default = function (a) {
        var b = new z.Icon();
        b.program = a.program;
        b.width = a.width;
        b.height = a.height;
        b.xPosition = c(a.xPosition, ['left', 'right']);
        b.yPosition = c(a.yPosition, ['top', 'bottom']);
        b.duration = a.duration;
        b.offset = a.offset;
        b.apiFramework = a.apiFramework;
        b.pxratio = a.pxratio;
        b.resources = (0, h.default)(a);
        null != a.iconClicks &&
          ((0, g.default)(a.iconClicks.iconClickThrough) ||
            (0, v.default)(a.iconClicks.iconClickTracking)) &&
          (b.clicks = (0, r.default)(a.iconClicks));
        if (null != a.iconViewTracking) {
          var e;
          (e = b.viewTrackings).push.apply(
            e,
            d(a.iconViewTracking.filter(g.default).map(f.default))
          );
        }
        return b;
      };
    });
    n(pd);
    var ha = q(function (b, a) {
      Object.defineProperty(a, '__esModule', { value: !0 });
      var c = V && V.__esModule ? V : { default: V };
      a.default = function (a, b) {
        if ('%' === a.charAt(a.length - 1))
          return (
            (b = new z.RelativeTimeOffset()), (b.value = parseFloat(a.substr(0, a.length - 1))), b
          );
        var d = new z.AbsoluteTimeOffset();
        try {
          d.value = (0, c.default)(a);
        } catch (k) {
          b.errorHandler(k);
        }
        return d;
      };
    });
    n(ha);
    var Na = q(function (b, a) {
      Object.defineProperty(a, '__esModule', { value: !0 });
      var c = ha && ha.__esModule ? ha : { default: ha },
        e = P && P.__esModule ? P : { default: P };
      a.default = function (a, b, f) {
        if (null != a && Array.isArray(a.tracking)) {
          var d = !0,
            h = !1,
            k = void 0;
          try {
            p.initSymbol();
            p.initSymbolIterator();
            for (var g = a.tracking[Symbol.iterator](), n; !(d = (n = g.next()).done); d = !0) {
              var m = n.value;
              if ((0, e.default)(m._value)) {
                var l = new z.TrackingEvent();
                l.uri = m._value;
                if ((0, e.default)(m.offset))
                  try {
                    l.offset = (0, c.default)(m.offset);
                  } catch (E) {
                    f.errorHandler(E);
                  }
                b.add(m.event, l);
              }
            }
          } catch (E) {
            (h = !0), (k = E);
          } finally {
            try {
              !d && g.return && g.return();
            } finally {
              if (h) throw k;
            }
          }
        }
      };
    });
    n(Na);
    var qd = q(function (b, a) {
      function c(a) {
        return a && a.__esModule ? a : { default: a };
      }
      function e(a) {
        if (Array.isArray(a)) {
          for (var b = 0, c = Array(a.length); b < a.length; b++) c[b] = a[b];
          return c;
        }
        return Array.from(a);
      }
      Object.defineProperty(a, '__esModule', { value: !0 });
      var d = c(jd),
        h = c(kd),
        f = c(pd),
        r = c(W),
        g = c(ha),
        v = c(Na),
        w = c(P),
        n = c(ta),
        m = c(X);
      a.default = function (a, b) {
        a = a.linear;
        var c = new z.Linear();
        (0, w.default)(a.skipoffset) && (c.skipoffset = (0, g.default)(a.skipoffset, b));
        null != a.duration && (c.duration = a.duration._value);
        if (null != a.mediaFiles) {
          null != a.mediaFiles.mezzanine && (c.mezzanine = a.mediaFiles.mezzanine._value);
          if (null != a.mediaFiles.mediaFile) {
            var k;
            (k = c.mediaFiles).push.apply(k, e(a.mediaFiles.mediaFile.map(d.default)));
          }
          if (null != a.mediaFiles.interactiveCreativeFile) {
            var u;
            (u = c.interactiveCreativeFiles).push.apply(
              u,
              e(a.mediaFiles.interactiveCreativeFile.map(h.default))
            );
          }
        }
        null != a.adParameters && (c.adParameters = a.adParameters._value);
        if (null != a.videoClicks) {
          c.videoClicks = new z.VideoClicks();
          k = a.videoClicks;
          u = c.videoClicks;
          null != k.clickThrough &&
            (0, m.default)(k.clickThrough) &&
            (u.clickThrough = (0, r.default)(k.clickThrough));
          if (null != k.clickTracking) {
            var l;
            (l = u.clickTrackings).push.apply(
              l,
              e(k.clickTracking.filter(m.default).map(r.default))
            );
          }
          if (null != k.customClick) {
            var q;
            (q = u.customClicks).push.apply(q, e(k.customClick.filter(m.default).map(r.default)));
          }
        }
        null != a.trackingEvents &&
          (0, n.default)(a.trackingEvents.tracking) &&
          ((c.trackingEvents = new z.TrackingEvents()),
          (0, v.default)(a.trackingEvents, c.trackingEvents, b));
        if (null != a.icons && a.icons.icon) {
          var t;
          (t = c.icons).push.apply(t, e(a.icons.icon.map(f.default)));
        }
        return c;
      };
    });
    n(qd);
    var rd = q(function (b, a) {
      function c(a) {
        return a && a.__esModule ? a : { default: a };
      }
      function e(a) {
        if (Array.isArray(a)) {
          for (var b = 0, c = Array(a.length); b < a.length; b++) c[b] = a[b];
          return c;
        }
        return Array.from(a);
      }
      Object.defineProperty(a, '__esModule', { value: !0 });
      var d = c(Ma),
        h = c(W),
        f = c(X);
      a.default = function (a) {
        var b = new z.NonLinear();
        b.id = a.id;
        b.width = a.width;
        b.height = a.height;
        b.expandedWidth = a.expandedWidth;
        b.expandedHeight = a.expandedHeight;
        b.scalable = a.scalable;
        b.maintainAspectRatio = a.maintainAspectRatio;
        b.minSuggestedDuration = a.minSuggestedDuration;
        b.apiFramework = a.apiFramework;
        b.resource = (0, d.default)(a);
        null != a.adParameters && (b.adParameters = a.adParameters._value);
        null != a.nonLinearClickThrough &&
          (0, f.default)(a.nonLinearClickThrough) &&
          (b.clickThrough = (0, h.default)(a.nonLinearClickThrough));
        if (null != a.nonLinearClickTracking) {
          var c;
          (c = b.clickTrackings).push.apply(
            c,
            e(a.nonLinearClickTracking.filter(f.default).map(h.default))
          );
        }
        return b;
      };
    });
    n(rd);
    var sd = q(function (b, a) {
      function c(a) {
        return a && a.__esModule ? a : { default: a };
      }
      function e(a) {
        if (Array.isArray(a)) {
          for (var b = 0, c = Array(a.length); b < a.length; b++) c[b] = a[b];
          return c;
        }
        return Array.from(a);
      }
      Object.defineProperty(a, '__esModule', { value: !0 });
      var d = c(rd),
        h = c(Na),
        f = c(ta);
      a.default = function (a) {
        a = a.nonLinearAds;
        var b = new z.NonLinearAds();
        if (null != a.nonLinear) {
          var c;
          (c = b.nonLinears).push.apply(c, e(a.nonLinear.map(d.default)));
        }
        null != a.trackingEvents &&
          (0, f.default)(a.trackingEvents.tracking) &&
          ((b.trackingEvents = new z.TrackingEvents()),
          (0, h.default)(a.trackingEvents, b.trackingEvents));
        return b;
      };
    });
    n(sd);
    var ua = q(function (b, a) {
      function c(a) {
        return a && a.__esModule ? a : { default: a };
      }
      function e(a) {
        if (Array.isArray(a)) {
          for (var b = 0, c = Array(a.length); b < a.length; b++) c[b] = a[b];
          return c;
        }
        return Array.from(a);
      }
      Object.defineProperty(a, '__esModule', { value: !0 });
      var d = c(W),
        f = c(Ma),
        k = c(Na),
        g = c(ta),
        u = c(X);
      a.default = function (a) {
        var b = new z.Companion();
        b.id = a.id;
        b.width = a.width;
        b.height = a.height;
        b.assetWidth = a.assetWidth;
        b.assetHeight = a.assetHeight;
        b.expandedWidth = a.expandedWidth;
        b.expandedHeight = a.expandedHeight;
        b.apiFramework = a.apiFramework;
        b.adSlotID = a.adSlotID;
        b.pxratio = a.pxratio;
        b.resource = (0, f.default)(a);
        null != a.adParameters &&
          (0, u.default)(a.adParameters) &&
          (b.adParameters = a.adParameters._value);
        null != a.altText && (0, u.default)(a.altText._value) && (b.altText = a.altText._value);
        null != a.companionClickThrough &&
          (0, u.default)(a.companionClickThrough) &&
          (b.clickThrough = (0, d.default)(a.companionClickThrough));
        if (null != a.companionClickTracking) {
          var c;
          (c = b.clickTrackings).push.apply(
            c,
            e(a.companionClickTracking.filter(u.default).map(d.default))
          );
        }
        null != a.trackingEvents &&
          (0, g.default)(a.trackingEvents.tracking) &&
          ((b.trackingEvents = new z.TrackingEvents()),
          (0, k.default)(a.trackingEvents, b.trackingEvents));
        return b;
      };
    });
    n(ua);
    var td = q(function (b, a) {
      function c(a) {
        if (Array.isArray(a)) {
          for (var b = 0, c = Array(a.length); b < a.length; b++) c[b] = a[b];
          return c;
        }
        return Array.from(a);
      }
      Object.defineProperty(a, '__esModule', { value: !0 });
      var e = ua && ua.__esModule ? ua : { default: ua };
      a.default = function (a) {
        a = a.companionAds;
        var b = new z.CompanionAds();
        b.required = a.required;
        if (null != a.companion) {
          var d;
          (d = b.companions).push.apply(d, c(a.companion.map(e.default)));
        }
        return b;
      };
    });
    n(td);
    var ud = q(function (b, a) {
      function c(a) {
        return a && a.__esModule ? a : { default: a };
      }
      function e(a) {
        if (Array.isArray(a)) {
          for (var b = 0, c = Array(a.length); b < a.length; b++) c[b] = a[b];
          return c;
        }
        return Array.from(a);
      }
      Object.defineProperty(a, '__esModule', { value: !0 });
      var d = c(hd),
        f = c(id),
        k = c(qd),
        g = c(sd),
        u = c(td);
      a.default = function (a, b) {
        var c = new z.Creative();
        c.id = a.id;
        c.sequence = a.sequence;
        c.adID = a.AdID || a.adID || a.adId;
        c.apiFramework = a.apiFramework;
        null != a.universalAdId && (c.universalAdId = (0, d.default)(a.universalAdId));
        if (null != a.creativeExtensions && a.creativeExtensions.creativeExtension) {
          var h;
          (h = c.extensions).push.apply(
            h,
            e(a.creativeExtensions.creativeExtension.map(f.default))
          );
        }
        null != a.linear
          ? (c.linear = (0, k.default)(a, b))
          : null != a.nonLinearAds && (c.nonLinearAds = (0, g.default)(a));
        null != a.companionAds && (c.companionAds = (0, u.default)(a));
        null == c.linear &&
          null == c.nonLinearAds &&
          null == c.companionAds &&
          b.errorHandler(Error('Creative has no ads'));
        return c;
      };
    });
    n(ud);
    var vd = q(function (b, a) {
      Object.defineProperty(a, '__esModule', { value: !0 });
      a.default = function (a) {
        var b = new z.Extension();
        b.type = a.type;
        b.xmlElement = a._value;
        return b;
      };
    });
    n(vd);
    var wd = q(function (b, a) {
      Object.defineProperty(a, '__esModule', { value: !0 });
      a.default = function (a) {
        var b = new z.Impression();
        b.id = a.id;
        b.uri = a._value;
        return b;
      };
    });
    n(wd);
    var xd = q(function (b, a) {
      Object.defineProperty(a, '__esModule', { value: !0 });
      a.default = function (a) {
        var b = new z.Pricing();
        b.model = a.model;
        b.currency = a.currency;
        b.value = a._value;
        return b;
      };
    });
    n(xd);
    var yd = q(function (b, a) {
      function c(a) {
        if (Array.isArray(a)) {
          for (var b = 0, c = Array(a.length); b < a.length; b++) c[b] = a[b];
          return c;
        }
        return Array.from(a);
      }
      Object.defineProperty(a, '__esModule', { value: !0 });
      a.default = function (a) {
        var b = new z.ViewableImpression();
        b.id = a.id;
        if (null != a.viewable) {
          var e;
          (e = b.viewables).push.apply(
            e,
            c(
              a.viewable.map(function (a) {
                return a._value;
              })
            )
          );
        }
        if (null != a.notViewable) {
          var f;
          (f = b.notViewables).push.apply(
            f,
            c(
              a.notViewable.map(function (a) {
                return a._value;
              })
            )
          );
        }
        if (null != a.viewUndetermined) {
          var g;
          (g = b.viewUndetermineds).push.apply(
            g,
            c(
              a.viewUndetermined.map(function (a) {
                return a._value;
              })
            )
          );
        }
        return b;
      };
    });
    n(yd);
    var va = q(function (b, a) {
      Object.defineProperty(a, '__esModule', { value: !0 });
      a.default = function (a) {
        var b = new z.JavaScriptResource();
        b.apiFramework = a.apiFramework;
        b.uri = a._value;
        return b;
      };
    });
    n(va);
    var wa = q(function (b, a) {
      Object.defineProperty(a, '__esModule', { value: !0 });
      a.default = function (a) {
        var b = new z.FlashResource();
        b.apiFramework = a.apiFramework;
        b.uri = a._value;
        return b;
      };
    });
    n(wa);
    var zd = q(function (b, a) {
      function c(a) {
        if (Array.isArray(a)) {
          for (var b = 0, c = Array(a.length); b < a.length; b++) c[b] = a[b];
          return c;
        }
        return Array.from(a);
      }
      Object.defineProperty(a, '__esModule', { value: !0 });
      var e = va && va.__esModule ? va : { default: va },
        d = wa && wa.__esModule ? wa : { default: wa };
      a.default = function (a) {
        var b = new z.Verification();
        b.vendor = a.vendor;
        if (null != a.javaScriptResource) {
          var f;
          (f = b.javaScriptResources).push.apply(f, c(a.javaScriptResource.map(e.default)));
        }
        if (null != a.flashResource) {
          var h;
          (h = b.flashResources).push.apply(h, c(a.flashResource.map(d.default)));
        }
        null != a.viewableImpression && (b.viewableImpression = a.viewableImpression._value);
        null != a.verificationParameters && (b.parameters = a.verificationParameters._value);
        return b;
      };
    });
    n(zd);
    var ia = q(function (b, a) {
      function c(a) {
        return null != a && (0, l.default)(a._value);
      }
      function e(a) {
        return a && a.__esModule ? a : { default: a };
      }
      function d(a) {
        if (Array.isArray(a)) {
          for (var b = 0, c = Array(a.length); b < a.length; b++) c[b] = a[b];
          return c;
        }
        return Array.from(a);
      }
      Object.defineProperty(a, '__esModule', { value: !0 });
      var f = e(gd),
        g = e(ud),
        r = e(vd),
        u = e(wd),
        v = e(xd),
        m = e(yd),
        n = e(zd),
        l = e(P);
      a.default = function (a, b, e, h) {
        e.id = a.id;
        e.conditionalAd = a.conditionalAd;
        e.sequence = a.sequence;
        null != b.adSystem && (e.adSystem = (0, f.default)(b.adSystem));
        if (null != b.impression) {
          var k;
          (k = e.impressions).push.apply(k, d(b.impression.filter(c).map(u.default)));
        }
        null != b.pricing && (e.pricing = (0, v.default)(b.pricing));
        if (null != b.error) {
          var l;
          (l = e.errors).push.apply(
            l,
            d(
              b.error.filter(c).map(function (a) {
                return a._value;
              })
            )
          );
        }
        null != b.viewableImpression &&
          (e.viewableImpression = (0, m.default)(b.viewableImpression));
        null != b.adVerifications &&
          b.adVerifications.verification.forEach(function (a) {
            try {
              var b = (0, n.default)(a, h);
              e.verifications.push(b);
            } catch (Xa) {
              h.errorHandler(Xa);
            }
          });
        if (null != b.extensions) {
          var w;
          (w = e.extensions).push.apply(w, d(b.extensions.extension.map(r.default)));
        }
        null != b.creatives &&
          b.creatives.creative.forEach(function (a) {
            try {
              var b = (0, g.default)(a, h);
              e.creatives.add(b);
            } catch (Xa) {
              h.errorHandler(Xa);
            }
          });
        return e;
      };
    });
    n(ia);
    var Ad = q(function (b, a) {
      Object.defineProperty(a, '__esModule', { value: !0 });
      a.default = function (a) {
        var b = new z.Category();
        b.authority = a.authority;
        b.code = a._value;
        return b;
      };
    });
    n(Ad);
    var Bd = q(function (b, a) {
      Object.defineProperty(a, '__esModule', { value: !0 });
      a.default = function (a) {
        var b = new z.Survey();
        b.type = a.type;
        b.uri = a._value;
        return b;
      };
    });
    n(Bd);
    var xa = q(function (b, a) {
      function c(a) {
        return a && a.__esModule ? a : { default: a };
      }
      function e(a) {
        if (Array.isArray(a)) {
          for (var b = 0, c = Array(a.length); b < a.length; b++) c[b] = a[b];
          return c;
        }
        return Array.from(a);
      }
      Object.defineProperty(a, '__esModule', { value: !0 });
      var d = c(ia),
        f = c(Ad),
        g = c(Bd);
      a.default = function (a, b) {
        var c = new z.InLine(),
          h = a.inLine;
        (0, d.default)(a, h, c, b);
        c.adTitle = null != h.adTitle ? h.adTitle._value : null;
        if (null != h.category) {
          var k;
          (k = c.categories).push.apply(
            k,
            e(
              h.category
                .filter(function (a) {
                  return null != a.authority;
                })
                .map(f.default)
            )
          );
        }
        c.description = null != h.description ? h.description._value : null;
        c.advertiser = null != h.advertiser ? h.advertiser._value : null;
        if (null != h.survey) {
          var r;
          (r = c.surveys).push.apply(
            r,
            e(
              h.survey
                .filter(function (a) {
                  return 0 < a._value.length;
                })
                .map(g.default)
            )
          );
        }
        return c;
      };
    });
    n(xa);
    var ya = q(function (b, a) {
      Object.defineProperty(a, '__esModule', { value: !0 });
      var c = ia && ia.__esModule ? ia : { default: ia };
      a.default = function (a, b) {
        var d = new z.Wrapper(),
          e = a.wrapper;
        (0, c.default)(a, e, d, b);
        null != e.followAdditionalWrappers &&
          (d.followAdditionalWrappers = e.followAdditionalWrappers);
        null != e.allowMultipleAds && (d.allowMultipleAds = e.allowMultipleAds);
        d.fallbackOnNoAd = e.fallbackOnNoAd;
        d.vastAdTagURI = null != e.vastAdTagURI ? e.vastAdTagURI._value : null;
        return d;
      };
    });
    n(ya);
    var za = q(function (b, a) {
      Object.defineProperty(a, '__esModule', { value: !0 });
      var c = xa && xa.__esModule ? xa : { default: xa },
        e = ya && ya.__esModule ? ya : { default: ya };
      a.default = function (a, b) {
        if (null != a.inLine) return (0, c.default)(a, b);
        if (null != a.wrapper) return (0, e.default)(a, b);
        throw Error('Unrecognized ad type');
      };
    });
    n(za);
    var Cd = q(function (b, a) {
      function c(a, b) {
        var c,
          h = new z.VAST();
        h.version = a.version;
        (c = h.errors).push.apply(
          c,
          d(
            a.error
              .map(function (a) {
                return a._value;
              })
              .filter(function (a) {
                return '' !== a;
              })
          )
        );
        c = e(a.ad);
        var k = f(c, 2);
        c = k[0];
        k = k[1];
        if (0 < c.length)
          if (b.noSingleAdPods && 1 === a.ad.length && 1 === c.length) k.push(c[0]);
          else
            for (h.adPod = new z.AdPod(), a = 0; a < c.length; a++)
              h.adPod.ads.add((0, g.default)(c[a], b));
        for (a = 0; a < k.length; a++) h.ads.add((0, g.default)(k[a], b));
        return h;
      }
      function e(a) {
        for (var b = [], c = [], d = 0; d < a.length; ++d) {
          var e = a[d];
          'undefined' !== typeof e.sequence ? b.push(e) : c.push(e);
        }
        return [b, c];
      }
      function d(a) {
        if (Array.isArray(a)) {
          for (var b = 0, c = Array(a.length); b < a.length; b++) c[b] = a[b];
          return c;
        }
        return Array.from(a);
      }
      Object.defineProperty(a, '__esModule', { value: !0 });
      var f = (function () {
          return function (a, b) {
            if (Array.isArray(a)) return a;
            p.initSymbol();
            p.initSymbolIterator();
            if (Symbol.iterator in Object(a)) {
              var c = [],
                d = !0,
                e = !1,
                f = void 0;
              try {
                p.initSymbol();
                p.initSymbolIterator();
                for (
                  var h = a[Symbol.iterator](), g;
                  !(d = (g = h.next()).done) && (c.push(g.value), !b || c.length !== b);
                  d = !0
                );
              } catch (ce) {
                (e = !0), (f = ce);
              } finally {
                try {
                  if (!d && h['return']) h['return']();
                } finally {
                  if (e) throw f;
                }
              }
              return c;
            }
            throw new TypeError('Invalid attempt to destructure non-iterable instance');
          };
        })(),
        g = za && za.__esModule ? za : { default: za };
      a.default = function (a, b) {
        try {
          return c(a, b);
        } catch (v) {
          b.errorHandler(v);
        }
      };
    });
    n(Cd);
    var Dd = q(function (b, a) {
      Object.defineProperty(a, '__esModule', { value: !0 });
      a.default = function (a) {
        throw a;
      };
    });
    n(Dd);
    var Ed = q(function (b, a) {
      Object.defineProperty(a, '__esModule', { value: !0 });
      a.default = function () {};
    });
    n(Ed);
    var Aa = q(function (b, a) {
      function c(a) {
        return a && a.__esModule ? a : { default: a };
      }
      Object.defineProperty(a, '__esModule', { value: !0 });
      var e = c(wc),
        d = c(xc),
        f = c(Cd),
        g = c(Dd),
        r = c(Ed),
        m = { strict: !1, noSingleAdPods: !1 };
      a.default = function (a) {
        var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
        b = Object.assign({}, m, b);
        b.errorHandler = b.strict ? g.default : r.default;
        var c = a;
        'string' === typeof c &&
          (c = (b.domParser || new DOMParser()).parseFromString(c, 'text/xml'));
        null != c.documentElement && (c = c.documentElement);
        c = new e.default(d.default).unmarshal(c);
        return (0, f.default)(c, b);
      };
    });
    n(Aa);
    var Fd = q(function (b, a) {
      Object.defineProperty(a, '__esModule', { value: !0 });
      var c = Aa && Aa.__esModule ? Aa : { default: Aa };
      a.default = function (a) {
        var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
        null == b.domParser && (b.domParser = new Ce.DOMParser());
        return (0, c.default)(a, b);
      };
    });
    n(Fd);
    var Ee = Fd.default,
      Ba = q(function (b, a) {
        Object.defineProperty(a, '__esModule', { value: !0 });
        a.default = {
          100: 'XML parsing error.',
          101: 'VAST schema validation error.',
          102: 'VAST version of response not supported.',
          200: 'Trafficking error. Video player received an ad type that it was not expecting and/or cannot display.',
          201: 'Video player expecting different linearity.',
          202: 'Video player expecting different duration.',
          203: 'Video player expecting different size.',
          300: 'General Wrapper error.',
          301: 'Timeout of VAST URI provided in Wrapper element, or of VAST URI provided in a subsequent Wrapper element.',
          302: 'Wrapper limit reached, as defined by the video player. Too many Wrapper responses have been received with no InLine response.',
          303: 'No ads VAST response after one or more Wrappers. Also includes number of empty VAST responses from fallback.',
          400: 'General linear error. Video player is unable to display the linear ad.',
          401: 'File not found. Unable to find Linear/MediaFile from URI.',
          402: 'Timeout of MediaFile URI.',
          403: 'Could not find MediaFile that is supported by this video player, based on the attributes of the MediaFile element.',
          405: 'Problem displaying MediaFile.',
          406: 'Mezzanine was required but not provided. Ad not served.',
          407: 'Mezzanine is in the process of being downloaded for the first time. Download may take several hours. Ad will not be served until mezzanine is downloaded and transcoded.',
          408: 'Conditional ad rejected.',
          409: 'Interactive unit in the InteractiveCreativeFile node was not executed',
          410: 'Verification unit in the Verification node was not executed.',
          411: 'Mezzanine was provided as required, but file did not meet required specification. Ad not served.',
          500: 'General NonLinearAds error.',
          501: 'Unable to display NonLinear Ad because creative dimensions do not align with creative display area.',
          502: 'Unable to fetch NonLinearAds/NonLinear resource.',
          503: 'Could not find NonLinearresource with supported type.',
          600: 'General CompanionAds error.',
          601: 'Unable to display companion because creative dimensions do not fit within Companion display area.',
          602: 'Unable to display Required Companion.',
          603: 'Unable to fetch CompanionAds/Companion resource.',
          604: 'Could not find Companion resource with supported type.',
          900: 'Undefined error.',
          901: 'General VPAID error.',
        };
      });
    n(Ba);
    var aa = (function (b) {
        function a() {
          var b = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : '';
          if (!(this instanceof a)) throw new TypeError('Cannot call a class as a function');
          var e = ec(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, b));
          Object.defineProperty(e, 'message', {
            configurable: !0,
            enumerable: !1,
            value: b,
            writable: !0,
          });
          Object.defineProperty(e, 'name', {
            configurable: !0,
            enumerable: !1,
            value: e.constructor.name,
            writable: !0,
          });
          if (Error.hasOwnProperty('captureStackTrace'))
            return Error.captureStackTrace(e, e.constructor), ec(e);
          Object.defineProperty(e, 'stack', {
            configurable: !0,
            enumerable: !1,
            value: Error(b).stack,
            writable: !0,
          });
          return e;
        }
        je(a, b);
        return a;
      })(
        (function (b) {
          function a() {
            b.apply(this, arguments);
          }
          a.prototype = Object.create(b.prototype, {
            constructor: { value: b, enumerable: !1, writable: !0, configurable: !0 },
          });
          Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : (a.__proto__ = b);
          return a;
        })(Error)
      ),
      tb = q(function (b, a) {
        function c(a, b) {
          if ('function' !== typeof b && null !== b)
            throw new TypeError(
              'Super expression must either be null or a function, not ' + typeof b
            );
          a.prototype = Object.create(b && b.prototype, {
            constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
          });
          b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : (a.__proto__ = b));
        }
        Object.defineProperty(a, '__esModule', { value: !0 });
        a.ERRORS = void 0;
        var e = Ba && Ba.__esModule ? Ba : { default: Ba };
        b = aa && aa.__esModule ? aa : { default: aa };
        a.ERRORS = e.default;
        b = (function (a) {
          function b() {
            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 900;
            if (!(this instanceof b)) throw new TypeError('Cannot call a class as a function');
            var c = (b.__proto__ || Object.getPrototypeOf(b)).call(
              this,
              'VAST error ' + a + (a in e.default ? ': ' + e.default[a] : '')
            );
            if (!this)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            c = !c || ('object' !== typeof c && 'function' !== typeof c) ? this : c;
            c.code = a;
            c.$type = 'VASTError';
            return c;
          }
          c(b, a);
          return b;
        })(b.default);
        a.default = b;
      });
    n(tb);
    var Ra = tb.default;
    Ra.ERRORS = tb.ERRORS;
    p.inherits(I, Ra);
    p.inherits(ub, aa);
    var Fe = /^data:(.*?)(;\s*base64)?,(.*)/,
      Qd = { maxDepth: 10, credentials: 'omit', timeout: 1e4, noSingleAdPods: !1 };
    p.inherits(A, wb);
    A.prototype.load = function () {
      var b = this;
      return this._load(this._uri).catch(function (a) {
        b._emit('error', { error: a });
        throw a;
      });
    };
    A.prototype._load = function (b) {
      var a = this;
      return Promise.resolve()
        .then(function () {
          a._emit('willFetch', { uri: b });
          var c = Fe.exec(b);
          return null == c ? a._fetchUri(b) : a._parseDataUri(c[3], c[1], null != c[2]);
        })
        .then(function (c) {
          a._emit('didFetch', { uri: b, body: c });
          a._emit('willParse', { uri: b, body: c });
          var e = Ee(c, { noSingleAdPods: a._options.noSingleAdPods });
          e.uri = b;
          a._emit('didParse', { uri: b, body: c, vast: e });
          if (0 < e.ads.length) {
            if (((c = e.ads.get(0)), c instanceof De || 'Wrapper' === c.$type))
              return a._loadWrapped(c.vastAdTagURI, e);
          } else if (1 < a._depth) throw new I(303, null, b);
          return [e];
        });
    };
    A.prototype._parseDataUri = function (b, a, c) {
      return c ? A.atob(b) : decodeURIComponent(b);
    };
    A.prototype._loadWrapped = function (b, a) {
      var c = this;
      return Promise.resolve()
        .then(function () {
          var a = c._options.maxDepth;
          if (0 < a && c._depth + 1 >= a) throw new I(302, null, b);
          return new A(b, null, c).load();
        })
        .then(function (b) {
          return [a].concat(p.arrayFromIterable(b));
        });
    };
    A.prototype._fetchUri = function (b) {
      var a = this,
        c = this._fetchWithCredentials(b),
        e = this._createTimeouter(c, b);
      return Promise.race([c, e])
        .then(function (a) {
          e.cancel();
          return a;
        })
        .catch(function (c) {
          e.cancel();
          if (1 < a._depth) throw new I(301, null, b);
          throw c;
        });
    };
    A.prototype._fetchWithCredentials = function (b) {
      var a = this,
        c = this._options.credentials;
      'function' === typeof c && (c = c(b));
      Array.isArray(c) || (c = [c]);
      return c.reduce(function (c, d) {
        return c.catch(function () {
          return a._tryFetch(b, d);
        });
      }, Promise.reject(Error()));
    };
    A.prototype._tryFetch = function (b, a) {
      var c = this;
      return this._root
        ._fetch(b, { credentials: a })
        .then(function (a) {
          if (a.ok) return a.text();
          a = new ub(a.status, a.statusText);
          throw new I(301, a, b);
        })
        .catch(function (e) {
          c._emit('fetchError', { uri: b, credentials: a, error: e });
          throw e;
        });
    };
    A.prototype._createTimeouter = function (b, a) {
      var c = this._options.timeout,
        e = null;
      b = new Promise(function (b, f) {
        e = setTimeout(function () {
          f(new I(301, null, a));
        }, c);
      });
      b.cancel = function () {
        null != e && (clearTimeout(e), (e = null));
      };
      return b;
    };
    A.prototype._emit = function (b) {
      for (var a = [], c = 0; c < arguments.length; ++c) a[c - 0] = arguments[c];
      this._root.emit.apply(this._root, p.arrayFromIterable(a));
    };
    A.fetch = function (b, a) {
      return (
        (a = a || {}),
        new Promise(function (c, e) {
          function d() {
            return {
              ok: 2 == ((f.status / 100) | 0),
              statusText: f.statusText,
              status: f.status,
              url: f.responseURL,
              text: function () {
                return Promise.resolve(f.responseText);
              },
              json: function () {
                return Promise.resolve(JSON.parse(f.responseText));
              },
              blob: function () {
                return Promise.resolve(new Blob([f.response]));
              },
              clone: d,
              headers: {
                keys: function () {
                  return g;
                },
                entries: function () {
                  return r;
                },
                get: function (a) {
                  return m[a.toLowerCase()];
                },
                has: function (a) {
                  return a.toLowerCase() in m;
                },
              },
            };
          }
          var f = new XMLHttpRequest(),
            g = [],
            r = [],
            m = {},
            l;
          for (l in (f.open(a.method || 'get', b, !0),
          (f.onload = function () {
            f.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (a, b, c) {
              g.push((b = b.toLowerCase()));
              r.push([b, c]);
              m[b] = m[b] ? m[b] + ',' + c : c;
            });
            c(d());
          }),
          (f.onerror = e),
          (f.withCredentials = 'include' == a.credentials),
          a.headers))
            f.setRequestHeader(l, a.headers[l]);
          f.send(a.body || null);
        })
      );
    };
    A.atob = function (b) {
      var a = '',
        c = 0;
      do {
        var e = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.indexOf(
            b.charAt(c++)
          ),
          d = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.indexOf(
            b.charAt(c++)
          ),
          f = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.indexOf(
            b.charAt(c++)
          ),
          g = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.indexOf(
            b.charAt(c++)
          ),
          r = ((d & 15) << 4) | ((f >> 2) & 15);
        f = ((f & 3) << 6) | (g & 63);
        a +=
          String.fromCharCode(((e & 63) << 2) | ((d >> 4) & 3)) +
          (r ? String.fromCharCode(r) : '') +
          (f ? String.fromCharCode(f) : '');
      } while (c < b.length);
      return a;
    };
    var Ja = (function () {
        if ('undefined' !== typeof navigator) {
          if (navigator.languages)
            for (var b = 0; b < navigator.languages.length; b++)
              if (navigator.languages[b]) return navigator.languages[b];
          return navigator.userLanguage ? navigator.userLanguage : navigator.language;
        }
        return '';
      })(),
      M = kb('VAST', 3);
    t.prototype.$s = function (b, a) {
      if (this.vpaidWrapper) return this.vpaidWrapper.$s(b, a);
      throw Error('adapter not ready');
    };
    t.prototype.$g = function (b) {
      if (this.vpaidWrapper) return this.vpaidWrapper.$g(b);
      throw Error('adapter not ready');
    };
    t.prototype.$e = function (b) {
      for (var a = [], c = 0; c < arguments.length; ++c) a[c - 0] = arguments[c];
      this.vpaidWrapper && this.vpaidWrapper.$e.apply(this.vpaidWrapper, a);
    };
    t.prototype.on = function (b, a, c) {
      this.evs.push(ja(b, a, c));
    };
    t.prototype.getAdLinear = function () {
      return this.$g('linear');
    };
    t.prototype.getAdWidth = function () {
      return this.$g('width');
    };
    t.prototype.getAdHeight = function () {
      return this.$g('height');
    };
    t.prototype.getAdExpanded = function () {
      return this.$g('expanded');
    };
    t.prototype.getAdSkippableState = function () {
      return this.$g('skippableState');
    };
    t.prototype.getAdRemainingTime = function () {
      return this.$g('remainingTime');
    };
    t.prototype.getAdDuration = function () {
      return this.$g('duration');
    };
    t.prototype.getAdVolume = function () {
      var b = this.$g('video');
      return !b || isNaN(b.volume) ? -2 : b.muted ? 0 : b.volume;
    };
    t.prototype.setAdVolume = function (b) {
      var a = this.$g('video');
      if (!a) return -2;
      b = Ab(b, a.volume);
      var c = b.muted;
      a.volume = b.volume;
      'boolean' === typeof c && (a.muted = c);
      this.$e('AdVolumeChange');
      return a.volume;
    };
    t.prototype.getAdCompanions = function () {
      return this.$g('companions');
    };
    t.prototype.getAdIcons = function () {
      return this.$g('icons');
    };
    t.prototype.destroy = function () {
      M('destroy');
      this.vpaidWrapper = void 0;
      this.evs.splice(0, this.evs.length).forEach(Sa);
    };
    t.prototype.initAd = function () {
      var b = this;
      M('initAd');
      var a = this.$g('iascr'),
        c = this.$g('video');
      this.isPaused = !1;
      try {
        S(c, { width: this.$g('width') + 'px', height: this.$g('height') + 'px' });
      } catch (e) {}
      this.on(c, 'ended', function () {
        M('video ended');
        b.timeUpdateHandler_(!0);
        b.vpaidWrapper.stopAd();
      });
      this.on(c, 'error', function () {
        M('video failed to load');
      });
      a.skipOffset &&
        0 <= a.skipOffset &&
        this.quartiles.push({
          event: 'AdSkippableStateChange',
          value: Math.floor((a.skipOffset / a.duration) * 100),
        });
      return Promise.resolve();
    };
    t.prototype.startAd = function () {
      var b = this;
      M('startAd');
      var a = this.$g('video');
      a.setAttribute('src', this.$g('media').uri);
      this.$e('AdStarted');
      return hb(a)
        .catch(function () {
          b.setAdVolume(0);
          return hb(a);
        })
        .then(function () {
          b.$s('remainingTime', -2);
          var a = b.$g('video');
          b.$s('duration', a.duration);
          b.$e('AdDurationChange');
          var e = g.setInterval(b.timeUpdateHandler_, 250);
          b.evs.push(function () {
            g.clearInterval(e);
          });
          (b.$g('IASConfig').IAS_VID_OPTS || '').match(/hideplaybutton/) || b.createPlayOverlay();
          b.createClickSlot();
          b.createSkipButton() &&
            (b.skipBtnTimer = g.setInterval(function () {
              b.updateSkipButton();
            }, 250));
        });
    };
    t.prototype.stopAd = function () {
      M('stopAd');
      this.$g('video').pause();
      this.skipBtnTimer && g.clearInterval(this.skipBtnTimer);
      return Promise.resolve();
    };
    t.prototype.resizeAd = function () {
      M('resizeAd');
      try {
        'fullscreen' === this.$g('viewMode')
          ? S(this.$g('video'), { width: g.innerWidth + 'px', height: g.innerHeight + 'px' })
          : S(this.$g('video'), {
              width: this.$g('width') + 'px',
              height: this.$g('height') + 'px',
            });
      } catch (b) {}
      this.$e('AdSizeChange');
      return Promise.resolve();
    };
    t.prototype.pauseAd = function () {
      M('pauseAd');
      this.$g('video').pause();
      this.$e('AdPaused');
      this.isPaused = !0;
      this.updatePlayOverlay();
      return Promise.resolve();
    };
    t.prototype.resumeAd = function () {
      var b = this;
      M('resumeAd');
      this.$e('AdPlaying');
      return hb(this.$g('video')).then(function () {
        b.isPaused = !1;
        b.updatePlayOverlay();
      });
    };
    t.prototype.expandAd = function () {
      var b = this;
      M('expandAd');
      return this.$g('slot')
        .requestFullscreen()
        .then(function () {
          b.$e('AdExpandedChange');
        });
    };
    t.prototype.collapseAd = function () {
      var b = this;
      M('collapseAd');
      return this.$g('slot')
        .ownerDocument.exitFullscreen()
        .then(function () {
          b.$e('AdExpandedChange');
        });
    };
    t.prototype.skipAd = function () {
      if (!this.vpaidWrapper) return M('skipAd skipped. vpaid not available'), Promise.resolve();
      if (!this.getAdSkippableState())
        return M('skipAd requested, but not yet skippable'), Promise.resolve();
      M('skipAd');
      this.vpaidWrapper.stopAd();
      this.$e('AdSkipped');
      return Promise.resolve();
    };
    t.prototype.createPlayOverlay = function () {
      var b = this.$g('slot'),
        a = this.createSvgElement(
          'svg',
          { width: '100%', height: '100%', viewBox: '0 0 100 100' },
          {
            display: 'none',
            position: 'absolute',
            'background-color': 'rgba(0, 0, 0, 0.3)',
            cursor: 'pointer',
          }
        );
      a.appendChild(
        this.createSvgElement('circle', {
          cx: '50%',
          cy: '50%',
          r: '10%',
          fill: 'none',
          stroke: 'white',
          'stroke-width': '1px',
        })
      );
      a.appendChild(
        this.createSvgElement('polygon', { points: '47,45,47,55,55,50', fill: 'white' })
      );
      b.appendChild(a);
      this.playOverlay = a;
      this.updatePlayOverlay();
    };
    t.prototype.updatePlayOverlay = function () {
      this.playOverlay && (this.playOverlay.style.display = this.isPaused ? 'block' : 'none');
    };
    t.prototype.createSvgElement = function (b, a, c) {
      var e = m.createElementNS('http://www.w3.org/2000/svg', b);
      a &&
        Object.keys(a).forEach(function (b) {
          e.setAttribute(b, a[b]);
        });
      c &&
        (e.style.cssText = Object.keys(c)
          .map(function (a) {
            return [a, c[a] + ' !important'].join(':');
          })
          .join(';'));
      return e;
    };
    t.prototype.createClickSlot = function () {
      var b = this.$g('slot'),
        a = m.createElement('div'),
        c = {
          border: '0',
          cursor: 'pointer',
          padding: '0',
          position: 'absolute',
          left: '0',
          top: '0',
          right: '0',
          bottom: '0',
          margin: '0',
        };
      a.style.cssText = Object.keys(c)
        .map(function (a) {
          return [a, c[a] + ' !important'].join(':');
        })
        .join(';');
      this.on(a, 'click', this.onClickSlot.bind(this));
      b.appendChild(a);
    };
    t.prototype.onClickSlot = function (b) {
      var a,
        c = (this.$g('IASConfig').IAS_VID_OPTS || '').match(/hideplaybutton/);
      if (this.isPaused && !c) b.stopImmediatePropagation(), this.resumeAd();
      else {
        this.$g('IASConfig').forceClickContinue || this.pauseAd();
        b = this.$g('params');
        if (b.clickTrackingUrl)
          for (c = 0; c < b.clickTrackingUrl.length; c++) ba(b.clickTrackingUrl[c]);
        b = this.$g('iascr').clickTrackingUrl || [];
        for (c = 0; c < b.length; c++) ba(b[c]);
        !0 === this.$g('IASConfig').csw &&
          C(
            'clickTracking',
            void 0,
            this.vpaidWrapper.$macros(),
            this.vpaidWrapper.$cp({ csw: !0 })
          );
        b = this.$g('iascr');
        b = Db((('string' === typeof (b && b.clickThroughUrl) && b.clickThroughUrl) || '').trim());
        try {
          null === (a = g.open(b, '_blank')) || void 0 === a ? void 0 : a.focus();
        } catch (e) {}
        this.$e('AdClickThru', b, '', !0);
      }
    };
    t.prototype.createSkipButton = function () {
      var b = this,
        a = this.$g('iascr').skipOffset;
      if (!a || 0 >= a) return !1;
      a = this.$g('slot');
      var c = m.createElement('div');
      S(
        c,
        {
          'background-color': 'rgba(0, 0, 0, 0.7)',
          border: '0 solid rgba(255, 255, 255, 0.5)',
          color: 'white',
          'font-family': 'Arial, Helvetica, sans-serif',
          'font-size': '12px',
          'font-weight': '200',
          cursor: 'default',
          padding: '12px',
          position: 'absolute',
          bottom: '10%',
          right: '0',
          'user-select': 'none',
          display: 'none',
        },
        !0
      );
      this.evs.push(
        ja(c, 'click', function (a) {
          a.stopImmediatePropagation();
          b.skipAd();
        })
      );
      this.skipBtnText = ic({
        en: 'You can skip to video in [T]',
        ja: '%E3%81%93%E3%81%AE%E5%BA%83%E5%91%8A%E3%81%AF%20%5BT%5D%20%E7%A7%92%E5%BE%8C%E3%81%AB%E3%82%B9%E3%82%AD%E3%83%83%E3%83%97%E3%81%A7%E3%81%8D%E3%81%BE%E3%81%99',
      });
      this.skipBtn = c;
      a.appendChild(this.skipBtn);
      this.updateSkipButton();
      return !0;
    };
    t.prototype.getSkipTimeRemaining = function () {
      var b = this.$g('iascr').skipOffset;
      if ('number' !== typeof b) return NaN;
      var a = this.getAdDuration(),
        c = this.getAdRemainingTime();
      return 0 >= a || 0 >= c ? NaN : Math.round(b - Math.max(a - c, 0));
    };
    t.prototype.updateSkipButton = function () {
      if (this.skipBtn && this.skipBtnText) {
        var b = this.getSkipTimeRemaining();
        if (!isNaN(b) || this.getAdSkippableState())
          S(
            this.skipBtn,
            { display: 'block', 'font-size': '12px', border: '0 solid rgba(255, 255, 255, 0.5)' },
            !0
          ),
            0 > b
              ? (S(
                  this.skipBtn,
                  {
                    'border-style': 'solid',
                    'border-width': '1px 0 1px 1px',
                    cursor: 'pointer',
                    'font-size': '18px',
                  },
                  !0
                ),
                (this.skipBtn.innerHTML = ic({
                  en: 'Skip ad',
                  ja: '%E5%BA%83%E5%91%8A%E3%82%92%E3%82%B9%E3%82%AD%E3%83%83%E3%83%97',
                })),
                this.skipBtnTimer && g.clearInterval(this.skipBtnTimer))
              : (this.skipBtn.innerHTML = this.skipBtnText.replace('[T]', String(b)));
      } else S(this.skipBtn, { display: 'none' }, !0);
    };
    var N = rc('VPAID', 3),
      Gd = rc('Guest', 3),
      ib = Error('guest vpaid not found');
    x.prototype.$s = function (b, a) {
      if (this.vpaidWrapper) return this.vpaidWrapper.$s(b, a);
      throw Error('adapter not ready');
    };
    x.prototype.$g = function (b) {
      if (this.vpaidWrapper) return this.vpaidWrapper.$g(b);
      throw Error('adapter not ready');
    };
    x.prototype.$e = function (b) {
      for (var a = [], c = 0; c < arguments.length; ++c) a[c - 0] = arguments[c];
      var e;
      c = a.shift();
      if ('AdLoaded' === c) Gd('log event', c, a), (this.adLoaded = !0);
      else if ('AdClickThru' === c) {
        var d = this.$g('params');
        if (d.clickTrackingUrl)
          for (var f = 0; f < d.clickTrackingUrl.length; f++) ba(d.clickTrackingUrl[f]);
        d = this.$g('iascr').clickTrackingUrl || [];
        for (f = 0; f < d.length; f++) ba(d[f]);
        a[0] || ((d = this.$g('iascr').clickThroughUrl || '') && (a[0] = Db(d)));
        !0 === this.$g('IASConfig').csw &&
          C(
            'clickTracking',
            void 0,
            this.vpaidWrapper.$macros(),
            this.vpaidWrapper.$cp({ csw: !0 })
          );
        try {
          null === (e = g.open(a[0], '_blank')) || void 0 === e ? void 0 : e.focus();
        } catch (k) {}
        a.unshift(c);
        this.$emit.apply(this, a);
      } else
        'AdStopped' === c
          ? this.adStopped || ((this.adStopped = !0), a.unshift(c), this.$emit.apply(this, a))
          : (a.unshift(c), this.$emit.apply(this, a));
    };
    x.prototype.$emit = function (b) {
      for (var a = [], c = 0; c < arguments.length; ++c) a[c - 0] = arguments[c];
      Gd('emit event', a);
      this.vpaidWrapper && this.vpaidWrapper.$e.apply(this.vpaidWrapper, a);
    };
    x.prototype.getAdLinear = function () {
      return this.vpaidInner ? this.vpaidInner.getAdLinear() : this.$g('linear');
    };
    x.prototype.getAdWidth = function () {
      return this.vpaidInner ? this.vpaidInner.getAdWidth() : this.$g('width');
    };
    x.prototype.getAdHeight = function () {
      return this.vpaidInner ? this.vpaidInner.getAdHeight() : this.$g('height');
    };
    x.prototype.getAdExpanded = function () {
      return this.vpaidInner ? this.vpaidInner.getAdExpanded() : this.$g('expanded');
    };
    x.prototype.getAdSkippableState = function () {
      return this.vpaidInner ? this.vpaidInner.getAdSkippableState() : this.$g('skippableState');
    };
    x.prototype.getAdRemainingTime = function () {
      return this.vpaidInner ? this.vpaidInner.getAdRemainingTime() : this.$g('remainingTime');
    };
    x.prototype.getAdDuration = function () {
      return this.vpaidInner ? this.vpaidInner.getAdDuration() : this.$g('duration');
    };
    x.prototype.getAdVolume = function () {
      if (this.vpaidInner) return this.vpaidInner.getAdVolume();
      var b = this.$g('video');
      return b ? b.volume : -2;
    };
    x.prototype.setAdVolume = function (b) {
      if (this.vpaidInner) return this.vpaidInner.setAdVolume(b);
      var a = this.$g('video');
      if (!a) return -2;
      b = Ab(b, a.volume);
      var c = b.muted;
      a.volume = b.volume;
      'boolean' === typeof c && (a.muted = c);
      return a.volume;
    };
    x.prototype.getAdCompanions = function () {
      return this.vpaidInner ? this.vpaidInner.getAdCompanions() : this.$g('companions');
    };
    x.prototype.getAdIcons = function () {
      return this.vpaidInner ? this.vpaidInner.getAdIcons() : this.$g('icons');
    };
    x.prototype.subscribe = function (b, a) {
      var c = this;
      if (!this.vpaidInner) return Ca;
      this.vpaidInner.subscribe(b, a);
      return function () {
        c.vpaidInner && c.vpaidInner.unsubscribe(b, a);
      };
    };
    x.prototype.destroy = function () {
      if (this.funcs) for (; this.funcs.length; ) Sa(this.funcs.pop());
      this.vpaidWrapper = this.vpaidInner = void 0;
    };
    x.prototype.initAd = function () {
      var b = this;
      N('init ad');
      var a = this.$g('slot'),
        c = this.$g('iascr'),
        e = this.$g('media');
      return new Promise(function (c, f) {
        var d = Ta(1, function (a) {
          if (a) return N('guest: ', a), f(a);
          try {
            N('guest: create'),
              (b.vpaidInner = g.contentWindow.getVPAIDAd()),
              b.vpaidInner
                ? ('AdClickThru AdDurationChange AdError AdImpression AdInteraction AdLinearChange AdLoaded AdLog AdRemainingTimeChange AdSkippableStateChange AdStarted AdStopped AdUserAcceptInvitation AdUserClose AdUserMinimize AdVideoStart AdVideoFirstQuartile AdVideoMidpoint AdVideoThirdQuartile AdVideoComplete AdPaused AdPlaying AdVolumeChange AdSizeChange AdExpandedChange AdSkipped'
                    .split(' ')
                    .forEach(function (a) {
                      var c = b.subscribe(function (c) {
                        for (var d = [], e = 0; e < arguments.length; ++e) d[e - 0] = arguments[e];
                        d.unshift(a);
                        b.$e.apply(b, d);
                      }, a);
                      b.funcs.push(c);
                    }),
                  c())
                : f(ib);
          } catch (v) {
            f(v);
          }
        });
        N('guest: load');
        var g = pe({
          border: '0',
          scrolling: 'no',
          cssText:
            'visibility: hidden;position: absolute;left: 0px;top: 0px;width: 0px;height: 0px;margin: 0px;padding: 0px;border: 0px'
              .split(';')
              .join(' !important;'),
        });
        qe(g, 1e3)
          .then(function () {
            var a = g.contentDocument;
            a.write(
              [
                '<html><head>',
                (function () {
                  var a = g.contentWindow;
                  for (var b = yb(a), c = 0; null == b && a !== a.parent && 10 > c; c += 1)
                    b = yb((a = a.parent));
                  return (a = b) ? '<base href="' + a + '">' : '';
                })(),
                '</head><body></body></html>',
              ].join('')
            );
            a.close();
            var b = a.createElement('script');
            b.src = e.uri;
            b.crossOrigin = null;
            var c = re(b, 5e3).then(function () {
              return Ua(10, 100, function () {
                return g.contentWindow.getVPAIDAd;
              });
            });
            a.getElementsByTagName('head')[0].appendChild(b);
            return c;
          })
          .then(
            function () {
              d();
            },
            function () {
              d(Error('load timeout'));
            }
          );
        a.parentElement ? a.parentElement.insertBefore(g, a) : a.appendChild(g);
        b.funcs.push(function () {
          g && g.parentElement && g.parentElement.removeChild(g);
        });
      }).then(function () {
        return se(b.vpaidInner, function (a, e, f) {
          N('guest: handshake');
          a.handshakeVersion('2.0');
          N('guest: initAd');
          a.initAd(
            b.$g('width'),
            b.$g('height'),
            b.$g('viewMode'),
            b.$g('desiredBitrate'),
            { AdParameters: c.adParameters || '' },
            { slot: b.$g('slot'), videoSlot: b.$g('video') }
          );
          var d = 0,
            g = setInterval(function () {
              b.adLoaded
                ? (clearInterval(g), e())
                : 100 < d
                ? (clearInterval(g), f(Error('guest initAd failed to emit AdLoaded')))
                : (d += 1);
            }, 100);
        });
      });
    };
    x.prototype.startAd = function () {
      return Z(this.vpaidInner, function (b) {
        b.startAd();
      });
    };
    x.prototype.stopAd = function () {
      if (this.adStopped) return Promise.resolve();
      N('guest: stopAd');
      return Z(this.vpaidInner, function (b) {
        b.stopAd();
      });
    };
    x.prototype.resizeAd = function () {
      var b = this;
      N('guest: resizeAd');
      return Z(this.vpaidInner, function (a) {
        a.resizeAd(b.$g('width'), b.$g('height'), b.$g('viewMode'));
      });
    };
    x.prototype.pauseAd = function () {
      N('guest: pauseAd');
      return Z(this.vpaidInner, function (b) {
        b.pauseAd();
      });
    };
    x.prototype.resumeAd = function () {
      N('guest: resumeAd');
      return Z(this.vpaidInner, function (b) {
        b.resumeAd();
      });
    };
    x.prototype.expandAd = function () {
      N('guest: expandAd');
      return Z(this.vpaidInner, function (b) {
        b.expandAd();
      });
    };
    x.prototype.collapseAd = function () {
      N('guest: collapseAd');
      return Z(this.vpaidInner, function (b) {
        b.collapseAd();
      });
    };
    x.prototype.skipAd = function () {
      if (!this.vpaidInner || !this.vpaidInner.getAdSkippableState())
        return Promise.reject(Error('ad not yet skippable'));
      N('guest: skipAd');
      return Z(this.vpaidInner, function (b) {
        b.skipAd();
      });
    };
    var y = kb('WRAP'),
      D = qc('WRAP'),
      ve = /^[^:]+:\/\/tpc\.googlesyndication\.com\/pagead\/js\/loader/,
      Hd = /^[^:]+:\/\/imasdk\.googleapis\.com\/js\/sdkloader\/vpaid_adapter\.js\b/;
    l.prototype.$s = function (b, a) {
      return (this.attrs[b] = lc(b, a, this.attrs[b]));
    };
    l.prototype.$g = function (b) {
      return this.attrs[b];
    };
    l.prototype.on = function (b, a, c) {
      this.evs.push(ja(b, a, c));
    };
    l.prototype.getAdLinear = function () {
      return this.$g('linear');
    };
    l.prototype.getAdWidth = function () {
      return this.adapter ? this.adapter.getAdWidth() : 0;
    };
    l.prototype.getAdHeight = function () {
      return this.adapter ? this.adapter.getAdHeight() : 0;
    };
    l.prototype.getAdExpanded = function () {
      return this.adapter ? this.adapter.getAdExpanded() : !1;
    };
    l.prototype.getAdSkippableState = function () {
      return this.adapter ? this.adapter.getAdSkippableState() : !1;
    };
    l.prototype.getAdRemainingTime = function () {
      return this.adapter ? this.adapter.getAdRemainingTime() : -2;
    };
    l.prototype.getAdDuration = function () {
      return this.adapter ? this.adapter.getAdDuration() : -2;
    };
    l.prototype.getAdVolume = function () {
      return this.adapter ? this.adapter.getAdVolume() : -2;
    };
    l.prototype.setAdVolume = function (b) {
      return this.adapter ? this.adapter.setAdVolume(zb(b, this.getAdVolume())) : 1;
    };
    l.prototype.getAdCompanions = function () {
      return this.$g('companions');
    };
    l.prototype.getAdIcons = function () {
      return this.$g('icons');
    };
    l.prototype.handshakeVersion = function (b) {
      this.$s('pversion', b);
      return '2.0';
    };
    l.prototype.initAd = function (b, a, c, e, d, f) {
      var g = this;
      if (this.state.is(['new'])) {
        var h = this.$s('crdata', d || {});
        h = this.$s('params', h.AdParameters);
        this.$s(
          'IASConfig',
          jc(h, {
            onMeasurementComplete: function () {
              g.measurementComplete = !0;
            },
          })
        );
        this.$s('duration', h.duration);
      }
      if (this.state.to('init')) {
        y('beforeInitAd', b, a, c, e, d, f);
        this.$s('height', a);
        this.$s('width', b);
        this.$s('viewMode', c);
        this.$s('desiredBitrate', e);
        h = f || {};
        if (h.slot) {
          var l = this.$s('slot', h.slot);
          0 < b &&
            0 < a &&
            (l.offsetWidth !== b || l.offsetHeight !== a) &&
            S(l, { width: b + 'px', height: a + 'px' });
          var n = h.videoSlot;
          n ||
            ((n = Qa(l).document.createElement('video')),
            l.appendChild(h.videoSlot),
            D('initAd: video slot not passed'));
          this.$s('video', n);
          var q = {};
          Object.keys(['playsinline', 'autoplay', 'controls', 'loop']).forEach(function (a) {
            n.hasAttribute && n.hasAttribute(a) && (q[a] = n.getAttribute(a));
          });
          this.evs.push(function () {
            var a = g.$g('video');
            try {
              a.setAttribute
                ? Object.keys(q).forEach(function (b) {
                    a.setAttribute(b, q[b]);
                  })
                : ((a.playsInline = !0), (a.autoplay = !1), (a.controls = !1), (a.loop = !1));
            } catch (J) {}
          });
          var t = m.getElementsByTagName('head')[0];
          t &&
            ['//pixel.adsafeprotected.com', '//dt.adsafeprotected.com', '//sc.iasds01.com'].forEach(
              function (a) {
                t.appendChild(vb('link', { rel: 'preconnect', href: a, as: 'script' }));
              }
            );
          return this.selectMediaFile()
            .then(function () {
              return g.initIAS(g.$g('IASConfig')).then(function () {
                if (g.integral_didBlock) throw (g.$e('AdImpression'), Pa('Ad blocked', 901));
                return g.adapter.initAd().then(function () {
                  g.$e('AdLoaded');
                  y('afterInitAd', b, a, c, e, d, f);
                });
              });
            })
            .catch(function (a) {
              a =
                a && a.message && -1 < a.message.indexOf('Ad blocked')
                  ? a
                  : Pa('initAd failed', (a && a.code) || 901, a);
              D('initAd failed', a);
              g.$e('AdError', a);
            });
        }
        D('initAd: element slot not passed');
        this.$e('AdError', Pa('initAd failed', 901));
      } else D('initAd not allowed');
    };
    l.prototype.selectMediaFile = function () {
      var b = this,
        a = this.$g('video'),
        c = this.$g('params');
      return Wa(a, c.mediaFiles, !0, function (a) {
        return b.$g('IASConfig').ignoreImaVpaid ? !nc() || !Hd.test(a) : !0;
      })
        .then(function (e) {
          return 'text/xml+vast' === e.type
            ? ((b.$g('IASConfig').csw = !0),
              oc(1, a, e.uri, {}, b.$g('IASConfig'), function (a) {
                return b.$g('IASConfig').ignoreImaVpaid ? !nc() || !Hd.test(a) : !0;
              }))
            : {
                creatives: [
                  {
                    linear: !0,
                    adParameters: c.adParameters || '',
                    duration: c.duration,
                    skipOffset: c.skipOffset || -1,
                    clickThroughUrl: c.clickThroughUrl || '',
                    clickTrackingUrl: c.clickTrackingUrl || [],
                    mediaFile: e,
                    mediaFiles: [e],
                    events: {},
                  },
                ],
                creativeIdx: 0,
                iasconfig: b.$g('IASConfig'),
              };
        })
        .then(function (c) {
          var d = c.creatives;
          b.creativeIdx = c.creativeIdx;
          b.creatives = d;
          c = b.creatives[b.creativeIdx].mediaFile;
          b.$s('iascr', b.creatives[b.creativeIdx]);
          b.$s('media', c);
          if (c.type.endsWith('javascript'))
            m
              .getElementsByTagName('head')[0]
              .appendChild(vb('link', { rel: 'preload', href: c.uri, as: 'script' })),
              (b.adapter = new x(b));
          else if (c.type.startsWith('video'))
            a.src || a.currentSrc || (a.src = c.uri), (b.adapter = new t(b));
          else return Promise.reject();
          return Promise.resolve();
        });
    };
    l.prototype.createCountdown = function () {
      var b = this.$g('slot');
      if (!this.$g('IASConfig').hideCountdown) {
        b.querySelectorAll('div').forEach(function (a) {
          /^Publicit/.test(a.innerText) && a.remove();
        });
        this.countdownText = 'Advertisement: Your video starts in [T] seconds.';
        var a;
        if ((a = (this.$g('IASConfig').flags || '').match(/(fr|ger)timer/)))
          'fr' === a[1]
            ? (this.countdownText =
                'Publicit&eacute;: Votre vid&eacute;o commence dans [T] secondes.')
            : 'ger' === a[1] &&
              (this.countdownText = 'Nur ein Werbespot. Das Video beginnt in [T] Sekunden');
        if ((a = (this.$g('IASConfig').flags || '').match(/(top|bottom)(left|middle|right)count/)))
          (this.countdownVerticalAlign = a[1]), (this.countdownAlign = a[2]);
        a = Qa(b).document.createElement('div');
        a.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
        a.style.color = 'white';
        a.style.position = 'absolute';
        a.style.left = a.style.right = '0';
        a.style.boxSizing = 'border-box';
        a.style.width = '100%';
        a.style.padding = '6px';
        a.style.fontSize = '12px';
        a.style.fontWeight = '200';
        a.style.fontFamily = 'Arial, Helvetica, sans-serif';
        (this.countdownVerticalAlign && 'bottom' !== this.countdownVerticalAlign) ||
          (a.style.bottom = '0');
        (this.countdownAlign && 'middle' !== this.countdownAlign) ||
          (this.countdownAlign = 'center');
        a.style.textAlign = this.countdownAlign;
        this.countdownEl = a;
        b.appendChild(a);
        this.updateCountdown();
      }
    };
    l.prototype.updateCountdown = function () {
      if (this.countdownEl && this.countdownText) {
        var b = this.getAdRemainingTime();
        0 > b && (b = this.getAdDuration() - this.elapsed);
        this.countdownEl.innerHTML = this.countdownText.replace('[T]', String(Math.round(b)));
      }
    };
    l.prototype.initIAS = function (b) {
      this.$s('IASConfig', b);
      this.$s('NormalizeIASConfig', ue(b));
      var a = [];
      jb(b.anId) && a.push(this.initCM(b));
      jb(b.advEntityId) && jb(b.pubEntityId) && a.push(this.initFW(b));
      return 0 < a.length ? Promise.all(a) : Promise.resolve();
    };
    l.prototype.initFW = function (b) {
      var a = this;
      return b.isMonitoring
        ? new Promise(function (c, e) {
            y('initFW monitoring', b.fwServerDomain);
            try {
              (a.fwVansInstance_ = new g.__IASVANS(b.fwServerDomain)),
                a.fwVansInstance_.initFW(a.$g('NormalizeIASConfig'), a.$g('slot')),
                c();
            } catch (d) {
              D('initFW failed', d), (a.fwVansInstance_ = void 0), e(d);
            }
          })
        : new Promise(function (c) {
            y('initFW blocking', b.fwServerDomain);
            var e = Ta(1, function (e, f) {
              y('initFW result: ', e);
              a.integral_timeToDecision = new Date().valueOf() - d;
              a.$s('IASTimer', a.integral_timeToDecision);
              a.integral_didBlock = 'blockAd' === b.advEntityId || 'block' === e;
              'timeout' === b.advEntityId && (a.integral_didBlock = !1);
              a.integral_didBlock
                ? (y('initFW was adblocked'),
                  (e = a.$g('IASConfig')) &&
                    e.blockedAdTracking &&
                    (new Image().src = e.blockedAdTracking))
                : f
                ? y('initFW load timed out')
                : y('initFW load complete');
              c();
            });
            try {
              (a.fwVansInstance_ = new g.__IASVANS(b.fwServerDomain)),
                a.fwVansInstance_.initFW(a.$g('NormalizeIASConfig'), a.$g('slot'), e);
            } catch (h) {
              D('IASVANS initFW failed', h), (a.fwVansInstance_ = void 0);
            }
            var d = new Date().valueOf();
            setTimeout(function () {
              e('safe', !0);
            }, b.fwtimeout);
          });
    };
    l.prototype.initCM = function (b) {
      var a = this;
      y('initCM', b.fwServerDomain);
      return new Promise(function (c, e) {
        try {
          (a.cmVansInstance_ = new g.__IASVANS(b.fwServerDomain)),
            a.cmVansInstance_.initCM(a.$g('NormalizeIASConfig'), a.$g('slot')),
            c();
        } catch (d) {
          (a.cmVansInstance_ = void 0), e(d);
        }
      });
    };
    l.prototype.destroy_ = function () {
      this.state.to('destroyed')
        ? (y('destroy'),
          this.adapter && this.adapter.destroy(),
          (this.adapter = void 0),
          this.evs.splice(0, this.evs.length).forEach(Sa),
          this.events.splice(0, this.events.length))
        : y('destroy not allowed');
    };
    l.prototype.$e = function (b) {
      for (var a = [], c = 0; c < arguments.length; ++c) a[c - 0] = arguments[c];
      var e = this;
      if ('AdStopped' === a[0] && !this.state.is(['stopped']))
        return new Promise(function (a) {
          y('AdStopped dispatched before adStop called, stopping...');
          e.stopAd();
          a();
        });
      y('before' + a[0]);
      return new Promise(function (b) {
        e.$emitTracker.apply(e, a);
        e.$emitIAS(a[0]).then(function () {
          e.$emitVPAID.apply(e, a);
          y('after' + a[0]);
          b();
        });
      });
    };
    l.prototype.$emitIAS = function (b) {
      var a = this;
      a: {
        switch (b) {
          case 'AdSizeChange':
          case 'AdExpandedChange':
          case 'AdUserMinimize':
            var c = 'resizeAd';
            break a;
        }
        c = b;
      }
      if (!this.fwVansInstance_ && !this.cmVansInstance_) return Promise.resolve();
      var e = {
        ad_duration: this.getAdDuration(),
        width: this.getAdWidth(),
        height: this.getAdHeight(),
        volume: this.getAdVolume(),
      };
      switch (b) {
        case 'AdSizeChange':
        case 'AdExpandedChange':
        case 'AdUserMinimize':
          e = Object.assign(e, { viewMode: this.$g('viewMode') });
          var d = this.$g('currentViewMode'),
            f = this.$g('viewMode');
          this.$s('currentViewMode', f);
          'fullscreen' === f && 'fullscreen' !== d
            ? this.$emitVastTracker('fullscreen')
            : 'fullscreen' === d && 'fullscreen' !== f && this.$emitVastTracker('exitFullscreen');
          break;
        case 'AdVolumeChange':
          e = Object.assign(e, { viewMode: this.$g('viewMode') });
          d = this.$g('currentVol');
          f = this.getAdVolume();
          this.$s('currentVol', f);
          0 === d && 0 < f
            ? this.$emitVastTracker('unmute')
            : 0 < d && 0 === f && this.$emitVastTracker('mute');
          break;
        case 'AdImpression':
          e = Object.assign(e, {
            integral_timeToDecision: this.integral_timeToDecision,
            integral_didBlock: this.integral_didBlock,
            viewMode: this.$g('viewMode'),
          });
      }
      this.fwVansInstance_ && this.fwVansInstance_.sendEvent(c, e);
      this.cmVansInstance_ && -1 < ye.indexOf(b) && this.cmVansInstance_.sendEvent(c, e);
      return 'AdStopped' === b || 'AdSkipped' === b || 'AdError' === b
        ? new Promise(function (b) {
            var c = Ta(1, function () {
              g.clearInterval(d);
              g.clearTimeout(e);
              b();
            });
            var d = g.setInterval(function () {
              a.measurementComplete && c();
            }, 50);
            var e = g.setTimeout(c, 1e3);
          })
        : Promise.resolve();
    };
    l.prototype.$emitVPAID = function (b) {
      for (var a = [], c = 0; c < arguments.length; ++c) a[c - 0] = arguments[c];
      var e = a.shift();
      (this.integral_didBlock && 'AdImpression' === e) ||
        (this.events
          .filter(function (a) {
            return e === a.name || '*' === a.name;
          })
          .forEach(te(a, e)),
        'AdDurationChange' === e &&
          (a.unshift('AdRemainingTimeChange'), this.$emitVPAID.apply(this, a)));
    };
    l.prototype.$cp = function (b, a) {
      var c = this.$g('NormalizeIASConfig'),
        e = this.$g('params'),
        d = {};
      return {
        ias_singletag: !!e.ias_singletag,
        ias_singletag_outcome: e.ias_singletag_outcome,
        headers: Object.assign({ header8: c.partner }, a),
        custom: Object.assign(
          ((d.custom1 = c.anId || void 0),
          (d.custom7 = c.advEntityId || void 0),
          (d.custom8 = c.pubEntityId || void 0),
          (d.custom11 = '2022.01.25-14.02-bbbcb4c'),
          (d.xsid = c.xsId || void 0),
          d),
          b
        ),
      };
    };
    l.prototype.$macros = function (b) {
      var a = {},
        c = this.$g('video'),
        e = this.$g('media');
      c && c.currentTime && (a.CONTENTPLAYHEAD = we(c.currentTime));
      e && (a.ASSETURI = e.uri);
      b &&
        Object.keys(b).forEach(function (c) {
          a[c] = b[c];
        });
      return a;
    };
    l.prototype.$emitTracker = function (b, a) {
      for (var c = [], e = 1; e < arguments.length; ++e) c[e - 1] = arguments[e];
      if ((e = this.$g('iascr')))
        switch (b) {
          case 'AdError':
            var d = {};
            C(
              'error',
              e.events,
              this.$macros(
                ((d.ERRORCODE = (c[0] && c[0].code) || 900),
                (d.PBMSG = (c[0] && c[0].message) || ''),
                d)
              ),
              this.$cp()
            );
            break;
          case 'AdImpression':
            if (e.impressed) break;
            e.impressed = !0;
            c = {};
            d = {};
            C(
              'impression',
              e.events,
              this.$macros(),
              this.$cp(
                ((c.custom19 = this.integral_didBlock ? 'blocked' : void 0), c),
                ((d.header11 = e.adSystem), d)
              )
            );
            break;
          case 'AdStarted':
            C('start', e.events, this.$macros(), this.$cp());
            break;
          case 'AdVideoStart':
            this.$s('currentVol', this.getAdVolume());
            C('creativeView', e.events, this.$macros(), this.$cp());
            break;
          case 'AdVideoFirstQuartile':
            C('firstQuartile', e.events, this.$macros(), this.$cp());
            break;
          case 'AdVideoMidpoint':
            C('midpoint', e.events, this.$macros(), this.$cp());
            break;
          case 'AdVideoThirdQuartile':
            C('thirdQuartile', e.events, this.$macros(), this.$cp());
            break;
          case 'AdVideoComplete':
            C('complete', e.events, this.$macros(), this.$cp());
            break;
          case 'AdPaused':
            C('pause', e.events, this.$macros(), this.$cp());
            break;
          case 'AdPlaying':
            C('resume', e.events, this.$macros(), this.$cp());
            break;
          case 'AdSkipped':
            C('skip', e.events, this.$macros(), this.$cp());
            break;
          case 'AdUserAcceptInvitation':
            C('acceptInvitationLinear', e.events, this.$macros(), this.$cp());
            break;
          case 'AdUserClose':
            C(e.linear ? 'closeLinear' : 'close', e.events, this.$macros(), this.$cp());
        }
    };
    l.prototype.$emitVastTracker = function (b) {
      var a = this.$g('iascr');
      if (a)
        switch (b) {
          case 'mute':
            C('mute', a.events, this.$macros(), this.$cp());
            break;
          case 'unmute':
            C('unmute', a.events, this.$macros(), this.$cp());
            break;
          case 'fullscreen':
            C('fullscreen', a.events, this.$macros(), this.$cp());
            break;
          case 'exitFullscreen':
            C('exitFullscreen', a.events, this.$macros(), this.$cp());
        }
    };
    l.prototype.startAd = function () {
      var b = this;
      this.state.to('started')
        ? (y('startAd'),
          this.adapter.startAd().then(
            function () {
              b.createCountdown();
              b.elapsed = 0;
              b.updateDelay = 250;
              b.countdownTimer = setInterval(function () {
                b.$g('video').paused || (b.elapsed += b.updateDelay / 1e3);
                b.updateCountdown();
              }, b.updateDelay);
            },
            function (a) {
              D('startAd failed', a);
              b.$e('AdError', a);
            }
          ))
        : D('startAd not allowed');
    };
    l.prototype.stopAd = function () {
      var b = this;
      if (!this.state.is(['stopped', 'destroyed']))
        if (this.state.to('stopped')) {
          var a = function () {
            b.$e('AdStopped').then(function () {
              b.destroy_();
            });
          };
          this.adapter
            .stopAd()
            .then(a, a)
            .catch(function () {
              D('stopAd failed');
            });
          clearInterval(this.countdownTimer);
        } else D('stopAd not allowed');
    };
    l.prototype.resizeAd = function (b, a, c) {
      y('resizeAd');
      var e = this.$g('slot');
      e &&
        0 < b &&
        0 < a &&
        (e.offsetWidth !== b || e.offsetHeight !== a) &&
        S(e, { width: b + 'px', height: a + 'px' });
      this.$s('height', a);
      this.$s('width', b);
      this.$s('viewMode', c);
      return this.adapter.resizeAd().catch(function (a) {
        D('resizeAd failed', a);
      });
    };
    l.prototype.pauseAd = function () {
      this.adapter
        ? (y('pauseAd'),
          this.adapter.pauseAd().catch(function (b) {
            D('pauseAd failed', b);
          }))
        : y('pauseAd skipped. adapter not available');
    };
    l.prototype.resumeAd = function () {
      this.adapter
        ? (y('resumeAd'),
          this.adapter.resumeAd().catch(function (b) {
            D('resumeAd failed', b);
          }))
        : y('resumeAd skipped. adapter not available');
    };
    l.prototype.expandAd = function () {
      this.adapter
        ? this.isFullscreen()
          ? y('expandAd requested, but another element is fullscreen')
          : (y('expandAd'),
            this.adapter.expandAd().catch(function (b) {
              D('expandAd failed', b);
            }))
        : y('expandAd skipped. adapter not available');
    };
    l.prototype.collapseAd = function () {
      this.adapter
        ? this.isFullscreen()
          ? (y('collapseAd'),
            this.adapter.collapseAd().catch(function (b) {
              D('collapseAd', b);
            }))
          : y('collapseAd requested, but element is not fullscreen')
        : y('collapseAd skipped. adapter not available');
    };
    l.prototype.skipAd = function () {
      this.adapter
        ? this.getAdSkippableState()
          ? this.state.to('skipped')
            ? (y('skipAd'), this.adapter.skipAd())
            : D('skipAd not allowed')
          : y('skipAd requested, but not yet skippable')
        : y('skipAd skipped. adapter not available');
    };
    l.prototype.subscribe = function (b, a, c) {
      this.events.push({ name: a, fn: b, ctx: c });
    };
    l.prototype.unsubscribe = function (b, a) {
      for (var c = this.events.length - 1; 0 <= c; --c)
        this.events[c].name === a &&
          b === this.events[c].fn &&
          (y('unsubscribe:', a, b), this.events.splice(c, 1));
    };
    g.getVPAIDAd = pc;
    f.getVPAIDAd = pc;
    return f;
  })({}, window, document);
})();
