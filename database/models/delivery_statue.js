'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Delivery_statue extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Delivery_statue.init({
    courrierid: DataTypes.STRING,
    statue: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Delivery_statue',
  });
  return Delivery_statue;
};