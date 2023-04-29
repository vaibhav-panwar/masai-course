const express = require("express");
require('dotenv').config()
var cors = require('cors')
const { connection } = require("./db");
const { userRouter } = require("./routes/user.route");
const {noteRouter} = require("./routes/note.router");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/users",userRouter);

app.use("/notes",noteRouter);

app.listen(process.env.port,async()=>{
    await connection
    console.log("connection successfull at port 8080");
})