var g = document.getElementById('th-Google');
var ms = document.getElementById('th-MicrosoftOnline');
const nyc = document.getElementById('th-NYCOnline');
var mnote = document.getElementById('th-privacy');
// var elementsToTranslate = document.querySelectorAll('[data-trans-optionsdlg]');
//         for (var i = 0; i < elementsToTranslate.length; i++) {
//             var localeId = elementsToTranslate[i].getAttribute('data-trans-optionsdlg');
//             elementsToTranslate[i].innerHTML = textHelp.webreader.LocaleSingleton.getInstance().getLocaleString(localeId);
// }

//If Microsoft
if (ms) {
  if (ms.getAttribute('listener') !== 'true') {
    ms.addEventListener('click', function (e) {
      const elementClicked = e.target;
      elementClicked.setAttribute('listener', 'true');
      e.preventDefault();
      setProvider("MS");
    });
  }
}

//If Microsoft
if (nyc) {
  if (nyc.getAttribute('listener') !== 'true') {
    nyc.addEventListener('click', function (e) {
      const elementClicked = e.target;
      elementClicked.setAttribute('listener', 'true');
      e.preventDefault();
      setProvider("NYC");
    });
  }
}
if (navigator.appVersion.indexOf("Edg/") > -1) {
  if (g !== undefined && g !== null) {
    g.style.display = 'none';
  }
  if (nyc !== undefined && nyc !== null) {
    //hide NYC from Edge browser
    nyc.style.display = 'none';
  }
} else {
  //If Google
  if (g) {
    if (g.getAttribute('listener') !== 'true') {
      g.addEventListener('click', function (e) {
        const elementClicked = e.target;
        elementClicked.setAttribute('listener', 'true');
        e.preventDefault();
        setProvider("G");
      });
    }
  }
}

//Set the provider and reset focus orgin tab
function setProvider(provider) {
  try {
    //Set Auth provider
    // bgWindow.SetAuthProvider(provider);
    chrome.runtime.sendMessage({
      'command': 'thswsetaccounttype',
      "accountType": provider
    });

    //Get Tab Id for parent location
    var url = new URL(window.location);
    var orginTab = parseInt(url.searchParams.get("q"));

    // window.close();

    //Update to focus on parent 
    var updateProperties = {
      'active': true
    };
    chrome.tabs.update(orginTab, updateProperties, tab => {
      //Close this window
      setTimeout(() => {
        window.close();
      }, 300);
    });
    //     });
  } catch (ex) {}
}

//Show and Hide the Privacy notes on click 
if (mnote) {
  mnote.addEventListener("click", function (evt) {
    var morePrivacy = document.getElementById("th-morePrivacy");
    if (morePrivacy.style.display === "none") {
      morePrivacy.style.display = "block";
    } else {
      morePrivacy.style.display = "none";
    }
  });
}
