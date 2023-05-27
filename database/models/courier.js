'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Courier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Courier.init({
    courierId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    contactInformation: DataTypes.STRING,
    availabilitystatus: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Courier',
  });
  return Courier;
};