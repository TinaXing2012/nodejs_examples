const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();


router.get('/add-product', (req, res, next) => {
    res.render('add-product', { name: 'Tina' });
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