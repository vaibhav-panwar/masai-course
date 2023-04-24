const express = require("express");
const fs = require("fs");

function log(req,res,next){
    if(req.method=="POST"){
    fs.appendFileSync("../log.txt","")
    };
    next();
}

module.exports = {log}