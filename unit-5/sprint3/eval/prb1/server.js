const express = require('express');
const {Server} = require('socket.io');
const http = require('http');
const path = require("path");
const app = express();
app.use(express.json());
app.use(express.static('public'));
app.get("/auction",(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/auction.html"))
})
const server = http.createServer(app);

const io = new Server(server);
let users = [];
io.on('connection',(socket)=>{
    console.log(`New connection : ${socket.id}`);
    socket.on("new-bid", (data) => {
      socket.join(data.item);
      users.push(data);
        let max = 0;
        let mname;
        for (let i = 0; i < users.length; i++) {
            if(users.item = data.item){
                if (max < users[i].bid) {
                    max = users[i].bid;
                    mname = users[i].name;
                }
            }
        }
        let deta = { name: mname, bid: max };
        socket.broadcast.to(data.item).emit("highest-bid", deta);
    })
    
})

server.listen(8080,()=>{
    console.log('server running at port 8080');
})