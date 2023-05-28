const {Router} = require("express");
const {Comment} = require('../model/comment.model');
const { auth } = require("../middleware/auth.middleware");

let commentRouter = Router();
commentRouter.use(auth);

commentRouter.get("/:noteID",async(req,res)=>{
    let {noteID} = req.params;
    let data = await Comment.find({noteID})
    res.send(data)
})

commentRouter.post("/",async(req,res)=>{
    try {
        let ncom = new Comment(req.body);
        await ncom.save();
        res.send({ message: "comment added" })
    } catch (error) {
        res.status(400).send(error);
    }
})

module.exports = {commentRouter};