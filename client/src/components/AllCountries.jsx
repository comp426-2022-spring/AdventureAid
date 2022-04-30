import React from "react";
import { useEffect, useState} from "react"
import RequestService from "../services/RequestService";
import CountryButton from "./CountryButton";
function AllCountries (props) {
    const [data, setData] = useState()

    function getAllCountriesData() {
        RequestService.getCountries().then((res) => {
          setData(res.data);
          console.log(res.data);
        }).catch(error => {
          console.log(error);
        })
      }

      useEffect( () => {
          getAllCountriesData()
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
                             <CountryButton clickCountryHandler={props.clickCountryHandler} key={country} country={country}/>
                         )
                       }
          </p>

            </div>
        </div>

     );
}

export default AllCountries;