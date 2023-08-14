const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let flightModel = new Schema({
    airline:{
        type:String,
        required:[true,"field empty"]
    },
    flightNo: {
        type: String,
        required: [true, "field empty"]
    },
    departure: {
        type: String,
        required: [true, "field empty"]
    },
    arrival: {
        type: String,
        required: [true, "field empty"]
    },
    departureTime: {
        type: Date,
        required: [true, "field empty"]
    },
    arrivalTime: {
        type: Date,
        required: [true, "field empty"]
    },
    seats: {
        type: Number,
        required: [true, "field empty"]
    },
    price: {
        type: Number,
        required: [true, "field empty"]
    }
})

const Flight = mongoose.model("flight",flightModel);

module.exports = {Flight};