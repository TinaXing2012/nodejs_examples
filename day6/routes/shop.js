const express = require('express');
const path = require('path');
const shopController = require('../controllers/shop');

const router = express.Router();

router.all('/', shopController.getAllProducts);

router.get('/error-demo', (req, res, next) => {
    throw new Error('This is to test Error handling in express');
});

module.exports = router;