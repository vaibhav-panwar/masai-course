// import required modules
const express  = require("express");
const fs  =require("fs");
const morgan = require("morgan");
const path = require("path")

const app = express();
app.use(express.json());
app.use(morgan(':method :status :res[content-length] :response-time ms :date[web] :http-version :url', {
    stream: fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
}))

app.get("/",(req,res)=>{
    res.status(200);
    res.send({ message: "welcome to server"})
})
app.get("/get-users",(req,res)=>{
    res.status(200).send({
        "message": "here is the list of all users"
    })
})
app.post("/add-user",(req,res)=>{
    res.status(201).send({
        "message": "user added successfully"
    })
})
app.put("/user/:id",(req,res)=>{
    let a = req.params;
    res.status(201).send({
        "message": `user ${a.id} updated successfylly`
})
})
app.delete("/user/:id", (req, res) => {
    let a = req.params;
    res.status(200).send({
        "message": `user ${a.id} deleted successfylly`
    })
})
// export the server
// eg.
// 
module.exports = app;

