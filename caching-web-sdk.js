const adContent = '<iframe src="https://creative-stg.bliink.io/switch_test/index.html?cb=1689604769&gdpr=1&gdpr_consent=&isSticky=false&isPrebid=false#click=https://e-stg.api.bliink.io/c?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTIyNjIwODMsImlhdCI6MTY5MTY1NzI4MywiaXNzIjoiYmxpaW5rIiwiZGF0YSI6eyJ0eXBlIjoiYWQtc2VydmVyIiwidHJhbnNhY3Rpb25JZCI6ImVmMWViODEzLWE5ZGItNDlhNi1iOGJkLTE1Y2Y0ZWUyYmZjZSIsIm5ldHdvcmtJZCI6MjEsInNpdGVJZCI6NDgsInRhZ0lkIjo4MSwiZXZlbnRJZCI6MywidGFyZ2V0aW5nIjp7InBsYXRmb3JtIjoiTW9iaWxlIFdlYnNpdGUiLCJrZXl3b3JkIjoiYmV1cnJlIG1vdSxjaG9jb2xhdCBub2lyLGNvb2tpZXMsZmFyaW5lIGRlIHNhcnJhc2luLGxldnVyZSBjaGltaXF1ZSxvZXVmLHNhbnMgZ2x1dGVuLHN1Y3JlIGJsb25kIGRlIGNhbm5lLGJldXJyZSBtb3UsY2hvY29sYXQgbm9pcixjb29raWVzLGZhcmluZSBkZSBzYXJyYXNpbixsZXZ1cmUgY2hpbWlxdWUsb2V1ZixzYW5zIGdsdXRlbixzdWNyZSBibG9uZCBkZSBjYW5uZSIsInJlZmVycmVyIjoiaHR0cDovL2xvY2FsaG9zdDo4MjgyLyIsInBhZ2VVcmwiOiJodHRwOi8vbG9jYWxob3N0OjgyODIvIiwiaW1hZ2VVcmwiOiJodHRwczovL3d3dy5vZGVsaWNlcy5jb20vaW1hZ2VzL3JlY2V0dGVzL2Nvb2tpZXNfc2FycmFzaW5fY2hvY29sYXQyLmpwZyIsInRpbWUiOjE2OTE2NTcyODMsImxvY2F0aW9uIjp7ImxhdGl0dWRlIjo0Ny4zMTEsImxvbmdpdHVkZSI6Mi43OTgyLCJyZWdpb24iOiJDVkwiLCJjb3VudHJ5IjoiRlIiLCJjaXR5IjoiQnVlIiwiemlwQ29kZSI6IjE4MzAwIiwiZGVwYXJ0bWVudCI6IjE4In0sImNpdHkiOiJCdWUiLCJjb3VudHJ5IjoiRlIiLCJpbnRlcm5ldENvbm5lY3Rpb25UeXBlIjoiNGciLCJkZXZpY2VPcyI6ImlPUyIsImRldmljZU1vZGVsIjoiaVBob25lIiwiZGV2aWNlUGxhdGZvcm0iOiJNb2JpbGUgV2Vic2l0ZSIsInJhd1VzZXJBZ2VudCI6Ik1vemlsbGEvNS4wIChpUGhvbmU7IENQVSBpUGhvbmUgT1MgMTNfMl8zIGxpa2UgTWFjIE9TIFgpIEFwcGxlV2ViS2l0LzYwNS4xLjE1IChLSFRNTCwgbGlrZSBHZWNrbykgVmVyc2lvbi8xMy4wLjMgTW9iaWxlLzE1RTE0OCBTYWZhcmkvNjA0LjEifSwiZ2RwciI6eyJoYXNDb25zZW50IjpmYWxzZSwiY29uc2VudFN0cmluZyI6Im51bGwifSwibnAiOiI0Y0I0dWFBbmdwWWJnRFFheWJQYWdRPT0iLCJncCI6IjcrTlRWMSsrS21ad2RwOG5NV3c0aXc9PSIsImFkVW5pdFBvcyI6MSwiY3VycmVuY3kiOiJFVVIiLCJ3aW4iOmZhbHNlLCJmb3JtYXQiOjQsImRpc3BsYXlUeXBlIjoic3RpY2t5IiwiYWRJZCI6MjE5LCJhZHZlcnRpc2VySWQiOjIxLCJjYW1wYWlnbklkIjo1MzYsImNyZWF0aXZlSWQiOjE1NiwiZXJyb3IiOmZhbHNlfX0.ZLjXh1AwJmJ1FCPkdybFJ_H6DgP42q0JDncEx-rHwJU&redirect=" style="height: 100%; width: 100%; border: 0;"></iframe><script src="http://localhost:8282/assets/build/creative.js"></script><script>console.log("hello you")</script>';

function renderAd(adContent) {
  console.log("Bliink ne rendering test******");
  // Create a new div element
  var adContainer = document.createElement("div");
  adContainer.innerHTML = adContent;

  // Get all script elements within the ad container
  var scripts = adContainer.querySelectorAll("script");

  // Load scripts sequentially
  function loadScriptsSequentially(index) {
    if (index < scripts.length) {
      var script = document.createElement("script");
      if (scripts[index].src) {
        script.src = scripts[index].src;
        script.onload = function () {
          loadScriptsSequentially(index + 1);
        };
        document.body.appendChild(script);
      } else {
        var inlineScript = document.createTextNode(scripts[index].textContent);
        var inlineScriptTag = document.createElement("script");
        inlineScriptTag.appendChild(inlineScript);
        document.body.appendChild(inlineScriptTag);
        loadScriptsSequentially(index + 1);
      }
    }
  }
  window.addEventListener('DOMContentLoaded', function () {
    // Append the ad container to the body
    document.body.appendChild(adContainer);
  
    // Start loading scripts
    loadScriptsSequentially(0);
    console.log("Bliink ne rendering test****** END");
  })
}


renderAd(adContent);

function insertScript(url) {
  return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = url;
      script.onload = () => {
          resolve(script);
      };
      script.onerror = () => {
          reject(new Error(`Failed to load script from ${url}`));
      };
      document.head.appendChild(script);
  });
}