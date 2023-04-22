const mongoose = require("mongoose");
require('dotenv').config()

const connection = mongoose.connect(process.env.mongoURL)

let todoSchema = mongoose.Schema({
    
    "userId": Number,
    "id": Number,
    "title": String,
    "completed": Boolean

})

let ToDoModel = mongoose.model("todo",todoSchema);

module.exports = { connection , ToDoModel}