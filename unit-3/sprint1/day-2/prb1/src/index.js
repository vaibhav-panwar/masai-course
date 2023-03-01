function studentData(fname,lname,age,marks,...hobbies) {
  return {
    fullName : `${fname} ${lname}`,
    age,
    hobbies,
    getInfo(){
    return `${fname} ${lname}'s age is ${age}.`},
    getResult() {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
      sum = sum + marks[i];
    }
    let avg = sum / marks.length;
    if (avg < 50) {
      return `Result: FAIL`;
    }
    else {
      return `Result: PASS`;
    }
  }
  }

}

export {
  studentData
}