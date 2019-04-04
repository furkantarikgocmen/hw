const http = require('http');
const socketio = require('socket.io');
const server = http.createServer((req,res) =>{
    res.end('hey');
});

server.listen(3000);
const io = socketio.listen(server);
const nsp = io.of('/sohbet');

nsp.on('connection', (socket) => {
    console.log("Kullanıcı Bağlandı");

    socket.on('isim yaz' , (data) =>{
        socket.emit('Bağlandınız');
        nsp.emit(`${data.name} Bağlandı`)
    });
});