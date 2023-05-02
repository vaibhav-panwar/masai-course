const express = require("express");
const { connection } = require("./db");
const { userRouter } = require("./routes/user.route");
require('dotenv').config();

const app = express();
app.use(express.json());

app.use("/user",userRouter)

app.listen(process.env.port,async()=>{
    await connection
    console.log(`connected at the port ${process.env.port}`);
})