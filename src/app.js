var http = require('http');
var server = http.createServer(function(request,response){

});

server.listen(3000, function(){
    console.log("Servidor iniciado.");
});