let userName = document.getElementById("username");
let pass = document.getElementById("password");
let elForm = document.querySelector("form");
elForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    fetch(`https://reqres.in/api/login`,{
        method:'POST',
        headers:{
            'Content-type': 'application/json'
        },
        body:JSON.stringify({
            "email": userName.value,
            "password": pass.value
        })
    })
    .then((req)=>req.json())
    .then((data)=>{
      
      console.log(data);
      if(data.token){
        //   alert("Login Successful")
          let token = data.token;
          localStorage.setItem("access-token", token);
          window.location.href = `./employee.html`;
          window.location.replace(`./employee.html`);
      }
      else{
         alert("login not successful")
      }
    })
    .catch((err)=>{
        console.error(err);
    })
})