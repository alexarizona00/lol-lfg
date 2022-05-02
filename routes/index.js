
const landingController = require("../controllers/landing_controller");
const userController = require("../controllers/user_controller");
const appController = require("../controllers/app_controller");
const postsController = require("../controllers/posts_controller");
// const isAuth = require('../utils/auth');




module.exports = app => {

    //add or remove or change route as needed 
    // app.get('/user', userController);
    app.get('/app', appController.loggedin);
    app.get('/posts', postsController.getPost);
    // app.get('/posts', postsController);
    // app.get('/comments', comments);
    app.get('/', landingController.index);
    //linking sign up page with controller 
    app.get('/login', userController.renderLogin);
    app.post('/login', userController.loginUser);
    app.post('/register', userController.registerUser);
    //linking logout page with controller 
    app.get('/logout', userController.signOutUser);
    //linking profile page with controller 
    app.get('/profile', userController.userProfile);
    app.get('/createpost', postsController.createPost);
    app.post('/createpost', postsController.updatePost);
}

