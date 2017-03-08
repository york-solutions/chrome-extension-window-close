chrome.browserAction.onClicked.addListener(function(tab){
  chrome.windows.create({
    // url: 'https://york.io/chrome-extension-window-close/',
    url: chrome.extension.getURL('redirect.html'),
    type: 'popup'
  });
});