const router = require('express').Router();
const postController = require('../controllers/posts_controller');
const isAuth = require('../utils/auth');

//linking auth to post controller 
router.get('/', isAuth, postController.getPost);
//linking auth to unique post controller 
router.get('/:id', isAuth, postController.getPost);
//linking new post to post controller 
router.post('/new', isAuth, postController.createPost);


module.exports = router;