import { getCountries, createCountriesData } from "./travelbriefing-requests.js"
import { includeVaccinations, includeLanguages } from "./app-requests.js"
// Testing fetching all countries json data
const countries = await getCountries()
const data = await createCountriesData(countries)
