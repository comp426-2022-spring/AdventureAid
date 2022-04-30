import React, { useEffect, useState  } from 'react';
import './HomePage.css';
import RequestService from "../services/RequestService";
import { Link } from "react-router-dom";
import image from './PINKadven_aid_logo.png';
import AllCountries from '../components/AllCountries';
import ProfileCountries from '../components/ProfileCountries';
  function HomePage() {
    // false for all; true for profile
    const [isProfileCountries, setIsProfileCountries] = useState(false)

    // false for all; true for one country
    const [isCountryClicked, setIsCountryClicked] = useState(false);

    // state for the country
    const [country, setCountry] = useState("")

    // handles allcountries button press
    function getAllCountriesHandler() {
      setIsProfileCountries(false)
      setIsCountryClicked(false)
      setCountry("")
    }

    // handles profile countries button press
    function profileCountriesHandler() {
      setIsProfileCountries(true)
      setIsCountryClicked(false)
      setCountry("")
    }

    // handles first country button press
    const clickCountryHandler = (country) => {
      setIsCountryClicked(true)
      setCountry(country)
    }
    
  return (
    <pre>
      <p style={{textAlign: "center"}}> <div class="tab">
                <Link to="/"><button class="tablinks" className="button-1">Home</button></Link>
                <Link to="/signup"><button class="tablinks" className="button-1">Sign Up</button></Link>
                <Link to="/login"><button class="tablinks" className="button-1">Login</button></Link>
                <Link to="/update"><button class="tablinks" className="button-1">Update</button></Link>
            </div></p>
            <div style={{textAlign: "center", marginTop: 20, marginBottom: 20}} >
              <img src={image} width={400}/>
            </div>
       <div style={{textAlign: "center"}}>
        <button className="button-2" onClick={getAllCountriesHandler}>All Countries</button>
        <button className="button-2" onClick={profileCountriesHandler}>Profile Countries</button>
      </div>
      <div>
         {isCountryClicked ? <p>clicked on: {country}</p> : 
          <div>
           {!isProfileCountries ? <AllCountries clickCountryHandler={clickCountryHandler}/> : <ProfileCountries clickCountryHandler={clickCountryHandler}/> }
          </div>
         }
        </div>
    </pre>
     
);
                      }
  export default HomePage;