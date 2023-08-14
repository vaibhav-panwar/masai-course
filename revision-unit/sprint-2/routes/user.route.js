const { Router } = require("express");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User } = require("../models/user.model");

const userRouter = Router();

userRouter.post('/register', async (req,res) => {
    let { name, email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            const hash =  bcrypt.hashSync(password, 5);
            let newUser = new User({ name, email, password: hash });
            await newUser.save();
            res.status(201).send({
                isError: false,
                message: "new user created successfully"
            })
        }
        else {
            res.status(400).send({
                isError: true,
                error: "user already exist"
            })
        }
    }
    catch (error) {
        res.status(400).send({
            isError: true,
            error: error.message
        })
    }
})

userRouter.post("/login", async (req, res) => {
    let { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) {
            if (bcrypt.compareSync(password, user.password)){
                let token =  jwt.sign({userID:user._id},process.env.utoken);
                res.status(201).send({
                    isError:false,
                    message:"login successfull",
                    token
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

module.exports = {userRouter};