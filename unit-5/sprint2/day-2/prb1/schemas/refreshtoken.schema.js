const mongoose = require("mongoose");

refreshtokenSchema = new mongoose.Schema({
    refreshtoken:{type:String,required:true}
})

const rToken = mongoose.model("token",refreshtokenSchema);

module.exports = {rToken};