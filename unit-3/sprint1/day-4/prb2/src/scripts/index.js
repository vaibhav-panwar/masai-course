let elform = document.getElementById("mobile_form");
let elname = document.getElementById("mobile_name");
let elbrand = document.getElementById("mobile_brand");
let elprice = document.getElementById("mobile_price");
let elimage = document.getElementById("mobile_image");
console.log(elform);
elform.addEventListener("submit",(e)=>{
  e.preventDefault();
  getInputData();
  elname.value = ""
  elbrand.value = ""
  elprice.value = ""
  elimage.value = ""
});
function getInputData(){
  let elform = document.getElementById("mobile_form");
  let elname = document.getElementById("mobile_name");
  let elbrand = document.getElementById("mobile_brand");
  let elprice = document.getElementById("mobile_price");
  let elimage = document.getElementById("mobile_image");
  
  // elform.addEventListener("submit", (e) => {
  //   e.preventDefault();
  //   getInputData();
  //   elname.value = ""
  //   elbrand.value = ""
  //   elprice.value = ""
  //   elimage.value = ""
  // });
  let name = elname.value;
  let brand = elbrand.value;
  let price = elprice.value;
  let image = elimage.value;
  addData(name,brand,price,image);
}

function addData(name, brand, price, image) {
   let arr = JSON.parse(localStorage.getItem("mobile_data"));
   if(arr==null){
    arr = [];
   }
   let obj ={
    name,
    brand,
    price,
    image
   }
   arr.push(obj);
   localStorage.setItem("mobile_data",JSON.stringify(arr));
}

// do not change this
if (typeof exports !== "undefined") {
  module.exports = {
    addData,
  };
}