

var fs = require ('fs');
const http  = require('http');
const url = require('url');


function readFile(response,file) {
    fs.readFile(file, function(err, data){
        response.end(data)
    })
}


var callback = function (request, response) {
    response.writeHead(200, {"Content-type":"text/plain; charset=utf-8"});

    var parts = url.parse(request.url)

    if(parts.path == '/'){
        readFile(response,"../components/FormLogIn.tsx");
    }else {
        response.end("Rota Inválida: " + parts.path)
    }
};

var server = http.createServer(callback)

server.listen(3000)

console.log("Servidor Iniciado em http://localhost:3000")