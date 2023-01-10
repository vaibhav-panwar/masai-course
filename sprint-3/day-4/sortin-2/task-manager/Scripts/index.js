let elform = document.querySelector("form");
let aname = document.getElementById("name");
let adesc = document.getElementById("desc");
let astart = document.getElementById("start");
let aend = document.getElementById("end");
let apriority = document.getElementById("priority");
let taskarr = JSON.parse(localStorage.getItem("task-list"));
if(taskarr===null){
    taskarr = [];
}
elform.addEventListener("submit",function(e){
 e.preventDefault();
 let taskobj = {
    name : aname.value,
    description : adesc.value,
    start_date : astart.value,
    end_date : aend.value,
    priority : apriority.value
 }
 taskarr.push(taskobj);
 localStorage.setItem("task-list",JSON.stringify(taskarr));
})