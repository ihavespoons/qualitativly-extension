
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {

            chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
                let url = tabs[0].url;
               sendURL(url);
                
           
              });

})

let value; 
function userSetting(){
   chrome.storage.sync.get(['fakeness'], function(result){
        
        value = result.fakeness;
    })
    
}



chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
        chrome.browserAction.setPopup({
            tabId: tabId,
            popup: 'index.html'
        });

    chrome.browserAction.getPopup({ tabId: tabId},function(result) {
        //window.alert(result);

        console.log(document.getElementById("trust"));
    })
});


document.addEventListener('DOMContentLoaded', function () {
    console.log(document.getElementById("trust"));
})

function eval(fakenessScore,trustworthy){

    document.addEventListener('DOMContentLoaded', function () {
        console.log(document.getElementById("trust"));
        

})
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
    
    eval(data.untrustworthy, data.trustworth);
    })
    .catch((error) => {
    });
}

