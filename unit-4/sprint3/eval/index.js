const express = require("express");
const {playerRouter} = require("./routes/player.router");
const {connection} = require("./db");

const app = express();
app.use(express.json());

app.use("/player",playerRouter);

app.listen(8080,async ()=>{
    await connection
    console.log("server started successfully");
})