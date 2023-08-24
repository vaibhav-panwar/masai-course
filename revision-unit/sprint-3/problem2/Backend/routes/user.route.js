const { Router } = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/user.model");
require("dotenv").config();

const userRoute = Router();

userRoute.post("/register", async (req, res) => {
    try {
        let { username,avatar, email, password } = req.body;
        let check = await UserModel.findOne({ email });
        if (!check) {
            const hash = bcrypt.hashSync(password, Number(process.env.saltRounds));
            let user = new UserModel({ username, avatar, email, password: hash });
            await user.save();
            res.status(200).send({
                isError: false,
                message: "user registered successfully"
            })
        }
        else {
            res.status(400).send({
                isError: true,
                error: "user already exist"
            })
        }
    } catch (error) {
        res.status(400).send({
            isError: true,
            error: error.message
        })
    }
})

userRoute.post("/login", async (req, res) => {
    let { email, password } = req.body
    try {
        let user = await UserModel.findOne({ email });
        if (user) {
            if (bcrypt.compareSync(password, user.password)){
                let token = jwt.sign({userID:user._id,username:user.username}, process.env.tokenKey);
                res.status(200).send({
                    isError:false,
                    message:"login successfull",
                    token,
                    user:user.username
                })
            }
            else{
                res.status(400).send({
                    isError: true,
                    error: "wrong password"
                }) 
            }
        }
        else {
            res.status(400).send({
                isError: true,
                error: "user doesn't exist"
            })
        }
    } catch (error) {
        res.status(400).send({
            isError: true,
            error: error.message
        })
    }
})

module.exports = {userRoute};
