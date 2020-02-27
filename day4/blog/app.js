const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer(function (req, res) {

    const url = req.url;
    if (url === '/') {
        fs.createReadStream(path.join(__dirname, 'index.html')).pipe(res);
    } else if (url === '/save') {
        req.pipe(fs.createWriteStream(path.join(__dirname, 'blog.txt')));
        res.end('Success!');
    } else if (url === '/delete') {

    }

}).listen(3000);