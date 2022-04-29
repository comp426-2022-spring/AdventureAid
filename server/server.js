// Async function wrapper to allow for imports
(async function() {
  let { includeLanguages, includeVaccinations, getCountries, getCountryData, createCountriesData } = await import("./travelbriefingRequests.mjs")
  const express = require("express");
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

  // Endpoint that gets all countries available to the travelbriefing API in a JSON array
  app.get('/app/getCountries/', async (req, res) => {
    // Respond with status 200
      res.statusCode = 200;
      res.statusMessage = 'OK';
      const countries = await getCountries()
      res.json(countries)
    });

  // Endpoint that gets the JSON data for a specific country
  app.get('/app/getCountry/:country/', async (req, res) => {
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
})();
//export const port = process.env.PORT || 5000;
