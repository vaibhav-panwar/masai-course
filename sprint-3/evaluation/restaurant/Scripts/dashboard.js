let storedata = JSON.parse(localStorage.getItem("menu"));
if(storedata===null){
    storedata = [];
}
let tbodyel = document.querySelector("tbody");
let filtersel = document.getElementById("filter");
display(storedata);
filtersel.addEventListener("change",()=>{
    if(filtersel.value == ""){
        display(storedata);
    }
    else{
        let f = storedata.filter((el,index)=>{
            if(el.type === filtersel.value){
                return true;
            }
            else{
                return false;
            }
        })
        display(f);
    }
})
let favarray =  JSON.parse(localStorage.getItem("fav-menu"));
if(favarray===null){
    favarray = [];
}
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
        td6.innerText = "Add";
        td6.addEventListener("click",(e)=>{
            e.preventDefault();
            let favobj = {
                name : data[i].name,
                description : data[i].description,
                type : data[i].type,
                category : data[i].category,
                price : data[i].price
            }
            favarray.push(favobj);
            localStorage.setItem("fav-menu",JSON.stringify(favarray));

        })
        trel.append(td1,td2,td3,td4,td5,td6);
        tbodyel.append(trel);

    }
}
