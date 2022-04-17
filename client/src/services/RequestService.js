import fetch from 'node-fetch'
const BASE_URL = 'localhost:5000/app/'

class RequestService {

    // POST request to add log to DB
    async addLog(remote_addr, remote_user, date, method, url, http_version, status, content_length, referrer_url, user_agent) {
        
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

        const request = await fetch(BASE_URL + 'logs/add/', {
            method: 'post',
            body: JSON.stringify(body),
            headers: {'Content-Type': 'application/json'}
        });
    }

    // GET request to find user based on username
    async getUser(username) {
        const response = await fetch(BASE_URL + 'users/' + username + '/')
        const data = await response.json()
        return data
    }

    // GET request that returns array of JSON data for countries that match user's languages and vaccinations
    async getUserCountries(username) {
        const response = await fetch(BASE_URL + 'getUserCountries/' + username + '/')
        const data = await response.json()
        return data
    }

    // POST request to add user to the DB
    async addUser(username, name, hasMalaria, hasHepatitisA, hasHepatitisB, hasYellowFever, hasTyfoid, hasDTP, hasCholera, languages) {
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

        const request = await fetch(BASE_URL + 'users/add/', {
            method: 'post',
            body: JSON.stringify(body),
            headers: {'Content-Type': 'application/json'}
        });
    }

    // POST request to update user based on username
    async updateUser(username, name, hasMalaria, hasHepatitisA, hasHepatitisB, hasYellowFever, hasTyfoid, hasDTP, hasCholera, languages) {
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

        const request = await fetch(BASE_URL + 'users/update/' + username + '/', {
            method: 'post',
            body: JSON.stringify(body),
            headers: {'Content-Type': 'application/json'}
        });
    }

    // DELETE request to delete user
    async deleteUser(username) {
        const request = await fetch(BASE_URL + username + '/', {method: 'DELETE'})
    }

    // GET request to get array of country names
    async getCountries() {
        const response = await fetch(BASE_URL + 'getCountries/')
        const data = await response.json()
        return data
    }

    // GET request to get a specific country JSON data
    async getCountryData(country) {
        const response = await fetch(BASE_URL + 'getCountry/' + country + '/')
        const data = await response.json()
        return data
    }

    // GET request to get array of all country JSON data
    async getAllCountriesData() {
        const response = await fetch(BASE_URL + '/getAllCountriesData/')
        const data = await response.json()
        return data
    }
}

export default new RequestService()

// To use in other files do Request.(desired method) after importing this file
// ex:  import Request from '../services/Request.js'
//      Request.getCountryData("USA")