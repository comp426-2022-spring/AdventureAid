import React, { useEffect, useState }from "react";
import RequestService from "../services/RequestService";
import {Link} from "react-router-dom"

function ClickedCountry(props) {
    const [country, setCountry] = useState()

    //get countries data
    function getCountryData() {
        RequestService.getCountryData(props.country).then((res) => {
          setCountry(res.data);
          console.log(res.data);
          const myObject = JSON.parse(country)
          console.log(myObject)
        }).catch(error => {
          console.log(error);
        })
      }

      useEffect(() => {
          getCountryData()
      })

      return(
        <div>
        {JSON.stringify(country)}
        <b>{country.names.name}</b>
        </div>
);
}


// {JSON.stringify(country)}
export default ClickedCountry;