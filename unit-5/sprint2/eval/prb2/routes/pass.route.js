const { Router } = require("express");
const bcrypt = require("bcrypt");
const { PassModel } = require("../schema/password.schema");
require('dotenv').config();

const passRouter = Router();

passRouter.post("/hashmypwd", async (req, res) => {
    let newpass = new PassModel(req.body);
    await newpass.save();
    res.status(200).send({ message: "Hash of the Password stored successfully." });
})

passRouter.post("/verifymypwd", async (req, res) => {
    let { id, password } = req.body;
    const pass = await PassModel.findById(id);
    bcrypt.compare(password, pass.password, function (err, result) {
        if (err) return res.status(400).send({ message: "false" })
        return res.send({ message: result });
    });

})

module.exports = { passRouter }