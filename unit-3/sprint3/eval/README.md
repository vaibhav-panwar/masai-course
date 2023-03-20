# JS-VITE-WITH-MOCK-SERVER

Please do NOT use VSCode live-server. It will not work. Use the npm commands suggested to you here.

## Installation
```
npm i
```

## Start only Backend server
```
npm run server
```

## Start only Frontend server
```
npm run start
```

## Start both BE & FE in a single command
```
npm run watch
```

# Important files
```
.
├── index.html
├── scripts
│   └── main.js
└── styles
    └── style.css
```

## Maximum Marks - 10

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

## Rubrics

```
✅ able to submit the app - 1 mark ( minimum score )
✅ Able to display todos - 1 marks
✅ Able to sort Ascending - 1 marks
✅ Able to sort descending - 1 marks
✅ Able to filter completed - 1 marks 
✅ Able to filter pending - 1 marks
✅ Able to patch completed todo item on click - 2 marks
✅ Able to dynamically filter by categories & reset the list - 2 marks
```
### You haven't been taught cypress to run the test cases locally, you can see the passed/ failed test cases and test errors on CP itself.

## Some Rules to follow:-

- Before writing a single line of code please read the problem statement very carefully.
- Don't change the already given ids or classes.
- If you don't follow these rules you might not get any marks even if you do everything correctly.

## Problem statements

### Note
1. In some of the screenshots below, you might see UI for login / register. Please ignore them, they are not a part of this assignment. Please just ignore them. You will be able to fetch `todos` without any authentication token for this problem. 

![picture 3](https://res.cloudinary.com/drxuo575c/image/upload/v1679246147/coding-problems/fa49d71a8c332f531e735b3ee01464525156c772014b3b3b2100b3e16fb7182a.jpg)  

2. Items in your database may be different from the screenshots. 


### Problem statement 1 [1 marks]

When the user clicks `#fetch-todos` button, they should see a list of all todo items.

![picture 2](https://res.cloudinary.com/drxuo575c/image/upload/v1676131480/coding-problems/c4c9f9660cd1372d8006f4a62f750102c7fd325311b841e3d095d0035c569beb.jpg)  

Markup:
![picture 3](https://res.cloudinary.com/drxuo575c/image/upload/v1676131562/coding-problems/c5e55be10c469d8f25f467805ebbf8570525fb46f17c9901cab1add536a23777.png)  

Field Mappings:

![picture 11](https://res.cloudinary.com/drxuo575c/image/upload/v1676132790/coding-problems/e221edab137406916facef6b84b934ef4711752e3f9ef838382272c0e83259c3.jpg)  

![picture 9](https://res.cloudinary.com/drxuo575c/image/upload/v1676132567/coding-problems/f5b0d6c08356bb0c5da66eb12f67591ea36700142b3f7ed6ba682ec76ded0dc9.jpg)  

### Problem statement 2 [1 marks]

After displaying the list of todos, our users should be able to sort todos list alphabetically by their `title` in ascending order. In another words, when the button `#sort-low-to-high` is clicked, a new fetch request is made in which you are requesting sorted data from the server. 

![picture 4](https://res.cloudinary.com/drxuo575c/image/upload/v1676131715/coding-problems/3115cbe9b150b6809ef554fa367f6c37eb4427e8ae58410d7a577b49d1c478da.jpg)  

### Screenshot from the server's documentation on fetching sorted data: 
![picture 5](https://res.cloudinary.com/drxuo575c/image/upload/v1676131812/coding-problems/d24e3db36069a1ebdf980369cbcd8d64b505edad5d791b959f33deece37d4469.jpg)  


### Problem statement 3 [1 marks]
Our users should be able to sort todos list alphabetically by their `title` in descending order. 

![picture 6](https://res.cloudinary.com/drxuo575c/image/upload/v1676131893/coding-problems/bddb31f9af7c95c7b884150ab9dc7039a559571326fda9ecc7786212520a1e98.jpg)  

### Problem statement 4 [1 marks]
Our users should be able se all the `completed` items. In another words, on click of `#filter-completed` button, you need to make a fetch request in which you will be fetching todo items in which `completed` is `true`.

![picture 7](https://res.cloudinary.com/drxuo575c/image/upload/v1676132099/coding-problems/b7896f2a6da642b1eba7576a90c22c855d70d4e1e60759252359feaae3b1002e.jpg)  

### Screenshot from the server's documentation on fetching filtered data: 

![picture 12](https://res.cloudinary.com/drxuo575c/image/upload/v1676133070/coding-problems/f0cb31b86eaa9061126070094e4fd213dd2d8c9224090b1d8b99225a352e07bb.jpg)  

### Problem statement 5 [1 marks]
Our users should be able to see all the pending items that are not completed.

![picture 8](https://res.cloudinary.com/drxuo575c/image/upload/v1676132179/coding-problems/8ba50598ad98b36769524254173ab6a909303a650733cdffb191249c6604c289.png)  


### Problem statement 6 [2 marks]

Whenever todo item's checkbox is clicked, a `patch` request should be made to the server and the value of `completed` for that item should be toggled. 

In another words, if an item is unchecked, it means that the value of `completed` for that item in the database is `false`. If the user is checking it, we need to change its value to `true` in the database.

### Problem statement 7 [2 marks]
When the user clicks `#fetch-todos` button, The following list of buttons must be created & rendered:

![picture 1](https://res.cloudinary.com/drxuo575c/image/upload/v1679242217/coding-problems/056f1fabf746f9f1fca44f52c1f591044163084adeea204fa4ca8c8922c51cc0.jpg)  

A list of buttons is dynamically created from the todo data & rendered into `#filter-by-categories-wrapper`. Whenever any of these buttons are clicked, the todo list must be filtered and should contain only the items of that category. You are not allowed to make a network request for this task. You are expected to use the data that is already available. 

![picture 2](https://res.cloudinary.com/drxuo575c/image/upload/v1679242335/coding-problems/f096ec46b567c5b7d34280b46ec4c53c0d0dde93727e6778a42a2c7a27bdbceb.jpg)  

Notice that an extra button called `Reset` is formed with a slightly different class name. When that button is clicked all the filterings are expected to be removed.


### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
- Use `${baseServerURL}/what-ever-route` for server url & not `localhost:9090/what-ever-route` in your solution. Failing to do so may cause all the tests to fail.
- If you try to use VSCodes live server, it wont work. Use the npm commands provided in this file only.
