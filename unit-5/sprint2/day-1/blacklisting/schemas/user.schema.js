const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
require('dotenv').config();

let userSchema =  mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
})

userSchema.pre('save', function (next) {
    const user = this;
    bcrypt.genSalt(10, function (err, salt) {
        if (err) return next(err);
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});

const UserModel = mongoose.model("user",userSchema);

module.exports = {UserModel};