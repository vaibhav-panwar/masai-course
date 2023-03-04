const { addData } = require("../scripts/index");
const {
  append,
  remove,
  sortLowToHigh,
  sortHighToLow,
} = require("../scripts/store");
const fs = require("fs");
const path = require("path");
const indexFile = fs.readFileSync(
  path.resolve(__dirname, "../../index.html"),
  "utf8"
);
const storeFile = fs.readFileSync(
  path.resolve(__dirname, "../../store.html"),
  "utf8"
);

global.score = 1;
// jest.setTimeout(10000);

jest.dontMock("fs");

describe("Mobile Store", function () {
  afterEach(() => {
    // restore the original func after test
    jest.resetModules();
    fetch.resetMocks();
  });

  it("Add mobilesData is working properly in local storage", function () {
    document.documentElement.innerHTML = indexFile.toString();

    addData("IPHONE12", "apple", 69999, "hhtps://");

    var items = JSON.parse(localStorage.getItem("mobile_data"));
    expect(items.length).toBe(1);
    expect(items[0].name).toBe("IPHONE12");
    expect(items[0].brand).toBe("apple");
    expect(items[0].price).toBe(69999);
    expect(items[0].image).toBe("hhtps://");

    global.score += 1;
  });

  it("Add mobilesData is working properly in local storage-2", function () {
    document.documentElement.innerHTML = indexFile.toString();

    addData("Nokia-1", "nokia", 2999, "hhtps://");

    var items = JSON.parse(localStorage.getItem("mobile_data"));
    expect(items.length).toBe(2);
    expect(items[1].name).toBe("Nokia-1");
    expect(items[1].brand).toBe("nokia");
    expect(items[1].price).toBe(2999);
    expect(items[1].image).toBe("hhtps://");

    global.score += 1;
  });

  it("Show mobiles data is working properly on DOM", function () {
    document.documentElement.innerHTML = storeFile.toString();
    var items = JSON.parse(localStorage.getItem("mobile_data"));

    append(items);
    var parent = document.getElementById("mobile_list");
    expect(parent.children.length).toBe(2);

    document.documentElement.innerHTML = indexFile.toString();
    addData("samsung-1", "samsung", 4999, "hhtps://");

    document.documentElement.innerHTML = storeFile.toString();
    var items = JSON.parse(localStorage.getItem("mobile_data"));
    append(items);
    var parent = document.getElementById("mobile_list");
    expect(parent.children.length).toBe(3);

    global.score += 2;
  });

  it("remove mobiles data is working properly on local storage", function () {
    document.documentElement.innerHTML = storeFile.toString();
    remove(1);

    var items = JSON.parse(localStorage.getItem("mobile_data"));

    expect(items[1].name).toBe("samsung-1");
    expect(items[1].brand).toBe("samsung");
    expect(items[1].price).toBe(4999);
    expect(items[1].image).toBe("hhtps://");

    global.score += 2;
  });

  it("remove mobiles data is working properly on DOM", function () {
    document.documentElement.innerHTML = storeFile.toString();
    remove(1);

    var parent = document.getElementById("mobile_list");
    expect(parent.children.length).toBe(1);

    global.score += 1;
  });

  it("High to Low sort mobiles by price  is working properly on DOM", function () {
    document.documentElement.innerHTML = indexFile.toString();
    addData("apple-1", "apple", 4999, "hhtps://");
    addData("apple-2", "apple", 1999, "hhtps://");
    addData("apple-3", "apple", 2999, "hhtps://");

    document.documentElement.innerHTML = storeFile.toString();
    sortHighToLow();

    var parent = document.getElementById("mobile_list");
    expect(parent.children.length).toBe(4);

    expect(parent.children[0].textContent.includes(69999)).toBe(true);
    expect(parent.children[1].textContent.includes(4999)).toBe(true);
    expect(parent.children[2].textContent.includes(2999)).toBe(true);
    expect(parent.children[3].textContent.includes(1999)).toBe(true);

    global.score += 1;
  });

  it("Low to High sort mobiles by price is working properly on DOM", function () {
    document.documentElement.innerHTML = storeFile.toString();
    sortLowToHigh();

    var parent = document.getElementById("mobile_list");
    expect(parent.children.length).toBe(4);

    expect(parent.children[0].textContent.includes(1999)).toBe(true);
    expect(parent.children[1].textContent.includes(2999)).toBe(true);
    expect(parent.children[2].textContent.includes(4999)).toBe(true);
    expect(parent.children[3].textContent.includes(69999)).toBe(true);

    global.score += 1;
  });
});

afterAll(() => {
  console.log("Final Score is", global.score);
});
