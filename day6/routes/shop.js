const express = require('express');
const path = require('path');

const router = express.Router();

router.all('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

router.get('/error-demo', (req, res, next) => {
    throw new Error('This is to test Error handling in express');
});

module.exports = router;