let countries;
const tbody = document.querySelector("tbody")

fetch("https://restcountries.com/v3.1/all")
.then(res => res.json()).then(arr => initalize(arr))

function initalize(countriesData) {
  countriesData.splice(242, 1)
  countries = countriesData
  for(let i = 0; i < countries.length; i++) {
    // console.log(countries[i].languages[0].length)

    let x = tbody.innerHTML += `
      <tr>
      <th>${i + 1}</th>
      <td>${countries[i].name.common}</td>
      <td>${countries[i].name.official}</td>
      <td>${countries[i].capital}</td>
      <td>${countries[i].region}</td>
      <td>${countries[i].subregion}</td>
      <td>${countries[i].timezones[0]}</td>
      <td>${countries[i].population}</td>
      <td><img class="flag" src="${countries[i].flags.svg}"></td>
      <td><img class="arms" src="${countries[i].coatOfArms.svg}"></td>
      </tr>
    `
  }
}

document.querySelector(".down-icon").addEventListener('click', () => {
  const table = document.querySelector(".hero-table")

  if (table.classList[1] == "full-height") {
    table.classList.remove("full-height")
    table.classList.add("min-height")
  }
  else {
    table.classList.remove("min-height")
    table.classList.add("full-height")
  }
})

