/// <reference path="/Users/john/Development/learnyounode/typings/main/ambient/node/index.d.ts"/>

var fs = require('fs');
var dir=[];
var filter = process.argv[3];

fs.readdir(process.argv[2], function(err, list){
    dir = list.filter(function(obj){ 
    if (obj.substring((obj.length - filter.length), (obj.length)) === filter) {
        return true;
    }
    else {
        return false;
    }        
    });
    dir.pop();
    for (var x in dir){
        console.log(dir[x]);
    }

});


/////////////////////////////////////////
// Below is the official solution
////////////////////////////////////////
///////////////////////////////////////
//     var fs = require('fs')  
//     var path = require('path')  
//       
//     fs.readdir(process.argv[2], function (err, list) {  
//       list.forEach(function (file) {  
//         if (path.extname(file) === '.' + process.argv[3])  
//           console.log(file)  
//       })  
//     })
