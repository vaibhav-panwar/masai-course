let dArr = JSON.parse(localStorage.getItem("assignments"));
if (dArr == null) {
    dArr = [];
}
let sprint1 = document.getElementById("sprint-1");
let sprint2 = document.getElementById("sprint-2");
let sprint3 = document.getElementById("sprint-3");
let sprint4 = document.getElementById("sprint-4");
let scourse = document.getElementById("course");
scourse.addEventListener("change", () => {
    let a = scourse.value;
    sprint1.innerHTML = "";
    sprint2.innerHTML = "";
    sprint3.innerHTML = "";
    sprint4.innerHTML = "";
    display(a, dArr);
})


display("JS101", dArr)
function display(course, arr) {
    let filtered = arr.filter((e) => {
        if (e.course == course) {
            return true
        }
        else {
            return false
        }
    })
    filtered.forEach((e) => {
        displayAss(e.name, e.desc, e.course, e.type, e.schedule, e.sprint);
    })
}
function displayAss(name, desc, course, type, schedule, sprint) {
    let div = document.createElement("div");
    let p1 = document.createElement("p");
    p1.textContent = name;
    let p2 = document.createElement("p");
    p2.textContent = desc;
    let p3 = document.createElement("p");
    p3.textContent = type;
    let p4 = document.createElement("p");
    p4.textContent = course;
    let p5 = document.createElement("p");
    p5.textContent = schedule;
    let p6 = document.createElement("p");
    p6.textContent = sprint;
    let select = document.createElement("select");
    let opt1 = document.createElement("option");
    opt1.textContent = "sprint-1";
    opt1.setAttribute("value", "sprint-1")
    opt1.setAttribute("selected","selected");
    let opt2 = document.createElement("option");
    opt2.textContent = "sprint-2";
    opt2.setAttribute("value", "sprint-2")
    opt2.setAttribute("selected","selected");
    let opt3 = document.createElement("option");
    opt3.textContent = "sprint-3";
    opt3.setAttribute("value", "sprint-3")
    opt3.setAttribute("selected","selected");
    let opt4 = document.createElement("option");
    opt4.textContent = "sprint-4";
    opt4.setAttribute("value", "sprint-4");
    // opt4.setAttribute("selected","selected");
    select.append(opt1, opt2, opt3, opt4);
    select.addEventListener("change", (e) => {
        e.preventDefault();
        let a = select.value;
        dArr.forEach((el) => {
            if (el.name == name && el.desc == desc && el.course == course && el.type == type && el.schedule == schedule) {
                el.sprint = a;
            }
        })
        localStorage.setItem("assignments", JSON.stringify(dArr));
        sprint1.innerHTML = "";
        sprint2.innerHTML = "";
        sprint3.innerHTML = "";
        sprint4.innerHTML = "";
        display(course, dArr);
    })
    let btn = document.createElement("button");
    btn.textContent = "Delete";
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        dArr = dArr.filter((el) => {
            if (el.name == name && el.course == course && el.sprint == sprint && el.desc == desc && el.type == type && el.schedule == schedule) {
                return false;
            }
            else {
                return true;
            }
        })
        console.log(dArr);
        localStorage.setItem("assignments", JSON.stringify(dArr));
        sprint1.innerHTML = "";
        sprint2.innerHTML = "";
        sprint3.innerHTML = "";
        sprint4.innerHTML = "";
        display(course, dArr);

    })
    div.append(p1, p2, p3, p4, p5, p6, select, btn);
    intosprint(sprint, div);
}
function intosprint(sprint, div) {
    if (sprint == "sprint-1") {
        sprint1.append(div);
    }
    else if (sprint == "sprint-2") {

        sprint2.append(div);
    }
    else if (sprint == "sprint-3") {

        sprint3.append(div);
    }
    else if (sprint == "sprint-4") {

        sprint4.append(div);
    }
}