// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${import.meta.env.REACT_APP_JSON_SERVER_PORT
  }`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
const employeeURL = `${baseServerURL}/employees`;
const userRegisterURL = `${baseServerURL}/register`;

// Append div to main section
let mainSection = document.getElementById("data-list-wrapper");
window.addEventListener("load", () => {
  fetchData(employeeURL);
})

function fetchData(api) {
  fetch(api)
    .then((req) => {
      return req.json();
    })
    .then((data) => {
      createList(data, mainSection);
    })
    .catch((err) => {
      console.error(err);
    })
}
function createList(deta, wheretoappend) {
  wheretoappend.innerHTML = "";
  deta.forEach((el) => {
    let a = createCard(el.id, el.name, el.salary, el.image, el.department);
    wheretoappend.append(a);
  })
}
function createCard(id, name, salary, imgUrl, dept) {
  let card = document.createElement("div");
  card.setAttribute("class", "card");
  card.setAttribute("data-id", `${id}`);
  let ci = document.createElement("div");
  ci.setAttribute("class", "card-img");
  let img = document.createElement("img");
  img.setAttribute("src", `${baseServerURL}${imgUrl}`)
  img.setAttribute("alt", "employee");
  ci.append(img);
  let cb = document.createElement("div");
  cb.setAttribute("class", "card-body");
  let h3 = document.createElement("h3");
  h3.setAttribute("class", "card-title");
  h3.textContent = `${name}`;
  let div1 = document.createElement("div");
  div1.setAttribute("class", "card-salary");
  div1.textContent = `${salary}`;
  let cl = document.createElement("a");
  cl.setAttribute("href", "#");
  cl.setAttribute("data-id", `${id}`)
  cl.setAttribute("class", "card-link");
  cl.textContent = "Edit";
  cl.addEventListener("click", (e) => {
    updateEmpIdInput.value = `${id}`;
    updateEmpNameInput.value = `${name}`;
    updateEmpSalaryInput.value = `${salary}`;
    updateEmpImageInput.value = `${imgUrl}`;
    updateEmpDeptInput.value = `${dept}`;
    updateScoreEmpId.value = `${id}`;
    updateScoreEmpSalary.value = `${salary}`;
  })
  cb.append(h3, div1, cl);
  card.append(ci, cb);
  return card;
}
function addEmployee(api, name, img, dept, salary) {
  let newObj = {
    name: name.value,
    image: img.value,
    department: dept.value,
    salary: salary.value
  }
  fetch(api, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(newObj)
  })
    .then((req) => {
      return req.json();
    })
    .then((data) => {
      fetchData(employeeURL);
    })
    .catch((err) => {
      console.error(err);
    })
}
//  add employees
let empNameInput = document.getElementById("employee-name");
let empImgInput = document.getElementById("employee-image");
let empDeptInput = document.getElementById("employee-dept");
let empSalaryInput = document.getElementById("employee-salary");
let empCreateBtn = document.getElementById("add-employee");
empCreateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addEmployee(employeeURL, empNameInput, empImgInput, empDeptInput, empSalaryInput);
})

//Sorting 
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");
sortAtoZBtn.addEventListener("click",()=>{
  fetchData(`${employeeURL}?_sort=salary&_order=asc`)
})
sortZtoABtn.addEventListener("click",()=>{
  fetchData(`${employeeURL}?_sort=salary&_order=desc`)
})

//Filter 
let filterLessThan1LBtn = document.getElementById("filter-less-than-1L");
let filterMoreThanEqualLBtn = document.getElementById(
  "filter-more-than-equal-1L"
);
filterLessThan1LBtn.addEventListener("click",()=>{
  fetch(employeeURL)
    .then((req) => {
      return req.json();
    })
    .then((data) => {
      data = data.filter((el)=>{
        if(el.salary<100000){
          return true
        }
        else{
          return false
        }
      })
      createList(data, mainSection);
    })
    .catch((err) => {
      console.error(err);
    })
})
filterMoreThanEqualLBtn.addEventListener("click",()=>{
  fetch(employeeURL)
    .then((req) => {
      return req.json();
    })
    .then((data) => {
      data = data.filter((el) => {
        if (el.salary < 100000) {
          return false
        }
        else {
          return true
        }
      })
      createList(data, mainSection);
    })
    .catch((err) => {
      console.error(err);
    })
})

// Update employees
let updateEmpIdInput = document.getElementById("update-employee-id");
let updateEmpNameInput = document.getElementById("update-employee-name");
let updateEmpImageInput = document.getElementById("update-employee-image");
let updateEmpDeptInput = document.getElementById("update-employee-dept");
let updateEmpSalaryInput = document.getElementById("update-employee-salary");
let updateEmpUpdateBtn = document.getElementById("update-employee");
updateEmpUpdateBtn.addEventListener("click",(e)=>{
  e.preventDefault();
  let newObj = {
    id:updateEmpIdInput.value,
    name: updateEmpNameInput.value,
    image: updateEmpImageInput.value,
    department: updateEmpDeptInput.value,
    salary: updateEmpSalaryInput.value
  }
  fetch(`${employeeURL}/${updateEmpIdInput.value}`, {
    method: 'PUT',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(newObj)
  })
    .then((req) => {
      return req.json();
    })
    .then((data) => {
      console.log(data);
      fetchData(employeeURL);
    })
    .catch((err) => {
      console.error(err);
    })
})




//Update Salary
let updateScoreEmpId = document.getElementById("update-score-employee-id");
let updateScoreEmpSalary = document.getElementById(
  "update-score-employee-salary"
);
let updateScoreEmpSalaryButton = document.getElementById(
  "update-score-employee"
);
updateScoreEmpSalaryButton.addEventListener("click",(e)=>{
  e.preventDefault();
  let obj = {
    salary : updateScoreEmpSalary.value
  }
  fetch(`${employeeURL}/${updateScoreEmpId.value}`, {
    method: 'PATCH',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(obj)
  })
    .then((req) => {
      return req.json();
    })
    .then((data) => {
      console.log(data);
      fetchData(employeeURL);
    })
    .catch((err) => {
      console.error(err);
    })
})
//Employee Data
let employeesData = [];





