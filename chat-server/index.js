var server = require('http').createServer();
var io = require('socket.io')(server);
fs = require('fs');
var PORT = 4040;
let say = require('say');

io.on('connection',function(socket){
    socket.on('event',(message,sender,fn) => {
       if(fn) fn(log);
       console.log(sender,message);
       io.emit('bc',{sender : sender,message : message});
       //say commented, uncomment this if you want to listen to messages
       //say.speak(message);
    });
    socket.on('disconnect',()=>{});
})
server.listen(PORT,()=>{
    console.log("Server running in : ",PORT);
});
