let elform = document.querySelector("form");
let username = document.getElementById("username");
let pass = document.getElementById("pass");

elform.addEventListener("submit",(e)=>{
    e.preventDefault();
    let obj = {
        username : username.value,
        password: pass.value
    }
    fetch("http://localhost:8080/user/login", {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
    .then((res)=>res.json())
    .then((data)=>{
        let a = data.username
        if(a){
            localStorage.setItem("userN", a)
            alert("login successfull");
            location.href = "./index.html"
        }
        else{
            alert("wrong credentials");
        }
    })
    .catch((err)=>{
        alert("wrong credentials")
        console.log(err);
    })
})