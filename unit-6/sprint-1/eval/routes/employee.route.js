const { employees, departments } = require('../models');
const { Router } = require('express');
const { Op } = require('sequelize');
const empRoute = Router();

empRoute.get("/employees", async (req, res) => {
    let { page_no, employee_per_page } = req.query;
    let skip = (page_no-1) * employee_per_page ;
    
    if (page_no && employee_per_page) {
        try {
            departments.hasMany(employees, { foreignkey: "DepartmentID" });
            employees.belongsTo(departments, { foreignkey: "DepartmentID" });
            const data = await employees.findAll({
                include: [departments],
                limit: Number(employee_per_page),
                offset: Number(skip)
            });
            res.status(200).send(data);
        } catch (error) {
            res.status(400).send(error)
        }
    }
    else {
        try {
            departments.hasMany(employees, { foreignkey: "DepartmentID" });
            employees.belongsTo(departments, { foreignkey: "DepartmentID" });
            const data = await employees.findAll({
                include: [departments],
            });
            res.status(200).send(data);
        } catch (error) {
            res.status(400).send(error)
        }
    }

})

empRoute.post("/employees", async (req, res) => {
    const { Name, Email, Salary, DepartmentID } = req.body
    try {
        let data = await employees.create({ Name, Email, Salary, DepartmentID });
        res.status(200).send({ msg: "employee entered successfully", data });
    } catch (error) {
        res.status(400).send(error);
    }
})

empRoute.put("/employees/:id", async (req, res) => {
    const { id } = req.params;
    try {
        let data = await employees.upsert({
            id,
            ...req.body
        })
        res.status(200).send({ msg: "employee updated successfully", data });
    } catch (error) {
        res.status(400).send(error);
    }
})

empRoute.put("/employees/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await employees.destroy({
            where: {
                id
            }
        })
        res.status(200).send({ msg: "employee deleted successfully" });
    } catch (error) {
        res.status(400).send(error);
    }
})

module.exports = { empRoute };