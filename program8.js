/// <reference path="/Users/john/Development/learnyounode/typings/main/ambient/node/index.d.ts"/>

var http = require('http').get;
var result= "";
http(process.argv[2], function(res){
    res.on('data', function(data){
       result += data;
    })
    res.on('end',function(){
        result = result.toString('utf-8');
        console.log(result.length);
        console.log(result);
    })
});
