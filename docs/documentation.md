# Project Structure
backend - contains Express server and requests to travelbriefing API

    app-requests.js - contains functions to select countries based on user profile data (languages and vaccinations)
        includeVaccinations - Function to narrow down countries based on the vaccines a person has
        includeLanguages - Function to narrow down countries based on the languages a person knows

    travelbriefing-requests.js - contains functions that perform GET requests from travelbriefing API
        getCountries - Function to get countries list from travelbriefing API
        getCountryData - Function to get country data from API
        createCountriesData - Function to create array of all the country data (each in JSON form)
    
    server.js - contains API endpoints to connect to frontend

        Desired endpoints
        getAllCountries (returns all countries)
        getProfileCountries (takes database information to return countries that match the profile)
        createUser (creates user in the database)
        getUser (gets user information from database)
        updateUser (updates user information)
        deleteUser (deletes user from databse)
        getCountry(country) (gets information for a specific country)


    test.js - testing file

client - contains ReactJS frontend package
