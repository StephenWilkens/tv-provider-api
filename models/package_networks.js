'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class package_networks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  package_networks.init({
    provider_package_id: DataTypes.INTEGER,
    network_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'package_networks',
  });
  return package_networks;
};