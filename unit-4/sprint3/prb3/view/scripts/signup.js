let elform = document.querySelector("form");
let username = document.getElementById("username");
let email = document.getElementById("email");
let dob = document.getElementById("date");
let role = document.getElementById("role");
let loc = document.getElementById("location");
let pass1 = document.getElementById("pass1");
let pass2 = document.getElementById("pass2");

elform.addEventListener("submit",(e)=>{
    e.preventDefault();
    let obj = {
        username : username.value,
        email : email.value,
        DOB : dob.value,
        Role : role.value,
        location : loc.value,
        password : pass1.value
    }
    if(pass1.value==pass2.value){
        fetch("http://localhost:8080/user/register",{
            method:'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body:JSON.stringify(obj)
        })
        .then((res)=>res.json())
        .then((data)=>{
            alert("registration successfull");
            console.log(data);
        })
        .catch((err)=>{
            alert("error")
            console.error(err)
        })
    }
    else{
        alert("password are not same");
    }
})