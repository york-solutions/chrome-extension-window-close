chrome.browserAction.onClicked.addListener(function(tab){
  chrome.windows.create({
    url: chrome.extension.getURL('/pages/redirect.html'),
    type: 'popup'
  });
});