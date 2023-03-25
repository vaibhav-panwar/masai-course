import { baseServerURL } from "../templateConstants.js"; // Make no Changes here
let token = localStorage.getItem("auth");
let stockurl = `${baseServerURL}/stocks`;
let eltbody = document.querySelector("tbody");
let btnwrap = document.getElementById("pagination");

fetchrender(1);
function appendrow(deta){
    eltbody.innerHTML = "";
    deta.forEach((el)=>{
        let a = createrow(el.id,el.name,el.price,el.quantity,el.sector,el.category,el.addDate);
        eltbody.append(a);
    })
}
function createrow(id,name,price,quantity,sector,category,date){
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.textContent = name;
    let td2 = document.createElement("td");
    td2.textContent = category;
    let td3 = document.createElement("td");
    td3.textContent =sector;
    let td4 = document.createElement("td");
    td4.textContent =price;
    let td5 = document.createElement("td");
    td5.textContent = quantity;
    let td6 = document.createElement("td");
    td6.textContent = price*quantity;
    let td7 = document.createElement("td");
    td7.textContent = date;
    let td8 = document.createElement("td");
    td8.textContent = "Sell";
    td8.addEventListener("click",()=>{
        fetch(`${stockurl}/${id}`,{
            method:'DELETE',
            headers:{
                'Authorization':`Bearer ${token}`
            }
        })
        .then((res)=>{res.json()})
        .then((data)=>{console.log(data)})
        .catch((err)=>console.log(err,"hogya"))
    })
    tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
    return tr
}
function fetchrender(){
    fetch(`${stockurl}`, {
        method:'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then((res) => {
          let totalpost = res.headers.get('X-Total-Count');
          let totalbtn = Math.ceil(totalpost/5)
           btnwrap.innerHTML= "";
          for(let i=1;i<=totalbtn;i++){
            let a = createbtn(i);
            btnwrap.append(a);
          }
          return res.json()
        })
        .then((data) => {
            appendrow(data);
        })
        .catch((err) => console.error(err))
}

function createbtn(id){
    let btn = document.createElement("button");
    btn.textContent = id;
    btn.addEventListener("click",()=>{
        fetchrender(id);
    })
    return btn
}
function filter(){

}
