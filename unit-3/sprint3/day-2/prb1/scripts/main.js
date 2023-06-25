// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${import.meta.env.REACT_APP_JSON_SERVER_PORT
  }`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------
const url = `${baseServerURL}/users`;
let dataWrap = document.getElementById("data-list-wrapper");
let btnWrap = document.getElementById("pagination-wrapper");



fetchRender(url, 1);
function fetchRender(api, pageNo) {
  fetch(`${api}?_limit=10&_page=${pageNo}`)
    .then((res) => {
      let totalPost = res.headers.get('X-Total-Count');
      console.log(totalPost);
      let totalBtn = Math.ceil(totalPost / 10);
      btnWrap.innerHTML = "";
      for (let i = 1; i <= totalBtn; i++) {
        let a = createBtn(i);
        btnWrap.append(a);
      }
      return res.json()
    })
    .then((data) => {
      cardList(data, dataWrap);
    })
    .catch((err) => {
      console.error(err);
    })
}
function cardList(deta, whereto) {
  let cardList = document.createElement("div");
  cardList.classList.add("card-list");
  cardList.innerHTML = "";
  whereto.innerHTML = "";
  deta.forEach(el => {
    let a = card(el.id, `${el.firstname} ${el.lastname}`, el.email, el.avatar);
    cardList.append(a);
  });
  whereto.append(cardList);
}
function card(id, name, email, imgUrl) {
  let card = document.createElement("div");
  card.classList.add("card")
  let a = `
  <div class="card__img">
              <img src="${imgUrl}" alt="Ad Minister image">
            </div>
            <div class="card__body">
              <h3 class="card__item card__title">${name}</h3>
              <div class="card__item card__description">${email}</div>
            </div>
          </div>
  `
  card.innerHTML = a;
  card.setAttribute("data-id", `${id}`);
  return card;
}
function createBtn(id) {
  let btn = document.createElement("button");
  btn.setAttribute("data-page-number", id);
  btn.classList.add("pagination-button");
  btn.textContent = id
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    fetchRender(url,e.target.dataset.pageNumber)
  })
  return btn
}
