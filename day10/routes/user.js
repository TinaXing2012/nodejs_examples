const express = require('express');
const path = require('path');
const userController = require('../controllers/user');

const router = express.Router();

router.get('/signup', userController.getSignupForm)


module.exports = router;