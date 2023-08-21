const express = require("express");
const cors = require("cors");

require("dotenv").config();

const { mongoConnect } = require("./db/mongodb");
const { doctorRoute } = require("./routes/doctor.route");
const {userRoute} = require("./routes/user.route");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/user",userRoute);
app.use("/doctor",doctorRoute);

app.get("/",async(req,res)=>{
    res.status(200).send({
        isError:false,
        message:"this is base point"
    })
})

let port = process.env.port||8080;
app.listen(port,async()=>{
    await mongoConnect
    console.log(`server started at port ${port}`);
})