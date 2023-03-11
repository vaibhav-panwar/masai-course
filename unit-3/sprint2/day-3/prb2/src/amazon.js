function Listing(name, category, imageUrl, price) {
  this.name = name;
  this.category = category;
  this.imageUrl = imageUrl;
  this.price = price;
  this.sold = false;
}

function getFormData() {
  let name = document.getElementById("name");
  let category = document.getElementById("category");
  let imageUrl = document.getElementById("image");
  let price = document.getElementById("price");
  addListing(name,category,imageUrl,price);
}

function addListing(input, category, image, price) {
  let newListing = new Listing(input, category, image, price);
  let existingListings = JSON.parse(localStorage.getItem("Products")) || [];
  existingListings.push(newListing);
  localStorage.setItem("Products", JSON.stringify(existingListings));
  document.getElementById("form").reset();
}

window.onload = function () {
  //  get the form here and add submit event and handle the preventDefault
  let form = document.getElementById("form");
  form.addEventListener("submit",(e)=>{
    e.preventDefault();
    getFormData();
  })
};

// donot chnage the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    Listing,
    addListing,
  };
}
