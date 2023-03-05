import { getVotersSummary } from "../index";

global.score = 1;

describe("getVotersSummary should return correct output", function () {
  const voters = [
    { name: "Bob", age: 30, voted: true },
    { name: "Jake", age: 32, voted: true },
    { name: "Kate", age: 25, voted: false },
    { name: "Sam", age: 20, voted: false },
    { name: "Phil", age: 21, voted: true },
    { name: "Ed", age: 55, voted: true },
    { name: "Tami", age: 54, voted: true },
    { name: "Mary", age: 31, voted: false },
    { name: "Becky", age: 43, voted: false },
    { name: "Joey", age: 19, voted: true },
    { name: "Jeff", age: 19, voted: true },
    { name: "Zack", age: 19, voted: false },
  ];
  let ans1 = {
    numYoungVotes: 2,
    numYoungPeople: 4,
    numMidVotesPeople: 3,
    numMidsPeople: 5,
    numOldVotesPeople: 2,
    numOldsPeople: 3,
  };
  // marks: 1
  test("to be of type object", function () {
    expect(
      getVotersSummary(voters) && typeof getVotersSummary(voters) === "object"
    ).toBe(true);
    global.score += 1;
  });

  //marks: 2
  test("getvoters function should return correct ans", function () {
    expect(getVotersSummary(voters)).toStrictEqual(ans1);
    global.score += 2;
  });

  let tc2 = [
    { name: "Bob", age: 30, voted: true },
    { name: "Jake", age: 32, voted: true },
    { name: "Kate", age: 25, voted: false },
    { name: "Sam", age: 20, voted: false },
    { name: "Phil", age: 21, voted: true },
    { name: "Ed", age: 55, voted: true },
    { name: "Tami", age: 54, voted: true },
    { name: "Mary", age: 31, voted: false },
    { name: "Becky", age: 43, voted: false },
    { name: "Joey", age: 41, voted: true },
    { name: "Jeff", age: 30, voted: true },
    { name: "Zack", age: 19, voted: false },
  ];
  let ans2 = {
    numYoungVotes: 0,
    numYoungPeople: 2,
    numMidVotesPeople: 4,
    numMidsPeople: 6,
    numOldVotesPeople: 3,
    numOldsPeople: 4,
  };

  test("getvoters function should return correct ans", function () {
    expect(getVotersSummary(tc2)).toStrictEqual(ans2);
    global.score += 2;
  });
});

afterAll(() => {
  console.log("Final Score is", global.score);
});
