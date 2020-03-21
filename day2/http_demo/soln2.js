const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    const src = fs.createReadStream('./big.file');
    src.on('data', (data) => {
        if (!res.write(data)) {
            src.pause();
        }
    });

    src.on('drain', () => {
        src.resume();
    });

    src.on('end', () => {
        res.end();
    });

}).listen(3000, () => {
    console.log('running on 3000');
});