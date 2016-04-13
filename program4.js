/// <reference path="/Users/john/Development/learnyounode/typings/main/ambient/node/index.d.ts"/>
'require strict';
var fs = require('fs');
var file=[];
var file = fs.readFile(process.argv[2], 'utf8', function(err, data){
    file = data.split('\n');
    console.log(file.length -1);
});

