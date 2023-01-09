let favdata = JSON.parse(localStorage.getItem("fav-menu"));
if(favdata===null){
    storedata = [];
}
let tbodyel = document.querySelector("tbody");
display(favdata);
function display(data){
    tbodyel.innerHTML = "";
    for(let i=0;i<data.length;i++){
        let trel = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerText = data[i].name;
        let td2 = document.createElement("td");
        td2.innerText = data[i].description;
        let td3 = document.createElement("td");
        td3.innerText = data[i].type;
        let td4 = document.createElement("td");
        td4.innerText = data[i].category;
        let td5 = document.createElement("td");
        td5.innerText = data[i].price;
        let td6 = document.createElement("td");
        td6.innerText = "Delete";
        td6.addEventListener("click",()=>{
           favdata = favdata.filter((el,index)=>{
            if(i === index){
                return false;
            }
            else{
                return true;
            }
           })
           localStorage.setItem("fav-menu",JSON.stringify(favdata))
           display(favdata);
        })
        trel.append(td1,td2,td3,td4,td5,td6);
        tbodyel.append(trel);

    }
}
