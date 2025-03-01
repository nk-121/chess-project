const express = require('express');
const router = express.Router();
const { ensureAuthenticated, roleCheck } = require('../middlewares/dashboardMiddleware');
const dashboardController = require('../controllers/dashboardController');



router.get('/player', ensureAuthenticated, roleCheck('player'), dashboardController.getplayer);

router.get('/organizer', ensureAuthenticated, roleCheck('organizer'), dashboardController.getorganizer);

router.get('/coordinator', ensureAuthenticated, roleCheck('coordinator'),dashboardController.getcoordinator);

module.exports = router;
