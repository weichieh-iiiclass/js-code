const country = document.getElementById('country')
const township = document.getElementById('township')
const postcode = document.getElementById('postcode')

let countryIndex = -1
let townshipIndex = -1

//display country options
const defaultOption = `<option value"-1">請選擇</option>`
country.innerHTML =
  defaultOption + countries.map((v, i) => `<option value="${i}">${v}</option>`)

// select country
country.addEventListener('change', function (e) {
  countryIndex = +e.target.value
  // countryIndex = +country.value
  console.log(countryIndex)

  //display township options
  township.innerHTML =
    defaultOption +
    townships[countryIndex].map((v, i) => `<option value="${i}">${v}</option>`)
})

// select township
township.addEventListener('change', function (e) {
  townshipIndex = +e.target.value
  console.log(townshipIndex)

  //display postcode
  postcode.innerHTML = postcodes[countryIndex][townshipIndex]
})

