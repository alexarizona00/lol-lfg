const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/test');

class League extends Model {
  // checkPassword(loginPw) {
  //   return bcrypt.compareSync(loginPw, this.password);
  // }
}

League.init(
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
      references: {
        model: "user",
        key: "user_name"
    }
    },
    role: {
      type: DataTypes.STRING,
    },
    rank: {
      type: DataTypes.STRING,
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
