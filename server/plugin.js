//info for each country card is in in RequestService.js
import RequestService from '../services/RequestService.js';
import port from '../server/server.js'; 
// async function getAPI(api_url){
//     try {
//         const response = await fetch(api_url);
//         var data = await response.json();
//         return data.countries;
//     }
//     catch (error) {
//         console.log(error);
//     }
//     return [];
// }
const fetchCountry = async () => {
//all countries call for json data
//for loop to get one country's data 
  const allCountriesData = [RequestService.getCountriesData()];
  allCountriesData.forEach(country => {
       return country.getCountriesData();
    });
  }
  console.log(fetchCountry);

  export default async (req, res) => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
    const countries = await fetchCountry()
    res.send(countries)
  }