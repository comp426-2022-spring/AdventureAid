const express = require("express");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/users"));
app.use(require("./routes/logs"))
// get driver connection
const dbo = require("./db/conn");

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

// Endpoint that gets all countries available to the travelbriefing API in a JSON array
app.get('/app/getCountries/', async (req, res) => {
  // Respond with status 200
    res.statusCode = 200;
    res.statusMessage = 'OK';
    const countries = await getCountries()
    res.json(countries)
  });

  // Endpoint that gets the JSON data for a specific country
  app.get('/app/getCountry/:country', async (req, res) => {
    // Respond with status 200
      res.statusCode = 200;
      res.statusMessage = 'OK';
      const country = req.params.country
      const data = await getCountryData(country)
      res.json(data)
    });

  // Endpoint that gets a JSON array of all data for every country  
  app.get('/app/getAllCountriesData/', async (req, res) => {
    // Respond with status 200
      res.statusCode = 200;
      res.statusMessage = 'OK';
      const countries = await createCountriesData(await getCountries())
      res.json(countries)
    });
  
app.get('/app/', (req, res) => {
  // Respond with status 200
      res.statusCode = 200;
      res.statusMessage = 'OK';
      res.writeHead( res.statusCode, { 'Content-Type' : 'text/plain' });
      res.end(res.statusCode+ ' ' +res.statusMessage)
  });

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});