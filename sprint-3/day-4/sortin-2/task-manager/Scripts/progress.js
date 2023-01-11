let pdata = JSON.parse(localStorage.getItem("priority-list"));
if(pdata===null){
    pdata = [];
}
let eltbody = document.querySelector("tbody");
display(pdata);
let donearr = JSON.parse(localStorage.getItem("done-list"));
if(donearr===null){
    donearr = [];
}
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
       let doneobj = {
          name : data[i].name,
          description : data[i].description,
          start_date : data[i].start_date,
          end_date : data[i].end_date,
          priority : data[i].priority
       }
       donearr.push(doneobj);
       localStorage.setItem("done-list",JSON.stringify(donearr));
       data = data.filter((el,ind)=>{
        if (ind === i){
          return false
        }
        else {
          return true
        }
       })
       localStorage.setItem("task-list",JSON.stringify(data));
       display(data);
      })
      tr.append(td1,td2,td3,td4,td5,td6);
      eltbody.append(tr);
    }
  }