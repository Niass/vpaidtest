// omid-probe.js
(function () {
  function ping(q) {
    var i = new Image();
    i.src = "https://e-stg.api.bliink.io/e?name=omid-probe&" + q + "&ts=" + Date.now();
  }
  try {
    var hasOmid = !!(window.omid3p || window.omidSessionInterface);
    var mode = (window.omid3p && window.omid3p.context) ? "3p" : (hasOmid ? "unknown" : "none");
    ping("hasOmid=" + hasOmid + "&mode=" + encodeURIComponent(mode) + "&ua=" + encodeURIComponent(navigator.userAgent));
  } catch (e) {
    ping("error=" + encodeURIComponent(e.message));
  }
})();
