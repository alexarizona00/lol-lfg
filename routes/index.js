module.exports = app => {

    //variable for link to route 
    const express = require('express')
    const appp = express()
    const landing = require('../routes/landing');
    const user = require('../routes/users');
    const application = require('../routes/app');
    const posts = require('../routes/posts');
    // const comments = require('../routes/comment');

    //add or remove or change route as needed 
    appp.use('/', landing);
    appp.use('/user', user);
    appp.use('/app', application);
    appp.use('/posts', posts);
    // appp.use('/comments', comments);

}

