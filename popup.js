document.addEventListener("DOMContentLoaded", function(){

            chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
                let url = tabs[0].url;
                let regex = "chrome"
                let other_exr = "youtube"
                let other_other_exr ="facebook"
                if(url.includes(regex) || url.includes(other_exr) || url.includes(other_other_exr)){

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
    var contentElement = document.getElementById("content-warning")
    contentElement.setAttribute('style', 'display: none;')
    if(value == null){
        console.log('Value is:')
        console.log(value)
        value = 75;
    }

    if (value != 75) {
        userSetting();
    }



	 var trustElement = document.getElementById("trust");
	 if(!trust.includes("NaN") ) {
         pre_calc = trust * 100
         trustElement.innerText = pre_calc.toFixed(1) + "%";

         var untrustElement = document.getElementById("untrusted");
         pre_calc_un = untrust * 100
         untrustElement.innerText = pre_calc_un.toFixed(1) + "%";
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
         
        contentElement.setAttribute('style', '')

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
