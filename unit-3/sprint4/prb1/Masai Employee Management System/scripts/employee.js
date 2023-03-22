let tokenDisplay = document.getElementById("token-display")
let url = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees`
tokenDisplay.innerText =`Token:- ${localStorage.getItem("access-token")}`
let elTbody  = document.querySelector("tbody");
let btnWrap = document.querySelector(".btn-display");
let sortltoh = document.getElementById("sltoh");
let sorthtol = document.getElementById("shtol");
let opr = document.getElementById("opr");
let eng = document.getElementById("eng");
let mkt = document.getElementById("mkt");
let hr = document.getElementById("hr");
let fin = document.getElementById("fin");
let elform = document.querySelector("form");
let search  = document.getElementById("search");


fetchRender(1);

function fetchRender(pageNo){
    fetch(`${url}?page=${pageNo}&limit=10`)
    .then((res)=>{
        btnWrap.innerHTML = "";
        for(let i=1;i<=10;i++){
            let a = createBtn(i);
            btnWrap.append(a);
        }
       return res.json()})
    .then((data)=>{
        
        elform.addEventListener("submit",(e)=>{
            let a = data.data
            e.preventDefault();
            let srca = search.value;
            a=a.filter((e)=>{
                if(e.name.toUpperCase().includes(srca.toUpperCase())){
                    return true
                }
                else{
                    return false
                }
            })
            appendTable(a,elTbody)
        })
        opr.addEventListener("click",(e)=>{
           let a = data.data
            e.preventDefault()
            a = a.filter((el)=>{
                if(el.department.includes("operations")){
                    return true
                }
                else{
                    return false
                }
            })
            appendTable(a,elTbody)
        })
        eng.addEventListener("click", (e) => {
            let a = data.data
            e.preventDefault()
            a = a.filter((el) => {
                if (el.department == "engineering") {
                    return true
                }
                else {
                    return false
                }
            })
            appendTable(a, elTbody)
        })
        mkt.addEventListener("click", (e) => {
            let a = data.data
            e.preventDefault()
            a = a.filter((el) => {
                if (el.department == "marketing") {
                    return true
                }
                else {
                    return false
                }
            })
            appendTable(a, elTbody)
        })
        hr.addEventListener("click", (e) => {
           let  a = data.data
            e.preventDefault()
            a = a.filter((el) => {
                if (el.department == "hr") {
                    return true
                }
                else {
                    return false
                }
            })
            appendTable(a, elTbody)
        })
        fin.addEventListener("click", (e) => {
           let a = data.data
            e.preventDefault()
            a = a.filter((el) => {
                if (el.department == "finance") {
                    return true
                }
                else {
                    return false
                }
            })
            appendTable(a, elTbody)
        })
        let a = data.data
        sorthtol.addEventListener("click",(e)=>{
            e.preventDefault();
            a.sort(function(b,c){return c.salary - b.salary});
            appendTable(a,elTbody);
        })
        sortltoh.addEventListener("click", (e) => {
            e.preventDefault();
            a.sort(function (b, c) { return b.salary - c.salary });
            appendTable(a,elTbody);
        })

        appendTable(a,elTbody);
    })
    .catch((err)=>{
        console.log(err);
    })
}
function appendTable(deta,whereto){
    whereto.innerHTML = "";
    deta.forEach((e)=>{
        let b = createRow(e.name,e.department,e.gender,e.salary,e.image);
        whereto.append(b); 
    })
}
function createRow(name,dept,gender,salary,img){
    let a =`
        <td>
         <img src="${img}" alt="employee">
        </td>
        <td>${name}</td>
        <td>${dept}</td>
        <td>${gender}</td>
        <td>${salary}</td>
      `
      let tr = document.createElement("tr");
      tr.innerHTML = a;
      return tr;
}
function createBtn(id){
    let btn = document.createElement("button");
    btn.innerText = id;
    btn.addEventListener("click",(e)=>{
        e.preventDefault();
        fetchRender(id);
    })
    return btn;
}