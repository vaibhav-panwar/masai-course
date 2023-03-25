import { baseServerURL } from "../templateConstants.js"; // Make no Changes here
let regUrl = `${baseServerURL}/register`;
let elform = document.querySelector("form");
let ename = document.getElementById("name");
let eEmail =document.getElementById("email");
let epass = document.getElementById("password");
elform.addEventListener("submit",(e)=>{
    e.preventDefault();
    let regObj = {
        username:ename.value,
        password: epass.value,
        email:eEmail.value
        
    }
    fetch(regUrl,{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(regObj)
    })
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>console.error(err))
})