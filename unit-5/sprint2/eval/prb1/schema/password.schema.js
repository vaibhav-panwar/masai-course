const mongoose = require('mongoose');
const jwt  = require('jsonwebtoken');
require('dotenv').config();

let passSchema = new mongoose.Schema({
    password:{type:String, required:true}
})

passSchema.pre('save', function (next) {
    const user = this;
    var token = jwt.sign({password:user.password}, process.env.token);
    user.password = token;
    next();
});

const PassModel = mongoose.model("password",passSchema);

module.exports = {PassModel};