const { Posts } = require('../models');
const withAuth = require('../utils/auth');


exports.getPost = withAuth, async (req, res) => {
  db.posts.findAll()
    .then((res) => {
      res.render("app.handlebars")
    })
    .catch((err) => {
      console.log("No posts to show");
      res.render("app.handlebars")
    });
};

exports.createPost = withAuth, async (req, res) => {
  try {
    const newPosts = await Posts.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPosts);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.updatePost = withAuth, async (req, res) => {
  try {
    const postsData = await Posts.findByPk(req.params.id, {
      include: [
        {
          model: Posts,
          attributes: ['id'],
        },
      ],
    });

    const posts = postsData.get({ plain: true });

    res.render('app', {
      ...posts,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.commentOnPost = withAuth, async (req, res) => {
  try {
    const commentData = await Posts.findByPk(req.params.id, {
      include: [
        {
          model: Posts,
          attributes: ['id'],
        },
      ],
    });

    const comment = commentData.get({ plain: true });

    res.render('app', {
      ...comment,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.deletePost = withAuth, async (req, res) => {
  try {
    const postsData = await Posts.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postsData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(postsData);
  } catch (err) {
    res.status(500).json(err);
  }
};