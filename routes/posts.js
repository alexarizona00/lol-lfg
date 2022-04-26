const router = require('express').Router();
const postController = require('../controllers/postController');
const isAuth = require('../config/middleware/isAuth');

//linking auth to post controller 
router.get('/', isAuth, postController.index);
//linking auth to unique post controller 
router.get('/landing/:id', isAuth, postController.commentOn);
//linking new post to post controller 
router.post('/landing/new', isAuth, postController.createPost);


module.exports = router;