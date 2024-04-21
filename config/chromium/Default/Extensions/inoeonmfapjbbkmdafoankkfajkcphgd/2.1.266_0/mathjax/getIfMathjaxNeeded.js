(async function() {
    window.texthelp = window.texthelp || {};
    window.texthelp.RW4GC = window.texthelp.RW4GC || {};
    window.texthelp.RW4GC.matjhjaxneeded = window.texthelp.RW4GC.matjhjaxneeded || {};

    const mathjaxScripts = Object.freeze([
        {
            selector: "math, .MathJax, script[src*='mathjax@3']",
            url: ["https://openstax.org"],
            doNotInject: ["https://digitalemethode.be", "https://wezoozacademy.h5p.com"],
            injectRule: {
                target: {},
                files: ['mathjax/mathJaxConfig.js', 'mathjax/tex-mml-chtml.js']
            }
        }
    ]);

    let result = {
        found: false,
        url: window.location.href,
        injectRule: null
    }

    if (window.texthelp.RW4GC.matjhjaxneeded.injected === true){
        return result;
    }

    if (mathjaxScripts[0].doNotInject.filter(x=> { if (x === window.location.origin){return true}}).length > 0){
        let settings = JSON.parse(window.localStorage.getItem("MathJax-Menu-Settings") ? window.localStorage.getItem("MathJax-Menu-Settings") : '{}');
        if (settings.explorer === true){
            settings.explorer = false;
            window.localStorage.setItem("MathJax-Menu-Settings", JSON.stringify(settings));
        }
        return result;
    }

    for (let i = 0; i < mathjaxScripts.length; i++){
        let sel = mathjaxScripts[i].selector;
        let mathElement = document.querySelector(sel);

        let foundUrl = false;
        for (let z = 0; z < mathjaxScripts[i].url.length; z++){
            if (mathjaxScripts[i].url[z] === window.location.origin){
                const injectScript = name => {
                    const scriptElement = document.createElement("script");
                    scriptElement.src = chrome.runtime.getURL(name);
                    (document.head || document.documentElement).appendChild(scriptElement);
                };
                ["mathjax/mathjaxv2hook.page.js"].forEach(injectScript);
                foundUrl = true;
                break;
            }
        }

        //let tex = document.body.textContent.match(/(?:\$|\\\(|\\\[|\\begin\{.*?})/)
        if (mathElement 
            //|| tex 
            || foundUrl){
                //mathJax settings
                let settings = JSON.parse(window.localStorage.getItem("MathJax-Menu-Settings") ? window.localStorage.getItem("MathJax-Menu-Settings") : '{}');
                if (!foundUrl && (settings.explorer === undefined || settings.explorer === false)){
                    settings.explorer = true;
                    window.localStorage.setItem("MathJax-Menu-Settings", JSON.stringify(settings));
                }

            if (window.MathJax){
                break;
            }
            result.found = true;
            result.injectRule = mathjaxScripts[i].injectRule;
            window.texthelp.RW4GC.matjhjaxneeded.injected = true;
            break;
        }
    }
    return result;

})();
