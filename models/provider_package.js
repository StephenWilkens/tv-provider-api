"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class provider_package extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      provider_package.belongsToMany(models.network, {
        through: "package_networks",
      });
    }
  }
  provider_package.init(
    {
      title: DataTypes.STRING,
      price: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "provider_package",
    }
  );
  return provider_package;
};
