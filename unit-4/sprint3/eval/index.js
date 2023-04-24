const express = require("express");
const {playerRouter} = require("./routes/player.router");
const {connection} = require("./db");
const{log} = require("./middleware/log_middleware")

const app = express();
app.use(express.json());
app.use(log);

app.use("/player",playerRouter);


app.listen(8080,async ()=>{
    await connection
    console.log("server started successfully");
})