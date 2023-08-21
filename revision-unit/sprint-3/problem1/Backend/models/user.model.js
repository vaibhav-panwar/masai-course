const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:{
        type:String,
        required:[true,"provide email"]
    },
    password: {
        type: String,
        required: [true, "provide password"]
    }
})

let UserModel = mongoose.model("user",userSchema);

module.exports = {UserModel};