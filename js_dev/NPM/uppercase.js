//calling Package:
var up = require('upper-case');
var http = require('http');

//calling functions
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(up.upperCase('MitBUSiSHi'));
    res.end();
}).listen(8080);
