/// <reference path="/Users/john/Development/learnyounode/typings/main/ambient/node/index.d.ts"/>

var http = require('http');
var fs = require('fs');
var file = fs.createReadStream(process.argv[3]);
var server = http.createServer(function(req,res){
    console.log(res.statusCode + " " + req.socket.remoteAddress +" " + req.method + " " + req.url + " HTTP/" + req.httpVersion);
    res.statusCode = 200;
    file.on("data", function(chunk){
        res.write(chunk);
    });
    file.on("end", function(){
        res.end();
    });
        
}).listen(process.argv[2]);



///////////////////////////////
////// Offical Solution ///////
//var http = require('http')  
//     var fs = require('fs')  
//       
//     var server = http.createServer(function (req, res) {  
//       res.writeHead(200, { 'content-type': 'text/plain' })  
//       
//       fs.createReadStream(process.argv[3]).pipe(res)  
//     })  
//       
//     server.listen(Number(process.argv[2]))  