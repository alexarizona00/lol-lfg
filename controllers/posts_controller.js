const { Posts } = require('../models');



exports.getPost = async (req, res) => {
  db.posts.findAll()
    .then((res) => {
      res.render("allposts")
    })
    .catch((err) => {
      console.log("No posts to show");
      res.render("allposts")
    });
};

exports.createPost = (req, res) => {
  res.render("create-post")
};

exports.updatePost = async (req, res) => {
  try {
    const postData = await Posts.create({
      title: req.body.title,
      content: req.body.content,
      user_id: 1,

    });
    res.redirect('/app');
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.commentOnPost = async (req, res) => {
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

exports.deletePost = async (req, res) => {
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