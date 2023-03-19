// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// use base url from the above to make api call for different end points

// append data your coffee card to mainSection below
let mainSection = document.getElementById("data-list-wrapper");
fetchRender(`${baseServerURL}/coffee`);
// `${baseServerURL}/coffee`  ---> url to fetch
 function fetchRender(api){
   fetch(api)
   .then((res)=>{return res.json()})
   .then((data)=>{console.log(data)
    cardlist(data,mainSection);
  })
   .catch((err)=>{
    console.error(err);
   })
 }
 function cardlist(deta,whereto){
  let cardlist = document.createElement("div");
  cardlist.classList.add("card-list");
  cardlist.innerHTML = "";
  whereto.innerHTML = "";
  deta.forEach((el)=>{
    let a = createCard(el.id, el.title, el.description,el.ingredients,el.image,el.price);
    cardlist.append(a);
  })
  whereto.append(cardlist);
 }
 function createCard(id,title,decription,ingredients,imgUrl,price){
  let a = `
 
          <div class="card__img">
            <img src="${imgUrl}" alt="coffee">
          </div>
          <div class="card__body">
            <h2 class="card__item card__title">${title}</h2>
            <div class="card__item card__description">${decription}</div>
            <div class="card__item card__ingredients">
              <ul>
                <li>
                  
                  ${ingredients[0]}
                </li>
              </ul>
            </div>
            <div class="card__item card__price">${price}</div>
          </div>
        </div>
  `
  let card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("data-id",`${id}`);
  card.innerHTML = a;
  return card
 }