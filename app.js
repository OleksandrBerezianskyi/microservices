var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('{"name":"Alex", "address":"71 Broadway, New York, USA"}');
}).listen(3000);

console.log('Server running on port 3000');
