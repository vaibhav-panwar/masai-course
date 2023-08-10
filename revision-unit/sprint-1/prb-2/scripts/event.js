let bigcont = document.getElementById("bigcont");
let filter = {};
let query = new URLSearchParams(filter);
let categories = document.getElementById("category");
let sorting = document.querySelectorAll(".sort");
categories.addEventListener("change", () => {
    if (categories.value) {
        filter.category = categories.value;
        query = new URLSearchParams(filter);
        fetchdata(query);
    }
})
sorting.forEach((el) => {
    el.addEventListener("change", () => {
        if (el.checked) {
            filter._sort = "price";
            filter._order = el.value;
            query = new URLSearchParams(filter);
            fetchdata(query);
        }
    })
})
fetchdata(query)
function fetchdata(query) {
    fetch(`https://mock-api-273k.onrender.com/events?${query}`)
        .then((res) => res.json())
        .then((data) => {
            appendCard(data);
        })
        .catch((err) => {
            console.log(err);
        })
}
function appendCard(data) {
    bigcont.innerHTML = "";
    data.forEach((el) => {
        let a = createCard(el.poster, el.name, el.description, el.date, el.location, el.category, el.price);
        bigcont.append(a);
    })
}
function createCard(poster, name, description, date, location, category, price) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = ` <div class="img"><img src="${poster}" alt="img"></div>
        <h2 class="name">${name}</h2>
        <p class="description">${description}</p>
        <h4 class="date">Date: ${date}</h4>
        <h4 class="location">Location: ${location}</h4>
        <h4 class="category">Category: ${category}</h4>
        <h4 class="price">Price: ${price}</h4>`
    return card
}