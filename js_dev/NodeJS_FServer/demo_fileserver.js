//Calling Modules
var http = require('http');
var url = require('url');
var fs = require('fs');

//Creating file server
http.createServer(function (req, res) {
    var q = url.parse(req.url, true); //parsing queried string
    var filename = "." + q.pathname;

    //file server readFile method, To open file
    fs.readFile(filename, function (err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end ('404 not found');
        };
        res.writeHead(200, {'Content': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);
