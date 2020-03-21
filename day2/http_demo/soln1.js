const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('./big.file', (err, data) => {
        res.end(data);
    });
}).listen(3000, () => {
    console.log('running on 3000');
})