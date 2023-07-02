# TS PHONEBOOK FUNCTION:-

## Submission Instructions [Please note]

## Maximum Marks - 16

- The Submission should not contain spaces, for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ If Everything works fine with correct params - 1 mark
 ✅ Prefix Optioal checking - 1 mark
 ✅ Email Optioal checking - 1 marks
 ✅ Middlename Optioal checking - 1 marks.
 ✅ Phone is array of numbers checking - 1 marks.
 ✅Phones Wrong type checking - 1 marks.
 ✅Prefix Wrong type checking - 1 marks.
 ✅Wrong Email Type - 1 marks.
 ✅Wrong FirstName Type - 1 marks.
 ✅Wrong LastName Type - 1 marks.
 ✅Wrong MiddleName Type - 1 marks.
 ✅Works fine with correct address type - 1 marks.
 ✅Wrong Address Type-1 - 1 marks.
 ✅Wrong Address Type-2 - 1 marks.
 ✅Wrong Address Type-3 - 1 marks.

```

## Installation

- you can use any node version that works for you ( 14+ )
- please make sure you do not push package-lock.json
- Download and unzip the boilerplate
- Navigate to the correct path
- Run **npm install** to install the node modules
- Run **npm test** for the test cases.

## Boilerplate:-

- Do not change the given folder structure
- inside src folder you will code.ts file that is where you need to write the code.
- In src will be a file index.ts. Please make sure this file should be always empty
- you can find the testcase under `__tests__ ` folder.

## Description

- Create 2 interfaces `AddressTypes` and `PersonDetailsType`.

- `AddressTypes` should have the following keys and all the keys should be required:-

  1.  houseNumber(number)
  2.  street(string)
  3.  city(string)
  4.  state(string)
  5.  postalCode(number)
  6.  country(string)

- `PersonDetailsType` should have the following keys and all the keys should be required:-

  1.  prefix(string) -> Optional
  2.  phones(array of number)
  3.  addresses (array of `AddressTypes`)
  4.  email(string) -> Optional
  5.  firstName(string)
  6.  middleName(string) -> Optional
  7.  lastName(string)

- In your code there is a function with name `PhoneBook`, and an Array with name `Data`.

- `PhoneBook` will take `PersonDetailsType` as a parameter and push it an `Data`.

## General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you to not to just submit it last minute
- try to keep one submission at a time
