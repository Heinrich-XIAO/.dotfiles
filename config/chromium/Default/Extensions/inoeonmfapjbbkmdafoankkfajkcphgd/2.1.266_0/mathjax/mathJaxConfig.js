MathJax = {
    startup: {
      typeset: false,
      pageReady: async ()=>{ 
        await MathJax.startup.defaultPageReady();
        document.dispatchEvent(new CustomEvent('th-mathJaxExplorerReady'));
      }
    },
    loader: {
      paths: {
          custom: `chrome-extension://${chrome.runtime.id}/mathjax`
      },      
      load: ['[custom]/a11y/sre','[custom]/a11y/semantic-enrich', '[custom]/a11y/explorer', '[custom]/a11y/complexity']
    },
    // complexity is force loaded by openstax pages and causing problems. Turning it off
    options: {   
      enableComplexity: false,       // set to false to disable complexity computations
      makeCollapsible: false,       
      enableExplorer: true,                // set to false to disable the explorer
      a11y: {
        speech: true
      }
    }
};