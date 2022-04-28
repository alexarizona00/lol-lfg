const router = require('express').Router();
const userController = require('../controllers/user_controller');
const isAuth = require('../utils/auth');

//linking sign up page with controller 
router.get('/login', isAuth, userController.registerUser);
//linking logout page with controller 
router.get('/logout', isAuth, userController.signOutUser);
//linking profile page with controller 
router.get('/profile', isAuth, userController.userProfile);


module.exports = router;