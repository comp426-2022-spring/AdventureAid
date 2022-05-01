import React from "react";
import { useEffect, useState} from "react"
import RequestService from "../services/RequestService";
import CountryButton from "./CountryButton";
import Card from "./Card";
import LoadingSpinner from "./LoadingSpinner";
import TextBacking from "./TextBacking";
function ProfileCountries (props) {
    const [data, setData] = useState()
    const [isLoggedIn, setIsLoggedIn] = useState(true)

    // recieves and sets state to hold profile countries
    function getProfileCountries() {
        RequestService.getUsername().then(user => {
          if (user.data.isLoggedIn) {
            RequestService.getUserCountries(user.data.username).then((res) => {
              setData(res.data);
              console.log(res.data);
            }).catch(error => {
              console.log(error);
            })
          } else {
            // if user is not logged in
            console.log(user.data.message)
            setIsLoggedIn(false)
            
          }
        })
      }

      useEffect( () => {
          getProfileCountries()
      }, [])

    if (!isLoggedIn) {
        return (
          <div style={{marginTop:"10px"}}>
              <TextBacking>
                <div style={{textAlign: "center", padding:25, fontSize:40}}>
                Log in to view your matched countries!
                </div>
            </TextBacking>
          </div>
          
        )
    }
    if (typeof data === 'undefined') {
        return (
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height:100}}>
                <LoadingSpinner />
            </div>
        )
    }
    if (data.length == 0) {
        return (
          <div style={{marginTop:"10px"}}>
            <TextBacking>
                <div style={{textAlign: "center", padding:25, fontSize:40}}>
               Update your profile to find matched countries!
                </div>
            </TextBacking>
          </div>
        )
    }
    return ( 
        <div>
            <div style={{textAlign: "center"}}> 
           <ul style={{display: 'flex', flexWrap: 'wrap', alignItems:'center', justifyContent:'center'}}> {
                           data.map(
                             country => 
                             <li key = {country.names.name} style={{padding:10, textAlign:"center"}}>
                                <CountryButton clickCountryHandler={props.clickCountryHandler} key={country.names.name} country={country.names.name}/>
                             </li>
                         )
                       }
          </ul>

            </div>
        </div>

     );
}

export default ProfileCountries;