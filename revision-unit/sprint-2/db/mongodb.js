const mongoose = require('mongoose');
require('dotenv').config();

let mongoConnection = mongoose.connect(process.env.mongoURL);

module.exports = {mongoConnection}