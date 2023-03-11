function Product(name,brand,price,desc) {
  this.name = name;
  this.brand = brand;
  this.price = price;
  this.description = desc;
  this.sold = false;
}
Product.prototype.changePrice = function(num){
  this.price = num;
  return this.price;
}
Product.prototype.toggleStatus = function(){
  this.sold = !this.sold;
  return this.sold;
}

// Create these two methods in Product prototype :-
// changePrice
// toggleStatus

// Do not change this
export default Product;
