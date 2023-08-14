const { Router } = require('express');
const { Flight } = require('../models/flight.model');
const flightRoute = Router();

flightRoute.get("/flights", async (req, res) => {
    try {
        let data = await Flight.find();
        res.status(200).send({
            isError: false,
            data
        })
    } catch (error) {
        res.status(400).send({
            isError: true,
            error
        })
    }
})

flightRoute.get("/flights/:id", async (req, res) => {
    let id = req.params.id;
    try {
        let data = await Flight.findById(id);
        res.status(200).send({
            isError: false,
            data
        })
    } catch (error) {
        res.status(400).send({
            isError: true,
            error
        })
    }
})

flightRoute.post("/flights", async (req, res) => {
    let { airline, flightNo, departure, arrival, departureTime, arrivalTime, seats, price } = req.body;
    try {
        let f = new Flight({ airline, flightNo, departure, arrival, departureTime, arrivalTime, seats, price });
        await f.save();
        res.status(201).send({
            isError: false,
            message: "flight created successfully",
            flightDetails: f
        })
    } catch (error) {
        res.status(400).send({
            isError: true,
            error
        })
    }
})

flightRoute.patch("/flights/:id", async (req, res) => {
    let id = req.params.id;
    try {
        let data = await Flight.findByIdAndUpdate(id, req.body ,{new:true});
         res.status(200).send({
            isError: false,
            message: "flight updated successfully",
            data
        })
    } catch (error) {
        res.status(400).send({
            isError: true,
            error
        })
    }
})

flightRoute.delete("/flights/:id", async (req, res) => {
    let id = req.params.id;
    try {
        let data = await Flight.findByIdAndDelete(id, { new: true });
        res.status(200).send({
            isError: false,
            message: "flight Deleted successfully",
            data
        })
    } catch (error) {
        res.status(400).send({
            isError: true,
            error
        })
    }
})

module.exports = { flightRoute };