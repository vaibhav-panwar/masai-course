const express = require("express");
const { connection } = require("./db");
const { userRouter } = require("./routes/user.route");
const { blogRouter } = require("./routes/blog.route");
const {limiter} = require("./middleware/ratelimit.middleware");
const { accessLogStream } = require("./middleware/log.middleware");
var morgan = require('morgan')
require('dotenv').config();


const app = express();
app.use(express.json());
app.use(limiter);
app.use(morgan(':remote-addr :method :url :date[web]', { stream: accessLogStream }))

app.use("/user",userRouter);
app.use("/articles",blogRouter);

app.listen(process.env.port,async()=>{
    await connection
    console.log(`connected at the port ${process.env.port}`);
})