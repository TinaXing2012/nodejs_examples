// const url = require('url');
// const obj = url.parse('https://tina:xing@gmail.google.com:443/web/user/default?page=2&index=10#top', true);
// console.log(obj);

const http = require('http');
const url = require('url');

http.createServer(function(request, response) {
    console.log(request.url);
    const obj = url.parse(request.url);
    console.log(obj);
    response.end('url string is being retrieved....');

}).listen(3000, function() {
    console.log('Server is running on 3000');
})