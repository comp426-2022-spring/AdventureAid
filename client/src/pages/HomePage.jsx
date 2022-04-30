import React, { useEffect, useState  } from 'react';
import './HomePage.css';
import RequestService from "../services/RequestService";

  function HomePage() {
    const [test, setTest] = useState()
    
    // false for all; true for profile
    const [isProfileCountries, setIsProfileCountries] = useState(false)

    // state for if new data is loading
    const [isLoading, setIsLoading] = useState(false)
    // recieves and sets state to hold all country names
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

  if (typeof test == 'undefined') {
    return (
      <p>loading countries ...</p>
    )
  }
  return (
    <pre>
       <div>
        <button id="allcountries" className='button-allcountries' onClick={getAllCountriesHandler}>All Countries</button>
        <button id="profilecountries" onClick={profileCountriesHandler}>Profile Countries</button>
        {/* <button id="onecountry" onClick={oneCountryHandler}>Country</button> */}
         {test.length == 0 ? (
         <p>No matched countries</p>
          ) : (
            <div> 
           <p>{
                           test.map( (t) => 
                            
                             <li key = {t.names.name}>
                                     {/* <b>{t.names.name}</b> */}
                                    onClick = {() => oneCountryHandler(t.names)}
                             </li>


                         )
                
                           }</p>
            </div>
          )}
        </div>
    </pre>
     
);
                      }
  export default HomePage;