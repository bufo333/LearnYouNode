/// <reference path="/Users/john/Development/learnyounode/typings/main/ambient/node/index.d.ts"/>

var http = require('http').get;
var result ="";
var i=2;
var x=0;

function GetRequest(callback){
   
if (i < process.argv.length && i !==x) {
    x = i;
    
    http(process.argv[i], function(res, i){
    result="";
    res.on('data', function(data){
       result += data;
    })
    res.on('end',function(err,Callback){
        result = result.toString('utf-8');
        callback(err,result);
    })
});
}
}


function Callback(err, result){
    
    if (err) { 
        console.log(err);
    }
    else {
        console.log(result);
        i++;
        if(i<process.argv.length){
            GetRequest(Callback);
        }
        
        }
    }
 GetRequest(Callback);
 
 
 
 
 
 //////////////////////
 // Official Answer ///
 //////////////////////
 //////////////////////
 //////////////////////
 //////////////////////
   
 //    var http = require('http')  
 //    var bl = require('bl')  
 //    var results = []  
 //    var count = 0  
       
 //    function printResults () {  
 //      for (var i = 0; i < 3; i++)  
 //        console.log(results[i])  
 //    }  
       
 //    function httpGet (index) {  
 //      http.get(process.argv[2 + index], function (response) {  
 //        response.pipe(bl(function (err, data) {  
 //          if (err)  
 //            return console.error(err)  
 //      
 //          results[index] = data.toString()  
 //          count++  
//       
//           if (count == 3)  
//             printResults()  
//         }))  
//       })  
//     }  
//       
//     for (var i = 0; i < 3; i++)  
//       httpGet(i)  