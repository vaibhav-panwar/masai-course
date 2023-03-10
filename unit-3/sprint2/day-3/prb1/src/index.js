/*
## Problem 1.
*/

function productFactory(name, price) {
    let obj = {};
    obj.name = name;
    obj.price = price;
    obj.increasePrice = function (num) {
        obj.price += num;
        return obj.price;
    }
    obj.decreasePrice = function (num) {
        obj.price -= num;
        return obj.price;
    }
    obj.displayInfo = function () {
        return `${obj.name} costs Rs.${obj.price}`;
    }
    return obj
}


// example invocation
// let p1 = new productFactory("Notebook", 400);
// console.log(p1);
// p1.decreasePrice(100);
// p1.displayInfo();
// p1.increasePrice(200);
// p1.displayInfo();

/*
## Problem 2.
*/

function ProductConstructor(name, price) {
    this.name = name;
    this.price = price;
    this.increasePrice = function (num) {
        this.price += num;
        return this.price;
    }
    this.decreasePrice = function (num) {
        this.price -= num;
        return this.price;
    }
    this.displayInfo = function () {
        return `${this.name} costs Rs.${this.price}`;
    }
}

// example invocation
// let p1 = new ProductConstructor("Notebook", 400);
// console.log(p1);
// p1.decreasePrice(100);
// p1.displayInfo();
// p1.increasePrice(200);
// p1.displayInfo();

/*
## Problem 3.
*/
class ProductClass {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.increasePrice = function (num) {
            this.price += num;
            return this.price;
        }
        this.decreasePrice = function (num) {
            this.price -= num;
            return this.price;
        }
        this.displayInfo = function () {
            return `${this.name} costs Rs.${this.price}`;
        }
    }
}

// let p1 = new Product("Notebook", 400);
// console.log(p1);
// p1.decreasePrice(100);
// p1.displayInfo();
// p1.increasePrice(200);
// p1.displayInfo();

export { productFactory, ProductConstructor, ProductClass }