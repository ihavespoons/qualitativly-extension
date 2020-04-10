



chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {

    
    
        chrome.pageCapture.saveAsMHTML({tabId: tabId}, function(mhtml){
            chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
                let url = tabs[0].url;
               sendURL(url);
                
            });
              });
              
            
  

})

function sendURL(url){
    const data = { article_url: url };

    fetch('https://example.com/profile', {
         method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
    console.log('Success:', data);
    })
    .catch((error) => {
    console.error('Error:', error);
    });
}

