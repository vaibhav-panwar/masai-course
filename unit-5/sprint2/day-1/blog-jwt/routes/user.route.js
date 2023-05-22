const { Router } = require("express");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../schemas/user.schema");
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
            res.cookie('jwtToken', token, { httpOnly: true, secure: true, sameSite: 'None', expires: new Date(Date.now() + 3600000) });
            res.cookie('refreshToken', refreshToken, { httpOnly: true, secure: true, sameSite: 'None', expires: new Date(Date.now() + 3600000) });
            res.send('Logged in successfully!');
        }
    }
    else {
        res.status(400).json({ message: "user doesn't exist" });
    }
})

userRouter.post('/token', (req, res) => {
    const refreshToken = req.cookies.refreshtoken
    if (refreshToken == null) return res.sendStatus(401)
    jwt.verify(refreshToken, process.env.refreshToken, (err, user) => {
        if (err) return res.sendStatus(403)
        const accessToken = jwt.sign({
            name: user.name, email: user.email, id: user._id
        }, process.env.accessToken, { expiresIn: '1h' });
        res.cookie('jwtToken', token, { httpOnly: true, secure: true, sameSite: 'None', expires: new Date(Date.now() + 3600000) });
        res.json({ accessToken: accessToken })
    })
})

module.exports = {userRouter};