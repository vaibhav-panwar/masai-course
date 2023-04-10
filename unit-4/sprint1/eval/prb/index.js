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
        res.end = "<h1>Welcome to the Home Page</h1>"
    }
    else if (req.url == "/gencount") {
        fs.readFile('./data.json', "utf-8", (err, data) => {
            if (err) {
                res.end = err
            }
            else {
                let m = 0;
                let f = 0;
                data.forEach((el) => {
                    if (el.gender == "male") {
                        m++;
                    }
                    else if (el.gender == "female") {
                        f++;
                    }
                })
                fs.appendFile("./logs.txt", `The initial Male count is ${m} and Female count is ${f} at ${new Date()}`)
            }
        })
    }
    else if (req.url == "/addnew") {
        fs.appendFile('./data.json', `{
          "id":" ${crypto.randomBytes(4).toString("binary")}",
          "first_name" : "${os.userInfo().username}",
          "last_name" : "${os.userInfo().username}",
          "email" : "abc@gmail.com",
          "gender" : "female"
        }`, (err) => {
            if (err) {
                res.end = err;
            }
            else {
                res.end = "The data has been updated, go and check the data file"
            }
        })
    }
    else if (req.url == "/people") {
        try {
            let a = fs.readFileSync('./data.json', "utf-8");
            a.forEach((el) => {
                fs.appendFileSync('./people.txt', `\n First Name: ${el.first_name} Last Name: ${el.last_name} Gender: ${el.gender} Email: ${el.email}`);
            })
            res.end = "The file has been created and data has been entered"
        } catch (error) {
            res.end = error
        }
    }
    else if (req.url == "/address") {
        dns.lookup("masaischool.com", (err, address, family) => {
            if (err) {
                res.end = err;
            }
            else {
                fs.appendFile('./logs.txt', `URL: masaischool.com IP Address: ${address} and Family is IPv${family}`, (err) => {
                    if (err) {
                        res.end = err;
                    }
                    else {
                        res.end = "Logs File has been updated";
                    }
                })
            }
        })
    }
    else if (req.url == "./yoda") {
        let a = fs.readFileSync("./people.txt", "utf-8");
        res.end = yodasay.say({
            text: a
        })
    }

})




  module.exports = server;
