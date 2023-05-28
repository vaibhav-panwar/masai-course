let elform = document.querySelector("form");
let title = document.getElementById("title");
let category = document.getElementById("category");
let note = document.getElementById("note");
let uname = localStorage.getItem("name");
let nav = document.querySelector("nav");

if(uname){
    let ename = document.createElement("a");
    let logout = document.createElement("a");
   ename.textContent= uname;
   logout.textContent = "Log Out";
   logout.addEventListener("click",()=>{
    localStorage.setItem("name","")
    localStorage.setItem("token","")
       window.location.reload();
   })
   nav.append(ename,logout);
}

elform.addEventListener("submit",(e)=>{
    e.preventDefault();
    let token = localStorage.getItem("token");
    if(!token){
        alert("please login first");
        location.href("./login.html")
        return
    }
    let obj = {
        title :title.value,
        category:category.value,
        note:note.value
    }
    fetch("http://localhost:8080/notes/create",{
        method:"POST",
        headers:{
            "Content-type":"application/json",
            "authorization":`Bearer ${token}`
        },
        body:JSON.stringify(obj)
    })
    .then((res)=>res.json())
    .then((data)=>{
        if(data.msg=="note created successfully"){
            alert("note created successfully")
            location.href = "./notes.html"
        }
    })
    .catch((err)=>console.log(err))
})