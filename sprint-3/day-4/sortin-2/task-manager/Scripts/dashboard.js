let dashdata = JSON.parse(localStorage.getItem("task-list"));
if(dashdata===null){
    dashdata = [];
}
let eltbody = document.querySelector("tbody");
let filtersel = document.getElementById("filter");
let tcount = document.getElementById("task-count");
tcount.innerText = dashdata.length;
display(dashdata);
let progressarr = JSON.parse(localStorage.getItem("priority-list"));
if(progressarr===null){
    progressarr = [];
}
filtersel.addEventListener("change",()=>{
  if(filtersel.value === ""){
    display(dashdata);
  }
  else{
    let filtered = dashdata.filter((el,index)=>{
        if(el.priority === filtersel.value){
            return true;
        }
        else{
            return false;
        }
    })
    display(filtered);
  }
})

function display(data){
  eltbody.innerHTML = "";
  for(let i=0;i<data.length;i++){
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerText = data[i].name;
    let td2 = document.createElement("td");
    td2.innerText = data[i].description;
    let td3 = document.createElement("td");
    td3.innerText = data[i].start_date;
    let td4 = document.createElement("td");
    td4.innerText = data[i].end_date;
    let td5 = document.createElement("td");
    td5.innerText = data[i].priority;
    let td6 =document.createElement("td");
    td6.innerText = "Add";
    td6.addEventListener("click",()=>{
     let progressobj = {
        name : data[i].name,
        description : data[i].description,
        start_date : data[i].start_date,
        end_date : data[i].end_date,
        priority : data[i].priority
     }
     progressarr.push(progressobj);
     localStorage.setItem("priority-list",JSON.stringify(progressarr));
    })
    tr.append(td1,td2,td3,td4,td5,td6);
    eltbody.append(tr);
  }
}