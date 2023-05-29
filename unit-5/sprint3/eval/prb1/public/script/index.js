const socket = io("http://localhost:8080",{transports:["websocket"]});

const qs = window.location.search
let urlParams = new URLSearchParams(qs);
let auctionItem = urlParams.get('auctionItem');
document.getElementById("item").innerText = auctionItem;

document.querySelector('form').addEventListener("submit",(e)=>{
    e.preventDefault();
    if (!validateBid(document.getElementById("bid").value)){
        alert("enter correct bid");
        return
    }
    if (!validateMobileNumber(document.getElementById("mob").value)){
        alert("enter correct mobile number");
        return
    }
    if(!validateName(document.getElementById("name").value)){
        alert("enter correct name");
        return
    }
    let data = {
        item:auctionItem,
        name:document.getElementById("name").value,
        mobile_number: document.getElementById("mob").value,
        bid: document.getElementById("bid").value
    }
    socket.emit("new-bid",data);
    let a = document.getElementById("hb").innerText
    if(a<=data.bid || a==""){
        document.getElementById("hb").innerText = data.bid;
        document.getElementById("hn").innerText = data.name;
    }
})

socket.on("highest-bid",(data)=>{
    console.log(data);
    document.getElementById("hb").innerText = data.bid;
    document.getElementById("hn").innerText = data.name;
})


function validateMobileNumber(number){
    const regex = /^[0-9]{10}$/;
    if(regex.test(number)){
        return true
    }
    return false
}
function validateBid(number){
    const regex = /^[0-9]/;
    if (regex.test(number)) {
        return true
    }
    return false
}
function validateName(name){
    const regex = /^[A-Z]/;
    if (regex.test(name)) {
        return true
    }
    return false
}
