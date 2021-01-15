document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', onclick, false)
    function onclick() {
        chrome.tabs.query({ currentWindow: true, active: true },
            function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, 'hi', gotDivs)
            })
    }

    function gotDivs(response) {
        // const res = fetch(url).then((data) => {})
        console.log(response)
    }
}, false)