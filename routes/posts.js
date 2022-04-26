const router = require('express').Router();
const postController = require('../controllers/postController');
const isAuth = require('../config/middleware/isAuth');

//linking auth to post controller 
router.get('/', isAuth, postController.index);
//linking new post to post controller 
router.post('/new', isAuth, postController.createPost);


module.exports = router;