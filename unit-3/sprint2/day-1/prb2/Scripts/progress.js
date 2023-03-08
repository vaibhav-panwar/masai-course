let arr = JSON.parse(localStorage.getItem("priority-list"));
if (arr == null) {
    arr = [];
}
let dArr = JSON.parse(localStorage.getItem("done-list"));
if(dArr==null){
    dArr = [];
}
let eltbody = document.querySelector("tbody");
display(arr)
function display(data) {
    eltbody.innerHTML = "";
    data.forEach((el, i) => {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerText = el.name;
        let td2 = document.createElement("td");
        td2.innerText = el.desc;
        let td3 = document.createElement("td");
        td3.innerText = el.start;
        let td4 = document.createElement("td");
        td4.innerText = el.end;
        let td5 = document.createElement("td");
        td5.innerText = el.priority;
        let td6 = document.createElement("td");
        td6.innerText = "Add";
        td6.addEventListener("click", () => {
            arr = arr.filter((e, ind) => {
                if (ind == i) {
                    let obj = {
                        name: e.name,
                        desc: e.desc,
                        start: e.start,
                        end: e.end,
                        priority: e.priority
                    }
                    dArr.push(obj);
                    localStorage.setItem("done-list", JSON.stringify(dArr));
                    return false;
                }
                else {
                    return true
                }
            })
            localStorage.setItem("priority-list", JSON.stringify(arr));
            display(arr);
        })
        tr.append(td1, td2, td3, td4, td5, td6);
        eltbody.append(tr)
    })
}