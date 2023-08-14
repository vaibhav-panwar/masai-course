const { Router } = require('express');
const { userAuth } = require('../middleware/userAuth');
const { Booking } = require("../models/booking.model");

const bookinRoute = Router();

bookinRoute.post("/booking", userAuth, async (req, res) => {
    try {
        let user = req.body.userID;
        let flight = req.body.flight;
        let b = new Booking({ user, flight });
        await b.save()
        res.status(201).send({
            isError: false,
            message: "booking created successfully",
            bookingDetails: b
        })
    } catch (error) {
        res.status(400).send({
            isError: true,
            error
        })
    }
})

bookinRoute.get("/dashboard", async (req, res) => {
    try {
        let data = await Booking.aggregate([{
            $lookup: {
                from: 'users',
                localField: 'user',
                foreignField: '_id',
                as: 'userDetails'
            }
        },
        {
            $lookup: {
                from: 'flights',
                localField: 'flight',
                foreignField: '_id',
                as: 'flightDetails'
            }
        },
        {
            $unwind: '$userDetails'
        }, {
            $unwind: '$flightDetails'
        }])
        res.status(200).send({
            isError: false,
            data
        });
    } catch (error) {
        res.status(400).send({
            isError: true,
            error
        })
    }

})

bookinRoute.patch("/dashboard/:id", async (req, res) => {
    try {
        let id = req.params.id;
        let data = await Booking.findByIdAndUpdate(id, req.body , {new:true});
        res.status(200).send({
            isError: false,
            message: "booking updated successfully",
            data
        })
    } catch (error) {
        res.status(400).send({
            isError: true,
            error
        })
    }
})

bookinRoute.delete("/dashboard/:id", async (req, res) => {
    try {
        let id = req.params.id;
        let data = await Booking.findByIdAndDelete(id,{new:true});
        res.status(200).send({
            isError: false,
            message: "booking deleted successfully",
            data
        })
    } catch (error) {
        res.status(400).send({
            isError: true,
            error
        })
    }
})

module.exports = { bookinRoute };