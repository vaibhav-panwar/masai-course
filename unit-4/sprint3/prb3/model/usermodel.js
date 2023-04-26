const mongoose = require("mongoose");
let userSchema = mongoose.Schema({
    username: { type: String, required: [true, "username fields are missing, cannot process the request"] },
    email: { type: String, required: [true,   "email fields are missing, cannot process the request" ] },
    DOB: { type: Date, required: [true,   "DOB fields are missing, cannot process the request" ] },
    Role: {
        type: String, enum: {
            values: ['Admin', 'Explorer'],
            message: "Role not appropriate"
        }
    },
    location: { type: String, required: [true,   "location fields are missing, cannot process the request" ] },
    password: { type: String, required: [true,   "password fields are missing, cannot process the request" ] }
})

let UserModel = mongoose.model("user",userSchema);

module.exports = {UserModel};