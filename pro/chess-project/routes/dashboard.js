const express = require('express');
const router = express.Router();
const { ensureAuthenticated, roleCheck } = require('../middlewares/dashboardMiddleware');
const dashboardController = require('../controllers/dashboardController');



router.get('/player', ensureAuthenticated, roleCheck('player'), dashboardController.getplayer);

router.get('/organizer', ensureAuthenticated, roleCheck('organizer'), dashboardController.getorganizer);

router.get('/coordinator', ensureAuthenticated, roleCheck('coordinator'), dashboardController.getcoordinator);

router.get('/subscription', ensureAuthenticated, dashboardController.getsubscription);
router.get('/home', ensureAuthenticated, dashboardController.gethome);
router.get('/ecommerce-store', ensureAuthenticated, dashboardController.getecommerce_store);    
router.get('/tournaments', ensureAuthenticated, dashboardController.gettournaments);
router.get('/growth-tracking', ensureAuthenticated, dashboardController.getgrowthtracking);

module.exports = router;
