const router = require('express').Router();
const comController = require('../controllers/comController');
const isAuth = require('../config/middleware/isAuth');

//linking auth to post controller 
router.get('/', isAuth, comController.index);
//linking new post to post controller 
router.post('/new', isAuth, comController.createCom);

module.exports = router;