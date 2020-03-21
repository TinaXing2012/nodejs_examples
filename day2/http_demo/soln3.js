const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    fs.createReadStream('./big.file').pipe(res);
}).listen(3000, () => {
    console.log('running on 3000');
});