/// <reference path="/Users/john/Development/learnyounode/typings/main/ambient/node/index.d.ts"/>

var http = require('http');
var tme = {};
var url = require('url');
var server = http.createServer(function(req,res){
    var parsedUrl = url.parse(req.url,true);
    if (parsedUrl.pathname === '/api/parsetime'){
       var newDate = new Date(parsedUrl.query.iso);
       tme = {};
       tme.hour = newDate.getHours();
       tme.minute = newDate.getMinutes();
       tme.second = newDate.getSeconds();
       res.statusCode = 200;
       res.setHeader( 'Content-Type', 'application-json' );
       res.write(JSON.stringify(tme));
    }
    if (parsedUrl.pathname === '/api/unixtime'){
       var newDate = new Date(parsedUrl.query.iso);
       tme = {};
       tme.unixtime = newDate.getTime();
       res.statusCode = 200;
       res.setHeader( 'Content-Type', 'application-json' );
       res.write(JSON.stringify(tme));
    }
    res.end();
}).listen(process.argv[2]);



