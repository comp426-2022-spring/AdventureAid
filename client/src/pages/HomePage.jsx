import React, { useEffect, useState  } from 'react';
import './HomePage.css';
import { Link } from "react-router-dom";
import image from './PINKadven_aid_logo.png';
import AllCountries from '../components/AllCountries';
import ProfileCountries from '../components/ProfileCountries';
import ClickedCountry from './ClickedCountry';
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
        <div style={{textAlign: "center", marginTop: 20, marginBottom: 20}} >
          <img src={image} width={400}/>
        </div>
       <div style={{textAlign: "center"}}>
        <button className="button-2" onClick={getAllCountriesHandler}>All Countries</button>
        <button className="button-2" onClick={profileCountriesHandler}>Profile Countries</button>
      </div>
      <div>
         {isCountryClicked ? <ClickedCountry country={country}/> : 
          <div>
           {!isProfileCountries ? <AllCountries clickCountryHandler={clickCountryHandler}/> : <ProfileCountries clickCountryHandler={clickCountryHandler}/> }
          </div>
         }
        </div>
    </pre>
     
);
                      }
  export default HomePage;