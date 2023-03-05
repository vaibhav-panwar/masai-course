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
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

function getVotersSummary(voters) {
  let res = voters.reduce((acc, item) => {
    if (item.age <= 20) {
      acc.numYoungPeople++;
      if (item.voted) {
        acc.numYoungVotes++;
      }
    }
    else if (item.age > 20 && item.age <= 40) {
      acc.numMidsPeople++;
      if (item.voted) {
        acc.numMidVotesPeople++;
      }
    }
    else if (item.age > 40) {
      acc.numOldsPeople++;
      if (item.voted) {
        acc.numOldVotesPeople++;
      }
    }
    return acc
  }, {
    numYoungVotes: 0,
    numYoungPeople: 0,
    numMidVotesPeople: 0,
    numMidsPeople: 0,
    numOldVotesPeople: 0,
    numOldsPeople: 0
  })
  return res
}

/*
If we pass the provided voters array to the function, we expect to return the following output: 


{ numYoungVotes: 0,
 numYoungPeople: 2,
 numMidVotesPeople: 4,
 numMidsPeople: 6,
 numOldVotesPeople: 3,
 numOldsPeople: 4
}

*/

// do not change this
if (typeof exports !== "undefined") {
  module.exports = {
    getVotersSummary,
  };
}
