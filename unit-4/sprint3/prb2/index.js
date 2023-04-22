const express = require("express");
const {todoRouter} = require("./todo.route");
const {connection} = require("./db");

const app = express();

app.use(express.json());

app.use("/todos",todoRouter);

app.listen(8080,async()=>{
    await connection;
    console.log("connected successfully");
})