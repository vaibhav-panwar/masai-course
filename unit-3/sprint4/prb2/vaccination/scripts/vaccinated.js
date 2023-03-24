let vaccArr = JSON.parse(localStorage.getItem("vaccinated"));
let eltbody = document.querySelector("tbody");
let epriority = document.getElementById("priority");
let evaccine = document.getElementById("vaccine");
let lowtohigh = document.getElementById("ltoh");
let hightolow = document.getElementById("htol");
epriority.addEventListener("change", () => {
    let a = epriority.value;
    filter(a, "priority");
})
evaccine.addEventListener("change", () => {
    let a = evaccine.value;
    filter(a, "vaccine");
})
if (vaccArr == null) {
    vaccArr = [];
}
lowtohigh.addEventListener("click", (e) => {
    e.preventDefault();
    vaccArr.sort(function (a, b) { return a.age - b.age });
    append(vaccArr);
})
hightolow.addEventListener("click", (e) => {
    e.preventDefault();
    vaccArr.sort(function (a, b) { return b.age - a.age });
    append(vaccArr);
})
append(vaccArr);
function append(array) {
    eltbody.innerHTML = "";
    array.forEach((el) => {
        let a = createTable(el.id, el.name, el.age, el.designation, el.priority, el.vaccine);
        eltbody.append(a);
    })
}
function createTable(id, name, age, designation, priority, vaccine) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.textContent = id;
    let td2 = document.createElement("td");
    td2.textContent = name;
    let td3 = document.createElement("td");
    td3.textContent = age;
    let td4 = document.createElement("td");
    td4.textContent = designation;
    let td5 = document.createElement("td");
    td5.textContent = priority;
    let td6 = document.createElement("td");
    td6.textContent = vaccine;
    tr.append(td1, td2, td3, td4, td5, td6);
    return tr;
}
function filter(value, what) {
    let filtered = vaccArr.filter((e) => {
        if (e[`${what}`] == value) {
            return true;
        }
        else {
            return false;
        }
    })
    append(filtered);
}