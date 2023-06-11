const express = require("express");
const redis = require('redis');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { connect, User } = require('./db');

const app = express();
app.use(express.json());

const client = redis.createClient(6379);
client.connect();


app.post("/register", async (req, res) => {
    let { email, password } = req.body;
    let d = await User.findOne({ email });
    if (d) {
        res.status(401).send({ msg: "user already exists choose different email" });
    }
    else {
        const salt = bcrypt.genSaltSync(4);
        const hash = bcrypt.hashSync(password, salt);
        req.body.password = hash;
        let newUser = new User(req.body);
        await newUser.save();
        res.status(200).send({ msg: "user registered successfully" });
    }

})

app.post("/login", async (req, res) => {
    let { email, password } = req.body;
    const a = await User.findOne({ email });
    if (a) {
        let b = bcrypt.compareSync(password, a.password);
        if (b) {
            let token = jwt.sign({ user: a.name, email }, 'pvtkey', { expiresIn: '60s' } );
            let refreshToken = jwt.sign({name:a.name,email:a.email,id:a._id},'refreshkey',{expiresIn:'1d'});
            client.setEx(a.name, 60, token);
            client.setEx(`${a.name}refresh`,60*60*24,refreshToken);
            res.status(200).send({ msg: "login successfull"})
        }
        else {
            res.status(400).send({ msg: "enter correct password" })
        }
    }
    else {
        res.status(400).send({ msg: "this email doesn't exist" });
    }
})

app.get("/refreshToken/:username",async(req,res)=>{
    let { username } = req.params;
    let token = await client.get(`${username}refresh`);
    if (token) {
        try {
            let decoded = jwt.verify(token, 'refreshkey');
            let ntoken = jwt.sign({ user: decoded.name, email:decoded.email }, 'pvtkey', { expiresIn: '60s' });
            client.setEx(decoded.name, 60, ntoken);
            res.send({msg:"token updated successfully"});
        } catch (err) {
            res.status(400).send(err)
        }
    }
    else {
        res.status(400).send({ msg: "not authorized" });
    }
})

app.get("/user/:username",async(req,res)=>{
    let {username} = req.params;
    let token = await client.get(username);
        if (token) {
            try {
                let decoded = jwt.verify(token, 'pvtkey');
                res.send(`your email is ${decoded.email}`);
            } catch (err) {
                res.status(400).send(err)
            }
        }
        else {
            res.status(400).send({ msg: "not authorized" });
        }

    
})

app.listen(8080, async () => {
    await connect
    console.log("connected at 8080")
})