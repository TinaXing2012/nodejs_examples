const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();
//false: querystring
//true: qs
app.use(bodyParser.urlencoded({ extended: true }));
//http://localhost:3000/css/main.css
// app.use(express.static(path.join(__dirname, 'public')));
//http://localhost:3000/abc => package till public
// http://localhost:3000/abc/css/main.css 
// app.use('/abc', express.static(path.join(__dirname, 'public')));
//http://localhost:3000/abc => css folder
//http://localhost:3000/abc/main.css
app.use('/abc', express.static(path.join(__dirname, 'public', 'css')));


// app.use('/admin', adminRoutes);
// app.use(shopRoutes);

app.use((req, res, next) => {
    console.log('this is the first middleware....');
    next();
});

app.use((req, res, next) => {
    next('fadfadfadfafsa');
    // console.log('this is the second middleware....');
});

app.use((req, res, next) => {
    console.log('this is the third middleware....');
    res.end('Done....');
});


app.use((req, res, next) => {
    res.status(404).send('Page Not Found');
});

app.use((err, req, res, next) => {
    res.status(500).send('Something Broke!');
});

app.listen(3000);