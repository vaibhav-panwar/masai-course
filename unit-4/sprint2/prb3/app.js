// your code goes here
const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());

app.get("/multiply",(req,res)=>{
    let a = req.query.a;
    let b = req.query.b;
    if(a==undefined || b==undefined){
        res.status(400)
        res.send({ "error": "Both \"a\" and \"b\" are required parameters" });
    }
    else if ((Number(a).toString()) == "NaN"){
        res.status(400)
        res.send({ "error": "\"a\" is not a valid number" })
    }
    else if ((Number(b).toString()) == "NaN"){
        res.status(400)
        res.send({ "error": "\"b\" is not a valid number" })
    }
    else{
        let obj = { "product":  a*b };
        res.send(obj);
    }
})

module.exports = app