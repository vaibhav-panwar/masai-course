// let arr = JSON.parse(localStorage.getItem("mobile_data"));
// if(arr == null){
//   arr =[];
// }
// let eldiv = document.getElementById("mobile_list");



function append(data) {
  let arr = JSON.parse(localStorage.getItem("mobile_data"));
  if (arr == null) {
    arr = [];
  }
  let eldiv = document.getElementById("mobile_list");
  let btn1 = document.querySelector("#sort_filter>:nth-child(1)")
  let btn2 = document.querySelector("#sort_filter>:nth-child(2)")
  btn1.addEventListener("click", () => {
    sortLowToHigh()
  })


  btn2.addEventListener("click", () => {
    sortHighToLow()
  })
  eldiv.innerHTML = "";
  data.forEach((el,i)=>{
    let div = document.createElement("div");
    div.setAttribute("class","mobile");
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
  let arr = JSON.parse(localStorage.getItem("mobile_data"));
  if (arr == null) {
    arr = [];
  }
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
  let arr = JSON.parse(localStorage.getItem("mobile_data"));
  if (arr == null) {
    arr = [];
  }
  // sort the list of mobiles in ascendning order of price
  arr =arr.sort((a,b)=> a.price - b.price)
  append(arr)
}

function sortHighToLow() {
  let arr = JSON.parse(localStorage.getItem("mobile_data"));
  if (arr == null) {
    arr = [];
  }
  // sort the list of mobiles in descending order of the price
  arr =arr.sort( (a, b)=>  b.price - a.price )
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
