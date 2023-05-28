const webSocket = require('ws');

const server = new webSocket.WebSocketServer({port:9000});
let bjpcount = 0;
let congcount = 0;
let aapcount = 0;

server.on('connection',(socket)=>{
    
    socket.on('message', (message) => {
        console.log(message.toString());
        let a = message.toString();
        if(a=="bjp"){
            bjpcount++;
            
            broadcast(JSON.stringify({ bjpcount, congcount, aapcount }));
        }
        else if(a=="cong"){
            congcount++;
            broadcast(JSON.stringify({ bjpcount, congcount, aapcount }));
        }
        else if(a=="aap"){
            aapcount++;
            broadcast(JSON.stringify({ bjpcount, congcount, aapcount }));
        }
        else{
            broadcast(JSON.stringify({ bjpcount, congcount, aapcount }));
        }
        
    })
})
function broadcast(msg) {
    for (const client of server.clients) {
        if (client.readyState === webSocket.OPEN) {
            client.send(msg)
        }
    }
}