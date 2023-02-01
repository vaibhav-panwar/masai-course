// Write code related to Home page here
let rform = document.querySelector("form");
let dname = document.getElementById("name");
let dtype = document.getElementById("type");
let ddesc = document.getElementById("desc");
let dcategory = document.getElementById("category");
let dprice = document.getElementById("price");

let resarray = JSON.parse(localStorage.getItem("menu"));
if(resarray===null){
    resarray = [];
}
rform.addEventListener("submit",(e)=>{
 e.preventDefault();
 let resobj = {
    name:dname.value,
    description : ddesc.value,
    type : dtype.value,
    category : dcategory.value,
    price : dprice.value,
}
resarray.push(resobj);
localStorage.setItem("menu",JSON.stringify(resarray));
})