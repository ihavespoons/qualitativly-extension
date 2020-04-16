document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('conservative').addEventListener('click', conservative)
    document.getElementById('low').addEventListener('click', low);
    document.getElementById('high').addEventListener('click', high);
    document.getElementById('off').addEventListener('click', off);
    var elements = document.getElementsByClassName('button');
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', function() {
            elements_2 = document.getElementsByClassName('button');
            for (var x = 0; x < elements_2.length; x++) {
                elements_2[x].setAttribute('class', 'button is-outlined')
            }
            this.id.setAttribute('class', 'button is-primary')
        })
    }
    set_initial_button_state();
});




function set_initial_button_state(){
    chrome.storage.sync.get(['fakeness'], function(result){
        value = result.fakeness
        if (value == '0') {
        off_button = document.getElementById('off');
        off_button.setAttribute('class', 'button is-primary');
        }
        if (value == '50') {
        low_button = document.getElementById('low');
        low_button.setAttribute('class', 'button is-primary');
        }
        if (value == '75') {
        con_button = document.getElementById('conservative');
        con_button.setAttribute('class', 'button is-primary')
        }
        if (value == '90') {
        high_button = document.getElementById('high');
        high_button.setAttribute('class', 'button is-primary');
        }
    });
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
