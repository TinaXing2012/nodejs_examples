const http = require('http');

const server = http.createServer();

server.on('request', function (request, response) {
    response.writeHead(200, { 'content-type': 'text/plain' });
    response.write('This is Node.js Tutorial....\n');
    response.write('Please support...');
    response.write('Thank you!!!!!!!');
    response.end('Hello from Tina');
    response.end('Twice...');
});

server.listen(3000, function () {
    console.log('server is running on 3000');
})