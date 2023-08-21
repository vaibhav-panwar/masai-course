let toggle = true
let ltog = document.getElementById("ltog");
let stog = document.getElementById("stog");
let ldiv = document.querySelector(".login");
let sdiv = document.querySelector(".signup");
toggleBtn();

ltog.addEventListener("click", (e) => {
    e.preventDefault();
    toggle = true;
    toggleBtn();
})
stog.addEventListener("click", (e) => {
    e.preventDefault();
    toggle = false;
    toggleBtn();
})

function toggleBtn() {
    if (toggle) {
        sdiv.style.display = "none";
        ldiv.style.display = "flex";
    }
    else {
        sdiv.style.display = "flex";
        ldiv.style.display = "none";
    }
}

let elogin = document.getElementById("login");
elogin.addEventListener("submit", (e) => {
    e.preventDefault();
    let obj = {
        email: document.getElementById("lemail").value,
        password: document.getElementById("lpass").value
    }
    fetch("https://docapirs3.onrender.com/user/login", {
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
                localStorage.setItem("doctok", data.token);
                alert(data.message);
                window.location.href = "./onboardDoctor.html"
            }
        })
        .catch((err) => {
            console.log(err);
        })
})

let esignup = document.getElementById("signup");
esignup.addEventListener("submit", (e) => {
    e.preventDefault();
    if (document.getElementById("spass").value == document.getElementById("scpass").value) {
        let obj = {
            email: document.getElementById("semail").value,
            password: document.getElementById("spass").value
        }
        fetch("https://docapirs3.onrender.com/user/signup", {
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
    }
    else{
        alert("password is not matching")
    }

})

