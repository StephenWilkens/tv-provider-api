"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class network extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      network.hasMany(models.show, {
        as: "shows",
      });
      network.belongsToMany(models.providerPackage, {
        through: "package_networks",
      });
    }
  }
  network.init(
    {
      title: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "network",
    }
  );
  return network;
};
