const fs = require("fs");

// complete the following fubctions

function isNumber(num) {
    if (typeof (num) == "number") {
        fs.writeFileSync("./test.txt", "it is a Number.")
    }
    else {
        fs.writeFileSync("./test.txt", "it is Not a Number.")
    }
}

function isStr(str) {
    if (typeof (str) == "string") {
        fs.writeFileSync("./test.txt", "it is a String.")
    }
    else {
        fs.writeFileSync("./test.txt", "it is Not a String.")
    }
}

function isArray(arr) {
    if (Object.prototype.toString.call(arr) === '[object Array]') {
        fs.writeFileSync("./test.txt", "it is a Array.")
    }
    else {
        fs.writeFileSync("./test.txt", "it is Not a Array.")
    }
}

function isObj(obj) {
    if (Object.prototype.toString.call(obj) === '[object Object]' ) {
        fs.writeFileSync("./test.txt", "this is a object.")
    }
    else {
        fs.writeFileSync("./test.txt", "this is not a object.")
    }
}

    function cls() {
        let a = 'C:/Users/admin/Desktop/masai-course/unit-4/sprint1/day-3/prb1'
        fs.unlink(`${a}/test.txt`, (err) => {
            if (err) throw err
        })
    }

// Export All the functions

module.exports = {isArray,isNumber,isObj,isStr,cls}