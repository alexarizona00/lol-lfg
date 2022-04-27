const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/test');

class Comment extends Model {
  // checkPassword(loginPw) {
  //   return bcrypt.compareSync(loginPw, this.password);
  // }
}

Comment.init(
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    //   references: {
    //       model: "user",
    //       key: "id"
    //   }
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.STRING,
      foreignKey: true,
      references: {
        model: "user",
        key: "id"
    }
    },
    post_id: {
      type: DataTypes.STRING,
      foreignKey: true,
      references: {
        model: "post",
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
    modelName: 'league',
  }
);

module.exports = League;