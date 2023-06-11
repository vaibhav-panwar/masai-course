const mongoose = require('mongoose');

const connect = mongoose.connect("mongodb+srv://vaibhav:panwar@vaibhavpanwar.lkqlupf.mongodb.net/s4redis?retryWrites=true&w=majority");

let userSchema = mongoose.Schema({
    name:{type:String , required:true},
    email:{type:String , required:true},
    password:{type:String , required:true}
})

const User = mongoose.model("user",userSchema);

module.exports = {connect,User};