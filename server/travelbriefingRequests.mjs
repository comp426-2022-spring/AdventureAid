import fetch from 'node-fetch'

function includeVaccinations(vaccinationsArr, data) {
    let vaccinations = new Set();
    for (let key in vaccinationsArr) {
      if (vaccinationsArr[key]) vaccinations.add(key)
    }
    let countries = []
    for (const element of data) {
        const countryVaccines = element.vaccinations
        let flag = true
        for (const vaccine of countryVaccines) {
            if (!vaccinations.has(vaccine.name)) {
                flag = false
                break
            }
        }
        if (flag) {
            countries.push(element)
        }
    }
    return countries
  }
  
  // Function to narrow down countries based on the languages a person knows
  function includeLanguages(languages, data) {
    let countries = []
    for (const element of data) {
        const countryLanguages = element.language
        for (const language of countryLanguages) {
            if (languages.has(language.language)) {
                countries.push(element)
                break
            }
        }
    }
    return countries
  }

// Function to get countries list from travelbriefing API
async function getCountries() {
    const URL = 'https://travelbriefing.org';
    const response = await fetch(URL + '/countries.json')
    const data = await response.json()
    
    let countries = []
    for (const element of data) {
        countries.push(element.name)
    }
    return countries
  }
  
  // Function to get country data from API
  async function getCountryData(country) {
    const URL = 'https://travelbriefing.org';
    const response = await fetch(URL + '/' + country + '?format=json')
    const data = await response.json()
    return data
  }
  
  // Function to create array of all the country data (each in JSON form)
  async function createCountriesData(countries) {
    const  values = Promise.all(countries.map(getCountryData)).then((values) => {
        return values
      });
      return values
  } 

  export { includeLanguages, includeVaccinations, getCountries, getCountryData, createCountriesData }