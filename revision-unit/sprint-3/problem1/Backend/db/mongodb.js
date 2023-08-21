const mongoose = require("mongoose");
require("dotenv").config();

let mongoConnect = mongoose.connect(process.env.mongoURL);

module.exports = {mongoConnect};