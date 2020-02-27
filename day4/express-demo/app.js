const express = require('express');

const app = express();

app.enable('case sensitive routing');
app.enable('etag');
app.set('env', 'development');

app.use((req, res, next) => {
    console.log('this is a middleware always being called.....');
    next();
});

app.use('/users', (req, res, next) => {
    res.send('Hello from /users');
});
//  '/' => '/*'
app.use('/', (req, res, next) => {
    res.send('Hello from Express!!!');
});


app.listen(3000, function () {
    console.log('server is running on 3000');
});