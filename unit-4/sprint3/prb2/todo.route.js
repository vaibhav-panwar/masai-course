const {Router} = require("express");
const { ToDoModel } = require("./db");


const todoRouter = Router();

todoRouter.get("/",async(req,res)=>{
    let data = await ToDoModel.find();
    res.send(data);
})

todoRouter.post("/create",async(req,res)=>{
    let newtodo = new ToDoModel(req.body);
    await newtodo.save();
    res.send("todo create successfully");
})

todoRouter.patch("/:todoId",async(req,res)=>{
    let id = req.params.todoId;
    await ToDoModel.findByIdAndUpdate(id,req.body);
    res.send("data updated successfully");
})

todoRouter.delete("/:todoId",async(req,res)=>{
    let id = req.params.todoId;
    await ToDoModel.findByIdAndDelete(id);
    res.send("data deleted successfully");
})

module.exports = {todoRouter}
