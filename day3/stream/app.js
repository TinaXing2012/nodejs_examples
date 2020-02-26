const fs = require('fs');
const path = require('path');

const readble = fs.createReadStream(path.join(__dirname, 'Pleiades_large.jpg'),
    { highWaterMark: 8 * 1024 });
const writable = fs.createWriteStream(path.join(__dirname, 'destination.jpg'));

readble.on('data', function (chunk) {
    console.log(chunk.length);
    writable.write(chunk);
});