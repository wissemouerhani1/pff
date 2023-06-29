'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BecomeMember extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BecomeMember.init({
    name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    cin: DataTypes.STRING,
    adresse: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    business_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BecomeMember',
  });
  return BecomeMember;
};