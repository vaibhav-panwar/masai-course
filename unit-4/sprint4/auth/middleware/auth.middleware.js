const jwt = require("jsonwebtoken");

const auth = (req,res,next)=>{
    let token = req.headers.authorization
    if(token){
        try {
            let t = token.split(" ")[1];
            let decode = jwt.verify(t, 'pvtkey');
            req.body.userId = decode.userId;
            next()
        } catch (error) {
            res.send({"msg":error.message})
        }
    }
    else{
        res.send({"msg":"please login"});
    }
}

module.exports = {auth}