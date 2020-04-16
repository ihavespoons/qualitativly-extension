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
     }
     }

}


function sendURL(url){
    userSetting();
    if(url != null) {
        const data = { article_url: url };
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
}

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.url) {
        chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 1] });
        chrome.browserAction.setBadgeText({text: ""});
        chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;
        let regex = "chrome"
        let other_exr = "youtube"
        let other_other_exr = "facebook"
        let other_other_other_exr = "github"
        let other_other_other_other_exr = "twitter"
        if(url.includes(regex) || url.includes(other_exr) || url.includes(other_other_exr) || url.includes(other_other_other_exr) || url.includes(other_other_other_other_exr)){
        }
        else{sendURL(url)};
        });
    }

});

chrome.tabs.onCreated.addListener(function(tab) {
        chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 1] });
        chrome.browserAction.setBadgeText({text: ""});
        chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;
        let regex = "chrome"
        let other_exr = "youtube"
        let other_other_exr = "facebook"
        let other_other_other_exr = "github"
        let other_other_other_other_exr = "twitter"
        if(url.includes(regex) || url.includes(other_exr) || url.includes(other_other_exr) || url.includes(other_other_other_exr) || url.includes(other_other_other_other_exr)){
        }
        else{sendURL(url)};
        });
});

chrome.tabs.onActivated.addListener(function(tabId) {
        chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 1] });
        chrome.browserAction.setBadgeText({text: ""});
        chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;
        let regex = "chrome"
        let other_exr = "youtube"
        let other_other_exr = "facebook"
        let other_other_other_exr = "github"
        let other_other_other_other_exr = "twitter"
        if(url.includes(regex) || url.includes(other_exr) || url.includes(other_other_exr) || url.includes(other_other_other_exr) || url.includes(other_other_other_other_exr)){
        }
        else{sendURL(url)};
        });
});