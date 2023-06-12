const mongoose = require('mongoose');

let preferSchema = mongoose.Schema({
    userID: { type: String, required: true },
    username: { type: String, required: true },
    city: { type: String, required: true }
})

const Prefer = mongoose.model("preference", preferSchema);

module.exports = { Prefer };