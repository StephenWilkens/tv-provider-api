"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("package_networks", {
      providerPackageId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      networkId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("package_networks");
  },
};
