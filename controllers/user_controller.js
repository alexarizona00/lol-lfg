const { User } = require("../models")



//this is the users_controller.js file
exports.registerUser = async (req, res) => {
  // create a new user
  try {
    const userData = await User.create({
      league_ign: req.body.league_ign,
      email: req.body.email,
      password: req.body.password,
      role: null,
      rank: null,
    });
    res.redirect('/app');
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.renderLogin = (req, res) => {
  res.render("log-sign");
};

exports.signOutUser = (req, res) => {
    req.session.destroy();
    res.redirect('/');
  };
 
exports.loginUser = async (req, res) => {
  try {
    const userData = await User.findOne({ where: { league_ign: req.body.league_ign } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect username please try again' });
      return;
    }
    console.log('email valid');
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect password, please try again' });
      return;
    }
    // req.session.save(() => {
    // req.session.userId = User.id;
    // req.session.username = User.league_ign;
    // req.session.loggedIn = true;
    // res.json({ userData, message: 'Welcome. You are now logged in.' });
    // });

  } catch (err) {
    res.status(418).json(err);
    return;
  }
  res.redirect("/app");
};

exports.signUpUser = (req, res) => {
  res.json({ redirect: "/app" });
};

exports.userProfile = (req, res) => res.render('profile');