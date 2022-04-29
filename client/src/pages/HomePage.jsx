import React, { useEffect, useState  } from 'react';
import './HomePage.css';
import RequestService from "../services/RequestService";

  function HomePage() {
   const [test, setTest] = useState()
    //fetch array of country names 
  const fetchCountry = async () => {
    //const allCountriesData = [RequestService.getAllCountriesData()];
    await RequestService.getAllCountriesData().then((res) => {
      const data = res.data;
      setTest(data);
      console.log(data);
    }).catch(error => {
      console.log(error);
    })
    useEffect(() => {
      fetchCountry()
  }, [])
}

 

  return (
    <pre>
      <p>Countries!</p>
    </pre>
);
  }
  export default HomePage;