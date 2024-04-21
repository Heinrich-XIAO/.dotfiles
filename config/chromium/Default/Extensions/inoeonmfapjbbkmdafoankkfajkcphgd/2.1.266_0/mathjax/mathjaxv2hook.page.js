(function() {
    window.texthelp = window.texthelp || {};
    window.texthelp.RW4GC = window.texthelp.RW4GC || {};
    window.texthelp.RW4GC.mathjax2hook = window.texthelp.RW4GC.mathjax2hook || {};

    if (window.texthelp.RW4GC.mathjax2hook.injected){
        return;
    }

    if (window.MathJax && window.MathJax.version.startsWith("2")){
        window.texthelp.RW4GC.mathjax2hook.injected = true;
        MathJax.Hub.Register.MessageHook("End Process", function (message) {
            // console.log(message);
            document.dispatchEvent(new CustomEvent('th-mathjax-v2-update'));
        })
    }
})()