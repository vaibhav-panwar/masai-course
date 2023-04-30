const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb+srv://vaibhav:panwar@vaibhavpanwar.lkqlupf.mongodb.net/auth?retryWrites=true&w=majority")

let userSchema = mongoose.Schema({
    name: String,
    age: Number,
    city: String
},
    {
        versionKey: false
    })
let postSchema = mongoose.Schema({
    userID: String,
    title: String,
    body: String
},
    {
        versionKey: false
    }
)

let PostModel = mongoose.model("post",postSchema);
let UserModel = mongoose.model("user", userSchema);

module.exports = { connection, UserModel ,PostModel}