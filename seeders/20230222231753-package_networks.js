"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "package_networks",
      [
        {
          providerPackageId: 1,
          networkId: 1,
        },
        {
          providerPackageId: 1,
          networkId: 4,
        },
        {
          providerPackageId: 1,
          networkId: 5,
        },
        {
          providerPackageId: 1,
          networkId: 8,
        },
        {
          providerPackageId: 2,
          networkId: 1,
        },
        {
          providerPackageId: 2,
          networkId: 2,
        },
        {
          providerPackageId: 2,
          networkId: 3,
        },
        {
          providerPackageId: 2,
          networkId: 4,
        },
        {
          providerPackageId: 2,
          networkId: 5,
        },
        {
          providerPackageId: 2,
          networkId: 6,
        },
        {
          providerPackageId: 2,
          networkId: 7,
        },
        {
          providerPackageId: 2,
          networkId: 8,
        },
        {
          providerPackageId: 2,
          networkId: 9,
        },
        {
          providerPackageId: 2,
          networkId: 10,
        },
        {
          providerPackageId: 2,
          networkId: 11,
        },
        {
          providerPackageId: 3,
          networkId: 4,
        },
        {
          providerPackageId: 3,
          networkId: 5,
        },
        {
          providerPackageId: 3,
          networkId: 1,
        },
        {
          providerPackageId: 3,
          networkId: 8,
        },
        {
          providerPackageId: 3,
          networkId: 2,
        },
        {
          providerPackageId: 3,
          networkId: 6,
        },
        {
          providerPackageId: 3,
          networkId: 9,
        },
        {
          providerPackageId: 3,
          networkId: 3,
        },
        {
          providerPackageId: 4,
          networkId: 1,
        },
        {
          providerPackageId: 4,
          networkId: 2,
        },
        {
          providerPackageId: 4,
          networkId: 3,
        },
        {
          providerPackageId: 4,
          networkId: 4,
        },
        {
          providerPackageId: 4,
          networkId: 5,
        },
        {
          providerPackageId: 4,
          networkId: 6,
        },
        {
          providerPackageId: 4,
          networkId: 7,
        },
        {
          providerPackageId: 4,
          networkId: 8,
        },
        {
          providerPackageId: 4,
          networkId: 9,
        },
        {
          providerPackageId: 4,
          networkId: 10,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("package_networks", null, {});
  },
};
