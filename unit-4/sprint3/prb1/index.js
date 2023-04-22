const express = require("express");
const  movieRouter  = require("./routes/movie.route.js")
const { connection, MovieModel } = require("./db");

const app = express();
app.use(express.json());

app.use("/movie",movieRouter);


app.listen(8080,async()=>{
    try {
        await connection;
        console.log("connected");
    } catch (error) {
        console.log(err);
    }
    console.log("connected at 8080");
})
