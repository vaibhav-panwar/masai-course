const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
require('dotenv').config();

let passSchema = new mongoose.Schema({
    password:{type:String, required:true}
})

passSchema.pre('save',  function (next) {
    const user = this;
    bcrypt.hash(user.password, 5, function (err, hash) {
        if(err) return res.status(400).send("error")
        user.password = hash
        next();
    });
});

const PassModel = mongoose.model("password",passSchema);

module.exports = {PassModel};