const {Router} = require("express");
const { MovieModel } = require("../db");
const mongoose = require("mongoose");
const movieRouter = Router();

movieRouter.get("/",async(req,res)=>{
    let {sortby,q,limit,page} = req.query;
    let skip = (page-1)*limit;
    if(limit!=undefined && page!=undefined){
        if (sortby != undefined && q != undefined) {
            sortby = sortby.split(" ");
            let a = sortby[0];
            if (sortby[1] == "asc") {
                let data = await MovieModel.find({ Title: { $regex: q, $options: "i" } }).limit(limit).skip(skip).sort({ [a]: 1 });
                res.send(data);
            }
            else {
                let data = await MovieModel.find({ Title: { $regex: q, $options: "i" } }).limit(limit).skip(skip).sort({ [a]: -1 })
                res.send(data);
            }
        }
        else if (sortby != undefined && q == undefined) {
            sortby = sortby.split(" ");
            let a = sortby[0]
            if (sortby[1] == "asc") {
                let data = await MovieModel.find().limit(2).skip(skip).sort({ [a]: 1 })
                res.send(data);
            }
            else {
                let data = await MovieModel.find().limit(2).skip(skip).sort({ [a]: -1 })
                res.send(data);
            }
        }
        else if (sortby == undefined && q != undefined) {
            let data = await MovieModel.find({ Title: { $regex: q, $options: "i" } }).limit(limit).skip(skip);
            res.send(data);
        }
        else {
            let data = await MovieModel.find().limit(limit).skip(skip);
            res.send(data);
        }
    }
    else{
        if (sortby != undefined && q != undefined) {
            sortby = sortby.split(" ");
            let a = sortby[0];
            if (sortby[1] == "asc") {
                let data = await MovieModel.find({ Title: { $regex: q, $options: "i" } }).limit(limit).skip(skip).sort({ [a]: 1 });
                res.send(data);
            }
            else {
                let data = await MovieModel.find({ Title: { $regex: q, $options: "i" } }).limit(limit).skip(skip).sort({ [a]: -1 })
                res.send(data);
            }
        }
        else if (sortby != undefined && q == undefined) {
            sortby = sortby.split(" ");
            let a = sortby[0]
            if (sortby[1] == "asc") {
                let data = await MovieModel.find().limit(2).skip(skip).sort({ [a]: 1 })
                res.send(data);
            }
            else {
                let data = await MovieModel.find().limit(2).skip(skip).sort({ [a]: -1 })
                res.send(data);
            }
        }
        else if (sortby == undefined && q != undefined) {
            let data = await MovieModel.find({ Title: { $regex: q, $options: "i" } }).limit(limit).skip(skip);
            res.send(data);
        }
        else {
            let data = await MovieModel.find().limit(limit).skip(skip);
            res.send(data);
        }
    }
})

movieRouter.post("/",async(req,res)=>{
    try {
        let user  = new MovieModel(req.body);
        await user.save();
        res.send("data added successfully");
    } catch (error) {
        res.send(error);
    }
})

movieRouter.patch("/:id",async(req,res)=>{
    try {
      let {id} = req.params;
        const updatedMovie = await MovieModel.findByIdAndUpdate(id, req.body, { new: true });
        res.send(updatedMovie);
    } catch (error) {
        console.log(error);
    }
})

movieRouter.delete("/:id", async (req, res) => {
    try {
        let { id } = req.params;
        await MovieModel.findByIdAndDelete(id);
        res.send("item deleted successfully");
    } catch (error) {
        console.log(error);
    }
})

module.exports = movieRouter;