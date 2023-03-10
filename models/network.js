"use strict";
const { Model, DataTypes, Sequelize } = require("sequelize");
// const sequelize = new Sequelize('');

module.exports = (sequelize, DataTypes) => {
  class network extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      network.hasMany(models.show, {
        foreignKey: "networkId"
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

// module.exports = (sequelize, DataTypes)