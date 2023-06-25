const { batches } = require("../models");
const { Router } = require("express");
const { Op } = require('sequelize');
const batchRoute = Router();

batchRoute.get("/batches", async (req, res) => {
    try {
        const data = await batches.findAll();
        res.send(data);
    } catch (error) {
        res.status(400).send(error);
    }
})

batchRoute.post("/batches", async (req, res) => {
    try {
        const { title } = req.body;
        let data = await batches.create({ title });
        res.send(data);
    } catch (error) {
        res.status(400).send(error);
    }
})

batchRoute.put("/batches/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const data = await batches.upsert({
            id,
            ...req.body,
        });
        res.send(data);
    } catch (error) {
        res.status(400).send(error);
    }
})

batchRoute.delete("/batches/:id", async (req, res) => {

    try {
        await batches.destroy({
            where: {
                id: req.params.id,
            }
        })
        res.send({ msg: "delete successfull" });
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = { batchRoute };