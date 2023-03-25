import { baseServerURL } from "../templateConstants.js"; // Make no Changes here
let loginURL = `${baseServerURL}/login`
let elform = document.querySelector("form");
let elname = document.getElementById("email");
let elpass = document.getElementById("password");
elform.addEventListener("submit",(e)=>{
    e.preventDefault()
    let obj= {
        email : elname.value,
        password : elpass.value
    }
    fetch(loginURL,{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(obj)
    })
    .then((req)=>req.json())
    .then((data)=>{
        console.log(data);
        localStorage.setItem("auth", data.accessToken);
    })
    .catch((err)=>console.error(err))
   
})