const fs = require('fs');
const path = require('path');

const names = fs.readFileSync('./names.txt', 'utf8');
console.log(names);

fs.readFile('./names.txt', { encoding: 'utf8' }, function (err, data) {
    if (err) console.log('err.......');
    console.log(data);
});

console.log('end');

fs.writeFileSync('./greeting1.txt', 'Hello from TIna', 'utf8');
fs.writeFile('./greeting2.txt', 'Hello from TIna', 'utf8', function (err) {
    if (err) throw err;
    console.log('DOne');
});

fs.readFile(path.join(__dirname, './a/b/hello.txt'), { encoding: 'utf8' }, function (err, data) {
    if (err) console.log('err.......');
    console.log(data, '======');
});