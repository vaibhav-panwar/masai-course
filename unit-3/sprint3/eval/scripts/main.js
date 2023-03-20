// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

let urlTodosBase = `${baseServerURL}/todos/`;
let mainSection = document.getElementById("data-list-wrapper");
let getTodoButton = document.getElementById("fetch-todos");
let sortLowToHigh = document.getElementById("sort-low-to-high");
let sortHighToLow = document.getElementById("sort-high-to-low");
let filterCompleted = document.getElementById("filter-completed");
let filterPending = document.getElementById("filter-pending");
let filterByCategoryWrapper = document.getElementById("filter-by-categories-wrapper");
let todoItems = [];
getTodoButton.addEventListener("click",(e)=>{
  e.preventDefault();
  fetchRender(urlTodosBase);
  let work = createBtn("Work");
  let chores = createBtn("Chores");
  let family = createBtn("Family");
  let learning = createBtn("Learning");
  let reset = document.createElement("button");
  reset.textContent = "reset";
  reset.classList.add("filter-by-category-reset");
  reset.addEventListener("click",(e)=>{
    e.preventDefault();
    fetchRender(urlTodosBase);
  })
  filterByCategoryWrapper.innerHTML = "";
  filterByCategoryWrapper.append(work,chores,family,learning,reset);
  
})
sortLowToHigh.addEventListener("click",(e)=>{
  e.preventDefault();
  fetchRender(`${baseServerURL}/todos?_sort=title&_order=asc`)
})
sortHighToLow.addEventListener("click",(e)=>{
  e.preventDefault();
  fetchRender(`${baseServerURL}/todos?_sort=title&_order=desc`)
})
filterCompleted.addEventListener("click",(e)=>{
  e.preventDefault();
  fetchRender(`${baseServerURL}/todos?completed=true`);
})
filterPending.addEventListener("click",(e)=>{
  e.preventDefault();
  fetchRender(`${baseServerURL}/todos?completed=false`);
})
function fetchRender(api){
  fetch(api)
  .then((res)=>res.json())
  .then((data)=>{
    console.log(data);
    createList(data,mainSection);
  })
  .catch((err)=>console.error(err));
}
function createList(deta,whereto){
  let todolist = document.createElement("div");
  todolist.classList.add("todo-list-wrapper");
  todolist.setAttribute("id", "todo-list-wrapper");
  todolist.innerHTML = "";
  whereto.innerHTML = "";
  deta.forEach((el)=>{
    let a = createEl(el.id, el.title, el.completed);
    todolist.append(a);
  })
  whereto.append(todolist);
}
function createEl(id,title,done){
  let lab = document.createElement("label");
  lab.classList.add("todo-item-label");
  let inp = document.createElement("input");
  inp.setAttribute("data-id",id);
  inp.classList.add("todo-item-checkbox");
  inp.setAttribute("type","checkbox");
  if (done) {
    inp.setAttribute("checked", "");
  }
  lab.append(inp);
  lab.appendChild(document.createTextNode(title));
  
  return lab;
}
function createBtn(text){
  let btn = document.createElement("button");
  btn.classList.add("filter-by-category");
  btn.setAttribute("data-id",text);
  btn.textContent = text;
  btn.addEventListener("click",(e)=>{
    e.preventDefault();
    fetchRender(`${baseServerURL}/todos?category=${text}`)
  })
  return btn;
}
