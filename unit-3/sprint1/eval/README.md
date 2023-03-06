## Installation
```
npm i
```

## Test 
```
npm t
```

## Test (Watch mode)
```
npm t -- --watchAll
```

## file structure
most of your work would happen in `src/index.js` file.

## Maximum marks - 10
- ✅ submit the problem [1 mark]
- ✅ objects created by createBook has correct properties [1 mark]
- ✅ objects created by createBook has correct methods [2 marks]
- ✅ objects created using CreateBook are working as expected [1 mark]
- ✅ objects created using Book are working as expected [1 mark]
- ✅ array returned by massageArray to have property-value as expected [2 mark]
- ✅ array returned by massageArray to be as expected [2 mark]

## Problem statement. 1

Define a **factory function** called `createBook` which takes in the following parameters:

- `title` (string): the title of the book.
- `author` (string): the name of the author of the book.
- `pageCount` (number): the total number of pages in the book.
- `price` (number): the price of the book.
- `ISBN` (string): the ISBN (International Standard Book Number) of the book.

The function returns an object containing the book's details as properties, along with four methods `getPrice`, `increasePrice`, `decreasePrice`, and `isExpensive`.

The `getPrice` method returns the current `price` of the book, `increasePrice` method increases the book's `price` by a given amount (number), `decreasePrice` method decreases the book's `price` by a given amount (number), and `isExpensive` method returns a boolean value based on whether the book's `price` is `greater than or equal to` 500 or not.

The purpose of this code is to provide a reusable function that creates book objects with specific properties and methods that can be used to manipulate and get information about the book. This function can be used to create multiple book objects with different details based on the given parameters.

Example invocation with expected outputs:

```
let book1 = createBook("The Catcher in the Rye", "J.D. Salinger", 224, 350.00, "9780316769488")
console.log(book1)
console.log(book1.getPrice()) // 350
console.log(book1.increasePrice(300)) //650
console.log(book1.isExpensive()) // true
console.log(book1.decreasePrice(400)) // 250
console.log(book1.isExpensive()) // false
```

## Problem statement. 2
Implement the functionality same as the Problem 1. using `CreateBook` **constructor functions**.

Example invocation with expected outputs:

```
// Example invocation
let book1 = new CreateBook("The Catcher in the Rye", "J.D. Salinger", 224, 350.00, "9780316769488")
console.log(book1)
console.log(book1.getPrice()) // 350
console.log(book1.increasePrice(300)) //650
console.log(book1.isExpensive()) // true
console.log(book1.decreasePrice(400)) // 250
console.log(book1.isExpensive()) // false
```

## Problem statement. 3
Implement the functionality same as the Problem 1. using `Book` **ES6 Classes**.

Example invocation with expected outputs:

```
let book1 = new Book("The Catcher in the Rye", "J.D. Salinger", 224, 350.00, "9780316769488")
console.log(book1)
console.log(book1.getPrice()) // 350
console.log(book1.increasePrice(300)) //650
console.log(book1.isExpensive()) // true
console.log(book1.decreasePrice(400)) // 250
console.log(book1.isExpensive()) // false
```

## Problem statement. 4

The function `massageArray()` is expected to return an array of objects. 

Parameter of `massageArray()`: `inputArray` of type array

### Provided `areas`:
```
let areas = [
  { id: 1, name: "British" },
  { id: 2, name: "Malaysian" }
];
```
### Provided `categories`
```
let categoriesDirectory = {
  3: "Dessert",
  1: "MainCourse",
  2: "Starter"
};
```
### Example Input Array: 
```
let exampleInputArray = [
  {
    idMeal: "52768",
    strMeal: "Apple Frangipan Tart",
    Category: 3,
    Area: 1,
    strIngredient1: "digestive biscuits",
    strIngredient2: "butter",
    strIngredient3: "Bramley apples",
    strIngredient4: "butter, softened",
    strIngredient5: "caster sugar",
    strIngredient6: "free-range eggs, beaten",
    strIngredient7: "ground almonds",
    strIngredient8: "almond extract",
    strIngredient9: "flaked almonds",
    strIngredient10: "",
    strIngredient11: "",
    strIngredient12: "",
    strIngredient13: "",
    strIngredient14: "",
    strIngredient15: "",
    strIngredient16: null,
    strIngredient17: null,
    strIngredient18: null,
    strIngredient19: null,
    strIngredient20: null,
    strMeasure1: "175g/6oz",
    strMeasure2: "75g/3oz",
    strMeasure3: "200g/7oz",
    strMeasure4: "75g/3oz",
    strMeasure5: "75g/3oz",
    strMeasure6: "2",
    strMeasure7: "75g/3oz",
    strMeasure8: "1 tsp",
    strMeasure9: "50g/1¾oz",
    strMeasure10: "",
    strMeasure11: "",
    strMeasure12: "",
    strMeasure13: "",
    strMeasure14: "",
    strMeasure15: "",
    strMeasure16: null,
    strMeasure17: null,
    strMeasure18: null,
    strMeasure19: null,
    strMeasure20: null
  },

  {
    idMeal: "53049",
    strMeal: "Apam balik",
    Category: 3,
    Area: 2,
    strIngredient1: "Milk",
    strIngredient2: "Oil",
    strIngredient3: "Eggs",
    strIngredient4: "Flour",
    strIngredient5: "Baking Powder",
    strIngredient6: "Salt",
    strIngredient7: "Unsalted Butter",
    strIngredient8: "Sugar",
    strIngredient9: "Peanut Butter",
    strIngredient10: "",
    strIngredient11: "",
    strIngredient12: "",
    strIngredient13: "",
    strIngredient14: "",
    strIngredient15: "",
    strIngredient16: "",
    strIngredient17: "",
    strIngredient18: "",
    strIngredient19: "",
    strIngredient20: "",
    strMeasure1: "200ml",
    strMeasure2: "60ml",
    strMeasure3: "2",
    strMeasure4: "1600g",
    strMeasure5: "3 tsp",
    strMeasure6: "1/2 tsp",
    strMeasure7: "25g",
    strMeasure8: "45g",
    strMeasure9: "3 tbs",
    strMeasure10: "",
    strMeasure11: "",
    strMeasure12: "",
    strMeasure13: "",
    strMeasure14: "",
    strMeasure15: "",
    strMeasure16: "",
    strMeasure17: "",
    strMeasure18: "",
    strMeasure19: "",
    strMeasure20: ""
  },
  {
    idMeal: "52767",
    strMeal: "Bakewell tart",
    Category: 3,
    Area: 1,
    strIngredient1: "plain flour",
    strIngredient2: "chilled butter",
    strIngredient3: "cold water",
    strIngredient4: "raspberry jam",
    strIngredient5: "butter",
    strIngredient6: "caster sugar",
    strIngredient7: "ground almonds",
    strIngredient8: "free-range egg, beaten",
    strIngredient9: "almond extract",
    strIngredient10: "flaked almonds",
    strIngredient11: "",
    strIngredient12: "",
    strIngredient13: "",
    strIngredient14: "",
    strIngredient15: "",
    strIngredient16: null,
    strIngredient17: null,
    strIngredient18: null,
    strIngredient19: null,
    strIngredient20: null,
    strMeasure1: "175g/6oz",
    strMeasure2: "75g/2½oz",
    strMeasure3: "2-3 tbsp",
    strMeasure4: "1 tbsp",
    strMeasure5: "125g/4½oz",
    strMeasure6: "125g/4½oz",
    strMeasure7: "125g/4½oz",
    strMeasure8: "1",
    strMeasure9: "½ tsp",
    strMeasure10: "50g/1¾oz",
    strMeasure11: "",
    strMeasure12: "",
    strMeasure13: "",
    strMeasure14: "",
    strMeasure15: "",
    strMeasure16: null,
    strMeasure17: null,
    strMeasure18: null,
    strMeasure19: null,
    strMeasure20: null
  }
];
```

### Expected output with the above input: 
```
  let eo1 = [
    {
      productId: "52768",
      productTitle: "Apple Frangipan Tart",
      Category: "Dessert",
      Area: "British",
      Ingredients: [
        { ingredient: "digestive biscuits", measure: "175g/6oz" },
        { ingredient: "butter", measure: "75g/3oz" },
        { ingredient: "Bramley apples", measure: "200g/7oz" },
        { ingredient: "butter, softened", measure: "75g/3oz" },
        { ingredient: "caster sugar", measure: "75g/3oz" },
        { ingredient: "free-range eggs, beaten", measure: "2" },
        { ingredient: "ground almonds", measure: "75g/3oz" },
        { ingredient: "almond extract", measure: "1 tsp" },
        { ingredient: "flaked almonds", measure: "50g/1¾oz" },
      ],
    },
    {
      productId: "53049",
      productTitle: "Apam balik",
      Category: "Dessert",
      Area: "Malaysian",
      Ingredients: [
        { ingredient: "Milk", measure: "200ml" },
        { ingredient: "Oil", measure: "60ml" },
        { ingredient: "Eggs", measure: "2" },
        { ingredient: "Flour", measure: "1600g" },
        { ingredient: "Baking Powder", measure: "3 tsp" },
        { ingredient: "Salt", measure: "1/2 tsp" },
        { ingredient: "Unsalted Butter", measure: "25g" },
        { ingredient: "Sugar", measure: "45g" },
        { ingredient: "Peanut Butter", measure: "3 tbs" },
      ],
    },
    {
      productId: "52767",
      productTitle: "Bakewell tart",
      Category: "Dessert",
      Area: "British",
      Ingredients: [
        { ingredient: "plain flour", measure: "175g/6oz" },
        { ingredient: "chilled butter", measure: "75g/2½oz" },
        { ingredient: "cold water", measure: "2-3 tbsp" },
        { ingredient: "raspberry jam", measure: "1 tbsp" },
        { ingredient: "butter", measure: "125g/4½oz" },
        { ingredient: "caster sugar", measure: "125g/4½oz" },
        { ingredient: "ground almonds", measure: "125g/4½oz" },
        { ingredient: "free-range egg, beaten", measure: "1" },
        { ingredient: "almond extract", measure: "½ tsp" },
        { ingredient: "flaked almonds", measure: "50g/1¾oz" },
      ],
    },
  ];
```

### Mapping of properties from input to expected output
- idMeal maps to productId
- strMeal maps to productTitle
- Category maps to Category, but the id turns into the name
- Area maps to Area, but the id turns into the name
- finally, 20 strIngredients & 20 strMeasures turns into a single entry of Ingredients which is an array of object. Each object of Ingredients contains a key called ingredient and another key called measure.

### General guidelines
- Example inputs are just for example. The tests may check the functions by invoking them with different inputs of the same shape.
- Before writing a single line of code please read the problem statement very carefully.
- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time