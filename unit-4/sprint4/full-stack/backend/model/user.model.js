const mongoose = require("mongoose");

let userScehma = mongoose.Schema({
    name: {type:String , required:[true , 'name field is unavailable']},
    email: { type: String, required: [true, 'email field is unavailable'] },
    password: { type: String, required: [true, 'email field is unavailable'] },
    age: { type: Number, required: [true, 'email field is unavailable'] }
}, {
    versionKey: false
})

let UserModel = mongoose.model("user",userScehma);

module.exports = {UserModel};