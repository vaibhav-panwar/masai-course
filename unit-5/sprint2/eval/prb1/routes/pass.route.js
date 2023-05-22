const {Router} = require("express");
const jwt = require('jsonwebtoken');
const { PassModel }  =require("../schema/password.schema");
require('dotenv').config();

const passRouter = Router();

passRouter.post("/encryptmypwd",async(req,res)=>{
    let newpass = new PassModel(req.body);
    await newpass.save();
    res.status(200).send({message:"password created successfully"});
})

passRouter.get("/getmypwd",async(req,res)=>{
    let {id} = req.query;
    const pass = await PassModel.findById(id);
    var decoded = jwt.verify(pass.password, process.env.token);
    res.send({password:decoded.password});
    
})

module.exports = {passRouter}