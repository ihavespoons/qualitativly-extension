document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('conservative').addEventListener('click', conservative)
    document.getElementById('low').addEventListener('click', low);
    document.getElementById('high').addEventListener('click', high);
    document.getElementById('off').addEventListener('click', off);


})

function conservative(){
    chrome.storage.sync.set({fakeness: "conservative"}, function() {
        console.log('Value is set to ' + value);
    })
}

function oop(){
    alert(' world')
}

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
    chrome.storage.sync.set({fakeness: "off"}, function() {
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

