const http = require('http');

http.createServer(function (request, response) {
    response.write('Nodemon is great...');
    response.write('This is where I changed.....');
    response.end('Hello World');

}).listen(3000, function () {
    console.log('Server is running on 3000');
})