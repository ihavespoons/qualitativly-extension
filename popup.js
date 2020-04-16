document.addEventListener("DOMContentLoaded", function(){
                var trust_score_ele = document.getElementById("trust-score-header");
                var trust_location_ele = document.getElementById("trust-score-body");
                chrome.storage.sync.get(['fakeness'], function(result){
                        value = result.fakeness;
                        if (value == '90'){
                            trust_location_ele.setAttribute('style', 'color: white; background-color: #48c774;')
                            trust_location_ele.innerText = "90%"
                        }
                        if (value == '75'){
                            trust_location_ele.setAttribute('style', 'color: black; background-color: yellow;')
                            trust_location_ele.innerText = "75%"
                        }
                        if (value == '50'){
                            trust_location_ele.setAttribute('style', 'color: black; background-color: red;')
                            trust_location_ele.innerText = "50%"
                        }
                        if (value == '0'){
                            trust_location_ele.setAttribute('style', 'color: black; background-color: red;')
                            trust_location_ele.innerText = "0%"
                        }
                        if (value == null){
                            trust_location_ele.setAttribute('style', 'color: black; background-color: yellow;')
                            trust_location_ele.innerText = "75%"
                        }
                })

            chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
                let url = tabs[0].url;
                let regex = "chrome"
                let other_exr = "youtube"
                let other_other_exr = "facebook"
                let other_other_other_exr = "github"
                let other_other_other_other_exr = "twitter"
                if(url.includes(regex) || url.includes(other_exr) || url.includes(other_other_exr) || url.includes(other_other_other_exr) || url.includes(other_other_other_other_exr)){

                }
                else{sendURL(url)
                };

        });

})


function userSetting(){
   chrome.storage.sync.get(['fakeness'], function(result){
        value = result.fakeness;
    })
    
}

function eval(untrust, trust) {
    chrome.storage.sync.get(['fakeness'], function(result){
        value = result.fakeness;

        if(value == null){
            console.log('Set default value')
            value = 75;
        }

         var trustElement = document.getElementById("trust");
         if(!trust.includes("NaN") ) {
             pre_calc = trust * 100
             trustElement.innerText = pre_calc.toFixed(0) + "%";

             var untrustElement = document.getElementById("untrusted");
             pre_calc_un = untrust * 100
             untrustElement.innerText = pre_calc_un.toFixed(0) + "%";
         }

         console.log(value)
         if (value != 0){
            if(untrust*100 >= value){
             chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                 chrome.tabs.sendMessage(tabs[0].id, {greeting: "Alert"}, function(response) {

                 });
             });
             chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 1] });
             chrome.browserAction.setBadgeText({text: "!"});
             
            //contentElement.setAttribute('style', '')

         }
         }
    })

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
