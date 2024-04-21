window.onload = () => {
    document.querySelectorAll(".marketSelector").forEach(function(elementButton) {
        elementButton.addEventListener("click", function(element) {
            chrome.runtime.sendMessage({command: "th-setMarket", market :element.target.name});
            window.setTimeout(()=> {window.close();}, 300); //close the page after 0.3 second so we can send out the message
        });
    })
}
