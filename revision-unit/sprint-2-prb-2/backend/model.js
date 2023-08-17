const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let model = new Schema({
    name:String,
    email:String,
    destination:String,
    travelNumber:Number,
    budget:Number
})

let User = mongoose.model('user',model);

module.exports = {User};