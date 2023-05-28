let elform = document.querySelector("form");
let nam = document.getElementById("nam");
let email = document.getElementById("email");
let password = document.getElementById("password");
let age = document.getElementById("age");
let uname = localStorage.getItem("name");
let nav = document.querySelector("nav");

if (uname) {
    let ename = document.createElement("a");
    let logout = document.createElement("a");
    ename.textContent = uname;
    logout.textContent = "Log Out";
    logout.addEventListener("click", () => {
        localStorage.setItem("name", "")
        localStorage.setItem("token", "")
        window.location.reload();
    })
    nav.append(ename, logout);
}

elform.addEventListener("submit",(e)=>{
    e.preventDefault();
    let obj = {
        name:nam.value,
        email:email.value,
        password:password.value,
        age:age.value
    }
    fetch("http://localhost:8080/users/register", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(obj)
    })
    .then((res)=>res.json())
    .then((data)=>{
        if (data.msg == "user added successfully"){
            alert("registration successfull")
            location.href = "./login.html"
        }
    })
    .catch((err)=>console.log(err))
})