const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    username: {
        type: String,
        required: [true, "empty field"]
    },
    title: {
        type: String,
        required: [true, "empty field"]
    },
    content: {
        type: String,
        required: [true, "empty field"]
    },
    category: {
        type: String,
        enum: {
            values: ["Business", "Tech", "Lifestyle", "Entertainment"],
            message: "Enter correct input"
        },
        required: [true, "empty field"]
    },
    date: {
        type: Date,
        default:Date.now(),
        required: [true, "empty field"]
    },
    likes: {
        type: Number
    },
    comments: [
        {
            username: {
                type: String,
            },
            content: {
                type: String,
            }
        }
    ]
},{
    versionKey:false
})

const BlogModel = mongoose.model("blog",blogSchema);

module.exports = {BlogModel};