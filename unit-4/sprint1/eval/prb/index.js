const { log } = require('console');
const http = require("http");
const fs = require('fs');
const crypto = require('node:crypto');
const os = require('node:os');
const dns = require('node:dns');
var yodasay = require('yodasay');




let server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.setHeader('content-type', 'text/html');
        res.end("<h1>Welcome to the Home Page</h1>")
    }
    else if (req.url == "/gencount") {
        fs.readFile('./data.json', "utf-8", (err, data) => {
            if (err) {
                res.end(err)
            }
            else {
                let m = 0;
                let f = 0;
                data = JSON.parse(data);
                for (let i = 0; i < data.length; i++) {
                    if (data[i].gender == "Male") {
                        m++;
                    }
                    else if (data[i].gender == "Female") {
                        f++;
                    }
                }
                fs.appendFile("./logs.txt", `The initial Male count is ${m} and Female count is ${f} at ${new Date()}\n`, (err) => {
                    if (err) {
                        res.end(err);
                    }
                    else {
                        res.end("The count has been updated in the logs file");
                    }
                })
            }
        })
    }
    else if (req.url == "/addnew") {
        let a = fs.readFileSync("./data.json", "utf-8");
        let data = {
            "id": crypto.randomBytes(4).toString("binary"),
            "first_name": os.userInfo().username,
            "last_name": os.userInfo().username,
            "email": "abc@gmail.com",
            "gender": "female"
        }
        a = JSON.parse(a);
        a.push(data);
        fs.writeFile("./data.json", JSON.stringify(a), (err) => {
            if (err) {
                res.end(err);
            }
            else {
                res.end("The data has been updated, go and check the data file");
            }
        })
    }
    else if (req.url == "/people") {

        let a = fs.readFileSync('./data.json', "utf-8");
        a = JSON.parse(a);
        a.forEach((el) => {
            fs.appendFileSync('./people.txt', `First Name: ${el.first_name} Last Name: ${el.last_name} Gender: ${el.gender} Email: ${el.email}\n`);
        })
        res.setHeader('content-type', 'text/html');
        res.end("The file has been created and data has been entered")

    }
    else if (req.url == "/address") {
        dns.lookup("masaischool.com", (err, address, family) => {
            if (err) {
                res.end(err);
            }
            else {
                fs.appendFile('./logs.txt', `URL: masaischool.com IP Address: ${address} and Family is IPv${family}`, (err) => {
                    if (err) {
                        res.end(err);
                    }
                    else {
                        res.end("Logs File has been updated");
                    }
                })
            }
        })
    }
    else if (req.url == "/yoda") {
        let a = fs.readFileSync("./people.txt", "utf-8");
        res.end(yodasay.say({
            text: JSON.stringify(a)
        }))
    }

})



// server.listen(5500,()=>{
//     console.log("working");
// })


//   module.exports = server;
