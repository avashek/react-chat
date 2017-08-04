var server = require('http').createServer();
var io = require('socket.io')(server);
fs = require('fs');
var PORT = 4040;
var log = [];
io.on('connection',function(socket){
    socket.on('event',(message,sender,fn) => {
       if(fn) fn(log);
       console.log(sender,message);
       //log.push({sender : message});
       io.emit('bc',{sender : sender,message : message});
    });
    socket.on('disconnect',()=>{});
})
server.listen(PORT,()=>{
    console.log("Server running in : ",PORT);
});