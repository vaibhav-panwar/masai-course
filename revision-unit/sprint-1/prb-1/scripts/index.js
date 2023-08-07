let bigcont = document.getElementById("bigcont");
let ptn = document.getElementById("pagination");
let count = 1;
let search = document.getElementById("playersearch");
let ps = document.getElementById("ps")
ps.addEventListener("click",(e)=>{
    e.preventDefault();
    ptn.innerHTML = ""
    fetch(`https://www.balldontlie.io/api/v1/players?search=${search.value}`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            appendCard(data.data);
            
        })
        .catch((err) => {
            console.log(err)
        })
})
fetchdata(count);
function fetchdata(pageno){
    fetch(`https://www.balldontlie.io/api/v1/players?page=${pageno}&per_page=10`)
    .then((res)=>{
       return res.json()
    })
    .then((data)=>{
        appendCard(data.data);
        createBtn(data.meta);
    })
    .catch((err)=>{
        console.log(err)
    })
}

function appendCard(data){
    bigcont.innerHTML = "";
    data.forEach((el)=>{
        let a = createCard(el.first_name, el.last_name, el.position, el.team);
        bigcont.append(a);
    })
}

function createCard(firstname,lastname,position,team){
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <div class="playerImg">
            <img  src="https://placekitten.com/400/400" alt="image">
        </div>
    <p class="name">Name: ${firstname} ${lastname}</p>
        <p class="position">Position: ${position}</p>`
    let teamBtn = document.createElement("button");
    teamBtn.innerText = "Team Details"
    teamBtn.classList.add("teamBtn");
    teamBtn.addEventListener("click",(e)=>{
        e.preventDefault();
        teamBtn.style.display = "none";
        let teamDetails = document.createElement("div");
        teamDetails.innerHTML = `<h3>Team Details</h3>
        <p class="teamName">Team:${team.full_name}</p>
        <p class="abbr">Abbr:${team.abbreviation}</p>
        <p class="confrence">Confrence:${team.conference}</p>
        <p class="division">Division:${team.division}</p>
        <p class="city">City:${team.city}</p>`
        card.append(teamDetails);
    })
    card.append(teamBtn);
    return card;
}

function createBtn(metadata){
    ptn.innerHTML="";
    if (metadata.current_page > 1 && count <= metadata.total_pages){
        let prebtn = document.createElement("button")
        prebtn.innerText = metadata.current_page-1;
        prebtn.addEventListener("click",()=>{
            count = metadata.current_page - 1;
            fetchdata(count);
        })
        let curBtn = document.createElement("button")
        curBtn.innerText = metadata.current_page ;
        curBtn.addEventListener("click", () => {
            count = metadata.current_page ;
            fetchdata(count);
        })
        let nextbtn = document.createElement("button");
        nextbtn.innerText = metadata.current_page+1;
        nextbtn.addEventListener("click", () => {
            count = metadata.current_page+1;
            fetchdata(count);
        })
        let anothernex = document.createElement("button");
        anothernex.innerText = metadata.next_page + 1;
        anothernex.addEventListener("click",(e)=>{
            e.preventDefault();
            count = metadata.next_page+1;
            fetchdata(count);
        })
        ptn.append(prebtn,curBtn,nextbtn,anothernex)
    }
    else{
        let curBtn = document.createElement("button")
        curBtn.innerText = metadata.current_page;
        curBtn.addEventListener("click", () => {
            count = metadata.current_page;
            fetchdata(count);
        })
        let nextbtn = document.createElement("button");
        nextbtn.innerText = metadata.current_page + 1;
        nextbtn.addEventListener("click", () => {
            count = metadata.current_page + 1;
            fetchdata(count);
        })
        let anothernex = document.createElement("button");
        anothernex.innerText = metadata.next_page + 1;
        anothernex.addEventListener("click", (e) => {
            e.preventDefault();
            count = metadata.next_page + 1;
            fetchdata(count);
        })
        ptn.append(curBtn,nextbtn,anothernex)
    }
}