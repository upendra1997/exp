var http=require('http');   //require is a javascript function
var url=require('url');
var server=http.createServer(function(req,res){   //creating server from this line
    var obj=url.parse(req.url,true);    //parsing url
    req.setEncoding('utf8');
    res.writeHead(200, { 'Content-Type': 'application/json' })     //sending data in json
    var path=obj.pathname;       //creating instance
    var time = obj.query.iso;
    var date = new Date(time);   //date object
    var object={};
    if(path=='/api/parsetime'){           
        object.hour=date.getHours();       
        object.minute=date.getMinutes();   //date object functions
        object.second=date.getSeconds();     
    }
    else if(path=='/api/unixtime'){
        object.unixtime = date.getTime();
    }
    res.write(JSON.stringify(object),'utf8')
    object = {};
    res.end();
});
server.listen(process.argv[2]);



// var http = require('http');
// var map=require('through2-map');
// var server = http.createServer(function(req,res){
//     req.pipe(map(function(data){
//         return data.toString().toUpperCase();
//     })).pipe(res);
// });
// server.listen(process.argv[2]);

// var http = require('http');
// var fs = require('fs');
// var server = http.createServer(function(req,res){
//     req.setEncoding('utf8');
//     req.on('data',function(data){
//         res.write(data.toUpperCase());
//     })
//     req.on('end',function(){
//         res.end();
//     });
// });
// server.listen(process.argv[2]);


// var http = require('http');
// var fs=require("fs");

// var server = http.createServer(function(req,res){
//     res.writeHead(200, { 'content-type': 'text/plain' });
//     fs.createReadStream(process.argv[3]).pipe(res);
// });
// server.listen(process.argv[2]);




// var net=require('net');
// var strftime = require('strftime');
// var server=net.createServer(function(socket){
//             // 2017-09-25 06:51
//             // var date = new Date();
//             // date.getFullYear();  
//             // date.getMonth();     // starts at 0  
//             // date.getDate();      // returns the day of month  
//             // date.getHours();  
//             // date.getMinutes();
//             socket.end(strftime('%F %H:%M',new Date())+'\n');
//             // socket.end();
// });
// server.listen(process.argv[2]);

// var http = require('http');
// var bl=require('bl');

// var data = ['', '', ''];

// function count(i) {
//     http.get(process.argv[i], function(response) {
//         response.setEncoding('utf8');
//         response.pipe(bl(function(err,da){
//             if(err) throw err;
//             data[i - 2] += da;
//             i++;
//             if(i==4){
//                 for(var j in data)
//                     console.log(data[j]);
//             }
//         }));
        
        
        
        
        // response.on('data', function(da) {  });
        // response.on('error', console.log);
        // response.on('end', function() {
        //     if(i==4){
        //         for(var j in data)
        //         console.log(data[j]);
        //     }
        // });
//     });
// }

// for (var i = 2; i < 5; i++) {
//     count(i);
// }
// console.log(data);
// var http = require('http');
// var url = process.argv[2];
// http.get(url,function(response){
//     var data = '';
//     response.setEncoding('utf8');
//     response.on('data',function(d){data+=d});
//     response.on('error',console.log);
//     response.on('end',function(){
//         console.log(data.length);
//         console.log(data);
//     });

// });


// var http = require('http');
// var url = process.argv[2];
// http.get(url,function(response){
//     response.setEncoding('utf8');
//     response.on('data',console.log);
//     response.on('error',console.error);
// });



// var mod = require('./module');
// // var list = mod(process.argv[2],process.argv[3],function(err,data){
//     if(err) console.log(err);
//     for(var i in data){
//         console.log(data[i]);
// }
// });



// var file = process.argv[2];
// var fs = require('fs');
// var buf = fs.readFile(file,'utf-8',function(err,obj){
//     if (err) throw err;
//     var string = obj.split('\n');
//     console.log(string.length - 1);
// });



// var sum=0;
// for(var i=2;i<process.argv.length;i++){
// 	sum+=Number(process.argv[i]);
// }
// console.log(sum);
