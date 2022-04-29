import React, { useEffect, useState  } from 'react';
import './HomePage.css';
import RequestService from "../services/RequestService";

  function HomePage() {
    const [message, setMessage] = useState("");
    //fetch array of country names 
  const fetchCountry = async () => {
    //const allCountriesData = [RequestService.getAllCountriesData()];
    await RequestService.getAllCountriesData().then((res) => {
       const data = res.data
       console.log(data);
    })
}

  useEffect(() => {
    fetchCountry()
}, [])
  return (
    <pre>
      <p>Countries!</p>
      <div>
        //need to get the countries to spit out on page...
    </div>
    </pre>
);
  }
export default HomePage;