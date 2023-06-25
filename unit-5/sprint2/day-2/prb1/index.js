const express = require("express");
const cookieParser = require("cookie-parser");
const { connection } = require("./db");
const { userRouter }  = require("./routes/user.route");
const {auth} = require("./middlewares/auth.middleware");

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/user",userRouter);

app.get("/profile",auth,(req,res)=>{
    res.send(req.body);
})

app.listen(8000, async () => {
    await connection 
    console.log("server running successfully");
})