const { Router } = require("express");
const {auth} = require("../middleware/auth.middleware");
const {BlogModel} = require("../model/blog.model");

let blogRouter = Router();
blogRouter.use(auth);

blogRouter.get("/",async(req,res)=>{
    let {userID} = req.body;
    let {limit,pageno,category,title} = req.query;
    if(limit && pageno){
      let skip = (pageno-1)*limit;
      if(category && title){
          let data = await BlogModel.find({ userID,category,title }).limit(limit).skip(skip);
          res.status(200).send(data)
      }
      else if(category && (!title)){
          let data = await BlogModel.find({ userID, category }).limit(limit).skip(skip);
          res.status(200).send(data)
      }
      else if(title && (!category)){
          let data = await BlogModel.find({ userID,title }).limit(limit).skip(skip);
          res.status(200).send(data)
      }
      else{
          let data = await BlogModel.find({ userID }).limit(limit).skip(skip);
          res.status(200).send(data)
      }
    }
    else{
        if (category && title) {
            let data = await BlogModel.find({ userID, category, title });
            res.status(200).send(data)
        }
        else if (category && (!title)) {
            let data = await BlogModel.find({ userID, category });
            res.status(200).send(data)
        }
        else if (title && (!category)) {
            let data = await BlogModel.find({ userID, title });
            res.status(200).send(data)
        }
        else {
            let data = await BlogModel.find({ userID });
            res.status(200).send(data)
        }
    }
    
})

blogRouter.post("/add",async(req,res)=>{
    try {
        let post = new BlogModel(req.body);
        await post.save();
        res.status(200).send({ "msg": "article created successfully" })
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }
})

blogRouter.patch("/update/:id",async(req,res)=>{
    let {id} = req.params;
    try {
        let user = await BlogModel.findById(id);
        if(req.body.userID==user.userID){
            await BlogModel.findByIdAndUpdate(id,req.body);
            res.status(200).send({"msg":"user updated successfully"});
        }else{
            res.status(400).send({"msg":"you are not authorized to perform this action"});
        }
    } catch (error) {
        res.status(400).send({"msg":error.message});
    }
})

blogRouter.delete("/delete/:id", async (req, res) => {
    let { id } = req.params;
    try {
        let user = await BlogModel.findById(id);
        if (req.body.userID == user.userID) {
            await BlogModel.findByIdAndDelete(id);
            res.status(200).send({ "msg": "user deleted successfully" });
        } else {
            res.status(400).send({ "msg": "you are not authorized to perform this action" });
        }
    } catch (error) {
        res.status(400).send({ "msg": error.message });
    }
})

module.exports ={blogRouter}

