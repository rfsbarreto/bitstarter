
var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

//console.log(str);


//var buf= new Buffer(str,'utf-8');



app.get('/', function(request, response) {
  response.send(fs.readFileSync('index.html','utf-8'));
});


port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
