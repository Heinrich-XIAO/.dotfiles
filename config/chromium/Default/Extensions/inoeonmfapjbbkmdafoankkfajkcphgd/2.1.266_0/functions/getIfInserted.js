// this is the code which will be injected into a given page...

(function () {
  window.texthelp = window.texthelp || {};
  window.texthelp.gdi = window.texthelp.gdi || {};

  // let added = window.texthelp.gdi.added === true? true : false;
  // let checked = window.texthelp.gdi.checked === true? true : added;

  // return { res: added, url: window.location.href, checked: checked };

  if (window.texthelp.gdi.checked === true && window.texthelp.gdi.added === true) {
    return {
      res: true,
      url: window.location.href,
      checked: true
    };
  } else if (window.texthelp.gdi.checked === true && window.texthelp.gdi.added === false) {
    return {
      res: false,
      url: window.location.href,
      checked: true
    };
  }
  if (window.texthelp.gdi.added === true) {
    return {
      res: true,
      url: window.location.href,
      checked: true
    };
  } else {
    window.texthelp.gdi.checked = true;
    return {
      res: false,
      url: window.location.href,
      checked: false
    };
  }
})();
