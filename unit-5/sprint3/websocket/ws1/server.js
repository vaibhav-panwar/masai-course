const webSocket = require('ws');

const server = new webSocket.WebSocketServer({port:9000});

server.on("connection",(socket)=>{
    socket.on('message',(message)=>{
        console.log(message.toString());
        broadcast(message.toString());
    })
})
function broadcast(msg) {       
    for (const client of server.clients) {
        if (client.readyState === webSocket.OPEN) {
            client.send(msg)
        }
    }
}
