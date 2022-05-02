const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {
  // checkPassword(loginPw) {
  //   return bcrypt.compareSync(loginPw, this.password);
  // }
}

Comment.init(
  {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // league_ign: {
    //   type: DataTypes.STRING,
    //   foreignKey: true,
    //   references: {
    //     model: "user",
    //     key: "league_ign"
    //   }
    // },
    posts_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      references: {
        model: "posts",
        key: "id"
      }
    },
  },
  {
    // hooks: {
    //   beforeCreate: async (newUserData) => {
    //     newUserData.password = await bcrypt.hash(newUserData.password, 10);
    //     return newUserData;
    //   },
    //   beforeUpdate: async (updatedUserData) => {
    //     updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
    //     return updatedUserData;
    //   },
    // },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comments',
  }
);

module.exports = Comment
