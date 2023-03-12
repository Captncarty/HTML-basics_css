var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
//creating a HTML Form:
http.createServer(function (req, res) {
    //parsing the Uploaded file
    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            //saving the uploaded file:
            var oldpath = files.filetoupload.filepath;
            var newpath = '/home/captncarty/Desktop/HTML_Basics/js_dev/NPM/' + files.filetoupload.originalFilename;
            fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
                res.write('File Uploaded and moved!');
                res.end();
            });
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