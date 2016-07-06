var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('{"name":"Alex"}');
}).listen(3000);

console.log('Server running on port 3000');
