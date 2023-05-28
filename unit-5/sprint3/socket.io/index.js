const express = require("express");
require('dotenv').config()
const cors = require('cors')
const { connection } = require("./db");
const { userRouter } = require("./routes/user.route");
const {noteRouter} = require("./routes/note.router");
const {commentRouter} = require("./routes/comment.router");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use("/users",userRouter);

app.use("/notes",noteRouter);

app.use("/comment",commentRouter);

const server = app.listen(8080,async()=>{
    await connection
    console.log("connection successfull at port 8080");
})

let io = require('socket.io')(server)

io.on('connection', (socket) => {
    console.log(`New connection: ${socket.id}`)
    // Recieve event
    socket.on('comment', (data) => {
        console.log(data)
        socket.emit('comment', data)
    })
})