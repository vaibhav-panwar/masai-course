const express = require("express");
const { connection } = require("./db");
const { userRouter } = require("./routes/user.route");
const { blogRouter } = require("./routes/blog.route");
var fs = require('fs')
var morgan = require('morgan')
var path = require('path')
require('dotenv').config();

var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

const app = express();
app.use(express.json());
app.use(morgan(':remote-addr :method :url :date[web]', { stream: accessLogStream }))

app.use("/user",userRouter);
app.use("/articles",blogRouter);

app.listen(process.env.port,async()=>{
    await connection
    console.log(`connected at the port ${process.env.port}`);
})