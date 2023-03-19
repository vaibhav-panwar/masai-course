# JS-FETCH-MOCK-SERVER

Please do NOT use VSCode live-server. It will not work. Use the npm commands suggested to you here.

## Installation 
```
npm install --engine-strict
```

## Start only the Backend server
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
│ └── main.js
└── styles
    └── style.css
```

## Maximum Marks - 10

- Use node version(LTS) should be `v16.16.0` 
- Don't change/override package.json
- The Submission should not contain spaces, for example /rct-101 folder/eval will not work.
- Do not push node_modules and package_lock.json to GitHub

## Rubrics

```
✅ able to submit the app - 1 mark (minimum score )
✅ Should have navbar with h1 tag- 1 mark
✅ Able to make get requests and fetch coffee data- 3 mark
✅ Should have coffee card with h2 title - 3 mark
✅ Should have the coffee card with li tag for ingredients - 2 mark
```
### You have not been taught cypress to run the test cases locally, you can see the passed/ failed test cases and test errors on CP itself.

## Some Rules to follow: -

- Before writing a single line of code please read the problem statement very carefully.
- Don't change the already given ids or classes.
- If you don't follow these rules, you might not get any marks even if you do everything correctly.

# Problem statements

### 1. Initial state [1]
Initially, the frontend would look something like this: 

![image](https://user-images.githubusercontent.com/101581634/222189075-2fba3056-176b-47e4-9b16-49931af7d908.png)

Navbar with h1 tag with text ```Coffee House```

![image2 o](https://user-images.githubusercontent.com/101581634/222189034-2b8f175c-043e-457d-994c-c51c0b3f4946.png)

### 2. Able to fetch & display coffee data [3]

Display data of coffee on page load in the `#data-list-wrapper`
Mapping with Response Data:

![image3 o](https://user-images.githubusercontent.com/101581634/222189063-288e292c-b46f-4462-b64a-dfc06834448d.png)

```
There should be a div with the class `card-list`. 
In this div you have to append coffee card i.e., div with class `card`.
If you do not follow these rules, you might not get any marks even if you do everything correctly.
```

### 3. Should have the coffee card with h2 title [3]

The markup of the cards & the list should exactly match the following screenshot:
![image4 o](https://user-images.githubusercontent.com/101581634/222189069-0b7cab9b-fa00-4736-8356-79921a74cfc8.png)

### 4. Should have the coffee card with li tag for ingredients [2]

### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
- Use `${baseServerURL}/what-ever-route` for server url & not `localhost:9090/what-ever-route` in your solution. Failing to do so may cause all the tests to fail.
- If you try to use the VSCodes live server, it won’t work. Use the npm commands provided in this file only.



