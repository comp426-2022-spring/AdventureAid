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
                setMessage("Logged in as " + data.username)
                document.querySelector('#username').value = ""
                document.querySelector('#password').value = ""
                document.querySelector('#name').value = ""
                document.querySelector('#email').value = ""
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
    const handleSignup = async () => {
        const username = document.querySelector('#username').value
        const password = document.querySelector('#password').value
        const email = document.querySelector('#email').value
        const name =document.querySelector('#name').value
        const res = await RequestService.addUser(username, name, password, email)
        if (res.data.message) {
            setMessage(res.data.message)
        } else {
            await RequestService.login(username, password)
            getUsername()
        }
        
    }

    //handles logout button
    function handleLogout() {
        // removes the token to un-authenticate user
        localStorage.removeItem("token")
        getUsername()
    }

    return (
        <div>
            <h1>{message}</h1>
            <input required id="username" type="username" placeholder="username"/>
            <input required id="email" type="email" placeholder="email"/>
            <input required id="name" type="name" placeholder="name"/>
            <input required id="password" type="password" placeholder="password"/>
            
            <button onClick={handleSignup}>Sign Up</button> 
            <button onClick={handleLogout}>Log Out</button>
        </div>
    );
}

export default LoginPage;