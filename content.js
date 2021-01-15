chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    const getDivs = document.querySelectorAll('[data-sender-name]')
    console.log(getDivs)
    sendResponse({ chats: getDivs })
})