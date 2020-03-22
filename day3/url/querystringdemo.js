const querystring = require('querystring');
const obj = querystring.parse('username=tina&password=xing');
console.log(obj);

const myurl = querystring.stringify(obj);
console.log(myurl);