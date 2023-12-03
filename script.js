//@ts no-check

//The dialog is hidden and should appear when windows 
//has loaded

//Global Variable
let welcomeDialog = document.getElementById("welcomeDialog")

window.onload = displayDialog

//function works!

function displayDialog() {
    welcomeDialog.style.display = "block"
}

//use close button to close dialog

let diagbtn = document.querySelector("#closeDialog")

diagbtn.onclick = closeDialog


function closeDialog() {
    welcomeDialog.style.display = "none"
}


//view fee structure

let viewFee = document.getElementById("viewFee")

let entryReq = document.getElementById("entryRe")

let agentCall = document.getElementById("agentCall")


//events

//To open specified pages

viewFee.onclick = showFee

entryReq.onclick = showentryReq

agentCall.onclick = callAgent





