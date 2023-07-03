(function () {
  // Get the current script element
  var script = document.currentScript;

  // Check if the script is rendered inside an iframe
  var isInIframe = window !== window.top;

  // Get the corresponding iframe based on the iframe source
  var iframe;
  if (isInIframe) {
    iframe = document.querySelector(
      'iframe[src*="https://engine-stg.bliink.io/creative"]'
    );
  } else {
    iframe = script.previousElementSibling;
  }
  iframe.style.visibility = "hidden";
  console.log("iframe bliink", iframe);
  const iframeSrc = iframe.src;
  // Wait for the iframe content to load
  // iframe.contentWindow.postMessage({ type: 'getStylesheet', iframeUrl: iframe.src }, '*');
  iframe.addEventListener("load", function () {
    // Send a message to the iframe
    console.log("sending post message");
    iframe.contentWindow.postMessage(
      {
        type: "getStylesheet",
        iframeUrl: iframe.src,
        message: "bliink-prebid-stylesheet",
      },
      "*"
    );
  });

  // Listen for messages from the iframe
  window.addEventListener("message", function (event) {
    console.log(
      `message received !!!! ${
        (event.data, event.source === iframe.contentWindow)
      }`,
      event.data
    );
    // Check if the message is from the trusted iframe
    if (event.source === iframe.contentWindow) {
      // Process the message received from the iframe
      if (event.data.type === "stylesheet") {
        console.log("successsss");
        // Create a style element and add the received stylesheet to the head
        var styleElement = document.createElement("style");
        styleElement.textContent = event.data.stylesheet;
        const cssClasses = event.data.cssClasses
        document.head.appendChild(styleElement);
        iframe.setAttribute("class", cssClasses);
        iframe.style.visibility = "visible";
      } else if (event.data.type === "applyStyles") {
        // Apply the received CSS class and styles to the iframe
        iframe.classList.add(event.data.className);
        Object.assign(iframe.style, event.data.styles);
      } else if (event.data.type === "adDestroyed") {
        iframe.remove()
      }
    }
  });

})();
