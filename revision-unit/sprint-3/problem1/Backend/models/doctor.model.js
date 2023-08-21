const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const doctorSchema = new Schema({
    name: {
        type: String,
        required: [true, "empty field"]
    },
    image: {
        type: String,
        required: [true, "empty field"]
    },
    specialization: {
        type: String,
        enum: {
            values: ["Cardiologist", "Dermatologist", "Pediatrician", "Psychiatrist"],
            message: "give appropriate values"
        },
        required: true
    },
    experience: {
        type: Number,
        required: [true, "empty field"]
    },
    location: {
        type: String,
        required: [true, "empty field"]
    },
    date: {
        type: Date,
        required: [true, "empty field"]
    },
    slots: {
        type: Number,
        required: [true, "empty field"]
    },
    fee: {
        type: Number,
        required: [true, "empty field"]
    }
})

const DoctorModel = mongoose.model("doctor", doctorSchema);

module.exports = { DoctorModel }