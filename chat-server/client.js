var io = require('socket.io-client');

var socket = io('http://localhost:4040');
var socket2 = io('http://localhost:4040');

console.log(socket.id);

socket.on('connect',() => {
    console.log("socket",socket.id);
    socket.emit('event','test',(data)=>{
        console.log(data,'recieved');
    });
})

socket2.on('connect',() => {
    console.log("socket2",socket2.id);
    socket2.emit('event','another one',(data)=>{
        console.log(data,'recieved');
    })
})