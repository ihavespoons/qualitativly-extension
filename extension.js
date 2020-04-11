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

function eval(untrust, trust) {
	 var trustElement = document.getElementById("trust");
     trustElement.innerText = trust;
     var untrustElement = document.getElementById("untrusted");
     untrustElement.innerText = untrust;
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