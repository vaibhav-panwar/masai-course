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
global.passed = new Array(3).fill(false);
global.score = 1;

const FileContent = [
  `import Person from "./code";
    console.log(new Person("S","D","s@gmail.com",9999));`,
  `import Person from "./code";
  const p = new Person("S","D","s@gmail.com",9999)
  console.log(p.PrintFullName());
  `,
  `import Person from "./code";
  const p = new Person("S",20,"s@gmail.com",9999)
  console.log(p.PrintFullName());
  `,
  `import Person from "./code";
  const p = new Person("S","D","s@gmail.com",true);
  console.log(p.PrintFullName());
  `,
  `export interface IPerson{
    first_name: boolean;
    last_name: string;
    email: string;
    phone: number,
    PrintFullName():string;
}`,
  `export interface IPerson{
  first_name: string;
  last_name: string;
  email: string;
  phone: null,
  PrintFullName():string;
}`,
];

describe("TS Testing", () => {
  beforeEach(() => {
    const tsFileExists1 = fs.existsSync(`${__dirname}/../src/index.ts`);
    expect(tsFileExists1).toBe(true);
    const tsFileExists2 = fs.existsSync(`${__dirname}/../src/code.ts`);
    expect(tsFileExists2).toBe(true);
    const tsFileExists3 = fs.existsSync(`${__dirname}/../src/interface.ts`);
    expect(tsFileExists3).toBe(true);
  });
  it("If Everything works fine with correct params", async () => {
    try {
      let data = await OnPass(FileContent[0]);
      expect(data).toContain("first_name");
      expect(data).toContain("last_name");
      expect(data).toContain("email");
      expect(data).toContain("phone");
      global.score += 1;
      global.passed[0] = true;
    } catch (error) {
      console.log(error);
      expect(error).toBeFalsy();
    }
  }, 60000);
  it("Print FullName works fine", async () => {
    expect(global.passed[0]).toBeTruthy();
    try {
      let data = await OnPass(FileContent[1]);
      expect(data).toContain("S D");
      global.score += 1;
      global.passed[1] = true;
    } catch (error) {
      console.log(error);
      expect(error).toBeFalsy();
    }
  }, 60000);
  it("Wrong Params Type-1", async () => {
    expect(global.passed[0]).toBe(true);
    expect(global.passed[1]).toBe(true);
    try {
      let data = await OnFail(FileContent[2]);
      global.score += 1;
    } catch (error) {
      console.log(error);
      expect(error).toBeFalsy();
    }
  }, 60000);
  it("Wrong Params Type-2", async () => {
    expect(global.passed[0]).toBe(true);
    expect(global.passed[1]).toBe(true);
    try {
      let data = await OnFail(FileContent[3]);
      global.score += 1;
    } catch (error) {
      console.log(error);
      expect(error).toBeFalsy();
    }
  }, 60000);
  it("Wrong Interface Type-1", async () => {
    expect(global.passed[0]).toBe(true);
    expect(global.passed[1]).toBe(true);
    try {
      let data = await OnFail(FileContent[4], "interface");
      global.score += 1;
    } catch (error) {
      console.log(error);
      expect(error).toBeFalsy();
    }
  }, 60000);
  it("Wrong Interface Type-2", async () => {
    expect(global.passed[0]).toBe(true);
    expect(global.passed[1]).toBe(true);
    try {
      let data = await OnFail(FileContent[5], "interface");
      global.score += 1;
    } catch (error) {
      console.log(error);
      expect(error).toBeFalsy();
    }
  }, 60000);
  afterAll(() => {
    console.log("Final Score is", global.score);
  });
});

const OnPass = (FileContent, fileName = "index") => {
  return new Promise(async (resolve, reject) => {
    let data;
    try {
      await fsPromise(`${__dirname}/../src/${fileName}.ts`, FileContent);
      data = await execPromise();
    } catch (error) {
      reject(error);
    }
    resolve(data);
  });
};

const OnFail = (FileContent, fileName = "index") => {
  return new Promise(async (resolve, reject) => {
    let error;
    try {
      await fsPromise(`${__dirname}/../src/${fileName}.ts`, FileContent);
      data = await execPromise();
    } catch (err) {
      error = err;
      resolve(err);
    }
    if (error) resolve(error);
    expect(error).toBeTruthy();
  });
};
