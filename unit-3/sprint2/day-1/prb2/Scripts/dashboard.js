let arr = JSON.parse(localStorage.getItem("task-list"));
if (arr == null) {
    arr = [];
}
let pArr = JSON.parse(localStorage.getItem("priority-list"));
if(pArr == null){
    pArr = [];
}
let eltbody  = document.querySelector("tbody");
let filter = document.getElementById("filter");
let tnumber = document.getElementById("task-count");
filter.addEventListener("change",()=>{
    if(filter.value == ""){
        display(arr);
    }
    else if(filter.value == "Low") {
        let res = arr.filter((el)=>{
            if(el.priority == "Low"){
                return true
            }
            else{
                return false
            }
        })
        display(res);
    }
    else if (filter.value == "Medium") {
        let res = arr.filter((el) => {
            if (el.priority == "Medium") {
                return true
            }
            else {
                return false
            }
        })
        display(res);
    }
    else if (filter.value == "High") {
        let res = arr.filter((el) => {
            if (el.priority == "High") {
                return true
            }
            else {
                return false
            }
        })
        display(res);
    }
})
display(arr);
function display(data){
    tnumber.innerText = data.length;
    eltbody.innerHTML = "";
    data.forEach((el,i)=>{
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
        let td6 = document.createElement("td");
        td6.innerText = "Add";
        td6.addEventListener("click",()=>{
            arr = arr.filter((e,ind)=>{
            if(ind==i){
                let obj = {
                    name: e.name,
                    desc: e.desc,
                    start: e.start,
                    end: e.end,
                    priority: e.priority
                }
                pArr.push(obj);
                localStorage.setItem("priority-list",JSON.stringify(pArr));
                return false
            }
            else{
                return true;
            }
           })
            display(arr)
          localStorage.setItem("task-list",JSON.stringify(arr));
          
        })
        tr.append(td1,td2,td3,td4,td5,td6);
        eltbody.append(tr);
    })
}