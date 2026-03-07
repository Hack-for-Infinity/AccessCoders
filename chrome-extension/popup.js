function sendCommand(command){

chrome.tabs.query({active:true,currentWindow:true}, function(tabs){

chrome.tabs.sendMessage(tabs[0].id,{action:command})

})

}

document.getElementById("darkMode").onclick=()=>sendCommand("dark")

document.getElementById("contrastMode").onclick=()=>sendCommand("contrast")

document.getElementById("dyslexiaMode").onclick=()=>sendCommand("dyslexia")

document.getElementById("readPage").onclick=()=>sendCommand("read")