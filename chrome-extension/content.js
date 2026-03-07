chrome.runtime.onMessage.addListener(function(request){

if(request.action==="dark"){

document.body.style.background="#121212"
document.body.style.color="white"

}

if(request.action==="contrast"){

document.body.style.background="black"
document.body.style.color="yellow"

}

if(request.action==="dyslexia"){

document.body.style.fontFamily="OpenDyslexic, Arial"

}

if(request.action==="read"){

let speech=new SpeechSynthesisUtterance(document.body.innerText)

speechSynthesis.speak(speech)

}

})