document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('conservative').addEventListener('click', conservative)
    document.getElementById('low').addEventListener('click', low);
    document.getElementById('high').addEventListener('click', high);
    document.getElementById('off').addEventListener('click', off);
    let fakeness_value
    chrome.storage.sync.get(['fakeness'], function(result){
        fakeness_value = result.fakeness;
    })
        if(fakeness_value == null) {
        fakeness_value = 75;
        }

    if (fakeness_value == 0) {
        off_button = document.getElementById('off')
        off_button.setAttribute('class', 'button is-primary')
    }
    if (fakeness_value == 50) {
        low_button = document.getElementById('low')
        low_button.setAttribute('class', 'button is-primary')
    }
    if (fakeness_value == 75) {
        con_button = document.getElementById('conservative')
        con_button.setAttribute('class', 'button is-primary')
    }
    if (fakeness_value == 90) {
        high_button = document.getElementById('high')
        high_button.setAttribute('class', 'button is-primary')
    }
});

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(request)
    });


function conservative(){
    chrome.storage.sync.set({fakeness: 75}, function() {
        console.log('Value is set to ' + "conservative");
    })
}
function low(){
    chrome.storage.sync.set({fakeness: 50}, function() {
        console.log('Value is set to ' + "low");
    })
}
function high(){
    chrome.storage.sync.set({fakeness: 90}, function() {
        console.log('Value is set to ' + "high");
    })
}
function off(){
    chrome.storage.sync.set({fakeness: 0}, function() {
        console.log('Value is set to ' + "off");
    })
}

/*
chrome.tabs.executeScript(null, { file: "jquery-3.4.1.js" }, function() {
    chrome.tabs.executeScript(null, { file: "popups.js" });
});

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null); 
}*/