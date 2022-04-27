const router = require('express').Router();
const postController = require('../controllers/posts_controller');
const isAuth = require('../config/middleware/isAuth');

//linking auth to post controller 
router.get('/', isAuth, postController.index);
//linking auth to unique post controller 
router.get('/:id', isAuth, postController.getPost);
//linking new post to post controller 
router.post('/new', isAuth, postController.createPost);


module.exports = router;