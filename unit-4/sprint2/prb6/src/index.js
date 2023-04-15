// import required modules
const express = require('express');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })

const app = express();

app.get("/",(req,res)=>{
    res.status(200).send({ message: "welcome to server"})
})

app.post('/upload', upload.single('avatar'), function (req, res) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    res.status(200).send({
        message: "file uploaded successfully"
    })
})
// export the server
// eg.
module.exports = app;
