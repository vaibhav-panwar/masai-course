let bigcont = document.getElementById("bigcont");
let elform = document.querySelector("form");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
elform.addEventListener("submit",(e)=>{
    e.preventDefault();
    let sdate = document.getElementById("startingdate").value;
    let edate = document.getElementById("endingdate").value;
    fetchdata(sdate,edate,1);
})

function fetchdata(startdate,enddate,pageno){
    fetch(`https://www.balldontlie.io/api/v1/games?start_date=${startdate}&end_date=${enddate}&per_page=10&page=${pageno}`)
    .then((res)=>res.json())
    .then((data)=>{
        if(data.data.length>0){
            appendCard(data.data);
            prev.addEventListener("click",(e)=>{
                e.preventDefault();
                if (data.meta.current_page>1){
                    fetchdata(startdate,enddate,data.meta.current_page-1);
                }
            })
            next.addEventListener("click",(e)=>{
                e.preventDefault();
                if (data.meta.next_page != null) {
                    fetchdata(startdate, enddate, data.meta.current_page + 1);
                }
            })
        }
        else{
            let h1 = document.createElement("h1");
            h1.textContent = "no data available";
            bigcont.innerHTML = "";
            bigcont.append(h1);
        }
        
    })
    .catch((err)=>{
        console.log(err);
    })
}

function appendCard(data){
    bigcont.innerHTML = "";
    data.forEach((el)=>{
        let a = createCard(el.date, el.season, el.status, el.home_team.full_name, el.home_team_score, el.home_team.division, el.visitor_team.full_name, el.visitor_team_score,el.visitor_team.division);
        bigcont.append(a);
    })
}

function createCard(date, season, status,hname,hscore,hdivision,aname,ascore,adivision){
    let card = document.createElement("div");
    card.classList.add("card");
    let winningteam = document.createElement("p");
    winningteam.classList.add("wt");
    if(hscore>ascore){
        winningteam.innerHTML = "Home team wins";
    }
    else if(ascore>hscore){
        winningteam.innerHTML = "Away team wins";
    }
    else{
        winningteam.innerHTML = "Tie";
    }
    card.append(winningteam);
    let stats = document.createElement("div");
    stats.classList.add("stat");
    stats.innerHTML = `<div class="homestat">
            <p class="name">${hname}</p>
            <p class="date">Date:${date}</p>
            <p class="season">Season:${season}</p>
            <p class="status">Status:${status}</p>
            <p class="score">Home team score:${hscore}</p>
            <p class="division">Division:${hdivision}</p>
           </div>
           <div class="awaystat">
            <p class="name">${aname}</p>
            <p class="date">Date:${date}</p>
            <p class="season">Season:${season}</p>
            <p class="status">Status:${status}</p>
            <p class="score">Away team score:${ascore}</p>
            <p class="division">Division:${adivision}</p>
           </div>`

           card.append(stats);
           return card;
}