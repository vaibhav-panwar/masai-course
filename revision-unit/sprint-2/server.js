const express = require("express");
const { mongoConnection } = require("./db/mongodb");
const { userRouter } = require("./routes/user.route");
const {flightRoute} = require("./routes/flight.route");
const { bookinRoute } = require("./routes/booking.route")
require('dotenv').config();


const app = express();
app.use(express.json());

app.use('/api',userRouter);
app.use('/api',flightRoute);
app.use("/api",bookinRoute);
app.post('/',(req,res)=>{
    res.send({
        isError:false,
        message:"base point",
        body:"jmd"
    })
})

let port = 8080||process.env.port

app.listen(port,async()=>{
    await mongoConnection
    console.log(`server started at port ${port}`);
})