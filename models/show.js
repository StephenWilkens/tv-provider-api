"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class show extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      show.belongsTo(models.network, {
        foreignKey: "networkId",
      });
    }
  }
  show.init(
    {
      title: DataTypes.STRING,
      imdbRating: DataTypes.DECIMAL,
      // networkId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "show",
    },
    {}
  );
  return show;
};
