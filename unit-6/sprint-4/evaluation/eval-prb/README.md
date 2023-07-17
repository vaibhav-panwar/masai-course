## React Movie Rating

## Submission Instructions [Please note]

## Maximum Marks - 10

- The Submission should not contain spaces, for example,/RCT-101 folder/eval will not work
- Do not push node_modules and package-lock.json to GitHub

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Checking the API request on the component mount - 1 mark
 ✅ Able to show the API data on the dom - 2 mark
 ✅ Check the Genere part of the Cards - 1 mark
 ✅ Checking if clicking on the Rate button redirects to the appropriate page - 1 mark
 ✅ Check whether rating a movie is working or not - 2 mark
 ✅ Check if Pagination Buttons are Present or not - 1 mark
 ✅ Check if changing the page updates the UI - 1 mark
```

## Installation

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- please make sure you do not push package-lock.json

- Download and unzip the boilerplate file and then copy the "**contents**" of the unzipped file in the Masai Folder.
- Navigate to the Masai Folder, in VS Code.
- Run the following commands inside,
- `npm install --engine-strict`
- `npm start`
- `npm run server` -> to start the JSON-server
- **_Note_**:

1. Make sure that the JSON server is up and running at port 8080
2. Create a .env file. Include `REACT_APP_JSON_SERVER_PORT=8080` in it
3. You need to restart the react server once the env file is updated.
4. Use `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}` as the JSON-server URL

### Testing Objectives

- Ability to use React and JSON-SERVER to build a full-stack CRUD application.
- Able to use the react concepts to build an application

### Pages:-

- Home
- Rate

### JSON Data:

- db.json file is included in the boilerplate zip file, with the initial cars data.
  The data will look like this:-

```
{
      "id": 1,
      "name": "Gentlemen of Fortune (Dzhentlmeny udachi)",
      "genere": [
        "Comedy",
        "Crime",
        "Drama",
        "Mystery"
      ],
      "actor": "Horten",
      "language": "Yiddish",
      "noOfReviews": 5,
      "averageReview": 3.8,
      "pics": "https://assets-in.bmscdn.com/discovery-catalog/events/et00342025-xmwurtcqbv-landscape.jpg"
    }
```

### Features to build:

- You have to build a React movie rating app, with multiple pages and Pagination

#### Home Page(Home.jsx):-

- The route for the home page should be the / route.
- On this page, you have to make an API request to the JSON server and get all the movies from the JSON server
- For each movie, you have to show the `Card` component(src/Components/Card.jsx)
- Make sure you show all the details of that particular movie using the Card component.
- For each genre of that particular movie you have to show the Genere component(src/Components/Genere.jsx)
- For a better understanding of the UI you can have a look at this image:- ![image](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-07-14/Screenshot%202023-07-14%20at%2010.54.03%20AM_104261.png)
- You also have to implement a pagination functionality
- You have to show total, of 10 products per page, please make sure you don't use JSON-SERVER'S build-in pagination feature, fetch the full data in the frontend and then in the frontend filter the data based on pages
- You have to use the Pagination component(src/Components/Pagination.jsx) to implement the pagination feature
  ![Image](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-07-14/Screenshot%202023-07-14%20at%2010.54.30%20AM_173691.png)

- Each Card component should have a button, clicking on that the user should be redirected to the Rating page

#### Rate Page(Rate.jsx):-

- The Route for this page is `/rate/1` where 1 is the id of the movie
- On this page, we will have a select tag with `data-test-id="rate-select"` and a button with `data-test-id="rate-confirm"`
- using them the user should be able to rate any movie
- Each time someone rates a movie store the number of users who rated the movie and the average rating in json-server
- Each time a new user rates the movie the data should be updated
- Use a `PUT` request to update the data
  ![image](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-07-14/Screenshot%202023-07-14%20at%2010.57.36%20AM_805852.png)

### General Instructions:

- Do not remove `data-test-id=’xxx’` from anywhere inside the code. They are the test inputs, and removing them may lead to low scores.
- Do not change the current folder structure, and names of components provided.
- Only use the data present in the db.json file, and do not modify the data in the JSON file.

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
