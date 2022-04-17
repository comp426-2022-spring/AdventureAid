import React, { useEffect, useState } from 'react';
import RequestService from '../services/RequestService.js'
function TestButton() {
    const [test, setTest] = useState()
    useEffect(() => {
        RequestService.getAllCountriesData().then((res) => {
            setTest(res.data)
            console.log(res.data)
        })
    }, []);

    function buttonHandler() {
        RequestService.deleteUser("rj_da_goat_davis")
    }
    if (typeof test === 'undefined') {
        return (
            <p>
                loading...
            </p>
        )
    }
    
    return ( 
        <div>
            <button onClick={buttonHandler}>Test</button>
            <p>{JSON.stringify(test)}</p>
        </div>
    );
    
}

export default TestButton;