/// <reference path="/Users/john/Development/learnyounode/typings/main/ambient/node/index.d.ts"/>

var fs = require('fs');


exports.ReadDir = function(dirName,extension,callback){
var dir=[];
var filter = extension;

fs.readdir(dirName, function(err, list){
    dir = list.filter(function(obj){ 
    if (obj.substring((obj.length - filter.length), (obj.length)) === filter) {
        return true;
    }
    else {
        return false;
    }        
    });
    dir.pop();
    if (err){
        callback(err);
    }
    else{
        callback(err,dir);
    }
});
}


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
