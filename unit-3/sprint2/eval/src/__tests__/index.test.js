import {
  Person,
  Student,
  Teacher,
  MathTeacher,
  HighSchoolMathTeacher,
  Account,
  SavingsAccount,
  CheckingAccount,
  CreditAccount,
  Animal,
  Mammal,
  Dog,
  Character,
  Warrior,
} from "../index";
global.score = 1;

// 9 marks
describe("Animal", () => {
  let animal = new Animal("Charlie", "animal");

  test("Animal object's properties & methods works as expected", () => {
    expect(animal.name).toBe("Charlie");
    expect(animal.type).toBe("animal");
    expect(animal.makeSound()).toBe("Animal is making a sound");
    global.score += 1;
  });

  test("Animal has proper protypical relations", () => {
    expect(typeof Animal).toBe("function");
    expect(Animal.prototype.constructor).toBe(Animal);
    expect(Animal.prototype).toHaveProperty("makeSound");
    expect(Object.getPrototypeOf(Animal.prototype)).toBe(Object.prototype);
    expect(Object.getPrototypeOf(Animal)).toBe(Function.prototype);
    global.score += 1;
  });
});

describe("Mammal", () => {
  let mammal;
  mammal = new Mammal("Fluffy", "mammal", true);

  test("Mamal object's properties & methods works as expected", () => {
    expect(mammal.name).toBe("Fluffy");
    expect(mammal.type).toBe("mammal");
    expect(mammal.hasFur).toBe(true);
    expect(mammal.makeSound()).toBe("Mammal is making a sound");
    global.score += 1;
  });

  test("Mamal has proper protypical relations", () => {
    expect(typeof Mammal).toBe("function");
    expect(Mammal.prototype.constructor).toBe(Mammal);
    expect(Mammal.prototype).toHaveProperty("makeSound");
    expect(Object.getPrototypeOf(Mammal.prototype)).toBe(Animal.prototype);
    expect(Object.getPrototypeOf(Mammal)).toBe(Function.prototype);
    global.score += 2;
  });
});

describe("Dog", () => {
  let dog;
  dog = new Dog("Fido", "dog", true, "Labrador");

  test("Dog object's properties & methods works as expected", () => {
    expect(dog.name).toBe("Fido");
    expect(dog.type).toBe("dog");
    expect(dog.hasFur).toBe(true);
    expect(dog.breed).toBe("Labrador");
    expect(dog.makeSound()).toBe("Woof Woof!");
    global.score += 2;
  });

  test("should be of proper type", () => {
    expect(typeof Dog).toBe("function");
    expect(Dog.prototype.constructor).toBe(Dog);
    expect(Dog.prototype).toHaveProperty("makeSound");
    expect(Object.getPrototypeOf(Dog.prototype)).toBe(Mammal.prototype);
    expect(Object.getPrototypeOf(Dog)).toBe(Function.prototype);
    global.score += 2;
  });
});

describe("Character class", () => {
  let character;

  beforeEach(() => {
    character = new Character("John", 100, 20);
  });

  it("should initialize with the correct values", () => {
    expect(character.name).toBe("John");
    expect(character.health).toBe(100);
    expect(character.attackPower).toBe(20);
    global.score += 2;
  });

  it("should change the health of a character on attack", () => {
    let enemy = new Character("Enemy", 100, 20);
    character.attack(enemy);
    expect(enemy.health).toBe(80);
    expect(character.isAlive()).toBe(true);
    character.health = 0;
    expect(character.isAlive()).toBe(false);
    global.score += 2;
  });
});

describe("Warrior class", () => {
  let warrior;

  beforeEach(() => {
    warrior = new Warrior("John", 100, 20, "sword", 30);
  });

  it("should initialize with the correct values", () => {
    expect(warrior.name).toBe("John");
    expect(warrior.health).toBe(100);
    expect(warrior.attackPower).toBe(20);
    expect(warrior.weapon).toBe("sword");
    expect(warrior.armor).toBe(30);
    let enemy = new Character("Enemy", 100, 20);
    warrior.attack(enemy);
    expect(enemy.health).toBe(70);
    warrior.defend();
    expect(warrior.health).toBe(110);
    global.score += 6;
  });
});

describe("Bank Account Tests", () => {
  it("tests deposit and withdraw methods in Account class", () => {
    const account = new Account(1, 1000);
    account.deposit(500);
    expect(account.getBalance()).toEqual(1500);
    account.withdraw(800);
    expect(account.getBalance()).toEqual(700);
    global.score += 2;
  });

  it("tests addInterest method in SavingsAccount class", () => {
    const savingsAccount = new SavingsAccount(1, 1000, 1.5);
    savingsAccount.addInterest();
    expect(savingsAccount.getBalance()).toEqual(1015);
    global.score += 2;
  });

  it("tests withdraw method with overdraft in CheckingAccount class", () => {
    const checkingAccount = new CheckingAccount(2, 500, 100);
    checkingAccount.withdraw(600);
    expect(checkingAccount.getBalance()).toEqual(-100);
    checkingAccount.setOverdraftLimit(200);
    checkingAccount.withdraw(150);
    expect(checkingAccount.getBalance()).toEqual(-100);
    global.score += 6;
  });
});

describe("HighSchoolMathTeacher class", () => {
  let student1, student2, teacher;

  beforeEach(() => {
    student1 = new Student("Bob", 16, 10);
    student2 = new Student("Alice", 18, 10);
    teacher = new HighSchoolMathTeacher("Emma", 30, "High School");
  });

  test("introduce method should return the correct string", () => {
    const consoleSpy = jest.spyOn(console, "log");
    teacher.introduce();
    expect(consoleSpy).toHaveBeenCalledWith(`Hi, my name is Emma, I'm a High School Math teacher and I'm 30 years old.`);
    consoleSpy.mockRestore();
    global.score += 1;
  });

  test("addStudent method should add student to students array", () => {
    teacher.addStudent(student1);
    expect(teacher.students).toContain(student1);
    global.score += 2;
  });

  test("assignHomework method should log a message", () => {
    const consoleSpy = jest.spyOn(console, "log");
    teacher.assignHomework();
    expect(consoleSpy).toHaveBeenCalledWith(
      "Emma assigned homework to their Math class."
    );
    consoleSpy.mockRestore();
    global.score += 1;
  });

  test("teach method should log a message", () => {
    const consoleSpy = jest.spyOn(console, "log");
    teacher.teach();
    expect(consoleSpy).toHaveBeenCalledWith("Emma is teaching Math.");
    consoleSpy.mockRestore();
    global.score += 1;
  });

  test("averageStudentAge method should return the correct average age", () => {
    const consoleSpy = jest.spyOn(console, "log");
    teacher.addStudent(student1);
    teacher.addStudent(student2);
    teacher.averageStudentAge()

    expect(consoleSpy).toHaveBeenCalledWith(`The average age of my Math students is 17.`);
    consoleSpy.mockRestore();
    global.score += 5;
  });
});

afterAll(() => {
  console.log("Final Score is", global.score);
});
