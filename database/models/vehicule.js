'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vehicule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Vehicule.init({
    vehicule_type: DataTypes.STRING,
    matricule: DataTypes.INTEGER,
    vehicule_code: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Vehicule',
  });
  return Vehicule;
};