const http = require('http');
const socketio = require('socket.io');
const server = http.createServer((req, res) => {
    res.end('hey!');
});

server.listen(3000);

const io = socketio.listen(server);

io.sockets.on('connection', (socket) =>{

    socket.on('connection',(data) =>{
        socket.broadcast.emit('connection' , {name : data.name});
        console.log(data.name);
    });

    socket.on('message', (data) =>{
        socket.broadcast.emit('message' , {name : data.name, message : data.message});
        console.log(data.message);
    });

    socket.on('disconnect', () =>{
    });

});