const jwt = require('jsonwebtoken');
require("dotenv").config();

const userAuth = (req,res,next)=>{
    let token = req.headers.authorization;
    if(token){
        try {
            let decoded = jwt.verify(token, process.env.utoken);
            req.body.userID = decoded.userID;
            next()
        } catch (err) {
            res.status(400).send({
                isError: true,
                error: err
            })
        }
    }
    else{
        res.status(400).send({
            isError:true,
            error:"please login first"
        })
    }
}

module.exports = {userAuth};