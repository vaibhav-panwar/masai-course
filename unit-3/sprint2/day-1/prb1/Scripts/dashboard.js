let arr = JSON.parse(localStorage.getItem("book-list"));
if(arr ==null){
   arr = [];
}
let buyArr = JSON.parse(localStorage.getItem("buy-list"));
if (buyArr == null) {
   buyArr = [];
}
let bookArr = JSON.parse(localStorage.getItem("bookmark-list"));
if (bookArr == null) {
   bookArr = [];
}
let eltbody = document.querySelector("tbody");
let filter = document.getElementById("filter");
let bcount = document.getElementById("book-count");
filter.addEventListener("change",()=>{
   if(filter.value == ""){
      display(arr);
   }
   else if (filter.value == "Fiction"){
      let res = arr.filter((el)=>{
         if(el.category == "Fiction"){
            return true;
         }
         else{
            return false;
         }
      })
      display(res) 
      console.log(res);
   }
   else if (filter.value == "Self Help"){
      let res = arr.filter((el) => {
         if (el.category == "Self Help") {
            return true;
         }
         else {
            return false;
         }
      })
      display(res) 
      console.log(res);
   }
   else if (filter.value == "Finance"){
      let res = arr.filter((el) => {
         if (el.category == "Finance") {
            return true;
         }
         else {
            return false;
         }
      })
      display(res) 
      console.log(res);
   }
})
display(arr);
function display(data) {
   eltbody.innerHTML = "";
   bcount.innerText = data.length;
   data.forEach((el, i) => {
      let tr = document.createElement("tr");
      let td1 = document.createElement("td");
      td1.innerText = el.name;
      let td2 = document.createElement("td");
      td2.innerText = el.author;
      let td3 = document.createElement("td");
      td3.innerText = el.desc;
      let td4 = document.createElement("td");
      td4.innerText = el.added;
      let td5 = document.createElement("td");
      td5.innerText = el.category;
      let td6 = document.createElement("td");
      td6.innerText = "Buy";
      td6.addEventListener("click", () => {
         arr = arr.filter((e, ind) => {
            if (ind == i) {
               let obj = {
                  name: e.name,
                  author: e.author,
                  desc: e.desc,
                  added: e.added,
                  category: e.category,
                  price : e.price
               }
               buyArr.push(obj);
               localStorage.setItem("buy-list", JSON.stringify(buyArr));
               alert("added to buy list");
               return false
            }
            else {
               return true
            }
         })
         localStorage.setItem("book-list", JSON.stringify(arr));
         display(arr);
      })
      let td7 = document.createElement("td");
      td7.innerText = "Add";
      td7.addEventListener("click",()=>{
         arr = arr.filter((e, ind) => {
            if (ind == i) {
               let obj = {
                  name: e.name,
                  author: e.author,
                  desc: e.desc,
                  added: e.added,
                  category: e.category,
                  price : e.price
               }
               bookArr.push(obj);
               localStorage.setItem("bookmark-list", JSON.stringify(bookArr));
               alert("added to bookmark list");
               return false
            }
            else {
               return true
            }
         })
         localStorage.setItem("book-list", JSON.stringify(arr));
         display(arr);
      })

      tr.append(td1, td2, td3, td3, td4, td5, td6, td7);
      eltbody.append(tr);
   })
}