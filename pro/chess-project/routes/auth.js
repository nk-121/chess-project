const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/signup', (req, res) => {
    res.render('layout/auth', { body: '../auth/signup' });
});

router.post('/signup', authController.postSignup);

router.get('/login', (req, res) => {
    res.render('layout/auth', { body: '../auth/login' });
});

router.post('/login', authController.postLogin);

module.exports = router;
