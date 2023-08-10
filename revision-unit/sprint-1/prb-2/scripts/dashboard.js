window.onload = checktoken();
function checktoken(){
    let a = localStorage.getItem("adminToken");
    if (!a) {
        window.location.href = "./index.html"
    }
}
let patch = false;
let tbody = document.querySelector("tbody");
fetchdata()
function fetchdata() {
    fetch("https://mock-api-273k.onrender.com/events")
        .then((res) => res.json())
        .then((data) => {
            appendRow(data);
        })
        .catch((err) => {
            console.log(err);
        })
}

function appendRow(data) {
    tbody.innerHTML = "";
    data.forEach((el) => {
        let a = createRow(el.id, el.poster, el.name, el.description, el.date, el.location, el.category, el.price);
        tbody.append(a);
    })
}

function createRow(id, poster, name, description, date, location, category, price) {
    let tr = document.createElement("tr");
    tr.classList.add("row")
    tr.innerHTML = `<td class="img"><img src="${poster}" alt=""></td>
                <td class="name">${name}</td>
                <td class="description">${description}</td>
                <td class="date">${date}</td>
                <td class="category">${category}</td>
                <td class="location">${location}</td>
                <td class="price">${price}</td>`
    let td1 = document.createElement("td");
    td1.classList.add("edit");
    let btn1 = document.createElement("button");
    btn1.classList.add("btn1");
    btn1.innerText = "Edit";
    btn1.addEventListener("click", (e) => {
        e.preventDefault();
        patch = true;
        document.getElementById("image").value = poster;
        document.getElementById("name").value = name;
        document.getElementById("desc").value = description;
        document.getElementById("date").value = date;
        document.getElementById("location").value = location;
        document.getElementById("category").value = category;
        document.getElementById("price").value = price;
        localStorage.setItem("itemid", id);
    })
    let btn2 = document.createElement("button");
    btn2.classList.add("btn2");
    btn2.innerText = "Delete";
    btn2.addEventListener("click", (e) => {
        e.preventDefault();
        fetch(`https://mock-api-273k.onrender.com/events/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'Application/json'
            }
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                window.location.reload();
            })
            .catch((err) => {
                console.log(err);
            })
    })
    td1.append(btn1, btn2);
    tr.append(td1);
    return tr
}
document.getElementById("clear").addEventListener("click", (e) => {
    e.preventDefault();
    patch = false;
    document.getElementById("image").value = "";
    document.getElementById("name").value = "";
    document.getElementById("desc").value = "";
    document.getElementById("date").value = "";
    document.getElementById("location").value = "";
    document.getElementById("category").value = "";
    document.getElementById("price").value = "";
    localStorage.setItem("itemid", "");
})

let elform = document.querySelector("form");

elform.addEventListener("submit", (e) => {
    e.preventDefault();
    let a = localStorage.getItem("itemid")
    if (patch && a) {
        let obj = {
            poster: document.getElementById("image").value,
            name: document.getElementById("name").value,
            description: document.getElementById("desc").value,
            date: document.getElementById("date").value,
            location: document.getElementById("location").value,
            category: document.getElementById("category").value,
            price: document.getElementById("price").value,
        }
        fetch(`https://mock-api-273k.onrender.com/events/${a}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(obj)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                localStorage.setItem("itemid","");
                alert("event changed successfully");
                window.location.reload();
            })
            .catch((err) => {
                console.log(err)
            })
    }
    else {
        let obj = {
            poster: document.getElementById("image").value,
            name: document.getElementById("name").value,
            description: document.getElementById("desc").value,
            date: document.getElementById("date").value,
            location: document.getElementById("location").value,
            category: document.getElementById("category").value,
            price: document.getElementById("price").value,
        }
        fetch("https://mock-api-273k.onrender.com/events", {
            method: 'POST',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(obj)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                alert("event added successfully")
                window.location.reload();
            })
            .catch((err) => {
                console.log(err)
            })
    }

})