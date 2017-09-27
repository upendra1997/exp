


// module.exports = function filter(path,ext,callback){
//     ext = '.' + ext;
//     var lenext = ext.length;    
//     var fs = require('fs');
//     fs.readdir(path,function(err,list){
//         if(err) return callback(err);
//         //console.log(path,'   ',ext,'   ',list);
//         var a = [];
//         for(var i in list){
//             //console.log(path,'   ',ext,'   ',list);
//             if(list[i].slice(-1*lenext)== ext)
//                 a.push(list[i]);
//         }
//       return callback(null,a); 
//     });
// }


// var path = process.argv[2];
// var ext = '.' + process.argv[3];
// var lenext = ext.length;
// var fs = require('fs');
// fs.readdir(path,function(err,list){
//     if(err) console.log(err);
//     //console.log(path,'   ',ext,'   ',list);
//     for(var i in list){
//         if(list[i].slice(-1*lenext)== ext)
//             console.log(list[i]);  
//     }
// });