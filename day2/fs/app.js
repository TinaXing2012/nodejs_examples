const fs = require('fs');

const names = fs.readFileSync('./names.txt', 'utf8');
console.log(names);

fs.readFile('./names.txt', { encoding: 'utf8' }, function (err, data) {
    if (err) console.log('err.......');
    console.log(data);
});

console.log('end');