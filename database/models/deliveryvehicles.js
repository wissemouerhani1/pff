'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DeliveryVehicles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DeliveryVehicles.init({
    vehicleId: DataTypes.INTEGER,
    registrationNumber: DataTypes.STRING,
    driverId: DataTypes.INTEGER,
    vehicleStatus: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DeliveryVehicles',
  });
  return DeliveryVehicles;
};