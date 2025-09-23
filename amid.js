(function () {
  function ping(q) {
    var i = new Image();
    i.src = "https://e-stg.api.bliink.io/e?name=omid-probe&" + q + "&ts=" + Date.now();
  }

  function startProbe() {
    try {
      // La lib IAB expose 'omidVerificationClient.VerificationClient'
      var vc = new omidVerificationClient.VerificationClient();
      var supported = vc.isSupported();           // => true si OMID dispo côté player
      var env = vc.getEnvironment();              // WEB / APP / null
      // S'enregistrer pour prouver qu'on reçoit des events OMID
      vc.registerSessionObserver(function (ev) {
        ping("evt=" + encodeURIComponent(ev.type));
      }, "dummyVendor"); // clé standard de validation IAB

      ping("supported=" + supported + "&env=" + encodeURIComponent(env));
    } catch (e) {
      ping("error=" + encodeURIComponent(e.message));
    }
  }

  // 1) Charger la lib IAB "OMID Verification Client" avant d'appeler l’API
  var s = document.createElement("script");
  s.src = "https://cdn.yourdomain.com/omid-verification-client-v1.js"; // héberge la lib IAB
  s.onload = startProbe;
  s.onerror = function(){ ping("error=load_omid_verification_client_failed"); };
  document.documentElement.appendChild(s);
})();
