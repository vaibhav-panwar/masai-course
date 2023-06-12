const jwt = require('jsonwebtoken');

function employeeAuth(req,res,next){
    let token = req.headers.authorization;
    if(token){
        try {
            let  decoded = jwt.verify(token,'pvtkey');
            if (decoded.role ==="Employee"){
                req.body.employeeID = decoded.employeeID;
                req.body.employeeName = decoded.employeeName;
                next();
            }
            else{
                res.status(400).send({msg:"not authorised"});
            }
        } catch (err) {
            res.status(400).send(err)
        }
    }
    else{
        res.status(400).send({msg:"not authorised"});
    }
}

function adminAuth(req, res, next) {
    let token = req.headers.authorization;
    if (token) {
        try {
            let decoded = jwt.verify(token, 'pvtkey');
            if (decoded.role === "Admin") {
                req.body.employeeID = decoded.employeeID;
                req.body.employeeName = decoded.employeeName;
                next();
            }
            else {
                res.status(400).send({ msg: "not authorised" });
            }
        } catch (err) {
            res.status(400).send(err)
        }
    }
    else {
        res.status(400).send({ msg: "not authorised" });
    }
}

module.exports = {employeeAuth,adminAuth};