const { Router } = require("express");
const { PlayerModel } = require("../db");

let playerRouter = Router();

playerRouter.get("/", async (req, res) => {
    let { goals, age, limit, pageno, nationality } = req.query;
    let skip = (pageno - 1) * limit
    if (pageno != undefined && limit != undefined) {
        if (goals != undefined && age != undefined && nationality != undefined) {
            let data = await PlayerModel.find({ $and: [{ "goals": { $gt: goals } }, { "age": { $gte: age } }, { "nationality": { $regex: nationality, $options: 'i' } }] }).limit(limit).skip(skip)
            res.send(data)
        }
        else if (goals != undefined) {
            let data = await PlayerModel.find({ "goals": { $gt: goals } }).limit(limit).skip(skip);
            res.send(data)
        }
        else if (age != undefined) {
            let data = await PlayerModel.find({ "age": { $gte: age } }).limit(limit).skip(skip);
            res.send(data);
        }
        else if (nationality != undefined) {
            let data = await PlayerModel.find({ "nationality": { $regex: nationality, $options: 'i' } }).limit(limit).skip(skip)
            res.send(data)
        }
        else{
            let data = await PlayerModel.find().limit(limit).skip(skip);
            res.send(data);
        }
    }
    else{
        if(goals!=undefined && age!=undefined && nationality!=undefined){
            let data = await PlayerModel.find({ $and: [{ "goals": { $gt: goals } }, { "age": { $gte: age } }, { "nationality": { $regex: nationality, $options: 'i' } }]})
            res.send(data)
        }
        else if(goals!=undefined){
            let data = await PlayerModel.find({ "goals": { $gt: goals } });
            res.send(data)
        }
        else if(age!=undefined){
            let data = await PlayerModel.find({"age":{$gte:age}});
            res.send(data);
        }
        else if(nationality!=undefined){
            let data = await PlayerModel.find({"nationality":{$regex:nationality,$options:'i'}})
            res.send(data)
        }
        else {
            let data = await PlayerModel.find();
            res.send(data);
        }
    }
})

playerRouter.post("/", async (req, res) => {
    try {
        let player = new PlayerModel(req.body);
        await player.save();
        res.send("player added successfully")
    }
    catch (error) {
        res.send(error);
    }
})

playerRouter.patch("/:id", async (req, res) => {
    let id = req.params.id;
    await PlayerModel.findByIdAndUpdate(id, req.body);
    res.send("player updated successfully");
})

playerRouter.delete("/:id", async (req, res) => {
    let id = req.params.id;
    await PlayerModel.findByIdAndDelete(id);
    res.send("Player deleted successfully");
})

playerRouter.get("/topPlayers",async(req,res)=>{
    let data = await PlayerModel.find().sort({"goals":-1}).limit(5);
    res.send(data)
})
playerRouter.get("/:id",async(req,res)=>{
    let id = req.params.id;
    let data = await PlayerModel.findById(id);
    res.send(data);
})
module.exports = { playerRouter }