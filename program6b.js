/// <reference path="/Users/john/Development/learnyounode/typings/main/ambient/node/index.d.ts"/>

var ReadDir = require('./program6a.js').ReadDir;

ReadDir(process.argv[2],process.argv[3],function(err,data){
    if (err){
        return console.err(err);
    }
    else {
        data.forEach(function(element) {
            console.log(element);
        }, this);

    }
})