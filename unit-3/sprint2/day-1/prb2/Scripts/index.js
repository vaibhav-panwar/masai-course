let arr = JSON.parse(localStorage.getItem("task-list"));
if(arr == null){
    arr = [];
}
let elform = document.querySelector("form");
let elname = document.getElementById("name");
let desc = document.getElementById("desc");
let sdate = document.getElementById("start");
let edate = document.getElementById("end");
let priority = document.getElementById("priority");
elform.addEventListener("submit",(e)=>{
    e.preventDefault();
    let obj = {
        name : elname.value,
        desc : desc.value,
        start :sdate.value,
        end :edate.value,
        priority : priority.value
    }
    arr.push(obj)
    localStorage.setItem("task-list",JSON.stringify(arr));
})