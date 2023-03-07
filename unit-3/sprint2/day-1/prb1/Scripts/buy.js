let arr = JSON.parse(localStorage.getItem("buy-list"));
if(arr == null){
    arr = [];
}
let eltbody = document.querySelector("tbody");
display(arr);
function display(data){
    eltbody.innerHTML = "";
    for(let i=0;i<data.length;i++){
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerText = data[i].name;
        let td2 = document.createElement("td");
        td2.innerText = data[i].author;
        let td3 = document.createElement("td");
        td3.innerText = data[i].desc;
        let td4 = document.createElement("td");
        td4.innerText = data[i].added;
        let td5 = document.createElement("td");
        td5.innerText = data[i].category;
        let td6 = document.createElement("td");
        td6.innerText = data[i].price || 0;
        tr.append(td1,td2,td3,td4,td5,td6);
        eltbody.append(tr);

    }
}