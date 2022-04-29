import React, { useEffect, useState }from "react";
import RequestService from "../services/RequestService";
function LoginPage() {
    const [message, setMessage] = useState("")

    // Gets username if user is logged in 
     const getUsername = async () => {
         await RequestService.getUsername().then((res) => {
            const data = res.data

            // actions to take if user is logged in
            if (data.isLoggedIn) {
                setMessage(data.username)
                document.querySelector('#username').value = ""
                document.querySelector('#password').value = ""
                // redirect to new page?
            }
            else 
                setMessage("Not logged in")
        })
     }

    useEffect(() => {
        getUsername()
    }, [])

    // handles login button
    const handleLogin = async () => {
        const username = document.querySelector('#username').value
        const password = document.querySelector('#password').value
        
        // res contains a json with key "message" that says "success" or "invalid username or password"
        const res = await RequestService.login(username, password)
        if (res.data.message != "success") {
            setMessage(res.data.message)
        } else {
            getUsername()
        }
        
    }

    //handles logout button
    function handleLogout() {
        // removes the token to un-authenticate user
        localStorage.removeItem("token")
        
        // call to get username to update page if something changes
        getUsername()
    }

    return (
        <div>
            <h1>{message}</h1>
            <input required id="username" type="username" placeholder="username"/>
            <input required id="password" type="password" placeholder="password"/>
            <button onClick={handleLogin}>Log In</button> 
            <button onClick={handleLogout}>Log Out</button>
        </div>
    );
}

export default LoginPage;