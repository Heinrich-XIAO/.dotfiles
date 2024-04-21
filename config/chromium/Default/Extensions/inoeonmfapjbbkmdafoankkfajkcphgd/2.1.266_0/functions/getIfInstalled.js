(function () {
  // This is for word online. 
  // We don't need to inject it because it is already injected even if the injectionResults comes back false
  // #38713 - Word - Speak as I type - Voices are being duplicated 
  if (window.location.href.lastIndexOf("word-edit.officeapps.live.com") > -1 || window.location.href.lastIndexOf("sharepoint.com") > -1 || window.location.href.lastIndexOf("https://onedrive.live.com/") > -1) {
    return true;
  }
  window.texthelp = window.texthelp || {};
  window.texthelp.RW4GC = window.texthelp.RW4GC || {};
  window.texthelp.RW4GC.frame = window.texthelp.RW4GC.frame || {};
  if (!window.texthelp.RW4GC.frame.injected) {
    window.texthelp.RW4GC.frame.injected = true;
    return false;
  }
  return true;
})();
