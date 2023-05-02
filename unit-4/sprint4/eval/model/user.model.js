const mongoose = require("mongoose");

let userSchema = mongoose.Schema({
    name: {type:String,required:true},
    email: { type: String, required: true , unique:[true,"this email already exist"]},
    password: { type: String, required: true },
    city: { type: String, required: true },
    age: { type: Number, required: true }
},{
    versionKey:false
})

const UserModel = mongoose.model("user",userSchema);

module.exports = {UserModel}