# JS-promoted-students

## Submission Instructions [Please note]

## Maximum Marks - 10

- The Submission should not contain spaces, for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to make submission - 1 mark(default)
 ✅ Should have defined totalPromotedStudents - 2 mark
 ✅ Should have returned required object for data 1- 3 mark
 ✅ Should have returned required object for data 2- 4 marks

```

## Installation

- you can use any node version that works for you ( 14+ )
- please make sure you do not push package-lock.json
- Download and unzip the boilerplate
- Navigate to the correct path
- Run **npm install** to install the node modules
- Run **npm test** for the test cases.

## Description

- You need to use sort,filter and reduce methods of array to acheive the following
- you are given a function `totalPromotedStudents` which accepts data array as an argument and returns an object with the following mentioned properties
- you are given list of students who are promoted and not promoted to next class.
- sample data provided

```
let data = [
  {
    name: "Hewie",
    age: 9,
    promoted: true,
    gender: "Male",
  },
  {
    name: "Brantley",
    age: 14,
    promoted: true,
    gender: "Female",
  },
  {
    name: "Sophie",
    age: 8,
    promoted: true,
    gender: "Female",
  },
  {
    name: "alvin",
    age: 14,
    promoted: false,
    gender: "Male",
  },
];
```
 - promoted : true means promted to the next class
 - promoted :false means not promoted to the next class
- The function is expected to return the following object with mentioned properties.
-

```
 {
  totalPromoted: 3,
  totalPromotedAvgAge: 10,
  totalPromotedUnder15: 3,
  totalAgePromotedMale: 9,
  totalPromotedFemaleAscByAge: [
    { name: 'Sophie', age: 8, promoted: true, gender: 'Female' },
    { name: 'Brantley', age: 14, promoted: true, gender: 'Female' }
  ]
}
```

### use only filter,reduce and sort methods to achieve the following

- totalPromoted - no of students promoted to next class
- totalPromotedAvgAge - average age of students promoted to next class(note:round down the average hint:(use Math.floor())
- totalPromotedUnder15 - number of promoted students who are under the age of 15
- totalAgePromotedMale - total age of promoted male students
- totalPromotedFemaleAscByAge - list of promoted female students in ascending order

  **Note:- Do not use any other names for the methods other than the mentioned ones.**

####

## Boilerplate

- Do not change the given folder structure
- inside src you will index.js file that is where you need to write the mentioned methods
- you can find the test case under `__tests__ ` folder

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not to just submit it last minute
- try to keep one submission at a time
