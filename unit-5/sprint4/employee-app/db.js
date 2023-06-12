const mongoose = require('mongoose');

const connection = mongoose.connect("mongodb+srv://vaibhav:panwar@vaibhavpanwar.lkqlupf.mongodb.net/u5s4employee?retryWrites=true&w=majority");

let employeeSchema = mongoose.Schema({
    name:{type:String , required:true},
    email: { type: String, required: true },
    role: { type: String, required: true,default:'Employee'},
    password: { type: String, required: true }
})

let leaveSchema = mongoose.Schema({
    employeeID : { type: String, required: true },
    employeeName: { type: String, required: true },
    reason:{type:String},
    status: { type: String, required: true , default:'pending'}
})

const Leave = mongoose.model("leave",leaveSchema);

const Employee = mongoose.model("employee",employeeSchema);

module.exports = {connection,Employee,Leave};