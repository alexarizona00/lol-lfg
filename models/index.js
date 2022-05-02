const User = require("./user");
const Posts = require("./posts");
const Comments = require("./comments");

//link for user to post
User.hasMany(Posts, {
  foreignKey: "user_id",
});

Posts.belongsTo(User, {
  foreignKey: "user_id",
});

// User.hasMany(Comments, {
//   foreignKey: "league_ign",
// });

Comments.belongsTo(Posts, {
  foreignKey: "posts_id",
});

// Comments.belongsTo(User, {
//   foreignKey: "user_id",
// });

// Posts.hasMany(Comments, {
//   foreignKey: '',
// });

module.exports = { User, Posts, Comments };
