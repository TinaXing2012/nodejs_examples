const fs = require('fs');
const gzip = require('zlib').createGzip();

const readStream = fs.createReadStream('./readme.txt');
const writeStream = fs.createWriteStream('./destination.txt.gz');

readStream.pipe(gzip).pipe(writeStream);