//testing code when exports.Prod = new Product('mic');
// const prod1 = require('./product').Prod;
// console.log(prod1.name); //MIC
// prod1.name = 'Mug';
// console.log(prod1.name); //MUG

// const prod2 = require('./product').Prod;
// console.log(prod2.name); //MUG cached

//test code when exports.Prod = Product;
const Product = require('./product').Prod;
const prod1 = new Product('Hello');
prod1.name = 'world';

const Product2 = require('./product').Prod;
const prod2 = new Product2('Hello');
console.log(prod2.name);
