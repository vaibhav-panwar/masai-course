const express = require("express");
const { connection } = require("./db");
require('dotenv').config();

const app = express();

app.listen(process.env.port,async()=>{
    await connection
    console.log(`connected at the port ${process.env.port}`);
})