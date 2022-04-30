import React, { useEffect, useState }from "react";
import RequestService from "../services/RequestService";
import {Link} from "react-router-dom"

function ClickedCountry() {
    const [country, setCountry] = useState()

    //get countries data
    function getCountryData() {
      let countryInfo = RequestService.getCountriesData();
      try {
          infoArray = countryInfo.map(country => ({
              name: country.name,
              timezone: country.timezone,
              vaccination: country.vaccination,
              language: country.language,
              water: country.water,
          })
          )
          //return infoArray;
          setCountry(res.infoArray);
          console.log(res.infoArray);
        } catch (error) {
          console.log(error);
      }
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