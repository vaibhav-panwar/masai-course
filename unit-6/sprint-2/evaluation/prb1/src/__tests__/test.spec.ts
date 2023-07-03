import {
  DatabaseModel as DBModel,
  Database as DB,
  Model as M,
  User as U,
  Post as P,
  Comment as C,
  Like as L,
} from "../code";
import fs from "fs";
import cp from "child_process";

const DatabaseModel = DBModel as any;
const Database = DB as any;
const Model = M as any;
const User = U as any;
const Post = P as any;
const Comment = C as any;
const Like = L as any;

declare global {
  var score: number;
  var features: number;
}
global.score = 1;
global.features = 0;
describe("Instagram LLD Features testing", () => {
  it("The instance of Database should be created with the connect method and it should allow to create only one isnatnce of the Database", () => {
    const db = Database.connect();
    expect(db instanceof Database).toBe(true);
    expect(db).toBe(Database.Instance);
    const db2 = Database.connect();
    expect(db).toBe(db2);
    global.score += 1;
    global.features++;
  }); // 1

  it("Check all the different properties of the Database class", () => {
    expect(Database.Instance).toHaveProperty("users");
    expect(Database.Instance).toHaveProperty("posts");
    expect(Database.Instance).toHaveProperty("comments");
    expect(Database.Instance).toHaveProperty("likes");
    expect(Database.Instance).toHaveProperty("create");
    expect(Database.Instance).toHaveProperty("upsert");
    expect(Database.Instance).toHaveProperty("delete");
    expect(Database.Instance).toHaveProperty("Users");
    expect(Database.Instance).toHaveProperty("Posts");
    expect(Database.Instance).toHaveProperty("Comments");
    expect(Database.Instance).toHaveProperty("Likes");
    global.score += 1;
    global.features++;
  }); // 1

  it("Create an instance of User and check it's properties", () => {
    expect(Database.Instance.Users.length).toBe(0);
    const u = new User("s", "Developer", "s@gmail.com");
    expect(u).toHaveProperty("id");
    expect(u).toHaveProperty("model");
    expect(u.name).toBe("s");
    expect(u.email).toBe("s@gmail.com");
    expect(u.bio).toBe("Developer");
    expect(Database.Instance.Users.length).toBe(1);
    global.score += 1;
    global.features++;
  }); // 1

  it("Create a new post and check the database", () => {
    expect(Database.Instance.Posts.length).toBe(0);
    const u = new User("s", "Developer", "s@gmail.com");
    u.createPost("image", "post content");
    expect(Database.Instance.Posts.length).toBe(1);
    global.score += 1;
    global.features++;
  }); // 1

  it("Comment on a post", () => {
    expect(Database.Instance.Comments.length).toBe(0);
    const u1 = new User("s", "Developer", "s@gmail.com");
    const u2 = new User("a", "Developer", "a@gmail.com");
    const post = u1.createPost("image", "post content");
    post.Comment(u2.id);
    expect(Database.Instance.Comments.length).toBe(1);
    global.score += 1;
    global.features++;
  }); // 1

  it("Like a Post", () => {
    const likes = Database.Instance.Likes.length;
    const u1 = new User("s", "Developer", "s@gmail.com");
    const u2 = new User("a", "Developer", "a@gmail.com");
    const u3 = new User("b", "Developer", "b@gmail.com");
    const post = u1.createPost("image", "post content");
    expect(post.likes).toBe(0);
    post.Like(u2.id);
    expect(post.likes).toBe(1);
    post.Like(u3.id);
    expect(post.likes).toBe(2);
    expect(Database.Instance.Likes.length).toBe(likes + 2);
    global.score += 2;
    global.features++;
  }); // 2
  it("Like a Comment", () => {
    const likes = Database.Instance.Likes.length;
    const u1 = new User("s", "Developer", "s@gmail.com");
    const u2 = new User("a", "Developer", "a@gmail.com");
    const u3 = new User("b", "Developer", "b@gmail.com");
    const u4 = new User("c", "Developer", "c@gmail.com");
    const post = u1.createPost("image", "post content");
    const comment = post.Comment(u2.id);
    expect(comment.likes).toBe(0);
    comment.Like(u3.id);
    expect(comment.likes).toBe(1);
    comment.Like(u4.id);
    expect(comment.likes).toBe(2);
    expect(Database.Instance.Likes.length).toBe(likes + 2);
    global.score += 2;
    global.features++;
  }); // 2
});

const FileContent = [
  `import { Database } from "./code";
   const db = new Database();`,
  `import { Model, DatabaseModel } from "./code";
  new Model(DatabaseModel.users);`,
];
describe("Youtube App Types testing", () => {
  test("You shouldn't be able to create Instance of the Database class with new keyword", async () => {
    expect(global.features).toBeGreaterThanOrEqual(1);
    try {
      let data = await OnFail(FileContent[0]);
      global.score += 1;
    } catch (error) {
      expect(error).toBeFalsy();
    }
  }, 50000); //1
  test("You shouldn't be able to create Instance of the Model class with new keyword", async () => {
    expect(global.features).toBeGreaterThanOrEqual(2);
    try {
      let data = await OnFail(FileContent[1]);
      global.score += 1;
    } catch (error) {
      expect(error).toBeFalsy();
    }
  }, 50000); //1
});
afterAll(() => {
  console.log("Final Score is", global.score);
});

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

const OnPass = (FileContent: string) => {
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

const OnFail = (FileContent: string) => {
  return new Promise(async (resolve, reject) => {
    let error;
    try {
      await fsPromise(`${__dirname}/../index.ts`, FileContent);
      await execPromise();
    } catch (err) {
      error = err;
      resolve(err);
    }
    if (error) resolve(error);
    expect(error).toBeTruthy();
  });
};
