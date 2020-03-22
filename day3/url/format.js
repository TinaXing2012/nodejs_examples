const url = require('url');
const urlObj = {
    protocol: 'https:',
    slashes: true,
    auth: 'tina:xing',
    host: 'gmail.google.com:443',
    port: '443',
    hostname: 'gmail.google.com',
    search: '?page=2&index=10',
    pathname: '/web/user/default'
};
const myurl = url.format(urlObj);
console.log(myurl);