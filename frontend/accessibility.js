const btn = document.getElementById("accessibility-btn")
const panel = document.getElementById("accessibility-panel")

btn.onclick = () => {

panel.style.display =
panel.style.display === "block"
? "none"
: "block"

}
document.getElementById("darkMode").onclick = () => {

document.body.classList.toggle("dark")

}
/* HIGH CONTRAST MODE */

document.getElementById("contrastMode").onclick = () => {
document.body.classList.toggle("contrast")
}
/* DYSLEXIA MODE */

document.getElementById("dyslexiaMode").onclick = () => {

document.body.classList.toggle("dyslexia")

}
/* FONT SIZE SLIDER */

document.getElementById("fontSlider").addEventListener("input", function(){

let size = this.value

document.body.style.fontSize = size + "px"

})

/* HIGHLIGHT LINKS */

document.getElementById("highlightLinks").onclick = () => {

document.querySelectorAll("a").forEach(link => {

link.style.background = "yellow"
link.style.color = "black"
link.style.padding = "2px"

})

}
/* TEXT TO SPEECH */

let speech

document.getElementById("readPage").onclick = () => {

speech = new SpeechSynthesisUtterance(document.body.innerText)

speechSynthesis.speak(speech)

}
/* STOP SPEECH */

document.getElementById("stopReading").onclick = () => {

speechSynthesis.cancel()

}

/* KEYBOARD NAVIGATION */

document.addEventListener("keydown",(e)=>{

if(e.key === "Tab"){
document.body.classList.add("keyboard-navigation")
}

})
/* VOICE NAVIGATION */

const voiceBtn = document.getElementById("voiceControl")

voiceBtn.onclick = () => {

const SpeechRecognition =
window.SpeechRecognition || window.webkitSpeechRecognition

const recognition = new SpeechRecognition()

recognition.start()

recognition.onresult = (event) => {

let command = event.results[0][0].transcript.toLowerCase()

console.log("Voice command:", command)

/* COMMANDS */

if(command.includes("dark mode"))
document.body.classList.toggle("dark")

if(command.includes("high contrast"))
document.body.classList.toggle("contrast")

if(command.includes("dyslexia"))
document.body.classList.toggle("dyslexia")

if(command.includes("read page"))
speechSynthesis.speak(
new SpeechSynthesisUtterance(document.body.innerText)
)

if(command.includes("increase font")){
let size = parseInt(window.getComputedStyle(document.body).fontSize)
document.body.style.fontSize = (size + 2) + "px"
}

if(command.includes("decrease font")){
let size = parseInt(window.getComputedStyle(document.body).fontSize)
document.body.style.fontSize = (size - 2) + "px"
}

}

}
document.getElementById("toggleImages").onclick = () => {

document.querySelectorAll("img").forEach(img => {

if(img.style.display === "none"){
img.style.display = "block"
}
else{
img.style.display = "none"
}

})

}
document.getElementById("describeImages").onclick = () => {

document.querySelectorAll("img").forEach(img => {

let description = img.alt

if(description){

let speech = new SpeechSynthesisUtterance(description)

speechSynthesis.speak(speech)

}

})

}