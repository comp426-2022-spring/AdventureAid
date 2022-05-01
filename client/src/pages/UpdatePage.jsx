import React, { useEffect, useState }from "react";
import RequestService from "../services/RequestService";
import { Link } from "react-router-dom";
import './UpdatePage.css';

function LoginPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState()
    const [message, setMessage] = useState("")

    const setFields = async () => {
        await RequestService.getUsername().then((res) => {
           const data = res.data
           console.log(data)
           // actions to take if user is logged in
           if (data.isLoggedIn) {
               setIsLoggedIn(true)
               setMessage("Logged in")
               RequestService.getUser(data.username).then((res) => {
                   console.log(res.data)
                   setUser(res.data)
                   console.log(res.data.languages)
                   const languages = res.data.languages
                   const list = document.createElement('ul')
                   list.id = 'list'

                   for (let i = 0; i < languages.length; i++) {
                        const input = document.createElement('input')
                        input.type = 'text'
                            input.defaultValue=languages[i]
                        const li = document.createElement('li')
                        li.appendChild(input)
                        list.appendChild(li)
                   }
                   const insert = document.querySelector('#languages')
                   insert.prepend(list)

               })
           }
           else 
               setMessage("Log in to update!")
       })
    }

    useEffect(()=> {
        setFields()
    },  [])

    function handleUpdate() {
        const password = document.querySelector('#password').value
        const email = document.querySelector('#email').value
        const name = document.querySelector('#name').value
        const malaria = document.querySelector('#malaria').checked
        const hepatitisA = document.querySelector('#hepatitisA').checked
        const hepatitisB = document.querySelector('#hepatitisB').checked
        const yellowFever = document.querySelector('#yellowFever').checked
        const tyfoid = document.querySelector('#tyfoid').checked
        const dtp = document.querySelector('#dtp').checked
        const cholera = document.querySelector('#cholera').checked
        
        const list = document.querySelector('#list')
        const children = list.children

        let languages = []
        const availableLanguages = new Set(['Afar','Albanian','Amerindian_languages','Amharic','Arabic','Armenian','Aymara','Azerbaijani','Belarusian','Bengali','Bosnian','Bulgarian','Cantonese','Catalan','Chinese','Criuolo','Croatian','Czech','Danish','Dutch','Dzongkha','English','Estonian','Fijian','Finnish','French','Fula','Gan','Georgian','German','Greek','Gujarati','Hindi','Hungarian','Icelandic','Italian','Kalanga','Kashmiri','Khmer','Kikongo','Kingwana','Kirundi','Lingala','Malay','Malayalam','Mandinka','Marathi','Minnan','Monokutuba','Oriya','Oromo','Pashto','Persian','Portuguese','Quechua','Romany','Russian','Sango','Sekgalagadi','Serbian','Shanghaiese','Shikomoro','Slovene','Somali','Spanish','Sudanic','Swahili','Swedish','Tigrinya','Tshiluba','Tswana','Turkish','Urdu','Wolof','Xiang','Yoruba'])
        for (const child of children) {
            const lang = child.firstChild.value
            if (!availableLanguages.has(lang)) {
                setMessage("Not a valid language")
                return
            }
            languages.push(lang)
        }

        RequestService.updateUser(user._id, name, password, email, malaria, hepatitisA, hepatitisB, yellowFever, tyfoid, dtp, cholera, languages)
        setMessage("Updated!")
    }

    function handleDelete() {
        RequestService.deleteUser(user._id)
        setIsLoggedIn(false)
        setMessage("User deleted :(")
        localStorage.removeItem('token')
    }

    function addLanguageHandler() {
        const availableLanguages = new Set(['Afar','Albanian','Amerindian_languages','Amharic','Arabic','Armenian','Aymara','Azerbaijani','Belarusian','Bengali','Bosnian','Bulgarian','Cantonese','Catalan','Chinese','Criuolo','Croatian','Czech','Danish','Dutch','Dzongkha','English','Estonian','Fijian','Finnish','French','Fula','Gan','Georgian','German','Greek','Gujarati','Hindi','Hungarian','Icelandic','Italian','Kalanga','Kashmiri','Khmer','Kikongo','Kingwana','Kirundi','Lingala','Malay','Malayalam','Mandinka','Marathi','Minnan','Monokutuba','Oriya','Oromo','Pashto','Persian','Portuguese','Quechua','Romany','Russian','Sango','Sekgalagadi','Serbian','Shanghaiese','Shikomoro','Slovene','Somali','Spanish','Sudanic','Swahili','Swedish','Tigrinya','Tshiluba','Tswana','Turkish','Urdu','Wolof','Xiang','Yoruba'])
        let list  = document.querySelector('#list')
        if (list.childElementCount == 0 || availableLanguages.has(list.lastChild.firstChild.value)) {
            let newEl = document.createElement('li')
            let newLang = document.createElement('input')
            newEl.appendChild(newLang)
            list.appendChild(newEl)
            setMessage("")
        } else{
            setMessage("Not a valid language")
        }
        
    }

    function removeLanguageHandler () {
        setMessage("")
        let list  = document.querySelector('#list')
        if (list.childElementCount > 1)
            list.removeChild(list.lastElementChild)
    }
    if (!isLoggedIn || typeof user === 'undefined') {
        return (
            <p style={{textAlign: "center", padding: 20, fontSize: 100, color: "pink"}}>
                {message}
            </p>
        )
    }
    return (
        <div>
            <div style={{textAlign: "center", marginBottom: 20, fontSize: 30}}>
                <strong htmlFor="username">Username: {user._id}</strong>
            </div>
            {message != 'Log in to update!' && message != '' && message != "Logged in" && 
                <p style={{textAlign: "center", padding: 10, fontSize: 25, color: "red"}}>
                {message}
                </p>
            }
            <div style={{textAlign: "center"}}>
                <label style={{marginRight: 10, marginLeft: 10}} htmlFor="Email">Email</label>
                <input style={{textAlign: "center", marginBottom: 10, marginRight: 10, borderRadius: 10, borderColor: "gray"}} defaultValue={user.email} required id="email" type="email" placeholder="new email"/>
            </div>
                
            <div style={{textAlign: "center"}} >
                <label style={{marginRight: 10, marginLeft: 5}} htmlFor="name">Name</label>
                <input style={{textAlign: "center", marginBottom: 10, marginRight: 10, borderRadius: 10, borderColor: "gray"}} defaultValue={user.name} required id="name" type="name" placeholder="new name"/>
            </div>
            
            <div style={{textAlign: "center"}}>
                <label style={{marginRight: 10, marginLeft: -20}} htmlFor="password">Password</label>
                <input style={{textAlign: "center", marginBottom: 50, marginRight: 10, borderRadius: 10, borderColor: "gray"}} defaultValue={user.password} required id="password" type="password" placeholder="new password"/>
            </div>

            <div style={{textAlign: "center"}}>
                <label style={{marginRight: 10, marginLeft: 10}} >Vaccinations:</label>
                <label htmlFor="malaria"> Malaria</label>
                <input defaultChecked={user.vaccinations.malaria} id="malaria" type="checkbox"></input>

                <label htmlFor="hepatitisA"> HepatitisA</label>
                <input defaultChecked={user.vaccinations.hepatitisA} id="hepatitisA" type="checkbox"></input>

                <label htmlFor="hepatitisB"> HepatitisB</label>
                <input defaultChecked={user.vaccinations.hepatitisB} id="hepatitisB" type="checkbox"></input>

                <label htmlFor="yellowFever"> Yellow Fever</label>
                <input defaultChecked={user.vaccinations.yellowFever} id="yellowFever" type="checkbox"></input>

                <label htmlFor="tyfoid"> Typhoid</label>
                <input defaultChecked={user.vaccinations.tyfoid} id="tyfoid" type="checkbox"></input>

                <label htmlFor="dtp"> DTP</label>
                <input defaultChecked={user.vaccinations.dtp} id="dtp" type="checkbox"></input>

                <label htmlFor="cholera"> Cholera</label>
                <input  defaultChecked={user.vaccinations.cholera} id="cholera" type="checkbox"></input>
            </div>

            <div style={{textAlign: "center", marginTop: 20, marginLeft: 25}}>
            <label>Languages:</label>
            </div>

            <div style={{textAlign: "center"}} id='languages'>
                <button style={{marginBottom: 10}} className = "button-1" onClick={addLanguageHandler}>Add another language?</button>
                <button style={{marginBottom: 10}} className = "button-1" onClick={removeLanguageHandler}>Remove Language?</button>
            </div>
            <div style={{textAlign: "center"}}>
                <button style={{marginBottom: 20}}className = "button-1" onClick={handleUpdate}>Update</button> 
                <button style={{marginBottom: 20}}className = "button-1" onClick={handleDelete}>Delete</button> 
            </div>
        </div>
    )
}

export default LoginPage;