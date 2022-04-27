const router = require('express').Router();
const landingController = require('../controllers/landing_controller');

//linking auth to landing page and linking to controller 
router.get('/', landingController.index);


module.exports = router;