const jwt = require("jsonwebtoken");

function auth(req,res,next){
    const check = req.headers.authorization
    if (check) {
        let token = check.split(" ")[1];
        if(token){
            const decoded = jwt.verify(token, "pvtkey");
            if (decoded) {
                req.body.authorID = decoded.authorID;
                req.body.author = decoded.author;
                next()
            } else {
                res.send({ "msg": "Please Login" });
            }
        }
        else{
            res.send({ "msg": "Please Login" })
        }   
    } else {
        res.send({"msg":"Please Login"});
    }
}

module.exports = {auth}