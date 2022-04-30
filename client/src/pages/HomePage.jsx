import React, { useEffect, useState, Component  } from 'react';
import './HomePage.css';
import RequestService from "../services/RequestService";
import { Link } from "react-router-dom";
import image from './PINKadven_aid_logo.png';

  function HomePage() {
    const [test, setTest] = useState()
    
    // false for all; true for profile
    const [isProfileCountries, setIsProfileCountries] = useState(false)

    // state for if new data is loading
    const [isLoading, setIsLoading] = useState(false)
    
    // state for if one country is clicked
    const [isCountryClicked, setIsCountryClicked] = useState(false);

    function getAllCountriesData() {
      RequestService.getAllCountriesData().then((res) => {
        setTest(res.data);
        console.log(res.data);
      }).catch(error => {
        console.log(error);
      })
    }
    // handles allcountries button press
    function getAllCountriesHandler() {
      setIsProfileCountries(false)
    }

    // handles profile countries button press
    function profileCountriesHandler() {
      setIsProfileCountries(true)
    }
 // handles first country button press
    function oneCountryHandler(country) {
      console.log(country);
}
    // recieves and sets state to hold profile countries
    function getProfileCountries() {
      RequestService.getUsername().then(user => {
        if (user.data.isLoggedIn) {
          RequestService.getUserCountries(user.data.username).then((res) => {
            setTest(res.data);
            console.log(res.data);
          }).catch(error => {
            console.log(error);
          })
        } else {
          // if user is not logged in
          console.log(user.data.message)
          setTest([{
              "names":{
                "name":"not logged in"
              }
            }
          ])
        }
      })
    }
   //quick handler for list item 
   //quick handler function where the pop up appears 
function getCountryData(){
  RequestService.getAllCountriesData().getCountryData().then((res => {
    setTest(res.data);
    console.log(res.data);
  }).catch(error => {
    console.log(error);
  }))
  }

    useEffect(() => {
    if (isProfileCountries) {
      getProfileCountries()
    } else {
      getAllCountriesData()
    }
}, [isProfileCountries]);

    useEffect(() => {
    if(isCountryClicked){
     getCountryData()
    } else {
      getAllCountriesData()
    }
})

  if (typeof test == 'undefined') {
    return (
      <p>loading countries ...</p>
    )
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
         {test.length == 0 ? (
         <p>No matched countries</p>
          ) : (
            <div> 
           <p> {
                           test.map(
                             t => 
                             <li key = {t.names.name}>
                                     <b>{t.names.name}</b>
                                     <div> <img width="130" src={'https://countryflagsapi.com/png/' + t.names.name}></img> </div>
                             </li>
                         )
                       }
          </p>
            </div>
          )}
        </div>
    </pre>
     
);
                          }
  export default HomePage;