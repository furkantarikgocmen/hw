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

            getRoom(socket);
        });
    });

    socket.on('leaveRoom', (data) => {
        socket.leave(data.name, () => {
            io.to(data.name).emit('LeavedRoom', {count: getOnlineCount(io, data)});
            console.log(getOnlineCount(io, data));

            getRoom(socket);
        });
    });
});
const getOnlineCount = (io,data) =>  {
    const room = io.sockets.adapter.rooms[data.name];
    return room ? room.length : 0;
};

const getRoom = (socket) => {
    const rooms = Object.keys(socket.rooms);
    console.log(rooms)
};