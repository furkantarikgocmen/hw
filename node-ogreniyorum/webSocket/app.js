const http = require('http');
const socketio = require('socket.io');
const server = http.createServer((req, res) => {
    res.end('hey!');
});

server.listen(3000);

const io = socketio.listen(server);

io.sockets.on('connection', (socket) =>{
    console.log("Kullanıcı Bağlandı");

    socket.on('Hello', (data) => {
        console.log("Selam");
        socket.emit('AS');
        //console.log(data);
        console.log(`Kullanıcı Adı : ${data.username}`);
        console.log(`Kullanıcı Şifresi : ${data.password}`);
    });

    socket.on('disconnect', () =>{
        console.log("Kullanıcı Ayrıldı");
    })
});