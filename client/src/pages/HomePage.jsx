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
//   return (
//     <div>
//         <h1>{message}</h1>
//         <input required id="username" type="username" placeholder="username"/>
//     </div>
// );
  }
export default HomePage;