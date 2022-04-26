const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Posts extends Model {}

Posts.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
      references: {
          model: "user",
          key: "id"
      }
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post_data: {
      type: DataTypes.STRING,
    //   allowNull: false,
    },
    time_date: {
      type: DataTypes.DATE,
    //   allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'posts',
  }
);

module.exports = Posts;
