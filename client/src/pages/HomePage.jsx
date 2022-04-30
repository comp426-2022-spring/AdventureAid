import React, { useEffect, useState  } from 'react';
import './HomePage.css';
import RequestService from "../services/RequestService";

  function HomePage() {
    const [test, setTest] = useState()
    
    // false for all; true for profile
    const [isProfileCountries, setIsProfileCountries] = useState(false)

    // state for if new data is loading
    const [isLoading, setIsLoading] = useState(false)

    // recieves and sets state to hold all countries
    function getAllCountries() {
      RequestService.getAllCountriesData().then((res) => {
        setTest(res.data);
        console.log(res.data);
      }).catch(error => {
        console.log(error);
      })
    }

    // handles allcountries button press
    function allCountriesHandler() {
      setIsProfileCountries(false)
    }

    // handles profile countries button press
    function profileCountriesHandler() {
      setIsProfileCountries(true)
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
    useEffect(() => {
    if (isProfileCountries) {
      getProfileCountries()
    } else {
      getAllCountries()
    }
}, [isProfileCountries]);

  if (typeof test == 'undefined') {
    return (
      <p>loading ...</p>
    )
  }
  return (
    <pre>
       <div>
        <button onClick={allCountriesHandler}>All Countries</button>
        <button onClick={profileCountriesHandler}>Profile Countries</button>
         {test.length == 0 ? (
         <p>No matched countries</p>
          ) : (
            <div> 
           <p> {
                           test.map(
                             t => 
                             <li key = {t.names.name}>
                                     <b>{t.names.name}</b>
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