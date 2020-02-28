const express = require('express');

const router = express.Router();

router.all('/', (req, res, next) => {
    res.send('This is / page');
});

router.get('/error-demo', (req, res, next) => {
    throw new Error('This is to test Error handling in express');
});

module.exports = router;