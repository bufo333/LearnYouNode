/// <reference path="/Users/john/Development/learnyounode/typings/main/ambient/node/index.d.ts"/>
'require strict';
var fs = require('fs');
var file = fs.readFileSync(process.argv[2], 'utf8');

var file = file.split('\n');

console.log(file.length -1);