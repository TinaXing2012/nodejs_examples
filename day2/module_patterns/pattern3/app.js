const p1 = require('./pattern3');
console.log(p1.name); //Miss Xing
p1.name = 'Tina Xing';

const p2 = require('./pattern3');
console.log(p2.name); //Tina Xing cached