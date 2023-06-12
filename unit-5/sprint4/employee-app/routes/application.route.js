const {Router} = require('express');
const { Leave } = require('../db');
const { employeeAuth, adminAuth } = require('../middleware/auth.middleware');

const leaveRouter = Router();

leaveRouter.post('/create',employeeAuth,async(req,res)=>{
    try {
        const l = new Leave(req.body);
        await l.save();
        res.send({ msg: "leave application created" })
    } catch (error) {
        res.status(400).send(error)
    }
})

leaveRouter.get('/myleaves',employeeAuth,async(req,res)=>{
    try {
        let {employeeID} = req.body;
        let data = await Leave.find({employeeID});
        res.send(data);
    } catch (error) {
        res.status(400).send(error)
    }
})

leaveRouter.get('/leaves',adminAuth,async(req,res)=>{
    let data = await Leave.find();
    res.send(data);
})

leaveRouter.patch('/approval/:leaveID',adminAuth,async(req,res)=>{
    let id = req.params.leaveID;
    let l = await Leave.findById(id);
    l.status = req.body.status;
    await Leave.findByIdAndUpdate(id,l);
    res.status({msg:"leave decision done"});
})

leaveRouter.delete('/delete/:leaveID', employeeAuth, async (req, res) => {
    let id = req.params.leaveID;
    let l = await Leave.findById(id);
    if(req.body.employeeID=== l.employeeID){
        await Leave.findByIdAndDelete(id);
        res.send({msg:"leave application deleted"})
    }
    else{
        res.send({msg:"you are not authorised to perform this action"});
    }
})

module.exports = {leaveRouter};

