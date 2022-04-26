const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Posts extends Model {}

Posts.init(
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    post_data: {
      type: DataTypes.STRING,
    //   allowNull: false,
    },
    time_date: {
      type: DataTypes.DATE,
    //   allowNull: false,
    },
    user_id: {
      allowNull: false,
      references: {
        model: "user",
        key: "id"
    }
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
