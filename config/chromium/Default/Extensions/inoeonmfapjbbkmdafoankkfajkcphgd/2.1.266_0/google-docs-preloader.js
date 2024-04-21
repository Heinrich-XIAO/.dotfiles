(function () {
  'use strict';
  const targetElement = document.head || document.documentElement;
  const injectScript = name => {
    const url = chrome.runtime.getURL(name);
    const preloadElement = document.createElement("link");
    preloadElement.rel = "preload";
    preloadElement.href = url;
    preloadElement.as = "script";
    targetElement.prepend(preloadElement);
    const scriptElement = document.createElement("script");
    scriptElement.src = url;
    targetElement.prepend(scriptElement);
  };
  setTimeout(()=>{
    ["google-docs-integration.js", "texthelp-wrapper.js"].forEach(injectScript);
  },0)
}());