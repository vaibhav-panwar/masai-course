//  import required modules from nodejs and build the server
const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    let data = fs.readFileSync("./db.json", "utf-8");
    data = JSON.parse(data);
    res.status(200);
    res.send(JSON.stringify(data.todos))
})

app.post("/", (req, res) => {
    let data = fs.readFileSync("./db.json", "utf-8")
    data = JSON.parse(data);
    data.todos.push(req.body);
    fs.writeFileSync("./db.json", JSON.stringify(data));
    res.status(200);
    res.send(JSON.stringify(data.todos))
})

app.put("/:id",(req,res)=>{
    let a = req.params;
    let data = fs.readFileSync("./db.json", "utf-8")
    data = JSON.parse(data);
    let flag= false;
    data.todos.forEach((el)=>{
       if(el.id==a.id){
        el.task = req.body.task;
        el.status = req.body.status
        flag = true;
       }
    })
    fs.writeFileSync("./db.json",JSON.stringify(data));
    if(flag){
        res.status(200);
        res.send(JSON.stringify(data.todos))
    }
    else{
        res.status(400);
        res.send("Invalid argument");
    }
})

app.delete("/:id",(req,res)=>{
    let a= req.params;
    let data = fs.readFileSync("./db.json","utf-8");
    data = JSON.parse(data);
    let flag = false
    data.todos = data.todos.filter((el)=>{
        if(el.id==a.id){
            flag = true
            return false;
        }
        return true
    })
    fs.writeFileSync("./db.json",JSON.stringify(data));
    if(flag){
        res.status(200);
        res.send(JSON.stringify(data.todos))
    }
    else{
        res.status(400);
        res.send("Invalid argument")
    }
})



// export the server
module.exports = app;
