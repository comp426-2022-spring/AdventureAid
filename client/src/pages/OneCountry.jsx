import React, { useEffect, useState }from "react";
import RequestService from "../services/RequestService";
function OneCountry() {
    const [message, setMessage] = useState("")

    // Gets username if user is logged in 
     const getCountryData = async () => {
         await RequestService.getAllCountriesData().getCountryData().then((res) => {
            const data = res.data
        })
     }

    useEffect(() => {
        getCountryData();
    }, [])

    // handles login button
    const handleCountryClick = async () => {
        const country = document.querySelector('#country').value;
        setMessage(true);
    }

    return (
        <div>
            <h1>{message}</h1>
            <input required id="onecountry" type="country" placeholder="country"/>
            <button onClick={handleCountryClick}>Country</button> 
        </div>
    );
}

export default OneCountry;