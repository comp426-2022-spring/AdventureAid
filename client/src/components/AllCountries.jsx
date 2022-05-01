import React from "react";
import { useEffect, useState} from "react"
import RequestService from "../services/RequestService";
import CountryButton from "./CountryButton";
import LoadingSpinner from "./LoadingSpinner";
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
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height:100}}>
                <LoadingSpinner />
            </div>
        )
    }

    return ( 
        <div>
            <div style={{textAlign: "center"}}> 
                <ul style={{display: 'flex', flexWrap: 'wrap', alignItems:'center', justifyContent:'center'}}> {
                    data.map(
                             country => 
                             <li key = {country} style={{padding:10, textAlign:"center"}}>
                                <CountryButton clickCountryHandler={props.clickCountryHandler} key={country} country={country}/>
                             </li>
                            )
                     }
                </ul>
            </div>
        </div>

     );
}

export default AllCountries;