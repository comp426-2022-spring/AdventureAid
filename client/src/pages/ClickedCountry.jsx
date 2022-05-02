import React, { useEffect, useState }from "react";
import RequestService from "../services/RequestService";
import Card from "../components/Card";
import LoadingSpinner from "../components/LoadingSpinner";
import TempGraph from "../components/TempGraph";
import PrecGraph from '../components/PrecGraph'
function ClickedCountry(props) {
    const [country, setCountry] = useState()
    const cardcolor = "#FFF0F5"

    //get countries data
    function getCountryData() {
        RequestService.getCountryData(props.country).then((res) => {
          setCountry(res.data);
          console.log(res.data);
        }).catch(error => {
          console.log(error);
        })
      }

      useEffect(() => {
          getCountryData()
      }, [])

      if (typeof country === 'undefined') {
        return (
          <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height:100}}>
                <LoadingSpinner />
            </div>
        )
      }
      return(
         <div style={{padding:"50px", textAlign:"center", alignItems:"center"}} >
           <div style={{display: "inline-block", textAlign: "left"}}>
            <Card>
              <div style={{padding:"0 50px 10px 50px"}}> 
              <Card color="#F082AC">
                <h1>{country.names.name}</h1>
                <h3>{country.names.full}</h3>
              </Card>
              <div style={{margin:"10px"}}></div>

                <Card color={cardcolor}> 
                  <div>
                      <b>Languages: </b>
                      {country.language.map((lang, i) => {
                        return (
                          <span key={lang.language}>
                            <span>{lang.language}</span>
                            {lang.official == 'Yes' && <span> (Official)</span>}
                            {i != country.language.length - 1 && <span>, </span>}
                          </span>
                        )
                      })}
                  </div>

                  <div>
                    <b>Timezone: </b>
                    <span>{country.timezone.name}</span>
                  </div>

                  <div>
                    <b>Water Quality: </b>
                    <span>{country.water.short}</span>
                  </div>

                  <div>
                    <b>Currency: </b>
                    <span>{country.currency.name}</span>
                  </div>

                  <div>
                    <b>Conversion: </b>
                    <span>1 USD is {country.currency.rate} {country.currency.name}</span>
                  </div>

                  <div>
                    <b>Advice: </b>
                    {(typeof country !== 'undefined' && typeof country.advise !== 'undefined' && typeof country.advise.UA !== 'undefined') ? <span>{country.advise.UA.advise}</span> :
                    <span>No advice</span>}
                  </div>

                  <div>
                    <b>Telephone: </b>
                    <span>Calling Code: <b>+{country.telephone.calling_code}</b> Police: <b>{country.telephone.police}</b> Ambulance: <b>{country.telephone.ambulance}</b> Fire: <b>{country.telephone.fire}</b></span>
                  </div>

                  <div>
                    <b>Electricity: </b>
                    <span>Voltage: {country.electricity.voltage} (V) Frequency: {country.electricity.frequency} (Hz)</span>
                  </div>

                  <div>
                    <b>Plugs: </b>
                    {country.electricity.plugs.map((name, i) => {
                        return (
                          <span key={name}>
                            <span>Type {name}</span>
                            {i != country.electricity.plugs.length - 1 && <span>, </span>}
                          </span>
                        )
                      })}
                  </div>

                  <div>
                  <b>Neighbors: </b>
                  {country.neighbors.map((name, i) => {
                        return (
                          <span key={name.name}>
                            <span>{name.name}</span>
                            {i != country.neighbors.length - 1 && <span>, </span>}
                          </span>
                        )
                      })}
                  </div>
                </Card>
              
                <div style={{margin:"10px"}}></div>
                <Card color={cardcolor}>
                  <div style={{marginLeft:"auto", marginRight:"auto"}}>
                    <TempGraph months={country.weather}/>
                  </div>
                </Card>
                
                
                <div style={{margin:"10px"}}></div>
                <Card color={cardcolor}>
                  <div style={{marginLeft:"auto", marginRight:"auto"}}>
                    <PrecGraph months={country.weather}/>
                  </div>
                </Card>
              </div>
              
           </Card>
           </div>
         </div>
      )
}

export default ClickedCountry;