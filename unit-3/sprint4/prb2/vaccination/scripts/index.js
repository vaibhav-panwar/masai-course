let arr = JSON.parse(localStorage.getItem("register"));
let arr2 = JSON.parse(localStorage.getItem("vaccinated"));
if(arr2==null){
    arr2=[];
}
if (arr == null) {
    arr = [];
}
let form = document.querySelector("form");
let eID = document.getElementById("id");
let eAge = document.getElementById("age");
let eName = document.getElementById("name");
let eDesg = document.getElementById("desg");
let ePriority = document.getElementById("priority");
let eVaccine = document.getElementById("vaccine");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (eID.value == "" || eAge.value == "" || eName.value == "" || eDesg.value == "" || ePriority.value == "" || eVaccine.value == "") {
        alert("empty input remaining");
    }
    else if (eAge.value < 18 || eAge.value > 40) {
        alert("enter correct age");
    }
    else {
        let flag = true
        for (let i = 0; i < arr.length; i++) {
            if (eID.value == arr[i].id) {
                alert("enter unique ID");
                flag = false
            }
        }
        for (let i = 0; i < arr2.length; i++) {
            if (eID.value == arr2[i].id) {
                alert("enter unique ID");
                flag = false
            }
        }
        if (flag === true) {
            alert("registration successful")
            let obj = {
                id: eID.value,
                age: eAge.value,
                name: eName.value,
                designation: eDesg.value,
                priority: ePriority.value,
                vaccine: eVaccine.value
            }
            arr.push(obj);
            localStorage.setItem("register", JSON.stringify(arr));
        }
    }
})
