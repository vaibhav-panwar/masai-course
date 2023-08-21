const { Router } = require("express");
const { DoctorModel } = require("../models/doctor.model");

const doctorRoute = Router();

doctorRoute.post("/appointments", async (req, res) => {
    try {
        let { name, image, specialization, experience, location, date, slots, fee } = req.body;
        let doc = new DoctorModel({ name, image, specialization, location, experience, date, slots, fee });
        await doc.save();
        res.status(200).send({
            isError: false,
            message: "doctor registered successfully",
            doc
        })
    } catch (error) {
        res.status(400).send({
            isError: true,
            error: error.message
        })
    }
})

doctorRoute.get("/get", async (req, res) => {
    try {
        let searchQuery = {};
        let sortField = {};
        if(req.query.specialization){
            searchQuery.specialization = req.query.specialization;
        }
        if(req.query.name){
            searchQuery.name = {$regex:req.query.name,$options:"i"}
        }
        if(req.query.sorting){
           sortField.date = req.query.sorting
        }
        let data = await DoctorModel.find(searchQuery).sort(sortField);
        res.status(200).send({
            isError: false,
            data
        })
    } catch (error) {
        res.status(400).send({
            isError: true,
            error: error.message
        })
    }
})

doctorRoute.patch("/update/:id", async (req, res) => {
    try {
        let { id } = req.params;
        await DoctorModel.findByIdAndUpdate(id, req.body);
        res.status(200).send({
            isError: false,
            message: "doctor updated successfully"
        })
    } catch (error) {
        res.status(400).send({
            isError: true,
            error: error.message
        })
    }

})

doctorRoute.delete("/delete/:id", async (req, res) => {
    try {
        let { id } = req.params;
        await DoctorModel.findByIdAndDelete(id);
        res.status(200).send({
            isError: false,
            message: "doctor deleted successfully"
        })
    } catch (error) {
        res.status(400).send({
            isError: true,
            error: error.message
        })
    }
})

module.exports = { doctorRoute }