const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let userModel = new Schema({
    name:{
        type:String,
        required:[true,"please enter name"],
    },
    email:{
        type:String,
        required:[true,"please enter email"],
        unique:true
    },
    password:{
        type: String,
        required: [true, "please enter password"]
    }
})

let User = mongoose.model("user",userModel);

module.exports = {User};