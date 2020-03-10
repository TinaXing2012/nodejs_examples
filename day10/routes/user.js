const express = require('express');
const path = require('path');
const userController = require('../controllers/user');

const router = express.Router();

router.get('/signup', userController.getSignupForm)
router.post('/signup', userController.postSignup)

module.exports = router;