const mongoose = require('mongoose');

let connection = mongoose.connect("mongodb+srv://vaibhav:panwar@vaibhavpanwar.lkqlupf.mongodb.net/weatherApp?retryWrites=true&w=majority");

module.exports = {connection};