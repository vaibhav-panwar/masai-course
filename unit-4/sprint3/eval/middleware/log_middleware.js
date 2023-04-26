const fs = require("fs");


function log(req, res, next) {
    next()
    if (req.method == "DELETE") {
        fs.appendFileSync("./records.txt", `The player with ID:${req.params.id} has been deleted| ${Date.now()}\n`)
    }
    else if (req.method == "PATCH") {
        fs.appendFileSync("./records.txt", `The player with ID:${req.params.id} has been updated| ${Date.now()}\n`)
    }
}

module.exports = { log }