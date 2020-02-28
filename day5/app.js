const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
//false: querystring
//true: qs
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/add-product', (req, res, next) => {
    // res.setHeader('content-type', 'text/html');
    // const file = fs.readFileSync(path.join(__dirname, 'views', 'add-product.html'), 'utf-8');
    // res.send(file.toString());
    fs.createReadStream(path.join(__dirname, 'views', 'add-product.html')).pipe(res);
});

app.use('/save-product', (req, res, next) => {
    console.log('save product...');
    console.log(req.body);
    res.send('Save Successfully');
});

app.listen(3000);