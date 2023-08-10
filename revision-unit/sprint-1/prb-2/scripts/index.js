

let elform = document.querySelector("form");

elform.addEventListener("submit",(e)=>{
    e.preventDefault();
    let obj = {
        email:document.getElementById("email").value,
        password:document.getElementById("password").value
    }
    fetch("https://reqres.in/api/login",{
        method:'POST',
        headers:{
            'Content-type':'Application/json'
        },
        body:JSON.stringify(obj)
    })
    .then((res)=>res.json())
    .then((data)=>{
        localStorage.setItem("adminToken",data.token);
        window.location.href = "./dashboard.html";
        alert("login successfull");
    })
    .catch((err)=>{
        console.log(err)
    })
})