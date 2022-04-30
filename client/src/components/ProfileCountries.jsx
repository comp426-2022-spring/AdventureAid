import React from "react";
import { useEffect, useState} from "react"
import RequestService from "../services/RequestService";
import CountryButton from "./CountryButton";
function ProfileCountries (props) {
    const [data, setData] = useState()

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
            setData([{
                "names":{
                  "name":"not logged in"
                }
              }
            ])
          }
        })
      }

      useEffect( () => {
          getProfileCountries()
      }, [])

    if (typeof data === 'undefined') {
        return (
            <p>
                loading...
            </p>
        )
    }

    return ( 
        <div>
            <div style={{textAlign: "center"}}> 
           <p> {
                           data.map(
                             country => 
                             <CountryButton clickCountryHandler={props.clickCountryHandler} key={country.names.name} country={country.names.name}/>
                         )
                       }
          </p>

            </div>
        </div>

     );
}

export default ProfileCountries;