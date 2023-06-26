const { departments } = require('../models');
const { Router } = require('express');

const deptRoute = Router();

deptRoute.get("/departments", async (req, res) => {
    let { search_key, search_value } = req.query
    if (search_key && search_value) {
        let where = {};
        where[search_key] = search_value;
        try {
            let data = await departments.findAll({
                where
            });
            res.status(200).send(data);
        } catch (error) {
            res.status(400).send(error);
        }
    }
    else {
        try {
            let data = await departments.findAll();
            res.status(200).send(data);
        } catch (error) {
            res.status(400).send(error);
        }
    }

})

deptRoute.post("/departments", async (req, res) => {
    const { title, description } = req.body;
    try {
        let data = await departments.create({ title, description });
        res.send({ msg: "department created successfully", data })
    } catch (error) {
        res.status(400).send(error);
    }
})

module.exports = { deptRoute };