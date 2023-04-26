const {Router} = require("express");
const { UserModel } = require("../model/usermodel");
const jwt = require("jsonwebtoken");

let userRouter = Router();

userRouter.post("/register",async(req,res)=>{
 try {
     let user = new UserModel(req.body)
     await user.save()
     res.status(200).send({"response":"user added successfully"});
 } catch (error) {
     res.status(400).send({"err":error.message});
 }
})

userRouter.post("/login",async(req,res)=>{
    try {
        let { username, password } = req.body;
        let data = await UserModel.findOne({ username, password });
        let token =  jwt.sign({ jai:"mata di" }, 'usertoken');
        if (data) {
            res.status(200).send({ username, token });
        }
        else {
            res.status(400).send({ "err": "wrong credentials" })
        }
    } catch (error) {
        res.status(400).send({"err":error.message});
    }
})

module.exports = {userRouter}