const {Router} = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {UserModel} = require("../model/user.model");
const { unique } = require("../middleware/unique.middleware");

const userRouter = Router();
userRouter.use(unique);
userRouter.post("/register",async(req,res)=>{
    let {name,age,city,email,password} = req.body;
    try {
        bcrypt.hash(password, 4, async function (err, hash) {
            let user = new UserModel({name,age,city,email,password:hash});
            await user.save();
            res.status(200).send({"msg":"user created successfully"}); 
        });
    } catch (error) {
        res.status(400).send({"msg":error.message});
    }
})

userRouter.post("/login",async(req,res)=>{
    let {email,password} = req.body;
    let user = await UserModel.findOne({email});
    if(user){
        bcrypt.compare(password, user.password , function (err, result) {
            if(result){
                let token = jwt.sign({user:user.name , userID:user._id}, 'pvtkey');
                res.status(200).send({"msg":"login successfull","token":token});
            }
            else{
                res.status(400).send({"msg":"wrong password"})
            }
        })
    }
    else{
        res.status(400).send({"msg":"enter correct email"});
    }
})

module.exports = {userRouter};