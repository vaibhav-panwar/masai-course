
// Problem 1. 
class Account {
  constructor(id, balance) {
    this.id = id;
    this.balance = balance;
  }
  deposit(amount) {
    this.balance = this.balance + amount;
    return this.balance;
  }
  withdraw(amount) {
    this.balance = this.balance - amount;
    return this.balance;
  }
  getBalance() {
    return this.balance;
  }
}

class SavingsAccount extends Account {
  constructor(id, balance, interestRate) {
    super(id, balance);
    this.interestRate = interestRate;
  }
  addInterest() {
    this.balance = this.balance + this.balance * (this.interestRate/100);
    return this.balance;
  }
  setInterestRate(rate) {
    this.interestRate = rate;
    return this.interestRate;
  }
}

class CheckingAccount extends Account {
  constructor(id, balance, overdraftLimit) {
    super(id, balance);
    this.overdraftLimit = overdraftLimit;
  }
  withdraw(amount) {
    if ((this.balance - amount) >= (-this.overdraftLimit)) {
      this.balance = this.balance - amount;
      return this.balance;
    }
  }
  setOverdraftLimit(limit) {
    this.overdraftLimit = limit;
    return this.overdraftLimit;
  }
}

// Problem 2.

function Animal(name, type) {
  this.name = name;
  this.type = type; 
}
Animal.prototype.makeSound = function(){
  return `Animal is making a sound`;
}
function Mammal(name, type, hasFur) {
  Animal.call(this, name, type);
  this.hasFur = hasFur;
}
Object.setPrototypeOf(Mammal.prototype,Animal.prototype);
Mammal.prototype.makeSound = function () {
  return `Mammal is making a sound`;
}

function Dog(name, type, hasFur, breed) {
  Mammal.call(this,name, type, hasFur);
  this.breed = breed;
}
Object.setPrototypeOf(Dog.prototype,Mammal.prototype);
Dog.prototype.makeSound = function(){
  return `Woof Woof!`
}

// Problem 3.
class Character {
  constructor(name, health, attackPower) {
    this.name = name;
    this.health = health;
    this.attackPower = attackPower;
  }
  attack(enemy) {
    enemy.health = enemy.health - this.attackPower;
  }
  isAlive() {
    if (this.health > 0) {
      return true;
    }
    else {
      return false;
    }
  }
}



class Warrior extends Character {
  constructor(name, health, attackPower, weapon, armor) {
    super(name, health, attackPower);
    this.weapon = weapon;
    this.armor = armor
  }
  attack(enemy) {
    if (this.weapon == "sword") {
      enemy.health = enemy.health - this.attackPower - 10;
      return enemy.health;
    }
    else {
      enemy.health = enemy.health - this.attackPower;
    }
  }
  defend() {
    this.health = this.health + 10;
    return this.health;
  }

}

// Problem 4.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
  study() {
    return `${this.name} is studying.`
  }
}

class Teacher extends Person {
  constructor(name, age, subject, students) {
    super(name, age);
    this.subject = subject;
    this.students = students;
  }
  addStudent(student) {
    this.students.push(student);
  }
  teach() {
    console.log(`${this.name} is teaching ${this.subject}.`);
  }
}

class MathTeacher extends Teacher {
  constructor(name, age) {
    super(name, age);
    this.subject = "Math";
  }
  assignHomework(){
   console.log(`${this.name} assigned homework to their ${this.subject} class.`);
  }
}
class HighSchoolMathTeacher extends MathTeacher {
 constructor(name,age,department){
  super(name,age);
  this.subject= "Math";
  this.department = department;
 }
 introduce(){
   console.log(` Hi, my name is ${this.name}, I'm a ${this.department} ${this.subject} teacher and I'm ${this.age} years old.`)
 }
}

export {
  Dog, Mammal, Animal,
  Character, Warrior,
  Account, SavingsAccount, CheckingAccount,
  Person, Student, Teacher, MathTeacher, HighSchoolMathTeacher
}
