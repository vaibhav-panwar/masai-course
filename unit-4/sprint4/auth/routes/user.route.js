const { Router } = require("express");
const { UserModel } = require("../db");
const jwt = require("jsonwebtoken")

const userRouter = Router();

userRouter.post("/register", async (req, res) => {
    try {
        let user = new UserModel(req.body)
        await user.save()
        res.send({ "msg": "user registered successfully" });
    } catch (error) {
        res.send({ "msg": error.message })
    }
})

userRouter.post("/login", async (req, res) => {
    let { name, city } = req.body
    try {
        let user = UserModel.findOne({ name, city });
        if (user) {
            let token = jwt.sign({data:{userId:user._id}}, 'pvtkey', { expiresIn: '1h' });
            res.send({ "msg": "login successfull", "token": token })
        }
        else {
            res.send({ "msg": "wrong credentials" })
        }
    } catch (error) {
        res.send({ "msg": error.message })
    }
})

module.exports = {userRouter}