# Project Structure
### server - contains Express server and requests to travelbriefing API

    db - contains database connection files
        conn.js - used to connect server to MongoDB database
        
    middleware - contains middlewares
        jwtMiddleware.js - used to check if user is logged in
    routes - contains endpoints directed to the users and logs databases
    
        logs.js - endpoints to add new log documents
            /app/logs/ - GET - gets all of the logs in the database
            /app/logs/:id/ - GET - looks up log by id
            /app/logs/add/ - POST - adds a log; the request body should be a JSON with the following fields:
                remote_addr: String, 
                remote_user: String, 
                date: Date,
                method: String, 
                url: String, 
                http_version: Number, 
                status: Number, 
                content_length: Number,
                referrer_url: String,            
                user_agent: String

        users.js - endpoints to interact with user database
            /app/users/ - GET - gets all of the users in the database
            /app/users/:id/ - GET - gets a specific user based on id (username)
            /app/getUserCountries/:id/ - GET - gets JSON data for all of the countries that fit a user's profile
            /app/users/add/ - POST - adds a user; the request body should be a JSON with the following fields:
                username: String,
                name: String,
                malaria: Boolean,
                hepatitisA: Boolean,
                hepatitisB: Boolean,
                yellowFever: Boolean,
                tyfoid: Boolean,
                dtp: Boolean,
                cholera: Boolean,
                languages: [String] (Array of Strings)
            /app/update/:id/ - POST - updates a user based on ID; body should be a JSON with the same format as add
            /app/:id/ - DELETE - deletes user from the database with specified id

    schemas
        log-schema.js - contains Schema for information in a log document
        user-schema.js - contains Schema for information in a user document
        
    config.env - contains MongoDB URI, JWT secret, and Port number
        
    package-lock.json - contains server package information
    package.json - contains server package information
        
    server.js - contains endpoints that interact with travelbriefing API
        /app/getCountries/ - GET - gets list of countries in travelbriefing API
        /app/getCountry/:country/ - GET - gets JSON data for a specific country
        /app/getAllCountriesData/ - GET - gets JSON array that contains JSON data for every country            
        /app/ - GET - default endpoint
        
    travelbriefingRequests.mjs - ES6 file contains functions that reqeust information from the travelbreifing.org API

### client - contains ReactJS frontend package

    src
        components - stores component related react code and styling
        pages- stores individual page related react code and styling
        services
            RequestService.js - contains functions that interact with each endpoint in server
        
        App.js - entry point for adding react code / components (preffered)
