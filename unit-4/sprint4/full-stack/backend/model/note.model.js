const mongoose = require("mongoose");

let noteScehma = mongoose.Schema({
    title: { type: String, required: [true, 'title field is unavailable'] },
    note: { type: String, required: [true, 'content field is unavailable'] },
    category: { type: String, required: [true, 'category field is unavailable'] },
    authorID: { type: String, required: [true, 'authorID field is unavailable'] },
    author : {type:String , required : true}
},{
    versionKey : false
})

let NoteModel = mongoose.model("note", noteScehma);

module.exports = { NoteModel };