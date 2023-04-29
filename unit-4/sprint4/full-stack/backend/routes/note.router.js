const { Router } = require("express");
const { NoteModel } = require("../model/note.model");
const {auth} = require("../middleware/auth.middleware");


let noteRouter = Router();
noteRouter.use(auth);

noteRouter.get("/", async (req, res) => {
    let { authorID } = req.body
    let data = await NoteModel.find({ authorID });
    res.status(200).send(data);
})

noteRouter.post("/create", async (req, res) => {
    try {
        let note = new NoteModel(req.body);
        await note.save();
        res.status(200).send({ "msg": "note created successfully" });
    } catch (error) {
        res.status(400).send({ "msg": error.message })
    }
})

noteRouter.patch("/update/:id", async (req, res) => {
    try {
        let id = req.params.id;
        let data = await NoteModel.findById(id);
        if (data.authorID == req.body.authorID) {
            await NoteModel.findByIdAndUpdate(id, req.body);
            res.status(200).send({ "msg": "note updated successfully" })
        }
        else {
            res.status(400).send({ "msg": "you are not authorised for this action" })
        }
    } catch (error) {
        res.status(400).send({"msg":error.message});
    }
})

noteRouter.delete("/delete/:id", async (req, res) => {
    try {
        let id = req.params.id;
        let data = await NoteModel.findById(id);
        if (data.authorID == req.body.authorID) {
            await NoteModel.findByIdAndDelete(id);
            res.status(200).send({ "msg": "note deleted successfully" })
        }
        else {
            res.status(400).send({ "msg": "you are not authorised for this action" })
        }
    } catch (error) {
        res.status(400).send({ "msg": error.message });
    }
})

module.exports = { noteRouter };