/// <reference path="/Users/john/Development/learnyounode/typings/main/ambient/node/index.d.ts"/>

var net = require('net');
var server = net.createServer(function(socket){
    console.log("Server listening on localhost port: " + process.argv[2]);

        var date = new Date;
        var data = date.getFullYear() +"-"+ ("0" + (date.getMonth() + 1)).slice(-2) +"-"+ ("0" + (date.getDate())).slice(-2) +" "+ date.getHours() +":"+ date.getMinutes();
        socket.write(data);
        socket.write("\n");
        socket.end();
        date.get
    
    
});
server.listen(process.argv[2], '127.0.0.1');







//#########################
//#########################
//### OFFICIAL SOLUTION ###

//var net = require('net')  
       
//     function zeroFill(i) {  
//       return (i < 10 ? '0' : '') + i  
//     }  
///       
  //   function now () {  
  //     var d = new Date()  
  //     return d.getFullYear() + '-'  
  //       + zeroFill(d.getMonth() + 1) + '-'  
  //       + zeroFill(d.getDate()) + ' '  
  //       + zeroFill(d.getHours()) + ':'  
  //      + zeroFill(d.getMinutes())  
  //   }  
  //    
  //   var server = net.createServer(function (socket) {  
  //     socket.end(now() + '\n')  
  //   })  
  //     
  //   server.listen(Number(process.argv[2]))  




