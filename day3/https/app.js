/**
 * http://slproweb.com/products/Win32OpenSSL.html
 *
 * req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout privateKey.key -out certificate.crt

 */

const https = require('https');
const fs = require('fs');

const server = https.createServer({
    cert: fs.readFileSync('./certificate.crt'),
    key: fs.readFileSync('./privateKey.key')
});

server.on('request', function (req, res) {
    res.end('Hello from Https.....');
});

server.listen(443, function () {
    console.log('server is running on 443');
})