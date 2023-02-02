function studentData(firstName,lastName,age,marksArray,...rest) {
  const fullName = firstName + " " + lastName;
  const averageMarks = marksArray.reduce((a, b) => a + b, 0) / marksArray.length;
  return {
    fullName : `${firstName} ${lastName}`,
    age : age,
    hobbies : rest,
    getInfo: function () {
      return `${fullName}'s age is ${age}.`;
    },
    getResult: function () {
      return averageMarks < 50 ? "Result: FAIL" : "Result: PASS";
    }
  }
}

export {
  studentData
}