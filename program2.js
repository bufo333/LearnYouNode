/// <reference path="/Users/john/Development/learnyounode/typings/main/ambient/node/index.d.ts"/>
'require strict';
var total = 0;

for (var i=2; i<process.argv.length;i++){
    total += parseInt( process.argv[i] );
}
 console.log(total);