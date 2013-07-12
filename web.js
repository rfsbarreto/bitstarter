var express = require('express');

var app = express.createServer(express.logger());

var str= fs.readFileSync('index.html');
//var buf= new Buffer(str,'utf-8');



app.get('/', function(request, response) {
  response.send(str.toString)

port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
