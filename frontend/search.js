const scholarshipList = document.getElementById("scholarshipList")
const searchBtn = document.getElementById("searchBtn")
const searchInput = document.getElementById("searchInput")
const filter = document.getElementById("filter")

let scholarships = []

async function loadScholarships(){

const res = await fetch("http://localhost:5000/scholarships")

scholarships = await res.json()

displayScholarships(scholarships)

}

function displayScholarships(data){

scholarshipList.innerHTML=""

data.forEach(item=>{

const card = document.createElement("div")

card.className="card"

card.innerHTML = `
<h3>${item.name}</h3>
<p>${item.description}</p>
<strong>${item.amount}</strong>
<br><br>
<a href="${item.link}" target="_blank">
<button class="apply-btn">Apply Now</button>
</a>
`

scholarshipList.appendChild(card)

})

}

const countryFilter = document.getElementById("countryFilter")

searchBtn.addEventListener("click",()=>{

const keyword = searchInput.value.toLowerCase()

const type = filter.value

const country = countryFilter.value

const filtered = scholarships.filter(s=>{

const matchesSearch = s.name.toLowerCase().includes(keyword)

const matchesType = type === "" || s.type === type

const matchesCountry = country === "" || s.country === country

return matchesSearch && matchesType && matchesCountry

})

displayScholarships(filtered)

})

loadScholarships()