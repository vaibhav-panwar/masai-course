let arr = JSON.parse(localStorage.getItem("assignments"));
if(arr == null){
    arr = [];
}
let eform = document.querySelector("form");
let ename = document.getElementById("name");
let edesc = document.getElementById("desc");
let etype = document.getElementById("type");
let ecourse = document.getElementById("course");
let esprint = document.getElementById("sprint");
let edate = document.getElementById("schedule");
eform.addEventListener("submit",(e)=>{
    e.preventDefault();
    let obj = {
        name : ename.value,
        desc:edesc.value,
        type:etype.value,
        course:ecourse.value,
        sprint:esprint.value,
        schedule:edate.value
    }
   arr.push(obj);
    localStorage.setItem("assignments",JSON.stringify(arr));
})

