const countriesDetail = document.querySelector('.country-detail')
let countryName = new URLSearchParams(window.location.search)
countryName = countryName.get('name')
console.log(countryName)

async function fetchData(countriesDetail){
    try {
        const response = await fetch(`https://restcountries.com/v3.1/translation/${countryName}`)
        const data = await response.json()
        console.log(data)
        data.forEach((country) => {
            console.log(country)
            const name = country.name.common
            const lang = Object.values(country.languages).join(",")
            const valyuta = Object.keys(country.currencies).join(", ")
            console.log(valyuta)
            const border = country.borders.map(val =>{ 
                return val
            }).join(",")

            countriesDetail.innerHTML = `
            <img src="${country.flags.png}" alt="Country item image" class="country-detail__img">

            <div class="country-detail__desc">
                <h3 class="country-detail__title">${name}</h3>

                <div class="country-detail__information">
                    <div class="country-detail__population">
                        <p class="country-detail__text"><b>Native Name:</b> België </p>
                        <p class="country-detail__text"><b>Population:</b> 11,319,511 </p>
                        <p class="country-detail__text"><b>Region:</b> Europe  </p>
                        <p class="country-detail__text"><b>Sub Region:</b> Western Europe </p>
                        <p class="country-detail__text"><b>Capital:</b> Brussels </p>
                    </div>
                    <div class="country-detail__lang">
                        <p class="country-detail__text"><b>op Level Domain:</b> .be </p>
                        <p class="c
                        
                        ountry-detail__text"><b>Currencies:</b> Euro  </p>
                        <p class="country-detail__text"><b>Languages:</b> Dutch, French, German </p>
                    </div>
                </div>

                <div class="country-border">
                    <h4 class="country-border__title">Border Countries: </h4>
                    <ul class="country-border__list">
                        <li class="country-border__item"><a href="#!" class="country-border__link">France</a></li>
                        <li class="country-border__item"><a href="#!" class="country-border__link">Germany</a></li>
                        <li class="country-border__item"><a href="#!" class="country-border__link">Netherlands</a></li>
                    </ul>
            `
        });
    } catch (error) {
        console.error("Xatolik ma'lumotni olib kelishdaa", error)
    }
}

fetchData(countriesDetail)