# JS-Mobile-Store

## Submission Instructions [Please note]

## Maximum Marks - 10

- The Submission should not contain spaces, for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Add mobile data is working properly in local storage - 1 mark
 ✅ Add mobile data is working properly in local storage-2 - 1 mark
 ✅ Show mobile data is working properly on DOM - 2 marks
 ✅ remove mobile data is working properly on local storage -2 marks
 ✅ remove mobile data is working properly on DOM - 1 mark
 ✅ High to Low sort mobiles by price  is working properly on DOM - 1 mark
 ✅ Low to High sort mobiles by price  is working properly on DOM - 1 mark
```

## Installation

- you can use any node version that works for you ( 14+ )
- please make sure you do not push package-lock.json
- Download and unzip the boilerplate
- Navigate to the correct path
- Run **npm install** to install the node modules
- Run **npm test** for the test cases.

## Folder structure

- index.html
- store.html
- src
  - `scripts`
    - index.js
    - store.js
  - `__tests__`
    - mobile-store.spec.js
- README.md
- package.json

## Description

### Note : Use only `textContent` to append the data to the DOM

Create a virtual mobile store system where a user can add products on one page, maintain the data in local storage and and see list of products on a different page. The user should also be able to delete any product, and sort on the basis of price from the list

- index.html

  - A navbar needs to be present at the top to navigate among index page and store page
  - Create a form and it should have an id `mobile_form`
  - it should have the following input fields and corresponding ids
    - name - `mobile_name`
    - brand - `mobile_brand`
    - price - `mobile_price`
    - image - `mobile_image`
  - input for button with type as `submit`
  - on submitting the from invoke the `getInputData` function (make sure you are using event.preventDefault() to prevent the default behaviour of the form)
  - Also, the input tags values should become null as soon as form is submitted. (reset the form)
  - Complete the `getInputData` function to get the data and then invoke `addData` function with name, brand, price, and image as arguments.
  - `addData` function should take the form data and store the data in local storage as array of items with key `mobile_data`
  - follow the below schema to store the data in local storage
    ```
    {
     name
     brand
     price
     image
    }
    ```
    ### This is how the Home page looks like
    ![image](https://user-images.githubusercontent.com/39851506/194689923-9da6f258-7cb6-4c43-8c00-42d5e8a9e11e.png)

- store.html

  - This page should show all the products present from the local storage. (complete the `append` function to achieve this)
  - The products should appended to the div with id = `mobile_list`
  - Each product itself should have a container div with class = `mobile`
  - The `append` function should accepts the data as parameter rather than retrieving it inside the function
  - The user should be able to remove products. (send index of the product added to identify which product needs to be deleted)
  - The `remove` function will accepts the index of the items that needs to be deleted as parameter
  - The user should be able to sort the data displayed on DOM by clicking on `High to Low` , and `Low to High` buttons respectively

    ### This is how the Store page looks like

    ![image](https://user-images.githubusercontent.com/39851506/194689932-a4317863-4688-4887-81fe-2c00e923a7ff.png)

  **Note:- Do not use any other names for the methods other than mentioned.**

####

## Boilerplate

- Do not change the given folder structure
- index.html
- store.html
- You can find JS code under src/scripts folder in a filename store.js & index.js
- you can find the testcase under `__tests__ ` folder

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you to not to just submit it last minute
- try to keep one submission at a time
