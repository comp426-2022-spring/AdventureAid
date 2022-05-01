import React, { useEffect, useState }from "react";
import RequestService from "../services/RequestService";
import { Link } from "react-router-dom";
import './LoginPage.css'; 
import TextBacking from "../components/TextBacking";
const backg = new URL('https://www.teahub.io/viewwp/TJiwii_wallpaper-pink-blue-gradient-linear-light-sky-blue/');

function LoginPage() {
    const [message, setMessage] = useState("")
    const [isLoggedIn, setIsLoggedIn] = useState()

    // Gets username if user is logged in 
     const getUsername = async () => {
         await RequestService.getUsername().then((res) => {
            const data = res.data

            // actions to take if user is logged in
            if (data.isLoggedIn) {
                setIsLoggedIn(true)
                setMessage(data.username)
                // document.querySelector('#username').value = ""
                // document.querySelector('#password').value = ""
                // redirect to new page?
            }
            else 
                setMessage("Not Logged In")
        })
     }

    useEffect(() => {
        getUsername()
    }, [isLoggedIn])

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
            setIsLoggedIn(true)
        }
        
    }

    //handles logout button
    function handleLogout() {
        // removes the token to un-authenticate user
        localStorage.removeItem("token")
        setIsLoggedIn(false)
        // call to get username to update page if something changes
        getUsername()
    }

    if (isLoggedIn) {
        return (
            <div>
                <TextBacking>
                <h1 >Logged in as: {message}</h1>
                </TextBacking>
                 
                <div style={{textAlign: "center", marginTop:"10px"}}>
                    <button style={{textAlign: "center"}} className = "button-1" onClick={handleLogout}>Log Out</button>
                </div>
            </div>
        )
    }

    return (
        <div>
            <TextBacking>
            <h2 >{message}</h2>
            </TextBacking>
            
            <div style={{textAlign: "center"}}>
                <TextBacking>
                    <input style={{textAlign: "center", marginBottom: 10, marginRight: 10, borderRadius: 10, borderColor: "gray"}} required id="username" type="username" placeholder="Username"/>
                    <input  style={{textAlign: "center", marginBottom: 10, borderRadius: 10}} required id="password" type="password" placeholder="Password"/>
                </TextBacking>
            
            <div style={{marginTop:"10px"}}>
            <button style={{textAlign: "center"}} className = "button-1" onClick={handleLogin}>Log In</button> 
            <button style={{textAlign: "center"}} className = "button-1" onClick={handleLogout}>Log Out</button>
            </div>
            </div>
        </div>
    );
}

export default LoginPage;