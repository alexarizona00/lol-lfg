const User = require("./user");
const Posts = require("./posts");
const Comments = require("./comments");

//link for user to post
User.hasMany(Posts, {
  foreignKey: "league_ign",
});

Posts.belongsTo(User, {
  foreignKey: "league_ign",
});

User.hasMany(Comments, {
  foreignKey: "league_ign",
});

Comments.belongsTo(Posts, {
  foreignKey: "posts_id",
});

Comments.belongsTo(User, {
  foreignKey: "league_ign",
});

Posts.hasMany(Comments, {
  foreignKey: '',
});

module.exports = { User, Posts, Comments };
