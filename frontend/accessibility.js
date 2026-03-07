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