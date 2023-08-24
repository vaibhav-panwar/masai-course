const { Router } = require("express");
const { userAuth } = require("../middleware/userAuth");
const { BlogModel } = require("../models/blog.model");
const blogRoute = Router();

blogRoute.get("/blogs", userAuth, async (req, res) => {
    try {
        let searchQuery = {};
        let sortQuery = {};
        if (req.query.title) {
            searchQuery.title = { $regex: req.query.title, $options: "i" }
        }
        if (req.query.category) {
            searchQuery.category = req.query.category;
        }
        if (req.query.sort) {
            sortQuery.date = req.query.sort;
        }
        let data = await BlogModel.find(searchQuery).sort(sortQuery);
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

blogRoute.post("/blogs", userAuth, async (req, res) => {
    try {
        const { userID, username, title, content, category } = req.body;
        let blog = new BlogModel({ userID, username, title, content, category, likes: 0, comments: [] });
        await blog.save();
        res.status(200).send({
            isError: false,
            message: "blog created successfully"
        })
    } catch (error) {
        res.status(400).send({
            isError: true,
            error: error.message
        })
    }
})

blogRoute.patch("/blogs/:id", userAuth, async (req, res) => {
    let { id } = req.params;
    try {
        let a = await BlogModel.findById(id);
        if (a.userID == req.body.userID) {
            await BlogModel.findByIdAndUpdate(id, req.body);
            res.status(200).send({
                isError: false,
                message: "blog updated successfully"
            })
        }
        else {
            res.status(400).send({
                isError: true,
                error: "you are not authorised for this action"
            })
        }
    } catch (error) {
        res.status(400).send({
            isError: true,
            error: error.message
        })
    }
})

blogRoute.delete("/blogs/:id", userAuth, async (req, res) => {
    let { id } = req.params;
    try {
        let a = await BlogModel.findById(id);
        if (a.userID == req.body.userID) {
            await BlogModel.findByIdAndDelete(id);
            res.status(200).send({
                isError: false,
                message: "blog deleted successfully"
            })
        }
        else {
            res.status(400).send({
                isError: true,
                error: "you are not authorised for this action"
            })
        }
    } catch (error) {
        res.status(400).send({
            isError: true,
            error: error.message
        })
    }
})

blogRoute.patch("/blogs/:id/like", userAuth, async (req, res) => {
    let { id } = req.params;
    try {
        let data = await BlogModel.findById(id);
        data.likes++;
        await BlogModel.findByIdAndUpdate(id, data);
        res.status(200).send({
            isError: false,
            message: "like added"
        })
    } catch (error) {
        res.status(400).send({
            isError: true,
            error: error.message
        })
    }
})

blogRoute.patch("/blogs/:id/comment", userAuth, async (req, res) => {
    let { id } = req.params;
    try {
        let { username, content } = req.body;
        let data = await BlogModel.findById(id);
        data.comments.push({ username, content });
        await BlogModel.findByIdAndUpdate(id, data);
        res.status(200).send({
            isError: false,
            message: "comment added"
        })
    } catch (error) {
        res.status(400).send({
            isError: true,
            error: error.message
        })
    }
})

module.exports = { blogRoute }