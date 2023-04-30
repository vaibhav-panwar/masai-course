const express = require("express");
const connection = require("./db");
const { postRouter } = require("./routes/post.route")
const {userRouter} = require("./routes/user.route")

const app = express();
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("this is home page")
})
app.use("/user",userRouter);
app.use("/post",postRouter);
app.listen(8080,async()=>{
    await connection
    console.log("connected at 8080");
})