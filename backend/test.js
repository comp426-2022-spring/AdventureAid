import { getCountries, createCountriesData } from "./travelbriefing-requests.js"
import { includeVaccinations, includeLanguages } from "./app-requests.js"
// Testing fetching all countries json data
const countries = await getCountries()
const data = await createCountriesData(countries)

const vaccinations = new Set([ 'Hepatitis A', 'Hepatitis B', 'Yellow fever', 'Tyfoid', 'DTP'])
const postVaccines = includeVaccinations(vaccinations, data)
const testlanguages = new Set(['Persian', 'Urdu', 'Spanish'])
const postLanguages = includeLanguages(testlanguages, postVaccines)
for (const country of postLanguages) {
    console.log(country.names.name)
}


let languages = new Set()
let vaccines = new Set()
for (const json of data) {
    for (const lang of json.language) {
        languages.add(lang.language)
    }

    for (const vaccine of json.vaccinations) {
        vaccines.add(vaccine.name)
    }
    
}

console.log(languages)
console.log(vaccines)