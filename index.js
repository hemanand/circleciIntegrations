var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('My first Successs full NodeJs app Deployed!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
}).listen(3000);