const express = require("express");
const cors = require("cors");
const { connection } = require("./db");
const { userRoute } = require("./routes/user.route");
const { blogRoute } = require("./routes/blogroute");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api",userRoute);
app.use("/api",blogRoute);

app.get("/",(req,res)=>{
    res.status(200).send({
        isError:false,
        message:"this is base point"
    })
})

app.use("*",(req,res)=>{
    res.status(400).send({
        isError:true,
        error:"Invalid URL !!"
    })
})

let port = process.env.port || 8080;

app.listen(port,async()=>{
    await connection
    console.log(`server started at port ${port}`);
})