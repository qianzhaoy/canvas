var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.emit('some event', {
    for: 'everyone'
});
io.on('connection', function (socket) {
    socket.on('path', function (msg) {
        io.emit('path', msg);
    });
});
io.on('connection', function (socket) {
    socket.on('all', function (msg) {
        io.emit('all', msg);
    });
});
io.on('connection', function (socket) {
    socket.on('clear', function (msg) {
        io.emit('clear', msg);
    });
});
app.use(express.static('static'));
http.listen(8081, function () {
    console.log('监听8081端口成功');
});
