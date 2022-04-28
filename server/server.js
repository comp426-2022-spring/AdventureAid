// Async function wrapper to allow for imports
(async function() {
  // imports travelbriefing API functions
  let { getCountries, getCountryData, createCountriesData } = await import("./travelbriefingRequests.mjs")

  const minimist = require("minimist")
  const verifyJWT = require("./middleware/jwtMiddleware.js")

  // args --test closes after server runs and --dev does not require login for endpoints
  const args = minimist(process.argv.slice(2));
  args['test']
  args['dev']

  const express = require("express");
  const app = express();

  const cors = require("cors");

  require("dotenv").config({ path: "./config.env" });
  const port = process.env.PORT || 5000;

  app.use(cors());
  app.use(express.json());

  // dev is false by default, meaning login is required to access all endpoints starting with /app/
  if (!args.dev) {
    let unless = function(middleware, ...paths) {
      return function (req, res, next) {
        const pathCheck = paths.some(path => path === req.baseUrl)
        pathCheck ? next() : middleware(req, res, next)
      }
    }
    app.use('/app/*', unless(verifyJWT, '/app/user/add', '/app/login', '/app/getUsername'))
  }
  else console.log("Dev options enabled: authentication is not required for endpoint access")

  // imports logs and users routes
  app.use(require("./routes/logs"))
  app.use(require("./routes/users"));

  // get driver connection
  const dbo = require("./db/conn");

  // Endpoint that gets all countries available to the travelbriefing API in a JSON array
  app.get('/app/getCountries/', async (req, res) => {
      res.statusCode = 200;
      res.statusMessage = 'OK';
      const countries = await getCountries()
      res.json(countries)
    });

  // Endpoint that gets the JSON data for a specific country
  app.get('/app/getCountry/:country/', async (req, res) => {
      res.statusCode = 200;
      res.statusMessage = 'OK';
      const country = req.params.country
      const data = await getCountryData(country)
      res.json(data)
    });


  // Endpoint that gets a JSON array of all data for every country  
  app.get('/app/getAllCountriesData/', async (req, res) => {
      res.statusCode = 200;
      res.statusMessage = 'OK';
      const countries = await createCountriesData(await getCountries())
      res.json(countries)
    });
    

  // Endpoints GETs username if logged in
  app.get('/app/getUsername/', verifyJWT, (req, res) => {
    res.json({isLoggedIn: true, username: req.user.id})
  })

  // Check endpoint, should give 200 OK
  app.get('/app/', (req, res) => {
      res.statusCode = 200;
      res.statusMessage = 'OK';
      res.writeHead( res.statusCode, { 'Content-Type' : 'text/plain' });
      res.end(res.statusCode+ ' ' +res.statusMessage)
    });

  // Start server
  const server = app.listen(port, () => {
    // perform a database connection when server starts
    dbo.connectToServer(function (err) {
      if (err) console.error(err);

      // close server after if --test is enabled
      if (args.test) process.exit(0)
    });
    console.log(`Server is running on port: ${port}`);
  });
  
})();