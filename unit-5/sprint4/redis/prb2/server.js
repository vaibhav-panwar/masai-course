const express = require('express');
const redis = require('redis');
const path = require('path')

const client = redis.createClient(6379);

client.connect();

client.on('connect', () => {
    console.log("connected to redis");
})

const app = express();
app.use(express.json())

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"))
})

app.get("/message", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/message.html"))
})

app.post("/storemsg",async(req,res)=>{
    try {
        console.log(req.body);
        let { secretkey, message } = req.body;
        await client.set(secretkey, message);
        res.status(200).send({msg:"message stored successfully"});
    } catch (error) {
        res.status(400).send(error);
    }
})

app.post("/getmsg",async(req,res)=>{
    try {
        let { secretkey } = req.body;
        let message = await client.get(secretkey);
        res.status(200).send({msg:message});
    } catch (error) {
        res.status(400).send(error);
    }
})

app.listen(8080,()=>{
    console.log("connected at 8080");
})