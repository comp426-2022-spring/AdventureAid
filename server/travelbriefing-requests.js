// Imports fetch for API requests
import fetch from "node-fetch";

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

export { getCountries, getCountryData, createCountriesData }