const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();


router.get('/add-product', (req, res, next) => {
    // res.setHeader('content-type', 'text/html');
    // const file = fs.readFileSync(path.join(__dirname, 'views', 'add-product.html'), 'utf-8');
    // res.send(file.toString());
    fs.createReadStream(path.join(__dirname, '..', 'views', 'add-product.html')).pipe(res);
});

router.post('/add-product', (req, res, next) => {
    console.log('save product...');
    console.log(req.body);
    res.send('Save Successfully');
});

router.get('/edit-product', (req, res, next) => {
    fs.createReadStream(path.join(__dirname, '..', 'views', 'add-product.html')).pipe(res);
});

router.post('/edit-product', (req, res, next) => {
    fs.createReadStream(path.join(__dirname, '..', 'views', 'add-product.html')).pipe(res);
});

router.post('/delete-product', (req, res, next) => {
    fs.createReadStream(path.join(__dirname, '..', 'views', 'add-product.html')).pipe(res);
});


module.exports = router;