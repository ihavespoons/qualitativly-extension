

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('conservative').addEventListener('click', main);      
});

function main() {
    var mydata = JSON.stringify(userSetting);
  console.log(mydata);
}