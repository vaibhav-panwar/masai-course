function totalPromotedStudents(data) {
  data.sort(function(a,b){return a.age - b.age});
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
