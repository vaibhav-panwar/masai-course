const { Router } = require('express');
const { Auth } = require('../middleware/auth.middleware');
const { Prefer } = require('../models/prefer.model');

const fetch = require('node-fetch')

const { client } = require('../redis');
const weatherRouter = Router();
weatherRouter.use(Auth)

weatherRouter.get("/preference", async (req, res) => {
    try {
        let {userID} = req.body;
        let data = await Prefer.find({userID});
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error);
    }
})

weatherRouter.get("/:city", async (req, res) => {
    let { city } = req.params;
    console.log(city);
    let t = await client.get(city);
    if (t) {
        t = JSON.parse(t);
        res.send(t);
    }
    else {
        let { userID } = req.body;
        let b = new Prefer({ username: req.body.username, userID, city });
        await b.save()
        let r = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e802c47be0fca44ea4e898bef3066fd6`);
        let data = await r.json();
        client.setEx(city, 30 * 60 ,JSON.stringify(data));
        res.send(data);
    }
})

module.exports = {weatherRouter};
