import React, { useEffect, useState }from "react";
import RequestService from "../services/RequestService";
import { Link } from "react-router-dom";
import './LoginPage.css'; 

const backg = new URL('https://www.teahub.io/viewwp/TJiwii_wallpaper-pink-blue-gradient-linear-light-sky-blue/');

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
                setMessage("Not Logged In")
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
             <p style={{textAlign: "center"}}> <div class="tab">
                <Link to="/"><button class="tablinks" className="button-1">Home</button></Link>
                <Link to="/signup"><button class="tablinks" className="button-1">Sign Up</button></Link>
                <Link to="/login"><button class="tablinks" className="button-1">Login</button></Link>
                <Link to="/update"><button class="tablinks" className="button-1">Update</button></Link>
            </div></p>
            <h2 style={{textAlign: "center", padding: 20, fontSize: 100, color: "pink"}}>{message}</h2>
            <p style={{textAlign: "center"}}>
            <input style={{textAlign: "center", marginBottom: 10, marginRight: 10, borderRadius: 10, borderColor: "gray"}} required id="username" type="username" placeholder="Username"/>
            <input  style={{textAlign: "center", marginBottom: 10, borderRadius: 10}} required id="password" type="password" placeholder="Password"/>
            <div>
            <button style={{textAlign: "center"}} className = "button-1" onClick={handleLogin}>Log In</button> 
            <button style={{textAlign: "center"}} className = "button-1" onClick={handleLogout}>Log Out</button>
            </div>
            </p>
        </div>
    );
}

export default LoginPage;