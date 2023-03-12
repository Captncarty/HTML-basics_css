var http = require('http'); //calling html module for web server
var url = require('url');   //calling url module for parsing
var fs = require('fs'); //calling fs for creating file server

http.createServer(function (req, res) { //res(response) object: contains info abt the HTTP request raised by an event
                                        //req(require) object: Returns back the desired HTTP response
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname; //getting file name from parsing

    fs.readFile(filename, function (err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'})
            return res.end('404 not found');
        }
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data)
        return res.end();
    }); //data = content of file, err = typeError callback
});