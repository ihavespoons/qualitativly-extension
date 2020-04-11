


function userSetting(){
   chrome.storage.sync.get(['fakeness'], function(result){
        value = result.fakeness;
    })
    
}

function eval(untrust, trust) {
    if(value == null){
        console.log('Value is:')
        console.log(value)
        value = 75;
    }

    if (value != 75) {
        userSetting();
    }

     console.log(value)
        chrome.storage.sync.get(['alert'], function(result){value = result.alert;})
     if (alert != 'true') {
        if (value != 0){
        if(untrust*100 >= value){
         chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
             chrome.tabs.sendMessage(tabs[0].id, {greeting: "Alert"}, function(response) {

             });
         });
        var opt = {
        type: "basic",
        title: "Qualitativly - Warning",
        message: "This article has a high misinformation score",
        iconUrl: "QLogo32.png"
        }
         chrome.notifications.create('', opt)
         chrome.browserAction.setBadgeText({text: "!"});
        chrome.storage.sync.set({alert: 'true'}, function() {
         console.log('Value is set for alert');
        })
     }
     }
     }
}


function sendURL(url){
    const data = { article_url: url };
    userSetting();

    fetch('https://api.qualitativly.com/classify/covid19', {
         method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {

    eval(data.untrustworthy, data.trustworthy);
    })
    .catch((error) => {
    });
}

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {

    chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 1] });
    chrome.browserAction.setBadgeText({text: ""});
    chrome.storage.sync.set({alert: 'false'}, function() {
         console.log('Value is set for alert');
        })
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;
        let regex = "chrome"
        if(url.includes(regex)){
        }
        else{sendURL(url)};
        });
});

chrome.tabs.onCreated.addListener(function(tab) {
    chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 1] });
    chrome.browserAction.setBadgeText({text: ""});
        chrome.storage.sync.set({alert: 'false'}, function() {
         console.log('Value is set for alert');
        })
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;
        let regex = "chrome"
        if(url.includes(regex)){
        }
        else{sendURL(url)};
        });
});

chrome.tabs.onActivated.addListener(function(tabId) {
    chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 1] });
    chrome.browserAction.setBadgeText({text: ""});
        chrome.storage.sync.set({alert: 'false'}, function() {
         console.log('Value is set for alert');
        })
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;
        let regex = "chrome"
        if(url.includes(regex)){
        }
        else{sendURL(url)};
        });
});