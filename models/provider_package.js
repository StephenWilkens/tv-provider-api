"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class providerPackage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      providerPackage.belongsToMany(models.network, {
        through: "package_networks",
      });
    }
  }
  providerPackage.init(
    {
      title: DataTypes.STRING,
      price: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "providerPackage",
    }
  );
  return providerPackage;
};
