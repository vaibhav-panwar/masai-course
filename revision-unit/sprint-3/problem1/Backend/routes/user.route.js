const { Router } = require("express");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { UserModel } = require("../models/user.model");

let userRoute = Router();

userRoute.post("/signup", async (req, res) => {
    try {
        let { email, password } = req.body;
        let check = await UserModel.findOne({ email });
        if (!check) {
            const hash = bcrypt.hashSync(password, Number(process.env.saltRound));
            let user = new UserModel({ email, password: hash });
            await user.save();
            res.status(200).send({
                isError: false,
                message: "user registered successfully",
                user
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
    try {
        let { email, password } = req.body;
        let check = await UserModel.findOne({ email });
        if (check) {
            if (bcrypt.compareSync(password, check.password)) {
                let token = jwt.sign({ foo: 'bar' }, process.env.tokenKey);
                res.status(200).send({
                    isError: false,
                    message: "login successfull",
                    token
                })
            }
            else {
                res.status(400).send({
                    isError: true,
                    error: "invalid credentials"
                })
            }
        }
        else {
            res.status(400).send({
                isError: true,
                error: "invalid credentials"
            })
        }
    } catch (error) {
        res.status(400).send({
            isError: true,
            error: error.message
        })
    }
})

module.exports = {userRoute}