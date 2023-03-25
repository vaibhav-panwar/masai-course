import { baseServerURL } from "../templateConstants"; // Make no Changes here
let token = localStorage.getItem("auth");
let url = `${baseServerURL}/stocks`
let elform = document.querySelector("form");
let name=  document.getElementById("name");
let category = document.getElementById("category");
let sector = document.getElementById("sector");
let price = document.getElementById("price");
let date = document.getElementById("addDate");
elform.addEventListener("submit",(e)=>{
    e.preventDefault();
    let obj = {
        name : name.value,
        category:category.value,
        sector : sector.value,
        price : price.value,
        addDate:date.value
    }
    fetch(url,{
     method:'POST',
     headers:{
        'Authorization':`Bearer ${token}`,
        'Content-type':'application/json'
     },
      body:JSON.stringify(obj)
    })
    .then((res)=>res.json())
    .then((data)=>console.log(data))
    .catch((err)=>console.error(err))
})