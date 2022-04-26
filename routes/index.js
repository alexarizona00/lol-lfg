const router = require('express').Router();
const appController = require('../controllers/appController');
const landingController = require('../controllers/landingController');

//linking home page to controller 
router.get('/', appController);
router.get('/landing', landingController);

module.exports = router;