const { Router } = require("express");
const { UserModel } = require("../model/user.model");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userRouter = Router();

userRouter.post("/register", async (req, res) => {
    let { name, age, email, password } = req.body;

    try {
        bcrypt.hash(password, 3, async (err, hash) => {
            let user = new UserModel({ name, age, password: hash, email });
            await user.save();
            res.status(200).send({ "msg": "user added successfully" });
        });

    } catch (error) {
        res.status(400).send({ "msg": error.message });
    }
})

userRouter.post("/login", async (req, res) => {
    try {
        let { email, password } = req.body;
        let data = await UserModel.findOne({ email });
        if (data) {
            bcrypt.compare(password, data.password, function (err, result) {
                if (result) {
                    const token = jwt.sign({ authorID: data._id, author: data.name }, 'pvtkey');
                    res.status(200).send({ "msg": "login successfull", "token": token ,"name":data.name });
                }
                else {
                    res.status(400).send({ "msg": "wrong password" });
                }
            });
        }
        else {
            res.status(400).send({ "msg": "wrong email" });
        }
    } catch (error) {
        res.status(400).send({ "msg": error.message });
    }
})

module.exports = { userRouter }