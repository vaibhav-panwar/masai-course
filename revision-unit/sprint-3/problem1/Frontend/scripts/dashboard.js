window.onload = oncheck();
function oncheck(){
    let a = localStorage.getItem("doctok");
    if(!a){
        alert("please login first")
        window.location.href = "./index.html"
    }
}
let cont = document.getElementById("cont");
let patchid = null;
let query = new URLSearchParams();
let filter = {};
let specs = document.getElementById("spec");
let ns = document.getElementById("ns");
let sort = document.getElementById("sort");

fetchdata(query);

specs.addEventListener("change", (e) => {
    e.preventDefault();
    filter.specialization = specs.value;
    query = new URLSearchParams(filter);
    fetchdata(query)
})

ns.addEventListener("change", (e) => {
    e.preventDefault();
    filter.name = ns.value;
    query = new URLSearchParams(filter);
    fetchdata(query)
})

sort.addEventListener("change", (e) => {
    e.preventDefault();
    filter.sorting = sort.value;
    query = new URLSearchParams(filter);
    fetchdata(query)
})

function fetchdata(query) {
    fetch(`https://docapirs3.onrender.com/doctor/get?${query}`)
        .then((res) => res.json())
        .then((data) => {
            if (data.isError) {
                alert(data.error)
            } else {
                console.log(data.data);
                appenData(data.data);
            }
        })
        .catch((err) => {
            console.log(err);
        })
}
function appenData(data) {
    cont.innerHTML = "";
    data.forEach((el) => {
        let a = createCard(el.name, el.image, el.specialization, el.experience, el.location, el.date, el.slots, el.fee, el._id);
        cont.append(a);
    })
}
function createCard(name, image, specialization, experience, location, date, slots, fee, id) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<div class="image">
            <img src="${image}" alt="img">
        </div>
        <h3 class="name">Dr. ${name}</h3>
        <p class="special">Specialization : ${specialization}</p>
        <p class="exp">Experience : ${experience}</p>
        <p class="loc">Location : ${location}</p>
        <p class="date">Date : ${date}</p>
        <p class="slots">Slots : ${slots}</p>
        <p class="fee">Fee : ${fee}</p>`

    let btns = document.createElement("div");
    let btn1 = document.createElement("button");
    btn1.innerText = "Update";
    btn1.addEventListener("click", (e) => {
        e.preventDefault();
        patchid = id;
        elform.style.display = "flex";
        document.getElementById("name").value = name;
        document.getElementById("image").value = image;
        document.getElementById("special").value = specialization;
        document.getElementById("exp").value = experience;
        document.getElementById("location").value = location;
        document.getElementById("date").value = date;
        document.getElementById("slot").value = slots;
        document.getElementById("fee").value = fee;
    })
    let btn2 = document.createElement("button");
    btn2.innerText = "Delete"
    btn2.addEventListener("click", (e) => {
        e.preventDefault()
        fetch(`https://docapirs3.onrender.com/doctor/delete/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "Application/json"
            }
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.isError) {
                    alert(data.error)
                }
                else {
                    alert(data.message);
                    window.location.reload();
                }
            })
    })
    btns.append(btn1, btn2);
    card.append(btns);
    return card;
}

let elform = document.querySelector("form");
elform.style.display = "none";
elform.addEventListener("submit", (e) => {
    e.preventDefault();
    if (patchid) {
        let obj = {
            name: document.getElementById("name").value,
            image: document.getElementById("image").value,
            specialization: document.getElementById("special").value,
            experience: document.getElementById("exp").value,
            location: document.getElementById("location").value,
            date: document.getElementById("date").value,
            slots: document.getElementById("slot").value,
            fee: document.getElementById("fee").value
        }
        fetch(`https://docapirs3.onrender.com/doctor/update/${patchid}`, {
            method: "PATCH",
            headers: {
                "Content-type": "Application/json"
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

