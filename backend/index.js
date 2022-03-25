import { getCountries, createCountriesData } from "./travelbriefing-requests.js"

// Testing fetching all countries json data
const countries = await getCountries()
const data = await createCountriesData(countries)
console.log(data)