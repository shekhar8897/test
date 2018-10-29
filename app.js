var app = require("express")();
var http=require("http").Server(app);
var io=require("socket.io")(http);
app.get("/",function(req,res){
     res.sendFile(__dirname+"/index.html");   
    
});
var clients = 0;
io.on('connection', function(socket) {
    
    setTimeout(function abc(){
        socket.emit('ServerEvent',{desc:'Good evening'});
    },2000);
 });



http.listen(5000,(socket)=>{
      console.log('listening at Port:5000');      
});