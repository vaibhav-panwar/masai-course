let donedata = JSON.parse(localStorage.getItem("done-list"));
if(donedata===null){
    donedata = [];
}
let eltbody = document.querySelector("tbody");
display(donedata);
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
      
      tr.append(td1,td2,td3,td4,td5);
      eltbody.append(tr);
    }
  }