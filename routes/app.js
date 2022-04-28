const router = require('express').Router();
const appController = require('../controllers/app_controller');
const isAuth = require('../utils/auth');

//linking auth to landing page and linking to controller 
router.get('/', isAuth, appController.index);


module.exports = router;