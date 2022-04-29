import React, { useEffect, useState  } from 'react';
import './HomePage.css';
import RequestService from "../services/RequestService";

  function HomePage() {
   // const [message, setMessage] = useState("");
    //fetch array of country names 
  const fetchCountry = async () => {
    //const allCountriesData = [RequestService.getAllCountriesData()];
    await RequestService.getAllCountriesData().then((res) => {
       const data = res.json;
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
    </div>
    </pre>
);
  }
  export default HomePage;
  // export default async (req, res) => {
  //   process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
  //   const countries = await HomePage();
  //   res.send(countries);
  // }
  