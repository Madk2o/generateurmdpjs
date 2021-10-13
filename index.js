var keylist = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%&*/\?";
var temp = "";

function generatePass(pLength) {
    temp = "";
    for (var i = 0; i < pLength; i++) {
        temp += keylist.charAt(Math.floor(Math.random() * keylist.length))
    }
    return temp;
}

function populateForm(enterLength) {
    document.passGen.output.value = generatePass(enterLength);
}

function copy() {
    var copyText = document.querySelector("#input");
    copyText.select();
    document.execCommand("copy");
  }
  
  document.querySelector("#copy").addEventListener("click", copy);
