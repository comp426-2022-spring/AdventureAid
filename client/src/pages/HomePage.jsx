import React, { useEffect, useState  } from 'react';
import './HomePage.css';
import RequestService from "../services/RequestService";

  function HomePage() {
   const [test, setTest] = useState()

    useEffect(() => {
    RequestService.getAllCountriesData().then((res) => {
      setTest(res.data);
      console.log(res.data);
    }).catch(error => {
      console.log(error);
    })
}, []);
  return (
    <pre>
       <div>
            <p>{
                            test.map(
                                t => 
                                <li key = {t.getAllCountriesData.country}>
                                        <b>{t.getAllCountriesData.country}</b>
                                </li>
                            )
                        }</p>
        </div>
    </pre>
     
);
  }
  export default HomePage;