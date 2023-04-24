const mongoose = require("mongoose");

let connection = mongoose.connect("mongodb+srv://vaibhav:panwar@vaibhavpanwar.lkqlupf.mongodb.net/football?retryWrites=true&w=majority");

let playerSchema = mongoose.Schema({
    "player_name": {
        type: String, required: [true, '{"err": "Few fields are missing, cannot process the request"}']},
    "position": {
        type: String, required: [true, '{"err": "Few fields are missing, cannot process the request"}'], enum: {
            values: ["Forward", "Midfielder", "Defender", "Goalkeeper"],
            message: '{"err":"Incorrect details"}'
        }},
    "team": { type: String, required: [true, '{"err": "Few fields are missing, cannot process the request"}'] },
    "goals": {
        type:Number,
        required: [true, '{"err": "Few fields are missing, cannot process the request"}'],
        min: [50, '{"err":"You are not eligible to play"}'],
    },
    "assists": {
        type: Number,
        required: [true, '{"err": "Few fields are missing, cannot process the request"}'],
        min: [20, '{"err":"You are not eligible to play"}'],
    },
    "nationality": { type: String, require: true },
    "age": {
        type: Number,
        required: [true, '{"err": "Few fields are missing, cannot process the request"}'],
        min: [18, '{"err":"You are not eligible to play"}'],
        max: [40, '{"err":"You are not eligible to play"}']
    },
    "mutable": { type: Boolean, required: [true, '{"err": "Few fields are missing, cannot process the request"}'] }
})

let PlayerModel = mongoose.model("player",playerSchema);

module.exports = {connection,PlayerModel};
