const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let bookingModel = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    flight: { type: mongoose.Schema.Types.ObjectId, ref: 'flight' }
})

let Booking = mongoose.model("booking",bookingModel);

module.exports = {Booking}