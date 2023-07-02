const cp = require("child_process");
const fs = require("fs");
const execPromise = () => {
  return new Promise((resolve, reject) => {
    cp.exec("npx ts-node src/index.ts", (e, data) => {
      if (e) {
        reject({ ...e, isErrorFromExec: true });
      } else {
        resolve(data);
      }
    });
  });
};
const fsPromise = (path = "", content = "") => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, content, (err) => {
      if (err) {
        return reject({ err, isErrorFromExec: false });
      }
      resolve("Created File");
    });
  });
};
global.score = 1;
global.passed = new Array(2).fill(false);
const FileContent = [
  `import {PhoneBook,Data} from "./code";
  PhoneBook({
      prefix: "ind",
      phones: [],
      addresses: [],
      email: "s@gmail.com",
      firstName: "s",
      middleName: "k",
      lastName: "d",
  })
  console.log(Data.length);
  `,
  `import {PhoneBook,Data} from "./code";
  PhoneBook({
      phones: [],
      addresses: [],
      email: "s@gmail.com",
      firstName: "s",
      middleName: "k",
      lastName: "d",
  })
  console.log(Data.length);`,
  `import {PhoneBook,Data} from "./code";
  PhoneBook({
      prefix: "ind",
      phones: [],
      addresses: [],
      firstName: "s",
      middleName: "k",
      lastName: "d",
  })
  console.log(Data.length);`,
  `import {PhoneBook,Data} from "./code";
  PhoneBook({
      prefix: "ind",
      phones: [],
      addresses: [],
      email: "s@gmail.com",
      firstName: "s",
      lastName: "d",
  })
  console.log(Data.length);`,
  `import {PhoneBook,Data} from "./code";
  PhoneBook({
      prefix: "ind",
      phones: [10,20],
      addresses: [],
      email: "s@gmail.com",
      firstName: "s",
      middleName: "",
      lastName: "d",
  })`,
  `import {PhoneBook,Data} from "./code";
  PhoneBook({
      prefix: "ind",
      phones: ["10","20"],
      addresses: [],
      email: "s@gmail.com",
      firstName: "s",
      middleName: "",
      lastName: "d",
  })`,
  `import {PhoneBook,Data} from "./code";
  PhoneBook({
      prefix: 30,
      phones: [10,20],
      addresses: [],
      email: "s@gmail.com",
      firstName: "s",
      middleName: "",
      lastName: "d",
  })`,
  `import {PhoneBook,Data} from "./code";

  PhoneBook({
      prefix: "ind",
      phones: [],
      addresses: [],
      email: false,
      firstName: "s",
      middleName: "",
      lastName: "d",
  })`,
  `import {PhoneBook,Data} from "./code";

  PhoneBook({
      prefix: "ind",
      phones: [],
      addresses: [],
      email: "s@gmail.com",
      firstName: 10,
      middleName: "",
      lastName: "d",
  })`,
  `import {PhoneBook,Data} from "./code";

  PhoneBook({
      prefix: "ind",
      phones: [],
      addresses: [],
      email: "s@gmail.com",
      firstName: "s",
      middleName: "",
      lastName: [],
  })`,
  `import {PhoneBook,Data} from "./code";
  PhoneBook({
      prefix: "ind",
      phones: [],
      addresses: [],
      email: "s@gmail.com",
      firstName: "s",
      middleName: 10,
      lastName: [],
  })`,
  `import { PhoneBook, Data } from "./code";

  PhoneBook({
    prefix: "ind",
    phones: [],
    addresses: [
      {
        houseNumber: 1,
        street: "",
        city: "",
        state: "",
        postalCode: 1,
        country: "",
      },
    ],
    email: "s@gmail.com",
    firstName: "s",
    middleName: "",
    lastName: "",
  });
  console.log(Data.length);
  `,
  `import { PhoneBook, Data } from "./code";

  PhoneBook({
    prefix: "ind",
    phones: [],
    addresses: [
      {
        houseNumber: "1",
        street: "",
        city: "",
        state: "",
        postalCode: "1",
        country: "",
      },
    ],
    email: "s@gmail.com",
    firstName: "s",
    middleName: "",
    lastName: "",
  });`,
  `import { PhoneBook, Data } from "./code";
  PhoneBook({
    prefix: "ind",
    phones: [],
    addresses: [
      {
        houseNumber: 1,
        street: 1,
        city: [],
        state: [],
        postalCode: 1,
        country: false,
      },
    ],
    email: "s@gmail.com",
    firstName: "s",
    middleName: "",
    lastName: "",
  });`,
  `import { PhoneBook, Data } from "./code";

  PhoneBook({
    prefix: "ind",
    phones: [],
    addresses: [
      {
        houseNumber: 1,
        street: true,
        city: "l",
        state: {}.
        postalCode: 1,
        country: 10,
      },
    ],
    email: "s@gmail.com",
    firstName: "s",
    middleName: "",
    lastName: "",
  });`,
];

describe("TS Testing", () => {
  beforeEach(() => {
    const tsFileExists1 = fs.existsSync(`${__dirname}/../src/index.ts`);
    expect(tsFileExists1).toBe(true);
    const tsFileExists2 = fs.existsSync(`${__dirname}/../src/code.ts`);
    expect(tsFileExists2).toBe(true);
  });
  it("If Everything works fine with correct params", async () => {
    try {
      let data = await OnPass(FileContent[0]);
      global.score += 1;
      global.passed[0] = true;
    } catch (error) {
      console.log(error);
      expect(error).toBeFalsy();
    }
  }, 20000);

  it("Prefix Optioal checking", async () => {
    expect(global.passed[0]).toBeTruthy();
    try {
      let data = await OnPass(FileContent[1]);
      global.score += 1;
    } catch (error) {
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("Email Optioal checking", async () => {
    expect(global.passed[0]).toBeTruthy();
    try {
      let data = await OnPass(FileContent[2]);
      global.score += 1;
    } catch (error) {
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("Middlename Optioal checking", async () => {
    expect(global.passed[0]).toBeTruthy();
    try {
      let data = await OnPass(FileContent[3]);
      global.score += 1;
    } catch (error) {
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("Phone is array of numbers checking", async () => {
    expect(global.passed[0]).toBeTruthy();
    try {
      let data = await OnPass(FileContent[4]);
      global.score += 1;
    } catch (error) {
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("Phones Wrong type checking", async () => {
    expect(global.passed[0]).toBeTruthy();
    try {
      let data = await OnFail(FileContent[5]);
      expect(data.isErrorFromExec).toBeTruthy();
      global.score += 1;
    } catch (error) {
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("Prefix Wrong type checking", async () => {
    expect(global.passed[0]).toBeTruthy();
    try {
      let data = await OnFail(FileContent[6]);
      expect(data.isErrorFromExec).toBeTruthy();
      global.score += 1;
    } catch (error) {
      expect(error).toBeFalsy();
    }
  }, 20000);

  it("Wrong Email Type", async () => {
    expect(global.passed[0]).toBeTruthy();
    try {
      let data = await OnFail(FileContent[7]);
      expect(data.isErrorFromExec).toBeTruthy();
      global.score += 1;
    } catch (error) {
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("Wrong FirstName Type", async () => {
    expect(global.passed[0]).toBeTruthy();
    try {
      let data = await OnFail(FileContent[8]);
      expect(data.isErrorFromExec).toBeTruthy();
      global.score += 1;
    } catch (error) {
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("Wrong LastName Type", async () => {
    expect(global.passed[0]).toBeTruthy();
    try {
      let data = await OnFail(FileContent[9]);
      expect(data.isErrorFromExec).toBeTruthy();
      global.score += 1;
    } catch (error) {
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("Wrong MiddleName Type", async () => {
    expect(global.passed[0]).toBeTruthy();
    try {
      let data = await OnFail(FileContent[10]);
      expect(data.isErrorFromExec).toBeTruthy();
      global.score += 1;
    } catch (error) {
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("Works fine with correct address type", async () => {
    try {
      await OnPass(FileContent[11]);
      global.score += 1;
      global.passed[1] = true;
    } catch (error) {
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("Wrong Address Type-1", async () => {
    expect(global.passed[1]).toBeTruthy();
    try {
      let data = await OnFail(FileContent[12]);
      expect(data.isErrorFromExec).toBeTruthy();
      global.score += 1;
    } catch (error) {
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("Wrong Address Type-2", async () => {
    expect(global.passed[1]).toBeTruthy();
    try {
      let data = await OnFail(FileContent[13]);
      expect(data.isErrorFromExec).toBeTruthy();
      global.score += 1;
    } catch (error) {
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("Wrong Address Type-3", async () => {
    expect(global.passed[1]).toBeTruthy();
    try {
      let data = await OnFail(FileContent[14]);
      expect(data.isErrorFromExec).toBeTruthy();
      global.score += 1;
    } catch (error) {
      expect(error).toBeFalsy();
    }
  }, 20000);
  afterAll(() => {
    console.log("Final Score is", global.score);
  });
});

const OnPass = (FileContent) => {
  return new Promise(async (resolve, reject) => {
    let data;
    try {
      await fsPromise(`${__dirname}/../src/index.ts`, FileContent);
      data = await execPromise();
    } catch (error) {
      reject(error);
    }
    resolve(data);
  });
};

const OnFail = (FileContent) => {
  return new Promise(async (resolve, reject) => {
    let error;
    try {
      await fsPromise(`${__dirname}/../src/index.ts`, FileContent);
      data = await execPromise();
    } catch (err) {
      error = err;
      resolve(err);
    }
    if (error) resolve(error);
    expect(error).toBeTruthy();
  });
};
