module.exports = app => {

    //variable for link to route 
    const landing = require('./routes/landing');
    const user = require('./routes/users');
    const application = require('./routes/app');
    const posts = require('./routes/posts');
    const comments = require('./routes/comment');

    //add or remove or change route as needed 
    app.use('/', landing);
    app.use('/user', user);
    app.use('/app', application);
    app.use('/posts', posts);
    app.use('/comments', comments);

}

// const router = require('express').Router();
// const appController = require('../controllers/appController');
// const landingController = require('../controllers/landingController');

// //linking home page to controller 
// router.get('/', appController);
// router.get('/landing', landingController);

// module.exports = router;