var http = require('http');
var formidable = require('formidable');
//creating a HTML Form:
http.createServer(function (req, res) {
    //parsing the Uploaded file
    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, file) {
            res.write('File Upload');
            res.end();
        });
    } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
    }
}).listen(8080)