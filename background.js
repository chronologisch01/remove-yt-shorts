chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
  
        console.log("TEEEST");
  
    }
  })
  


/*chrome.tabs.onUpdated.addListener(function(details) {
    if(chaInfo)
    chrome.tabs.executeScript(details.tabId, {
      file: "content.js"
    });
  });*/