let firstdiv = document.getElementById("firstdiv");
let seconddiv = document.getElementById("seconddiv"); 
let elform = document.querySelector("form");
let cardList = document.getElementById("cardlist");
let etitle = document.getElementById("title");
let ecategory = document.getElementById("category");
let enote = document.getElementById("note");
let token = localStorage.getItem("token");
let uname = localStorage.getItem("name");
let nav = document.querySelector("nav");
let no = document.getElementById("no");
let id ;

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

fetchRender();

elform.addEventListener("submit",(e)=>{
    e.preventDefault();
    let obj = {
        title:etitle.value,
        category:ecategory.value,
        note:enote.value
    }
    fetch(`http://localhost:8080/notes/update/${id}`,{
        method:'PATCH',
        headers:{
            'Content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem("token")}`
        },
        body:JSON.stringify(obj)
    })
    .then((res)=>res.json())
    .then((data)=>{
        alert(data.msg)
        window.location.reload()
    })
    .catch((err)=>{console.log(err)})
})
function fetchRender() {
    if(!token){
        firstdiv.textContent = "Please login first";
        return
    }
    fetch("http://localhost:8080/notes/myNotes", {
        headers: {
            'Content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem("token")}`
        }
    })
        .then((res) => res.json())
        .then((data) => {
            if (data.msg == "Please Login") {
                firstdiv.textContent = "Please login first"
            }
            else{
                no.innerText = data.length
                if(data.length==0){
                    cardList.innerText = "please add notes";
                }
                else{
                    where(data,cardList);
                }
            }
        })
        .catch((err)=>{console.log(err)})
}
function where(data, whereto) {
    whereto.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
        let card = createCard(data[i].title, data[i].category, data[i].note, data[i]._id);
        whereto.append(card);
    }
}
function createCard(title, category, note,_id) {
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    let tit = document.createElement("div");
    let p1 = document.createElement("p");
    p1.textContent = `Title : ${title}`;
    let p2 = document.createElement("p");
    p2.textContent = `Category : ${category}`;
    tit.append(p1, p2);
    tit.setAttribute("class", "title");
    let content = document.createElement("div");
    content.setAttribute("class", "content")
    content.textContent = note;
    let links = document.createElement("div");
    links.setAttribute("class", "link");
    let a1 = document.createElement("a");
    a1.textContent = "Edit";
    a1.setAttribute("href","#");
    a1.addEventListener("click",()=>{
    id = _id;
    seconddiv.style.visibility = "visible";
    etitle.value = title;
    ecategory.value = category;
    enote.value = note;
    })
    let a2 = document.createElement("a");
    a2.setAttribute("href", "#");
    a2.textContent = "Remove";
    a2.addEventListener("click",()=>{
        fetch(`http://localhost:8080/notes/delete/${_id}`,{
            method:"DELETE",
            headers:{
                'Content-type':'application/json',
                'authorization':`Bearer ${token}`
            }
        })
        .then((res)=>res.json())
        .then((data)=>{console.log(data)})
        .catch((err)=>console.log(err))

        window.location.reload();
    })
    links.append(a1, a2);
    card.append(tit, content, links);
    return card
}