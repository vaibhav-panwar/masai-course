const express = require('express');
const mongoose = require('mongoose');
const { User } = require('./model');
const cors = require("cors");
require('dotenv').config();

let connect = mongoose.connect(process.env.mongoURL);
const app = express();
app.use(cors());
app.use(express.json());

app.get("/api", async (req, res) => {
    try {
        let data = await User.find();
        res.status(200).send({
            isError: false,
            data
        })
    } catch (error) {
        res.status(400).send({
            isError: true,
            error
        })
    }
})

app.post("/api", async (req, res) => {
    try {
        let { name, email, destination, travelNumber, budget } = req.body;
        let user = new User({ name, email, destination, travelNumber, budget });
        await user.save();
        res.status(200).send({
            isError: false,
            message: "data created successfully"
        })
    } catch (error) {
        res.status(400).send({
            isError: true,
            error
        })
    }

})

app.delete("/api/:id",async(req,res)=>{
    let _id = req.params.id;
    try {
        await User.findOneAndDelete({_id});
        res.status(200).send({
            isError:false,
            message:"data deleted successfully"
        })
    } catch (error) {
        res.status(400).send({
            isError: true,
            error
        })
    }
})

app.listen(8080, async () => {
    await connect;
    console.log("server started at 8080");
})