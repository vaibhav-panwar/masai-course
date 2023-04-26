const express = require("express");
const { connection } = require("./db");
const { userRouter } = require("./routes/user.route");
const cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json());
app.use("/user",userRouter);

app.listen(8080,async()=>{
    await connection
    console.log("connected at 8080")
})