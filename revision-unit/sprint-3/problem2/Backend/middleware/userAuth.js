const jwt = require("jsonwebtoken");

const userAuth = async (req, res, next) => {
    try {
        let token = req.headers.authorization;
        if (token) {
            let decoded = jwt.verify(token, process.env.tokenKey);
            if(decoded){
               req.body.userID = decoded.userID;
               req.body.username = decoded.username;
               next();
            }
            else{
                res.status(400).send({
                    isError: true,
                    error: "please login first"
                }) 
            }
        }
        else {
            res.status(400).send({
                isError: true,
                error: "please login first"
            })
        }
    } catch (error) {
        res.status(400).send({
            isError: true,
            error: error.message
        })
    }
}

module.exports = {userAuth};