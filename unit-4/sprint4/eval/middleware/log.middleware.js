var fs = require('fs')
var path = require('path')

var accessLogStream = fs.createWriteStream(path.join(__dirname, '../access.log'), { flags: 'a' })

module.exports = {accessLogStream}