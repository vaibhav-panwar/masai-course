const mongoose = require("mongoose");

const Schema  =  mongoose.Schema;

let userSchema = new Schema({
    username:{
        type:String,
        required:[true,"empty field"]
    },
    avatar: {
        type: String,
        required: [true, "empty field"]
    },
    email: {
        type: String,
        required: [true, "empty field"],
        unique:true
    },
    password: {
        type: String,
        required: [true, "empty field"]
    }
},{
    versionKey:false
})

const UserModel = mongoose.model("user",userSchema);

module.exports = {UserModel};