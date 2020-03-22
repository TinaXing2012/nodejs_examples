const express = require('express');
const fs = require('fs');
const path = require('path');
// const bodyParser = require('body-parser');

const app = express();
app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

app.get(['/', '/add-product'], (req, res, next) => {
    fs.createReadStream(path.join(__dirname, '.', 'views', 'add-product.html')).pipe(res);
});

app.post('/add-product', (req, res, next) => {
    console.log('save product...');
    console.log(req.body);
    res.send('Save Successfully');
});

app.listen(3000);