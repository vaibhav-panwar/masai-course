const mongoose = require("mongoose");
require('dotenv').config() 


const connection = mongoose.connect(process.env.mongoURL);
const movieSchema = mongoose.Schema({
    Title: String,
    Year: Number,
    Rated: String,
    Released: String,
    Runtime: String,
    Genre: String,
    Director: String,
    Writer: String,
    Actors: String,
    Plot: String,
    Language: String,
    Country: String,
    imdbRating: Number
},{
    versionKey: false
})
const MovieModel = mongoose.model("movie", movieSchema);

module.exports = {connection,MovieModel};