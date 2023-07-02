'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class courrier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  courrier.init({
    courrierid: DataTypes.STRING,
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    gouvernerart: DataTypes.STRING,
    adresse: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    type: DataTypes.STRING,
    prix: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'courrier',
  });
  return courrier;
};