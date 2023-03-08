let arr = JSON.parse(localStorage.getItem("done-list"));
if(arr == null){
    arr = [];
}
let eltbody = document.querySelector("tbody");
display(arr);
function display(data) {
    eltbody.innerHTML = "";
    data.forEach((el, i) => {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerText = el.name;
        let td2 = document.createElement("td");
        td2.innerText = el.desc;
        let td3 = document.createElement("td");
        td3.innerText = el.start;
        let td4 = document.createElement("td");
        td4.innerText = el.end;
        let td5 = document.createElement("td");
        td5.innerText = el.priority;
        
        tr.append(td1, td2, td3, td4, td5);
        eltbody.append(tr)
    })
}