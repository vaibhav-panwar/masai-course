function totalPromotedStudents(data) {
  data = data.sort(
    (p1, p2) => (p1.age < p2.age) ? -1 : (p1.age > p2.age) ? 1 : 0);
  let sum = 0;
  let count = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i].promoted) {
      sum = sum + data[i].age;
      count++;
    }
  }
  let c = Math.floor(sum / count);
  let res = data.reduce((acc, item) => {
    if (item.promoted) {
      acc.totalPromoted++;
      if (item.age < 15) {
        acc.totalPromotedUnder15++;
      }
      if (item.gender == "Male") {
        acc.totalAgePromotedMale = acc.totalAgePromotedMale + item.age;
      }
      else if (item.gender == "Female") {
        acc["totalPromotedFemaleAscByAge"].push(item);
      }
    }
    return acc
  }, {
    totalPromoted: 0,
    totalPromotedAvgAge: c,
    totalPromotedUnder15: 0,
    totalAgePromotedMale: 0,
    totalPromotedFemaleAscByAge: []
  })
  return res
}

export { totalPromotedStudents };
