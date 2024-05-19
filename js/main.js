const countries = document.querySelector(".country")
let countryData;
let url = "https://restcountries.com/v3.1/all"
let inputSearch = document.querySelector(".form-control")
const formSelect = document.querySelector(".form-select")

async function fetchCountryData(){
  try {
    const response = await fetch(url);
    const data = await response.json()

    const countrySort = data.sort((a,b) => {
      return a.name.common.localeCompare(b.name.common)
    }) 

    countryData = countrySort
    renderCountry(countrySort)
    renderCountry(countrySort)
  } catch (error) {
    console.log("Malumot olib kelishda xatolik.", error)
  }
}

function renderCountry(data){
  countries.innerHTML = ""

  data.forEach(country => {
    const col = document.createElement("div")
    col.classList.add("col-12","col-md-6","col-lg-3","my-4")
    const cardLink = document.createElement("a")
    cardLink.classList.add('card')
    cardLink.setAttribute('href',"./country-inner.html")

    cardLink.innerHTML = `
    <img src="${country.flags.png}" alt="" class="card-img-top">
<div class="card-body">
    <h5 class="card-title">${country.name.common}</h5>
    <p class="card-text"><span class="card-text__span">Population: </span>${country.population}</p>
    <p class="card-text"><span class="card-text__span">Region: </span>${country.region}</p>
    <p class="card-text"><span class="card-text__span">Capital: </span>${country.capital}</p>
</div>
    `

    col.append(cardLink)
  });
}

inputSearch.addEventListener("input", ()=>{
  let inputVal = inputSearch.value.toLowerCase()
  let filterCountry = countryData.filter(function(country){
    return country.name.common.toLowerCase().includes(inputVal)
  })
  renderCountry(filterCountry)
})

formSelect.addEventListener('change', ()=>{
  const selectRegion = formSelect.value

  if(selectRegion === "All"){
    renderCountry(countryData)
  }else{
    const filterRegCountry = countryData.filter(country => country.region === selectRegion)
    renderCountry(filterRegCountry)
  }
})

fetchCountryData()