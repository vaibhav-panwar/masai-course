const mongoose = require('mongoose');

let commentSchema = mongoose.Schema({
    noteID:{type:String,required:true},
    username:{type:String,required:true},
    comment: { type: String, required: true }
},
{
    timestamps:true,
    versionKey:false
})

const Comment = mongoose.model("comment",commentSchema);

module.exports = {Comment};