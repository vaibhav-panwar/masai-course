const jwt  = require('jsonwebtoken');

function Auth(req,res,next){
    let token = req.headers.authorization;
    if(token){
        try {
            let decoded = jwt.verify(token, 'pvtkey');
            req.body.userID = decoded.userID;
            req.body.username = decoded.username;
            next();
        } catch (err) {
            res.status(400).send(err);
        }
    }
    else{
        res.status(400).send({msg:"Not Authorised"})
    }
}

module.exports = {Auth}