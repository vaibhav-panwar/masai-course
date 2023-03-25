# JS FULLSTACK STOCK APP WITH MOCK SERVER

## Submission Instructions [Please note]

## Maximum Marks - 15

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ should be able to submit the form with product details 1 - 1 mark
 ✅ should be able to submit the form with product details 2 - 1 mark
 ✅ on clicking the store button redirect to Store page(/store.html) - 0.5 mark
 ✅ on clicking add home button  redirect to index page (/index.html)- 0.5 mark
 ✅check if data added to local storage successfully-1 marks
 ✅ check if data shown on store page correctly - 1 mark
 ✅ check remove functionality is working - 2 marks
 ✅ Low to High sort mobiles by price  is working properly on DOM -1 mark
 ✅ High to Low sort mobiles by price  is working properly on DOM - 1 mark
```

## Installation

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- please make sure you do not push package-lock.json
- Download and unzip the boilerplate
- Navigate to the correct path
- Run `npm i` to install all the dependencies

## Setup Guidelines

- ### Start only Backend server:- `npm run server`

- ### Start only Frontend server:- `npm run start`

- ### Start both BE & FE in a single command:- `npm run watch`

## Folder structure

- index.html
- signin.html
- signup.html
- newStock.html
- Scripts/index.js
- Scripts/signin.js
- Scripts/signup.js
- Scripts/newStock.js
- Styles(Create all your CSS Files here)
- Ignore all the other files except for the above mentioned files

  **_ You haven't been taught cypress to run the test cases locally, you can see the passed/ failed test cases and test errors on CP itself _**

## Some Rules to follow:-

- Before writing a single line of code please read the problem statement very carefully.
- Don't change the already given ids or classes.
- If you don't follow these rules you might not get any marks even if you do everything correctly.

## Problem Statements

- As mention in the `Folder Structure` these are the main files you have to work with:-
  1. index.html (Home Page)
  2. signin.html (Signup Page)
  3. signup.html (Signin Page)
  4. newStock.html (NewStock Page)

### Login/Signup Functionalities:-

- If the user is not logged in and he/she tries to visit Home Page or NewStock Page redirect the user to Signin Page.

- From the Signin Page user will be able to visit Signup Page.

- In Sign up page if the user fills the form and submits, make a post request on this end point:- `/resgister`. ![image](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-03-14/Screenshot%202023-03-14%20at%205.52.17%20PM_566049.png)

- In Sign in page if the user fills the form and submits, make a post request on this end point:- `/login`. ![image](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-03-14/Screenshot%202023-03-14%20at%205.51.58%20PM_615787.png)

- After successfull login you will get a JWT accessToken. Save that in localStorage with key `auth`.

### Getting Data and showing on DOM:-

- After signin when the user has the JWT Token in localStorage with key:- `auth`, the user should be allowed to visit all pages.

- In index.html page make a request on this endpoint:- `/stocks`. This is a protected route so make sure, you send the JWT token in header with key `authorization`.

- After a successful api request you will get the stocks data. For each data create a row in the table given in the template.

- All the data of the row will come from fetch request except the last column, which will have a value of `Sell`.

- Don't show all elements at one go, implement Pagination.

- By default only show 5 stocks.

- Let's say you get 53 data from the api request, then create 11 buttons from `1-11` in the div with id:- `pagination`.

- Here on the first 10 pages will show 5 stocks each and on the last page will show 3 remaining stocks.

- Implement this with only Javascript. Don't use JSON_SERVER built in pagination for that.

- Reffer to this image for better understanding:- ![image](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-03-14/Screenshot%202023-03-14%20at%205.51.03%20PM_143823.png)

### Filter & Delete Functionality:-

- In index.html there will be a select tag with id:- `filter`.
- Use that to filter the data by their `category`.
- If user selects `Mid Cap` only show stocks which has category as `Mid Cap`.
- Make sure pagination is working along with Filter.
- In the last cell of each row where the text is `Sell`, if the user clicks on that that row should be deleted.
- Implement it with JSON_SERVER built in deleting. If you make a delete request to this endpoing `/stocks/ID_OF_THE_STOCK_WANT_TO_DELETE`, that stock will be deleted.

### Adding New Stocks:-

- In `newStock.html` there is a form. When user fills all the details and submits the form create post request with on this end point:- `/stocks`.

- Reffer to this image for a better understanding:- ![image](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-03-14/Screenshot%202023-03-14%20at%205.51.27%20PM_731064.png)

## General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
- Use `${baseServerURL}/what-ever-route` for server url & not `localhost:9090/what-ever-route` in your solution. Failing to do so may cause all the tests to fail.
