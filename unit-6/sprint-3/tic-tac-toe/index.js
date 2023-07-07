let inpArr = document.getElementsByClassName("grid-cell");

document.querySelector(".restart").addEventListener("click",()=>{
    reset();
})

let xCheck = true;
let oCheck = false;


if (xCheck) {
    let a = document.createElement("span");
    a.setAttribute("class", "current-player");
    a.innerText = "Its X turn";
    document.querySelector(".status").append(a);
}


for (let i = 0; i < inpArr.length; i++) {
    inpArr[i].addEventListener('click', () => {
        if (inpArr[i].classList.value != "grid-cell disabled x" && inpArr[i].classList.value != "grid-cell disabled o" && inpArr[i].classList.value != "grid-cell disabled") {
            if (xCheck) {
                inpArr[i].textContent = "X";
                inpArr[i].classList.add("disabled");
                inpArr[i].classList.add("x");
                xCheck = false
                oCheck = true
                document.querySelector(".current-player").textContent = "Its O turn"
            }
            else {
                inpArr[i].textContent = "O";
                inpArr[i].classList.add("disabled");
                inpArr[i].classList.add("o");
                oCheck = false
                xCheck = true
                document.querySelector(".current-player").textContent = "Its X turn"
            }
            let a = check();
            if(a){
                let b= document.createElement("span");
                b.classList.add("game-over-text");
                b.textContent= a;
                document.querySelector(".game-over").append(b);
                for(let i=0;i<inpArr.length;i++){
                    if (inpArr[i].classList.value != "grid-cell disabled x" && inpArr[i].classList.value != "grid-cell disabled o"){
                        inpArr[i].classList.add("disabled");
                    }
                }
            }
        }
    })
}

function check() {
    let arr = [
        [inpArr[0].textContent, inpArr[1].textContent, inpArr[2].textContent],
        [inpArr[3].textContent, inpArr[4].textContent, inpArr[5].textContent],
        [inpArr[6].textContent, inpArr[7].textContent, inpArr[8].textContent]
    ]
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        let xcount = 0; let ocount = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i][j] === "X") {
                xcount++
                count++
            }
            if (arr[i][j] === "O") {
                ocount++;
                count++
            }

        }
        if (xcount === 3) {
            return("X wins!");
        }
        if (ocount === 3) {
            return("O wins!")
        }
    }
    for (let i = 0; i < arr.length; i++) {
        let xcount = 0; let ocount = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j][i] === "X") {
                xcount++
            }
            if (arr[j][i] === "O") {
                ocount++;
            }

        }
        if (xcount === 3) {
            return("X wins!");
        }
        if (ocount === 3) {
            return("O wins!")
        }
    }
    if(arr[0][0]=="X" && arr[1][1] == "X" && arr[2][2]=="X"){
        return("X wins!");
    }
    else if (arr[0][0] == "O" && arr[1][1] == "O" && arr[2][2] == "O") {
        return("O wins!");
    }
    else if(arr[2][0]=="X" && arr[1][1] == "X" && arr[0][2]=="X"){
        return("X wins!");
    }
    else if (arr[2][0] == "O" && arr[1][1] == "O" && arr[0][2] == "O") {
        return("O wins!");
    }
    else {
       if(count==9){
        return("Draw!");
       }
    }
}

function reset(){
    for(let i=0;i<inpArr.length;i++){
        inpArr[i].textContent = "";
        inpArr[i].classList.remove("disabled");
        if (inpArr[i].classList.value != "grid-cell disabled x"){
            inpArr[i].classList.remove("x");
        }
        else if (inpArr[i].classList.value != "grid-cell disabled o"){
            inpArr[i].classList.remove("o");
        }
    }
    document.querySelector(".game-over-text").textContent = "";
    xCheck =true;
    oCheck = false;
    document.querySelector(".current-player").textContent = "Its X turn";
}