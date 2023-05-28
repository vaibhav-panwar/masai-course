const socket = io();
let box = document.getElementById("box");
let token = localStorage.getItem("token");
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

fetchItems()
function fetchItems() {
    if (!token) {
        box.textContent = "Please login first";
        return
    }
    fetch("http://localhost:8080/notes", {
        headers: {
            'Content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem("token")}`
        }
    })
        .then((res) => res.json())
        .then((data) => {
            if (data.msg == "Please Login") {
                box.textContent = "Please login first"
            }
            else {
                data.forEach((blog) => {
                    let a = createCard(blog.title, blog.category, blog.note, blog._id);
                    box.append(a);
                })

            }
        })
        .catch((err) => { console.log(err) })
}

function createCard(title, category, note, _id) {
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
    let cmts = document.createElement("div");
    cmts.setAttribute("id", "cmts");
    getfromDB(_id, cmts);
    socket.on('comment', (data) => {
        let a = createComment(data);
        cmts.append(a);
    })
    let form = document.createElement("div");
    let tcont = document.createElement("textarea");
    let com = document.createElement("button");
    com.innerText = "Comment";
    com.addEventListener("click", () => {
        let data = {
            username: localStorage.getItem("name"),
            comment: tcont.value,
            noteID: _id
        }
        appendtoDB(data)
        socket.emit('comment', data);
    })
    form.setAttribute("id", "form");
    form.append(tcont, com);
    card.append(tit, content, cmts, form);
    return card
}
function createComment(data) {
    let a1 = document.createElement("div");
    let p1 = document.createElement("p");
    p1.innerText = data.username;
    let p2 = document.createElement("p");
    p2.innerText = data.comment;
    a1.append(p1, p2);
    return a1
}
function appendtoDB(data) {
    fetch("http://localhost:8080/comment", {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(data)
    })
        .then((res) => res.json())
        .then((data) => { console.log(data) })
        .catch((err) => console.log(err))
}

function getfromDB(id, whereto) {
    fetch(`http://localhost:8080/comment/${id}`, {
        headers: {
            'Content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem("token")}`
        }
    })
        .then((res) => res.json())
        .then((deta) => {
            deta.forEach((comment) => {
                let a = createComment(comment);
                whereto.append(a);
            })
        })
        .catch((err) => console.log(err))
}
