const router = require('express').Router();
const landingController = require('../controllers/landingController');
const isAuth = require('../config/middleware/isAuth');

//linking auth to landing page and linking to controller 
router.get('/', isAuth, landingController.index);


module.exports = router;