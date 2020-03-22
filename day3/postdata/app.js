const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input name="username"><input name="password"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        res.end();
    } else if (url === '/message' && method == 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', () => {
            const bodyData = Buffer.concat(body).toString();
            console.log(bodyData);
            res.end('Done');
        });
    }

});

server.listen(3000);