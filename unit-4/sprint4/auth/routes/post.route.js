const { Router } = require("express");
const { PostModel } = require("../db");
const { auth } = require("../middleware/auth.middleware")

const postRouter = Router();

postRouter.use(auth);

postRouter.get("/",async(req,res)=>{
    let {userId} = req.body
    let data = await PostModel.find({userId});
    res.send(data)
})

postRouter.post("/create",async(req,res)=>{
    try {
        let post = new PostModel(req.body);
        await post.save();
        res.send({ "msg": "post created" })
    } catch (error) {
        res.send({"msg":error.message});
    }
})

module.exports = {postRouter}