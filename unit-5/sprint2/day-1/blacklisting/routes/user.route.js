const { Router } = require("express");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../schemas/user.schema");
const {rToken} = require("../schemas/refreshtoken.schema")
const bcrypt = require("bcrypt");
const cookieParser = require('cookie-parser');
require('dotenv').config();

let userRouter = Router();
userRouter.use(cookieParser());

userRouter.post("/register", async (req, res) => {
    let { email } = req.body;
    let alreadyUser = await UserModel.findOne({ email });
    if (alreadyUser) {
        return res.status(400).json({ message: "User already exists" });
    }
    let user = new UserModel(req.body);
    await user.save();
    res.status(200).json({ message: "user registered successfully" })
})
userRouter.post("/login", async (req, res) => {
    let { email, password } = req.body;
    let user = await UserModel.findOne({ email });
    if (user) {
        let pass = bcrypt.compareSync(password, user.password);
        if (pass) {
            let token = jwt.sign({
                name:user.name,email:user.email,id:user._id
            }, process.env.accessToken, { expiresIn: '1h' });
            let refreshToken = jwt.sign({
                name: user.name, email: user.email, id: user._id
            }, process.env.refreshToken, { expiresIn: '7d' });
            let rt = new rToken({ refreshtoken:refreshToken})
            await rt.save()
            res.send({accessToken:token,refreshToken});
        }
    }
    else {
        res.status(400).json({ message: "user doesn't exist" });
    }
})

userRouter.post('/token', async(req, res) => {
    const refreshToken = req.body.refreshToken
    let rt = await rToken.findOne({ refreshtoken:refreshToken})
    if (rt == null) return res.sendStatus(401)
    jwt.verify(rt, process.env.refreshToken, (err, user) => {
        if (err) return res.sendStatus(403)
        const accessToken = jwt.sign({
            name: user.name, email: user.email, id: user._id
        }, process.env.accessToken, { expiresIn: '1h' });
        res.json({ accessToken: accessToken })
    })
})

userRouter.delete("/logout",async(req,res)=>{
    try {
        let refreshtoken = req.body.refreshToken;
        await rToken.findOneAndDelete({ refreshtoken });
        res.send("logout successfull");
    } catch (error) {
        res.send(error)
    }
})

module.exports = {userRouter};