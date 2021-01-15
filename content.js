chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    const getDivs = document.querySelectorAll('[data-sender-name]')
    let innerhtmltext = {}
    for (let i = 0; i < getDivs.length; i++) {

        innerhtmltext[i] = getDivs[i].innerHTML
    }
    console.log(innerhtmltext)
    // sendResponse({ chats: getDivs })
})