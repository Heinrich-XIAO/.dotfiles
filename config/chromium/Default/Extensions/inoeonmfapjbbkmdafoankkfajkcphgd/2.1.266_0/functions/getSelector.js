(async function () {
  let selectorContentScripts = Object.freeze([{
    selector: ".docs-texteventtarget-iframe",
    injectRule: {
      target: {},
      files: ['gdocs.content.bundle.js']
    }
  }, {
    selector: "#WACViewPanel",
    injectRule: {
      target: {},
      files: ['wordonline.content.bundle.js']
    }
  }, {
    selector: ".d2l-loading-spinner-wrapper",
    injectRule: {
      target: {},
      files: ['gdocs.content.bundle.js']
    }
  }]);
  let result = {
    found: false,
    url: window.location.href,
    injectRule: null
  };
  await new Promise(resolve => {
    setTimeout(resolve, 200);
  });
  for (let i = 0; i < selectorContentScripts.length; i++) {
    let sel = selectorContentScripts[i].selector;
    let gdocsFrame = document.querySelector(sel);
    if (gdocsFrame) {
      result.found = true;
      result.injectRule = selectorContentScripts[i].injectRule;
      break;
    }
  }
  return result;
})();
