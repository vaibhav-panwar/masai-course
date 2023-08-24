window.onload = checkToken();
function checkToken() {
    let a = localStorage.getItem("bToken");
    if (!a) {
        alert("login first");
        window.location.href = "./index.html"
    }
}

let query = new URLSearchParams();
let filter = {};
const cont = document.getElementById("cont");
const bform = document.querySelector(".bform");
const elform = document.querySelector("form");
const addBlog = document.getElementById("addb");
let eltitle = document.getElementById("title");
let elcontent = document.getElementById("content");
let elcat = document.getElementById("category");
let search = document.getElementById("srch");
let fcat = document.getElementById("fcat");
let sdate = document.getElementById("sdate");
search.addEventListener("change", (e) => {
    e.preventDefault();
    filter.title = search.value;
    query = new URLSearchParams(filter);
    fetchdata();
})
fcat.addEventListener("change", (e) => {
    e.preventDefault();
    filter.category = fcat.value;
    query = new URLSearchParams(filter);
    fetchdata();
})
sdate.addEventListener("change", (e) => {
    e.preventDefault()
    filter.sort = sdate.value;
    query = new URLSearchParams(filter);
    fetchdata();
})
let role = null;
let patchid = null
fetchdata();

addBlog.addEventListener("click", (e) => {
    e.preventDefault();
    bform.classList.add("active");
    eltitle.value = "";
    elcontent.value = "";
    role = "post";
})
function fetchdata() {
    fetch(`https://blog-api-1sac.onrender.com/api/blogs?${query}`, {
        method: "GET",
        headers: {
            'Content-type': 'Application/json',
            'Authorization': `${localStorage.getItem("bToken")}`
        }
    })
        .then((res) => res.json())
        .then((data) => {
            if (data.isError) {
                alert(data.error)
            }
            else {
                appendCard(data.data);
            }
        })
        .catch((err) => {
            console.log(err);
        })
}

function appendCard(data) {
    cont.innerHTML = "";
    data.forEach((el) => {
        let card = createCard(el.username, el.category, el.content, el.title, el.date, el.comments, el.likes, el._id);
        cont.append(card);
    })
}

function createCard(username, category, content, title, date, comments, likes, id) {
    let card = document.createElement("div");
    let edd = document.createElement("div");
    let eb = document.createElement("button");
    eb.textContent = "Edit";
    eb.addEventListener("click", (e) => {
        e.preventDefault();
        bform.classList.add("active");
        role = "patch";
        patchid = id;
        eltitle.value = title;
        elcontent.value = content;
        elcat.value = category;
    })
    let ed = document.createElement("button");
    ed.textContent = "Delete";
    ed.addEventListener("click", (e) => {
        e.preventDefault();
        fetch(`https://blog-api-1sac.onrender.com/api/blogs/${id}`, {
            method: "DELETE",
            headers: {
                'Content-type': 'Application/json',
                'Authorization': `${localStorage.getItem("bToken")}`
            }
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.isError) {
                    alert(data.error);
                }
                else {
                    alert(data.message);
                    window.location.reload();
                }
            })
            .catch((err) => {
                console.log(err);
            })
    })
    edd.append(eb, ed);
    let ndate = new Date(date);

    card.classList.add("card");
    card.innerHTML = `<h3>${username}</h3>
                <p>${category}</p>
                <p>${ndate.toUTCString()}</p>
                <h1>${title}</h1>
                <p>${content}</p>`
    let cl = document.createElement("div");
    cl.classList.add("cl");
    let btn = document.createElement("button");
    btn.textContent = "like";
    btn.classList.add("likebtn");
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        fetch(`https://blog-api-1sac.onrender.com/api/blogs/${id}/like`, {
            method: "PATCH",
            headers: {
                'Content-type': 'Application/json',
                'Authorization': `${localStorage.getItem("bToken")}`
            }
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.isError) {
                    alert(data.error);
                }
                else {
                    alert(data.message);
                    window.location.reload();
                }
            })
            .catch((err) => {
                console.log(err);
            })
    })
    let p1 = document.createElement("p");
    p1.textContent = `likes-${likes}`;
    let p2 = document.createElement("p");
    p2.textContent = ` comments-${comments.length}`;
    cl.append(btn, p1, p2);
    let cs = document.createElement("div");
    let btn1 = document.createElement("button");
    btn1.textContent = "Add comment";
    btn1.addEventListener("click", (e) => {
        e.preventDefault();
        let cform = document.createElement("form");
        let cc = document.createElement("input");
        cc.setAttribute("type", "text");
        let sub = document.createElement("input");
        sub.setAttribute("type", "submit");
        cform.append(cc, sub);
        cform.addEventListener("submit", (e) => {
            e.preventDefault();
            let obj = {
                content: cc.value
            }
            fetch(`https://blog-api-1sac.onrender.com/api/blogs/${id}/comment`, {
                method: "PATCH",
                headers: {
                    'Content-type': 'Application/json',
                    'Authorization': `${localStorage.getItem("bToken")}`
                },
                body: JSON.stringify(obj)
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.isError) {
                        alert(data.error);
                    }
                    else {
                        alert(data.message);
                        window.location.reload();
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
        })
        cs.append(cform);
    })
    cs.append(btn1);
    comments.forEach((el) => {
        let cdiv = document.createElement("div");
        cdiv.innerHTML = `<h3>${el.username}</h3>
        <p>${el.content}</p>`;
        cs.append(cdiv);
    })
    card.append(edd, cl, cs);
    return card
}

elform.addEventListener("submit", (e) => {
    e.preventDefault();
    let obj = {
        title: eltitle.value,
        content: elcontent.value,
        category: elcat.value
    }
    if (role == "post") {
        fetch(`https://blog-api-1sac.onrender.com/api/blogs`, {
            method: "POST",
            headers: {
                'Content-type': 'Application/json',
                'Authorization': `${localStorage.getItem("bToken")}`
            },
            body: JSON.stringify(obj)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.isError) {
                    alert(data.error);
                }
                else {
                    alert(data.message);
                    window.location.reload();
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }
    else {
        fetch(`https://blog-api-1sac.onrender.com/api/blogs/${patchid}`, {
            method: "PATCH",
            headers: {
                'Content-type': 'Application/json',
                'Authorization': `${localStorage.getItem("bToken")}`
            },
            body: JSON.stringify(obj)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.isError) {
                    alert(data.error);
                }
                else {
                    alert(data.message);
                    window.location.reload();
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }
})