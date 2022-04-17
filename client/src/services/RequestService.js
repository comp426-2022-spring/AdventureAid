import axios from 'axios'
const BASE_URL = 'http://localhost:5000/app/'

class RequestService {

    // POST request to add log to DB
    addLog(remote_addr, remote_user, date, method, url, http_version, status, content_length, referrer_url, user_agent) {
        
        const body = {
            "remote_addr": remote_addr, 
            "remote_user": remote_user, 
            "date": date,
            "method": method, 
            "url": url, 
            "http_version": http_version, 
            "status": status, 
            "content_length": content_length,
            "referrer_url": referrer_url,            
            "user_agent": user_agent
        }

        axios.post(BASE_URL + 'logs/add/', body)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    // GET request to find user based on username
    getUser(username) {
        return axios.get(BASE_URL + 'users/' + username + '/')
    }
    
    // GET request that returns array of JSON data for countries that match user's languages and vaccinations
    getUserCountries(username) {
        return axios.get(BASE_URL + 'getUserCountries/' + username + '/')
    }

    // POST request to add user to the DB
    addUser(username, name, hasMalaria, hasHepatitisA, hasHepatitisB, hasYellowFever, hasTyfoid, hasDTP, hasCholera, languages) {
        const body = {
            "username": username,
            "name": name,
            "malaria": hasMalaria,
            "hepatitisA": hasHepatitisA,
            "hepatitisB": hasHepatitisB,
            "yellowFever": hasYellowFever,
            "tyfoid": hasTyfoid,
            "dtp": hasDTP,
            "cholera": hasCholera,
            "languages": languages
        }

        axios.post(BASE_URL + 'users/add/', body)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    // POST request to update user based on username
    updateUser(username, name, hasMalaria, hasHepatitisA, hasHepatitisB, hasYellowFever, hasTyfoid, hasDTP, hasCholera, languages) {
        const body = {
            "username": username,
            "name": name,
            "malaria": hasMalaria,
            "hepatitisA": hasHepatitisA,
            "hepatitisB": hasHepatitisB,
            "yellowFever": hasYellowFever,
            "tyfoid": hasTyfoid,
            "dtp": hasDTP,
            "cholera": hasCholera,
            "languages": languages
        }

        axios.post(BASE_URL + 'update/' + username + '/', body)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    // DELETE request to delete user
    deleteUser(username) {
        axios.delete(BASE_URL + username + '/')
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    // GET request to get array of country names
    getCountries() {
        return axios.get(BASE_URL + 'getCountries/')
    }

    // GET request to get a specific country JSON data
    getCountryData(country) {
        return axios.get(BASE_URL + 'getCountry/' + country + '/')
    }

    // GET request to get array of all country JSON data
    getAllCountriesData() {
        return axios.get(BASE_URL + 'getAllCountriesData/')
    }

}
export default new RequestService()

// To use in other files do RequestService.(desired method) after importing this file
// ex:  import RequestService from '../services/RequestService.js'
//      RequestService.getCountryData("USA")