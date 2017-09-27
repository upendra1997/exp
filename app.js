var express = require('express');
var app = express();
var fs=require('fs');
app.get('/books/',function(req,res){
    fs.readFile(process.argv[3],function(err,data){
        if(err) throw err;
        // data.setEncoding('utf8');
        res.json(JSON.parse(data));
    });
});
app.listen(process.argv[2]);




// var express = require('express');
// var app = express();
// app.get('/search/',function(req,res){
//     res.send(req.query);
// });
// app.listen(process.argv[2]);





// var express = require('express');
// var app = express();
// var crypto = require('crypto');
// app.put('/message/:id',function(req,res){
//     res.end(crypto.createHash('sha1').update(new Date().toDateString()+req.params.id).digest('hex'));
// });
// app.listen(process.argv[2]);


// var express = require('express');
// var app = express();
// var stylus = require('stylus');
// app.use(express.static(process.argv[3]));
// app.use(stylus.middleware(process.argv[3]));
// app.listen(process.argv[2]);



// var express = require('express');
// var app = express();
// var bodyparser=require('body-parser');
// app.use(bodyparser.urlencoded({extended: false}));
// app.use(bodyparser.json());
// app.post('/form',function(req,res){
//     res.end(req.body.str.split('').reverse().join(''));
// });
// app.listen(process.argv[2]);






// var express = require('express');
// var app = express();
// app.set('view engine', 'jade')
// app.use(express.static(process.argv[3]))
// app.get('/home/',function(req,res){
//     res.render(process.argv[3],{date: new Date().toDateString()});
// });
// app.listen(process.argv[2]);





// var express = require('express');
// var app = express();
// app.use(express.static(process.argv[3]))
// app.listen(process.argv[2]);




// var express = require('express');
// var app = express();
// app.get('/home/',function(req,res){
//     res.end('Hello World!');
// });
// app.listen(process.argv[2]);