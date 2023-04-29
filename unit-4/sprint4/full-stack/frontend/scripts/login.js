let elform = document.querySelector("form");
let email = document.getElementById("email");
let password = document.getElementById("password");
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
    e.preventDefault()
    let obj = {
        email:email.value,
        password:password.value
    }
    fetch("https://cooperative-outerwear-yak.cyclic.app/users/login", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(obj)
    })
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data)
        if (data.msg =="login successfull"){
            localStorage.setItem("token", data.token);
            localStorage.setItem("name", data.name);
            alert("login successfull");
            location.href = "./index.html"
        }
        else{
            alert(data.msg);
        }
    })
    .catch((err)=>{
        console.log(err);
        alert("error")
    })
})