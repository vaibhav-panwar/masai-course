let arr = JSON.parse(localStorage.getItem("mobile_data"));
if(arr == null){
  arr =[];
}

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
// btn1.addEventListener("click",()=>{
//   sortLowToHigh();
// })
// btn2.addEventListener("click",()=>{
//   sortHighToLow();
// })
append(arr);
function append(data) {
  let eldiv = document.getElementById("mobile_list");
  // eldiv.innerHTML = "";
  data.forEach((el,i)=>{
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src",el.image);
    img.setAttribute("alt","error");
    let name = document.createElement("h3");
    name.innerText = el.name;
    let brand = document.createElement("h3");
    brand.innerText = el.brand;
    let price = document.createElement("h3");
    price.innerText = el.price;
    let btn = document.createElement("button");
    btn.innerText = "Remove";
    btn.addEventListener("click",()=>{
      remove(i);
    })
    div.append(img,name,brand,price,btn);
    eldiv.append(div); 
  })
}

function remove(index) {
  arr = arr.filter((el,ind)=>{
    if(ind==index){
      return false;
    }
    else{
      return true;
    }
  })
  localStorage.setItem("mobile_data",JSON.stringify(arr));
  append(arr);
}

function sortLowToHigh() {
  // sort the list of mobiles in ascendning order of price
  arr = arr.sort(function(a,b){return a.price - b.price})
  append(arr)
}

function sortHighToLow() {
  // sort the list of mobiles in descending order of the price
  arr = arr.sort(function (a, b) { return b.price - a.price })
  append(arr)
}

// do not change this
if (typeof exports !== "undefined") {
  module.exports = {
    append,
    remove,
    sortLowToHigh,
    sortHighToLow,
  };
}
