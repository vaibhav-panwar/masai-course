let arr = JSON.parse(localStorage.getItem("register"));
let varr = JSON.parse(localStorage.getItem("vaccinated"));
if(varr==null){
    varr = [];
}
let eltbody = document.querySelector("tbody");
let inputs = document.querySelectorAll("input");
let btnotp = document.getElementById("votp");
let otpContainer = document.getElementById("otp");
let otpform = document.querySelector("form");
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
lowtohigh.addEventListener("click", (e) => {
    e.preventDefault();
    arr.sort(function (a, b) { return a.age - b.age });
    append(arr);
})
hightolow.addEventListener("click", (e) => {
    e.preventDefault();
    arr.sort(function (a, b) { return b.age - a.age });
    append(arr);
})
append(arr);
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
    let td7 = document.createElement("td");
    let random = Math.floor(Math.random() * 10000);
    td7.textContent = random;
    let td8 = document.createElement("td");
    let btn1 = document.createElement("button");
    btn1.textContent = "Delete";
    btn1.setAttribute("id","red");
    btn1.addEventListener("click",(e)=>{
        e.preventDefault();
        let filtered = arr.filter((e) => {
            if (e.id == id) {
                return false;
            }
            else {
                return true;
            }
        })
        localStorage.setItem("register", JSON.stringify(filtered));
        append(filtered)
    })
    let btn2 = document.createElement("button");
    btn2.textContent = "Vaccinate";
    btn2.setAttribute("id","green");
    btn2.addEventListener("click",(e)=>{
        e.preventDefault();
        otpContainer.style.visibility = 'visible';
        otp();
        inputs[0].focus()
        btnotp.addEventListener("click",(e)=>{
            e.preventDefault();
            let b = random.toString();
            let flag  = true;
            for (let i=0;i<4;i++){
                if(inputs[i].value!=b[i]){
                    flag = false;
                }
            }
            if(flag == true){
                alert("vaccination successful");
                let obj = {
                    id: id,
                    age: age,
                    name: name,
                    designation: designation,
                    priority: priority,
                    vaccine: vaccine
                }
                varr.push(obj);
                localStorage.setItem("vaccinated",JSON.stringify(varr));
                let filtered = arr.filter((e)=>{
                    if(e.id==id){
                        return false;
                    }
                    else{
                        return true;
                    }
                })
                localStorage.setItem("register", JSON.stringify(filtered));
                append(filtered)
                window.location.reload();
                
            }
            else{
                alert("wrong otp");
                window.location.reload();
            }
        })
    })
    td8.append(btn1, btn2);
    tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
    return tr;
}
function otp() {
    inputs.forEach((input, index) => {
        input.addEventListener("keyup", (e) => {
            let currentInp = input;
            let nextInput = input.nextElementSibling;
            let prevInput = input.previousElementSibling;
            if (currentInp.value.length > 1) {
                currentInp.vaue = "";
                return;
            }
            if (nextInput && nextInput.hasAttribute("disabled") && currentInp.value !== "") {
                nextInput.removeAttribute("disabled");
                nextInput.focus();
            }
            if (e.key === "Backspace") {
                inputs.forEach((input, index2) => {
                    if (index <= index2 && prevInput) {
                        input.setAttribute("disabled", true);
                        input.value = "";
                        prevInput.focus();
                    }
                });
            }
            if (!inputs[3].disabled && inputs[3].value !== "") {
                btnotp.classList.add("active");
                return;
            }
            btnotp.classList.remove("active");
        })
    })
}
function filter(value, what) {
    let filtered = arr.filter((e) => {
        if (e[`${what}`] == value) {
            return true;
        }
        else {
            return false;
        }
    })
    append(filtered);
}