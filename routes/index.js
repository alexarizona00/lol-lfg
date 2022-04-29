module.exports = app => {

    //variable for link to route 
    const express = require('express')
    const landing = require('./landing');
    const user = require('./users');
    const application = require('./app');
    const posts = require('./posts');
    // const comments = require('../routes/comment');

    //add or remove or change route as needed 
    app.use('/', landing);
    app.use('/user', user);
    app.use('/app', application);
    app.use('/posts', posts);
    // appp.use('/comments', comments);

}

