import React, { useEffect, useState }from "react";
import RequestService from "../services/RequestService";

function LoginPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState()
    const [message, setMessage] = useState()
    const setFields = async () => {
        await RequestService.getUsername().then((res) => {
           const data = res.data
           console.log(data)
           // actions to take if user is logged in
           if (data.isLoggedIn) {
               setIsLoggedIn(true)
               setMessage("Logged in")
               }
            else
               setMessage("Not logged in")
       })

    // Gets username if user is logged in 
     
}}

export default LoginPage;