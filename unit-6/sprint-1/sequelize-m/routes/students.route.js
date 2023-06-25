const { students, batches } = require("../models");
const { Router } = require("express");

const studentRoute = Router();

studentRoute.get("/students", async (req, res) => {
    try {
        batches.hasMany(students, { foreignkey: "batchID" });
        students.belongsTo(batches, { foreignkey: "batchID" });
        const data = await students.findAll({
            include: [batches],
        });
        res.send(data);
    } catch (error) {
        res.status(400).send(error);
    }
})

studentRoute.post("/students", async (req, res) => {
    try {
        const { name, email, age, batchID } = req.body;
        let data = await students.create({ name, email, age, batchID });
        res.send(data);
    } catch (error) {
        res.status(400).send(error);
    }
})

studentRoute.put("/students/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const data = await students.upsert({
            id,
            ...req.body,
        });
        res.send(data);
    } catch (error) {
        res.status(400).send(error);
    }
})

studentRoute.delete("/students/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await students.destroy({
            where: {
                id
            }
        })
        res.send({ msg: "delete successfull" });
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = { studentRoute }