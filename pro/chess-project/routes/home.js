const express = require('express');
const router = express.Router();
const authController = require('../controllers/homeController');

router.get('/', authController.getHome);

module.exports = router;
