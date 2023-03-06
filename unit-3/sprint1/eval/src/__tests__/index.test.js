import {
  createBook,
  CreateBook, 
  Book,
  categoriesDirectory,
  areas,
  massageArray,
  exampleInputArray,
} from "../index";
global.score = 1;

describe("Object properties and expected return", function () {
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

  let eo2 = [
    {
      productId: "52768",
      productTitle: "aaa",
      Category: "MainCourse",
      Area: "Malaysian",
      Ingredients: [
        { ingredient: "a", measure: "275g/6oz" },
        { ingredient: "b", measure: "25g/3oz" },
        { ingredient: "c", measure: "220g/7oz" },
        { ingredient: "d", measure: "25g/3oz" },
      ],
    },
    {
      productId: "53049",
      productTitle: "bbb",
      Category: "MainCourse",
      Area: "British",
      Ingredients: [
        { ingredient: "Milk", measure: "100ml" },
        { ingredient: "Oil", measure: "10ml" },
      ],
    },
    {
      productId: "52767",
      productTitle: "ccc",
      Category: "Starter",
      Area: "Malaysian",
      Ingredients: [
        { ingredient: "x", measure: "275g/6oz" },
        { ingredient: "y", measure: "25g/2½oz" },
        { ingredient: "z", measure: "2-4 tbsp" },
      ],
    },
  ];

  let exampleInputArray2 = [
    {
      idMeal: "52768",
      strMeal: "aaa",
      Category: 1,
      Area: 2,
      strIngredient1: "a",
      strIngredient2: "b",
      strIngredient3: "c",
      strIngredient4: "d",
      strIngredient5: "",
      strIngredient6: "",
      strIngredient7: "",
      strIngredient8: "",
      strIngredient9: "",
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
      strMeasure1: "275g/6oz",
      strMeasure2: "25g/3oz",
      strMeasure3: "220g/7oz",
      strMeasure4: "25g/3oz",
      strMeasure5: "",
      strMeasure6: "",
      strMeasure7: "",
      strMeasure8: "",
      strMeasure9: "",
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
      strMeasure20: null,
    },

    {
      idMeal: "53049",
      strMeal: "bbb",
      Category: 1,
      Area: 1,
      strIngredient1: "Milk",
      strIngredient2: "Oil",
      strIngredient3: "",
      strIngredient4: "",
      strIngredient5: "",
      strIngredient6: "",
      strIngredient7: "",
      strIngredient8: "",
      strIngredient9: "",
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
      strMeasure1: "100ml",
      strMeasure2: "10ml",
      strMeasure3: "",
      strMeasure4: "",
      strMeasure5: "",
      strMeasure6: "",
      strMeasure7: "",
      strMeasure8: "",
      strMeasure9: "",
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
      strMeasure20: "",
    },
    {
      idMeal: "52767",
      strMeal: "ccc",
      Category: 2,
      Area: 2,
      strIngredient1: "x",
      strIngredient2: "y",
      strIngredient3: "z",
      strIngredient4: "",
      strIngredient5: "",
      strIngredient6: "",
      strIngredient7: "",
      strIngredient8: "",
      strIngredient9: "",
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
      strMeasure1: "275g/6oz",
      strMeasure2: "25g/2½oz",
      strMeasure3: "2-4 tbsp",
      strMeasure4: "",
      strMeasure5: "",
      strMeasure6: "",
      strMeasure7: "",
      strMeasure8: "",
      strMeasure9: "",
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
      strMeasure20: null,
    },
  ];

  const book1 = createBook("The Catcher in the Rye", "J.D. Salinger", 224, 350.00, "9780316769488");
  const book2 = createBook("The Alchemist", "Paulo Coelho", 208, 225.00, "9780062315007");

  test('objects created by createBook has correct properties', () => {
    expect(typeof book2).toBe('object');
    expect(book2.title).toBe("The Alchemist");
    expect(book2.author).toBe("Paulo Coelho");
    expect(book2.pageCount).toBe(208);
    expect(book2.price).toBe(225.00);
    expect(book2.ISBN).toBe("9780062315007");

    expect(typeof book1).toBe('object');
    expect(book1.title).toBe("The Catcher in the Rye");
    expect(book1.author).toBe("J.D. Salinger");
    expect(book1.pageCount).toBe(224);
    expect(book1.price).toBe(350.00);
    expect(book1.ISBN).toBe("9780316769488");
    global.score += 1;
  });

  test('objects created by createBook has correct methods', () => {
    expect(book1.getPrice()).toBe(350.00);
    expect(book1.increasePrice(300)).toBe(650.00);
    expect(book1.getPrice()).toBe(650.00);
    expect(book1.decreasePrice(400)).toBe(250.00);
    expect(book1.getPrice()).toBe(250.00);
    expect(book1.isExpensive()).toBe(false);
    book1.increasePrice(300);
    expect(book1.isExpensive()).toBe(true);

    expect(book2.getPrice()).toBe(225.00);
    expect(book2.increasePrice(50)).toBe(275.00);
    expect(book2.getPrice()).toBe(275.00);
    expect(book2.decreasePrice(100)).toBe(175.00);
    expect(book2.getPrice()).toBe(175.00);
    expect(book2.isExpensive()).toBe(false);
    book2.increasePrice(300);
    expect(book2.isExpensive()).toBe(false);   
    global.score += 2;
  });

  test("objects created using CreateBook are working as expected", () => {
    const book = new CreateBook(
      "The Catcher in the Rye",
      "J.D. Salinger",
      224,
      350.0,
      "9780316769488"
    );
    expect(book.title).toBe("The Catcher in the Rye");
    expect(book.author).toBe("J.D. Salinger");
    expect(book.pageCount).toBe(224);
    expect(book.price).toBe(350.0);
    expect(book.ISBN).toBe("9780316769488");
    expect(book.getPrice()).toBe(350.0);
    expect(book.decreasePrice(50)).toBe(300.0);
    expect(book.isExpensive()).toBe(false);
    expect(book.increasePrice(300)).toBe(600.0);
    expect(book.isExpensive()).toBe(true);

    global.score += 1;
  });  


  test("objects created using Book are working as expected", () => {
    const book = new Book(
      "The Catcher in the Rye",
      "J.D. Salinger",
      224,
      350.0,
      "9780316769488"
    );
    expect(book.title).toBe("The Catcher in the Rye");
    expect(book.author).toBe("J.D. Salinger");
    expect(book.pageCount).toBe(224);
    expect(book.price).toBe(350.0);
    expect(book.ISBN).toBe("9780316769488");
    expect(book.getPrice()).toBe(350.0);
    expect(book.decreasePrice(50)).toBe(300.0);
    expect(book.isExpensive()).toBe(false);
    expect(book.increasePrice(300)).toBe(600.0);
    expect(book.isExpensive()).toBe(true);

    global.score += 1;
  }); 



  test("array returned by massageArray to have property-value as expected", function () {
    let o1 = massageArray(exampleInputArray);
    let o2 = massageArray(exampleInputArray2);

    expect(o1[0].productId).toBe("52768");
    expect(o1[0].productTitle).toBe("Apple Frangipan Tart");
    expect(o1[0].Category).toBe("Dessert");
    expect(o1[0].Area).toBe("British");

    expect(o2[1].productId).toBe("53049");
    expect(o2[1].productTitle).toBe("bbb");
    expect(o2[1].Category).toBe("MainCourse");
    expect(o2[1].Area).toBe("British");

    global.score += 2;
  });

  test("array returned by massageArray to be as expected", function () {
    let o1 = massageArray(exampleInputArray);
    expect(o1).toMatchObject(eo1);

    let o2 = massageArray(exampleInputArray2);
    expect(o2).toMatchObject(eo2);

    global.score += 2;
  });

  afterAll(() => {
    console.log("Final Score is", global.score);
  });
});

