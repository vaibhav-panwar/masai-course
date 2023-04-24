const { Router } = require("express");
const { PlayerModel } = require("../db");

let playerRouter = Router();

playerRouter.get("/", async (req, res) => {
    let { goals, age, limit, pageno, nationality } = req.query;
    let skip = (pageno - 1) * limit
    if (pageno != undefined && limit != undefined) {
        if (goals != undefined && age != undefined && nationality != undefined) {
            let data = await PlayerModel.find({ goals: { $gte: [goals] } }, { age: { $gte: [age] } }, { nationality: { $regex: nationality, $options: "i" } }).limit(limit).skip(skip)
            res.send(data)
        }
    }
    else{
        // if (goals != undefined && age != undefined && nationality != undefined) {
        //     let data = await PlayerModel.find({ goals: { $gte:[ goals] } }, { age: { $gte: [age] } }, { nationality: { $regex: nationality, $options: "i" } })
        //     res.send(data)
        // }
        if(goals!=undefined){
            let data = await PlayerModel.find({"goals":{$gt:goals}})
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

module.exports = { playerRouter }