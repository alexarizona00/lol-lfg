const router = require('express').Router();
const userController = require('../controllers/userController');
const isAuth = require('../config/Unknown(middleware/isAuth)');

//linking sign up page with controller 
router.get('/login', isAuth, userController.registrationPage);
//linking logout page with controller 
router.get('/logout', isAuth, userController.signOutUser);
//linking profile page with controller 
router.get('/profile', isAuth, userController.userProfile);


module.exports = router;