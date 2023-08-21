window.onload = oncheck();
function oncheck() {
    let a = localStorage.getItem("doctok");
    if (!a) {
        alert("please login first")
        window.location.href = "./index.html"
    }
}

const elform = document.querySelector("form");

elform.addEventListener("submit",(e)=>{
    e.preventDefault();
    let obj = {
        name:document.getElementById("name").value,
        image:document.getElementById("image").value,
        specialization:document.getElementById("special").value,
        experience:document.getElementById("exp").value,
        location:document.getElementById("location").value,
        date:document.getElementById("date").value,
        slots:document.getElementById("slot").value,
        fee:document.getElementById("fee").value
    }
    console.log(obj);
    fetch("https://docapirs3.onrender.com/doctor/appointments", {
        method: "POST",
        headers: {
            "Content-type": "Application/json"
        },
        body: JSON.stringify(obj)
    })
        .then((res) => res.json())
        .then((data) => {
            if (data.isError) {
                alert(data.error);
            }
            else {
                alert(data.message);
            }
        })
        .catch((err) => {
            console.log(err);
        })
})