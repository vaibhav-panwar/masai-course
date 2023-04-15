//  import required modules from nodejs and build the server
const express = require("express");
const fs = require("fs");
// const validatorfunction = require("./middlewares/validator");

const app = express();
app.use(express.json());
app.use((req, res, next) => {
  let obj = req.body;
  let arr = [];
  for (let key in obj) {
    arr.push(key);
  }
  if (arr.length != 6) {
    return res.status(400).send(`invalid request body.`);
  }
  if (typeof (obj.ID) == "number") {
    fs.appendFileSync("./res.txt", "ID is a number\n");
  }
  else {
    fs.appendFileSync("./res.txt", "bad request.some data is incorrect.");
    return res.status(400).send("bad request.some data is incorrect.");
  }
  if (typeof (obj.Name) == "string") {
    fs.appendFileSync("./res.txt", "Name is a string\n");
  }
  else {
    fs.appendFileSync("./res.txt", "bad request.some data is incorrect.");
    return res.status(400).send("bad request.some data is incorrect.");
  }
  if (typeof (obj.Description) == "string") {
    fs.appendFileSync("./res.txt", "Description is a string\n");
  }
  else {
    fs.appendFileSync("./res.txt", "bad request.some data is incorrect.");
    return res.status(400).send("bad request.some data is incorrect.");
  }
  if (typeof (obj.Rating) == "number") {
    fs.appendFileSync("./res.txt", "Rating is a number\n");
  }
  else {
    fs.appendFileSync("./res.txt", "bad request.some data is incorrect.");
    return res.status(400).send("bad request.some data is incorrect.");
  }
  if (typeof (obj.Genre) == "string") {
    fs.appendFileSync("./res.txt", "Genre is a string\n")
  }
  else {
    fs.appendFileSync("./res.txt", "bad request.some data is incorrect.");
    return res.status(400).send("bad request.some data is incorrect.");
  }
  if(!Array.isArray(obj.Cast) || obj.Cast.some((cast)=>{typeof(cast)!="string"})){
    fs.appendFileSync("./res.txt", "bad request.some data is incorrect.");
    return res.status(400).send("bad request.some data is incorrect.");
  }
  else{
    fs.appendFileSync("./res.txt","Cast is a array of string")
  }
  next()
})

app.post("/",(req,res)=>{
  res.status(200).send("data received")
})
// export the server
module.exports = app;
// app.listen(8080)