const db = require("../models");

exports.getPost = (req, res) => {
  db.posts.findAll()
    .then((res) => {
      res.render("app.handlebars")
    })
    .catch((err) => {
      console.log("No posts to show");
      res.render("app.handlebars")
    });
};

exports.createPost = (req, res) => {
  // need to add in how we add the post data to the post. 
  db.posts.create(req.body).then((dbPost) => res.json(dbPost));
};