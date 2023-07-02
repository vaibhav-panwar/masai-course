# TS Interface to Class:-

## Submission Instructions [Please note]

## Maximum Marks - 7

- The Submission should not contain spaces, for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ If Everything works fine with correct params - 1 mark
 ✅ Print FullName works fine - 1 mark
 ✅ Wrong Params Type-1 - 1 marks
 ✅ Wrong Params Type-2 - 1 marks.
 ✅ Wrong Interface Type-1 - 1 marks.
 ✅ Wrong Interface Type-2 - 1 marks.

```

## Installation

- you can use any node version that works for you ( 14+ )
- please make sure you do not push package-lock.json
- Download and unzip the boilerplate
- Navigate to the correct path
- Run **npm install** to install the node modules
- Run **npm test** for the test cases.

## Description

- All your code will be inside `interface.ts` file and `code.ts` file.

- In the `interface.ts` file there is a interface named `IPerson`.

- `IPerson` should have the following keys:-

```
  first_name(type string)
  last_name(type string)
  email(type string)
  phone(type number)
  PrintFullName(Function with return type string);
```

- In the `Code.ts` file there is a class with name `Person`.
- This class `Person` should be implemented with the interface `IPerson`.
- The Function `PrintFullName` should return the FullName of the Person.
- Please make sure you don't use any type here

## Boilerplate:-

- Do not change the given folder structure
- inside src folder you will code.ts file that is where you need to write the code.
- In src will be a file index.ts. Please make sure this file should be always empty
- you can find the testcase under `__tests__ ` folder

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you to not to just submit it last minute
- try to keep one submission at a time
