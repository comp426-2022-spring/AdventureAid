import React, { useEffect, useState } from 'react';
import RequestService from '../services/RequestService.js'
function TestButton() {
    const [test, setTest] = useState()
    useEffect(() => {
        // RequestService.getAllCountriesData().then((res) => {
        //     setTest(res.data)
        //     console.log(res.data)
        // })
        RequestService.getUsername().then((res) => {
            setTest(res.data)
            console.log(res)
        })
    }, []);

    function buttonHandler() {
        RequestService.logout()

        //RequestService.updateUser("user4", "User Name", "password123", "email@email.com", true, true, false, false, false, false, false, ["English"])
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