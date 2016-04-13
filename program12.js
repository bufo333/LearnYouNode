/// <reference path="/Users/john/Development/learnyounode/typings/main/ambient/node/index.d.ts"/>

var http = require('http');
var fs = require('fs');
var fullFile="";
var server = http.createServer(function(req,res){
    
    if (req.method==='POST'){
        req.on('data', function(chunk){
            fullFile += chunk;
        });
        req.on('end', function(){
        res.write(fullFile.toUpperCase()); 
    });
    }
        
}).listen(process.argv[2]);



