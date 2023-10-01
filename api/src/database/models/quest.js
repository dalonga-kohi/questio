'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Quest.init({
    authorId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    title: {
      type:DataTypes.STRING(18),
      allowNull: false
    },
    description: {
      type:DataTypes.TEXT,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: '/api/v1/img/quest.jpg'
    },
    steps: DataTypes.STRING(300),
    tags: DataTypes.STRING(65)
  }, {
    sequelize,
    modelName: 'Quest',
  });
  return Quest;
};