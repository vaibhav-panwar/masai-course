const express = require("express");
const { connection } = require("./db")
const { passRouter } = require("./routes/pass.route");
const app = express();
app.use(express.json());

app.use("/",passRouter);

app.listen(8080,async()=>{
    await connection
    console.log("server running at 8080");
})