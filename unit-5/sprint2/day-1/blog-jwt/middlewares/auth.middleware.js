const jwt = require('jsonwebtoken');
require('dotenv').config()

function auth(req, res, next) {
    const token = req.cookies.jwttoken
    console.log(token);
    jwt.verify(token, process.env.accessToken, (err, decoded) => {
        if (err) {
            res.status(401).send('Invalid token');
        } else {
            req.body = decoded;
            next()
        }
    })
}

module.exports = {auth}