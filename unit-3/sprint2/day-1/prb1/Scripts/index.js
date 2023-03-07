let barr = JSON.parse(localStorage.getItem("book-list"));
if (barr == null) {
    barr = [];
}
let elform = document.querySelector("form");

let ename = document.getElementById("name");

let author = document.getElementById("author");
let desc = document.getElementById("desc");
let added = document.getElementById("added");
let category = document.getElementById("category");
let price = document.getElementById("price");
elform.addEventListener("submit", (e) => {
    e.preventDefault();
    let obj = {
        name: ename.value,
        author: author.value,
        desc: desc.value,
        added: added.value,
        category: category.value,
        price : price.value
    }
    barr.push(obj);
    localStorage.setItem("book-list", JSON.stringify(barr));
    
})