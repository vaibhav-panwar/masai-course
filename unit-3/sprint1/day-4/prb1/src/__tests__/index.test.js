import { totalPromotedStudents } from "../index";
import data from "./fixtureA.json";
import data1 from "./fixtureB.json";
global.score = 1;

describe(" testing Array methods", () => {
  it("Should have defined totalPromotedStudents", () => {
    expect(totalPromotedStudents).toBeDefined();
    expect(typeof totalPromotedStudents(data)).toBe("object");
    global.score += 2;
  });
  it("Should have defined properties on totalPromotedStudents for data 1", () => {
    expect(totalPromotedStudents).toBeDefined();
    let resObj = totalPromotedStudents(data);
    expect(resObj).toHaveProperty("totalPromoted", 7);
    expect(resObj).toHaveProperty("totalPromotedAvgAge", 12);
    global.score += 1;
    expect(resObj).toHaveProperty("totalPromotedUnder15", 6);
    expect(resObj).toHaveProperty("totalAgePromotedMale", 52);
    global.score += 1;
    expect(resObj).toHaveProperty("totalPromotedFemaleAscByAge");
    expect(resObj.totalPromotedFemaleAscByAge[0].age).toBe(10);
    global.score += 1;
  });
  it("Should have defined properties on totalPromotedStudents for data 2", () => {
    expect(totalPromotedStudents).toBeDefined();
    let resObj = totalPromotedStudents(data1);
    expect(resObj).toHaveProperty("totalPromoted", 5);
    expect(resObj).toHaveProperty("totalPromotedAvgAge", 10);
    global.score += 1;

    expect(resObj).toHaveProperty("totalPromotedUnder15", 4);
    expect(resObj).toHaveProperty("totalAgePromotedMale", 23);
    global.score += 1;

    expect(resObj).toHaveProperty("totalPromotedFemaleAscByAge");
    expect(resObj.totalPromotedFemaleAscByAge[0].age).toBe(8);
    global.score += 2;
  });
});

afterAll(() => {
  console.log("Final Score is", global.score);
});
