## React Sort Users

Display users from the db provided and sort the results by firtst_name

#### Tags

Reacts , state and props , onclick event handling

## Submission Instructions [Please note]

### Maximum Marks - 10

- The Submission should not contain spaces, for example `/rct-101 folder/eval` will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ should have basic structure - 1 mark
 ✅ should display all users read from the given JSON data - 2 marks
 ✅ should render UserDetails component with Props - 2 marks
 ✅ should sort  users by first_name in ascending order - 2 marks
 ✅ should sort users by first_name  in descnding order- 2 marks
```

## Tags

react, useState, conditional rendering.

## Installation

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json

```
npm install --engine-strict

// run locally
npm run start

// test locally
npm run test
```

### Users Display

### Description

![](https://i.imgur.com/9ArrHB7.png)

- Create a component UserDetails
- It should accept
  - user profile image (avatar)
  - first_name
  - last_name
  - address ( use the format on JSON )
  - karma (or points)
  - followers (number of followers)
  - posts (number of posts)
  - isFollowing (boolean, )
    - if true then a button to show `Unfollow`
    - if false then a button to show `Follow`
- use the given JSON file to create the list of UserDetails
- you may use module css to achieve the output (minimum inline styles)
- Add a sort option
- The sort button should sort users based on ascending order or descending order of first_name

## components

- App.jsx
  - manage the state of users here
  - map thorogh the users data and pass user props to the UserDetails Component
- UserDetails.jsx
  - This component should accept props object and display the user Details
- userDetails.module.css
  - keep the css here
  
    ![](https://i.imgur.com/3Hwjq85.png)


Metrics:

- styling
- using lists
- presentation

#### users.json

[db.json](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2022-06-22/db_720032.json)

#### **Note**

- Make sure you use only the given components and dont create new Components, files, folders of your own. Changing component name, file/folder structures might result in giving you zero marks
- Do Not Remove `data-testid="xxxx"` from anywhere, these are used by testing tools to test your code, removal of this will lead to low score.
- Also make sure to cross check all the spellings and Case of Texts.

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you to not to just submit it last minute
- try to keep one submission at a time
