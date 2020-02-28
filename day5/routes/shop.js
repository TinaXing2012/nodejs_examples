const express = require('express');

const router = express.Router();

router.all('/', (req, res, next) => {
    res.send('This is / page');
});

module.exports = router;