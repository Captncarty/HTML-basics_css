//making event using readstream
var fs = require('fs');
var rs = fs.createReadStream('./event.txt');
rs.on('open', function () {
    console.log('The file is opened');
});