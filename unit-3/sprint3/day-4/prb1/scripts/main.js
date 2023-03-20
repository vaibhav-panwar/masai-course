

// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${import.meta.env.REACT_APP_JSON_SERVER_PORT
  }`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

const recipeIngredientURL = `${baseServerURL}/recipeIngredients`;
const employeeURL = `${baseServerURL}/employees`;
const userRegisterURL = `${baseServerURL}/user/register`;
const userLoginURL = `${baseServerURL}/user/login`;
let paginationWrapper = document.getElementById("pagination-wrapper");

let loginUserUsername = document.getElementById("login-user-username");
let loginUserPassword = document.getElementById("login-user-passowrd");

let loginUserButton = document.getElementById("login-user");
loginUserButton.addEventListener("click", (e) => {
  let newObj = {
    "username": loginUserUsername.value,
    "password": loginUserPassword.value
  }
  fetch(userLoginURL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(newObj)
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      notificationWrapper.innerHTML = `<h5 class="notification info">
    hey ${data.user.username}, welcome back!
</h5>`
      userAuthToken = data.accessToken;
      userId = data.user.id;
      localStorage.setItem("localAccessToken", userAuthToken);
      localStorage.setItem("userId", userId);
    })
    .catch((err) => console.error(err));
})
let getTodoButton = document.getElementById("fetch-todos");
getTodoButton.addEventListener("click", (e) => {
  e.preventDefault()
  fetch(urlAllTodosOfUser, {
    headers: {
      'Authorization': `Bearer ${userAuthToken}`
    }
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      makelist(data,mainSection);
    })
    .catch((err) => console.error(err))
})
function createEl (id,name,done){
  let cover = document.createElement("label");
  let inp = document.createElement("input");
  inp.setAttribute("data-id",id);
  inp.setAttribute("type","checkbox");
  inp.classList.add("todo-item-checkbox");
  if(done){
    inp.setAttribute("checked","");
  }
  inp.addEventListener('change',()=>{
    fetch(`${urlTodosBase}${userId}`,{
      method:'PATCH',
      headers:{
        'Authorization': `Bearer ${userAuthToken}`,
        'Content-type' : 'application/json'
      },
      body :JSON.stringify({
        completed : !done
      })
    })
    .then((res)=>res.json())
    .then((data)=>console.log(data))
    .catch((err)=>console.error(err))
  })
  cover.append(inp);
  cover.appendChild(document.createTextNode(name));
  
  return cover
}
function makelist(deta,whereto){
  whereto.innerHTML = "";
  deta.forEach((el)=>{
  let a = createEl(el.id,el.title,el.completed);
  whereto.append(a); 
  })
}

let mainSection = document.getElementById("data-list-wrapper");
let notificationWrapper = document.getElementById("notifications-wrapper");

let userAuthToken = localStorage.getItem("localAccessToken") || null;
let userId = +localStorage.getItem("userId") || null;
const urlAllTodosOfUser = `${baseServerURL}/todos?userId=${userId}`;
const urlTodosBase = `${baseServerURL}/todos/`;