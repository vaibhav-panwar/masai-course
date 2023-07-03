# TS LLD INSTAGRAM

## Maximum Marks: 12

```
✅ able to submit the app - 1 mark ( minimum score )
✅ The instance of the Database should be created with the connect method and it should allow to create of only one instance of the Database - 1 mark
✅ Check all the different properties of the Database class - 1 marks
✅ Create an instance of User and check its properties - 1 marks
✅ Create a new post and check the database - 1 mark
✅ Comment on a post - 1 mark
✅ Like a Post - 2 marks
✅ Like a Comment - 2 marks
✅ You shouldn't be able to create an Instance of the Database class with the `new` keyword - 1 mark
✅ You shouldn't be able to create an Instance of the Model class with the new keyword - 1 mark
```

## Submission Instructions [Please note]:

- The Submission should not contain spaces, for example,/rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

## Getting Started:

- Use node version(LTS) should be v16.16.0
- Don't change/override package.json
- please make sure you do not push package-lock.json
- Run the following commands
  1.  npm install --engine-strict
- **Running the TypeScript Code** :- `ts-node src/<filename.ts>`
- **Testing Your Code Locally**:- `npm run test`
- Make sure before running these commands you install all the dependencies

## Folder Structure:-

```
src
├── index.ts
├── code.ts -> All your code goes here
├── __tests__
|  ├── test.spec.ts

```

## Problem Statement:

- Here we have to build a database of Instagram with Typescript, OOPs concepts, and Design Patterns.

- Here in this application, we will have a total of 6 classes:-

  1.  Model
  2.  User
  3.  Post
  4.  Comment
  5.  Like
  6.  Database

- Please look at the below image for a better understanding of the relationships between the classes:- ![Image](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-06-30/Screenshot%202023-06-30%20at%2011.57.28%20AM_563498.png)

- In the code, there will also be an enum called DatabaseModel which should have 4 keys:-
  1. users = "users",
  2. posts = "posts",
  3. comments = "comments",
  4. likes = "likes"
- This is already given in the template no need to build it.

### Database:-

- This is going to be the central database of your application.

- You shouldn't be allowed to create an instance of this class with the new keyword:- `new Database() 🔴`

- Also you should only be allowed to create only one instance of the class with the static method called:- `connect` and this method should return the instance

- The Database class will have a `static` property called `Instance` where you will store the instance of the Database class.

- The database will have 3 main properties:-

  1. users
  2. posts
  3. comments
  4. likes

- All 3 of them should be private.
- You should have 3 public getters to access the above properties:-

  1.  Users -> users
  2.  Posts -> posts
  3.  Comments -> comments
  4.  Likes -> likes

- So with these getters, you can get all the data but you can't change or update/delete the data

- The Database will have 3 methods for CRUD operations:-

  1.  create
  2.  upsert
  3.  delete

### Model:-

- The Model class should only be used for inheritance. You shouldn't be allowed to create an instance of this class.
- Model will have 2 properties which are:-

  1.  model: DatabaseModel(enum)
  2.  id: number

- This model class will take only one parameter which is model
- The id can be generated with `Math.random` method

### User:-

- This Class will inherit the `Model` class.
- This Class will have the below properties:-

  1. name: string;
  2. bio: string;
  3. email: string;
  4. follows: number[];

- This class takes 3 parameters in this exact order:-

  1. name: string,
  2. bio: string,
  3. email: string

- By default, the followers will be an empty array

#### Methods:-

- `follow(userID: number)`:- this method will add the userID to the follows array
- `get followers()`:- returns all the followers of the user, make sure it returns the number of followers not the number of people this user follows
- `get posts()`:- return all the posts of this user
- `createPost(image: string, content: string)`:- Creates a new post with the params data

### Post:-

- This class will have 3 properties:-

  1. image: string;
  2. content: string;
  3. userID: number;

- This class will take the above properties as parameter

#### Methods:-

1. `get likes()`:- Returns the number of likes of this post
2. `Like(userID: number)`:- Create a new Like for this post
3. `get comments()`:- Return all the comments of this post
4. `Comment(userID: number)`:- Create a new comment of this Post

### Comment:-

- This class will have the below properties:-

  1. content: string;
  2. userID: number;
  3. postID: number;

- This class will take the above properties as parameters in the exact same order

#### Methods:-

1. `get likes()`:- Returns the number of likes for this Comment
2. `Like(userID: number)`:- Create a new Like for this Comment

### Like:-

- The Like class will have the below properties:-

  1. type: "POST" | "COMMENT";
  2. userID: number;
  3. parentID: number;

- The Like class only takes these values as parameters in the exact order:-

  1. title: string,
  2. description: string,
  3. userID: number,

<h2 style="color: red;">When you create an instance of the User, Comment, Post, Like classes you have to update the Database with the appropriate properties</h2>

## Some Rules:-

1. Please don't change any of the class names
2. The parameters(if any) should follow the exact order both in the case of class constructor and methods
3. All the code should be written in Typescript
4. Try not to use `any` type
5. Add comments throughout your code to explain the logic behind each step

## Evaluation Criteria:-

- Correct implementation of all the classes and methods
- Proper handling of edge cases
- Following of Solid Principles
- Following Design Patterns

## General guidelines

- To check whether your implementation is passing the test cases or not use the commands in the getting started part
- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- So we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
  try to keep one submission at a time
