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