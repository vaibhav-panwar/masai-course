const {Router} = require('express');
const { Employee } = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const employeeRouter = Router();

employeeRouter.post("/register",async(req,res)=>{
    const {email,password,name,role} = req.body;
    let a = await Employee.findOne({email});
    
    if(a){
        return res.status(400).send({msg:"email already exists"})
    }
    const salt = bcrypt.genSaltSync(3);
    const hash = bcrypt.hashSync(password, salt);
    let e = new Employee({name,email,role,password:hash});
    await e.save();
    res.send({msg:"employee registered sucessfully"})
})

employeeRouter.post("/login",async(req,res)=>{
    const {email,password} = req.body;
    let e = await Employee.findOne({email});
    if(e){
        if (bcrypt.compareSync(password,e.password)){
            let token = jwt.sign({ employeeID: e._id, employeeName:e.name,role:e.role }, 'pvtkey');
            res.send({msg:"login successfull",token});
        }
        else{
            res.status(400).send({msg:"wrong password"})
        }
    }
    else{
        res.status(400).send({msg:"this email doesn't exists"});
    }
})

module.exports = {employeeRouter};