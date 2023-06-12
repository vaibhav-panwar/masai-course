const {Router} = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {User} = require('../models/user.model');

const userRouter = Router();

userRouter.post("/register",async(req,res)=>{
   let {username,email,password} = req.body
   let a = await User.findOne({email});
   if(a){
    return res.status(400).send({msg:"email already exists"})
   }
    const salt = bcrypt.genSaltSync(4);
    const hash = bcrypt.hashSync(password, salt);
    let b = new User({username,email,password:hash});
    await b.save();
    res.status(200).send({msg:"user registered successfully"});
})

userRouter.post("/login",async(req,res)=>{
    let {email,password} = req.body;
    let a = await User.findOne({email});
    if(a){
        if (bcrypt.compareSync(password, a.password)){
            let token = jwt.sign({ username: a.username, userID: a._id }, 'pvtkey');
            res.status(200).send({mag:"login Successfull",token})
        }
        else{
            res.status(400).send({msg:"enter correct password"});
        }
    }
    else{
        res.status(400).send({msg:"enter correct email"});
    }
})

// userRouter.post('/logout',(req,res)=>{
    
// })

module.exports = {userRouter};