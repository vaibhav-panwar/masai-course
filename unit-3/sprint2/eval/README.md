## Installation
```
npm i
```

## Test 
```
npm t
```

## Test (Watch mode)
```
npm t -- --watchAll
```

## file structure
most of your work would happen in `src/index.js` file.

## Maximum marks - 40

## Problem Statement 1 [10 marks] :

You are expected to implement classes that represent different types of bank accounts - `SavingsAccount` and `CheckingAccount`. These classes inherit from a common parent class, `Account`, which provides basic functionality like deposit, withdraw, and balance inquiry.

### Hierarcy:

```
.
└── Account
    ├── SavingsAccount
    └── CheckingAccount
```

Properties and methods:

Account:

- Properties:

  - `id` (number) - account id
  - `balance` (number) - account balance

- Methods:

  - `constructor`(id, balance) - initializes the account with the given id and balance
  - `deposit`(amount) - adds the given amount to the account balance
  - `withdraw`(amount) - subtracts the given amount from the account balance, if possible
  - `getBalance`() - returns the current account balance

SavingsAccount:

  - Properties:

    - `id` (number) - account id
    - `balance` (number) - account balance
    - `interestRate` (number) - interest rate for the account

  - Methods:

    - `constructor`(id, balance, interestRate) - initializes the account with the given id, balance, and interest rate
    - `addInterest`() - *adds* interest to the account `balance` based on the current interest rate
    - `setInterestRate`(rate) - updates the `interestRate` for the account

CheckingAccount:

- Properties:

    - `id` (number) - account id
    - `balance` (number) - account balance
    - `overdraftLimit` (number) - maximum amount of negative balance allowed for the account

  - Methods:

    - `constructor`(id, balance, overdraftLimit) - initializes the account with the given id, balance, and overdraft limit
    - `withdraw`(amount) - subtracts the given amount from the account balance, if possible, taking into account the overdraft limit
    - `setOverdraftLimit`(limit) - updates the overdraft limit for the account

### More explaination

The Account class serves as the parent class for the other three account types, and provides basic functionality for managing an account balance, including depositing and withdrawing funds.

The SavingsAccount class extends Account and adds an interest rate property and an addInterest() method to calculate and add interest to the account balance. The setInterestRate() method can be used to update the interest rate. The Savings account holders can never withdraw more than their balance. If they try to withrdaw more than their balance, the transaction is simply ignored.

The CheckingAccount class also extends Account, but adds an overdraft limit property to allow for negative balances up to a certain amount. The withdraw() method should prevent withdrawals that would exceed the `overdraftLimit`. The `setOverdraftLimit()` method can be used to update the overdraft limit.

Example: 
```
// the balance is 500 & overdraft limit is 100
const checkingAccount = new CheckingAccount(2, 500, 100);

// withdrawl of 600 (500 + 100) is possible
checkingAccount.withdraw(600);
console.log(checkingAccount.getBalance()); // output: -100

// increasing overdraft limit to 300
// current balance is -100
checkingAccount.setOverdraftLimit(300);

checkingAccount.withdraw(150);
console.log(checkingAccount.getBalance()); // output: -250

// The limit is 300 & current balance is -250, hence withdrawl of 150 is not allowed.
checkingAccount.withdraw(150);
console.log(checkingAccount.getBalance()); // output: -250
```

Overall, these classes provide a flexible and extensible way to represent different types of bank accounts, with varying rules and limitations for managing funds.    

Definition of some of the banking terms used in the problem statement: 

Overdraft Limit: The maximum amount that a bank will allow a customer to over-withdraw their account. An overdraft occurs when the customer withdraws more money than they have available in their account.

Figure out more details yourself by carefully studying the following example invocation:

### Example invocation: 
```
const savingsAccount = new SavingsAccount(1, 1000, 1.5);
savingsAccount.addInterest();
console.log(savingsAccount.getBalance()); // output: 1015

const checkingAccount = new CheckingAccount(2, 500, 100);
checkingAccount.withdraw(600);
console.log(checkingAccount.getBalance()); // output: -100
checkingAccount.setOverdraftLimit(300);
checkingAccount.withdraw(150);
console.log(checkingAccount.getBalance()); // output: -250
checkingAccount.withdraw(150);
console.log(checkingAccount.getBalance()); // output: -250
```


## Problem statement 2 [9 Marks]

Design a 3 level hierarchy to represent animals and their sounds in JavaScript using constructor functions.

### Level 1:

Create a constructor function `Animal` with the following properties:

`name` (string)

`type` (string)

Add a method to the class named `makeSound` which should return a string "Animal is making a sound".

### Level 2:

Create a constructor function `Mammal` which should inherit from the `Animal` constructor function.

Add a new property to the `Mammal` named `hasFur` (boolean)

Override the `makeSound` method to return a string "Mammal is making a sound".

### Level 3:

Create a class `Dog` which should inherit from the `Mammal` class.

Add a new property to the class named `breed` (string)

Override the `makeSound` method to return a string "Woof Woof!"

### Example Invocation:
```
let d = new Dog("Fido", "dog", true, "Labrador");
console.log(d.makeSound()); // "Woof Woof!"

let m = new Mammal("Fluffy", "mammal", true);
console.log(m.makeSound()); // "Mammal is making a sound"

let a = new Animal("Charlie", "animal");
console.log(a.makeSound()); // "Animal is making a sound"
```

## Problem statement 3 [10 Marks]

Design a 2 level hierarchy for a game that has different types of characters with different attributes and abilities. You are expected to implement it using ES6 Classes.

### Level 1:

Create a class named `Character` with the following attributes:

`name` (string)
`health` (integer)
`attackPower` (integer)

And the following methods:

`attack` which takes a Character object as a parameter and decreases its health by the attackPower of the calling object.

`isAlive` which returns a boolean indicating whether the character's health is greater than 0.

### Level 2:

Create a class named `Warrior` which extends the `Character` class and has the following additional attributes:

`weapon` (string)
`armor` (integer)

And the following methods:

`attack` which should override the `Character` class's `attack` method and increase the `attackPower` by 10 when the weapon is a `sword`.

`defend` which takes no parameters and increases the `Warrior` object's `health` by 10.

Figure out more details yourself by carefully studying the following example invocation:

### Example Invocation: 
```
let character = new Character("John", 100, 20);
let enemy = new Character("Enemy", 100, 20);
let warrior = new Warrior("John", 100, 20, "sword", 30);

console.log(enemy.health); // 100
character.attack(enemy);
character.attack(enemy);
console.log(enemy.health); // 60
warrior.attack(enemy);
console.log(enemy.health); // 30

console.log(warrior.health); // 100
warrior.defend();
console.log(warrior.health); // 110

console.log(enemy.isAlive()); // true
enemy.health = 0;
console.log(enemy.isAlive()); // false
```


## Problem Statement 4 [10 marks]

Define several classes related to a school's academic environment. There is a base class "Person", two derived classes "Student" and "Teacher" inheriting from "Person" class, and two more derived classes "MathTeacher" and "HighSchoolMathTeacher" inheriting from "Teacher" class.

### Hierarchy

```
.
└── Person
    ├── Student
    └── Teacher
        └── MathTeacher
            └── HighSchoolMathTeacher
```            

### classes with their properties and methods:

### Person class:

Properties: name, age

Methods: 

introduce() - console: Hi, my name is `<name>` and I'm `<age>` years old.


### Student class (inherits from Person):

Properties: name, age, grade

Methods: 

study() - `<name>` is studying.


### Teacher class (inherits from Person):

Properties: name, age, subject, students

Methods: 

addStudent(student) -  add a student object to the `students` array

teach() - console: `<name>` is teaching `<subject>`.


### MathTeacher class (inherits from Teacher):

Properties: name, age, subject = 'Math'

Methods: 

assignHomework() - console: `<name>` assigned homework to their `<subject>` class.

### HighSchoolMathTeacher class (inherits from MathTeacher):

Properties: name, age, subject = 'Math', department

Methods: 

introduce() -  console: Hi, my name is `<name>`, I'm a `<department>` `<subject>` teacher and I'm `<age>` years old.`

averageStudentAge() - console: The average age of my `<subject>` students is `<average_age_of_student_objects in students array>`. 

### More explaination

The "Person" class has two properties, "name" and "age", and an "introduce" method that prints the person's name and age.

The "Student" class has an additional property "grade" and a "study" method that prints the student's name and the grade they are studying for.

The "Teacher" class has an additional property "subject" and an array "students" to keep track of students. It has two methods, "addStudent" to add a student to the array and print a message and "teach" to print the teacher's name and subject they teach.

The "MathTeacher" class is a derived class of "Teacher" and has a constructor that sets the subject to "Math" and a method "assignHomework" to print the teacher's name and the subject they teach with a message about assigning homework.

The "HighSchoolMathTeacher" class is a derived class of "MathTeacher" and has an additional property "department" and a method "averageStudentAge" to calculate and print the average age of students in the "Math" class taught by this teacher.

The code also includes some sample usage of the classes, creating instances of each class and calling their methods to introduce themselves, study, teach, assign homework, add students, and calculate the average age of students.


Figure out more details yourself by carefully studying the following example invocation. Please note that the question required console logs from the methods: 

```
const person = new Person("Alice", 25);
person.introduce(); //console: Hi, my name is Alice and I'm 25 years old.
const student = new Student("Bob", 16, 10);
const student2 = new Student("Bob", 18, 10);
student.introduce(); //console: Hi, my name is Bob and I'm 16 years old, and I'm in grade 10.
student.study(); //console: Bob is studying.
const teacher = new Teacher("Charlie", 35, "English");
teacher.introduce(); //console: Hi, my name is Charlie and I'm 35 years old, and I teach English.
teacher.addStudent(student);
teacher.teach(); //console: Charlie is teaching English.
const mathTeacher = new MathTeacher("David", 40);
mathTeacher.introduce(); //console: Hi, my name is David and I'm 40 years old, and I teach Math.
mathTeacher.addStudent(student);
mathTeacher.assignHomework(); //console: David assigned homework to their Math class.
mathTeacher.teach(); //console: David is teaching Math.
const highSchoolMathTeacher = new HighSchoolMathTeacher("Emma", 30, "High School");
highSchoolMathTeacher.introduce(); //console: Hi, my name is Emma, I'm a High School Math teacher and I'm 30 years old.
highSchoolMathTeacher.addStudent(student);
highSchoolMathTeacher.addStudent(student2);
highSchoolMathTeacher.assignHomework(); //console: Emma assigned homework to their Math class.
highSchoolMathTeacher.teach(); //console: Emma is teaching Math.
highSchoolMathTeacher.averageStudentAge(); //console: The average age of my Math students is 17.
// 17 is the average of 16 & 18
```


### General guidelines
- Example inputs are just for example. The tests may check the functions by invoking them with different inputs of the same shape.
- Before writing a single line of code please read the problem statement very carefully.
- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time