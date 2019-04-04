const http = require('http');
const socketio = require('socket.io');
const server = http.createServer((req,res) => {
    res.end('hey');
});
server.listen(3000);

const io = socketio.listen(server);
io.on('connection', (socket) => {
    socket.on('joinRoom', (data) => {
        socket.join(data.name, () => {
            //socket.to(data.name).emit('new join',{count}); //Kullanıcı Dışında bütün odadakilere
            io.to(data.name).emit('new join', {count: getOnlineCount(io, data)}); // Kullanıcı Dahil bütün odadakilere
            socket.emit('log', {message: 'odaya girdiniz'});
            console.log(getOnlineCount(io, data));
        });
    });

    socket.on('leaveRoom', (data) => {
        socket.leave(data.name, () => {
            io.to(data.name).emit('LeavedRoom', {count: getOnlineCount(io, data)});
            console.log(getOnlineCount(io, data));
        });
    });
});
const getOnlineCount = (io,data) => io.sockets.adapter.rooms[data.name].length; // 0 olduğunda hata verdi try-catch undefined döndürüyor!