import React, { useEffect, useState }from "react";
import RequestService from "../services/RequestService";
import {Link} from "react-router-dom"

function ClickedCountry() {
    const [country, setCountry] = useState()

    //get countries data
    function getCountryData() {
        RequestService.getCountryData("afghanistan").then((res) => {
          setCountry(res.data);
          console.log(res.data);
        }).catch(error => {
          console.log(error);
        })
      }

      useEffect(() => {
          getCountryData()
      })

      return(
          <pre> 
              <div>
              <Link to="/"><button class="tablinks" className="button-1">Home</button></Link>
                {JSON.stringify(country)}
            </div>
          </pre>
      )
}

export default ClickedCountry;