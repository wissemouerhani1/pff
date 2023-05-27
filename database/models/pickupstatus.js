'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PickupStatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PickupStatus.init({
    statusId: DataTypes.INTEGER,
    statusDescription: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PickupStatus',
  });
  return PickupStatus;
};