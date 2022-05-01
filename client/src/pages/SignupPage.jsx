import React, { useEffect, useState }from "react";
import { Link } from "react-router-dom";
import TextBacking from "../components/TextBacking";
import RequestService from "../services/RequestService";

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
                setMessage("Logged in as: " + data.username)
                // document.querySelector('#username').value = ""
                // document.querySelector('#password').value = ""
                // document.querySelector('#name').value = ""
                // document.querySelector('#email').value = ""
                // redirect to new page?
            }
            else 
                setMessage("Not logged in")
        })
     }

    useEffect(() => {
        getUsername()
    }, [isLoggedIn])

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
        //removes the token to un-authenticate user
        localStorage.removeItem("token")
        setIsLoggedIn(false)
        getUsername()
    }
    if (isLoggedIn) {
        return (
            <div>
                <TextBacking>
                <h1>{message}</h1>
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
                <h1>{message}</h1>
            </TextBacking>
            <p style={{textAlign: "center"}}>
            <TextBacking>
                <input style={{textAlign: "center", marginBottom: 10, marginRight: 10, borderRadius: 10, borderColor: "gray"}} required id="username" type="username" placeholder="Username"/>
                <input style={{textAlign: "center", marginBottom: 10, marginRight: 10, borderRadius: 10, borderColor: "gray"}} required id="email" type="email" placeholder="Email"/>
                <input style={{textAlign: "center", marginBottom: 10, marginRight: 10, borderRadius: 10, borderColor: "gray"}} required id="name" type="name" placeholder="Name"/>
                <input style={{textAlign: "center", marginBottom: 10, marginRight: 10, borderRadius: 10, borderColor: "gray"}}required id="password" type="password" placeholder="Password"/>
            </TextBacking>
            <div style={{marginTop:"10px"}}>
                <button style={{textAlign: "center"}} className = "button-1" onClick={handleSignup}>Sign Up</button> 
                <button style={{textAlign: "center"}} className = "button-1" onClick={handleLogout}>Log Out</button>
            </div>
            </p>
        </div>
    );
}

export default LoginPage;