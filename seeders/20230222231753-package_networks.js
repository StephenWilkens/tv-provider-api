"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "package_networks",
      [
        {
          packageId: 1,
          networkId: 1,
        },
        {
          packageId: 1,
          networkId: 4,
        },
        {
          packageId: 1,
          networkId: 5,
        },
        {
          packageId: 1,
          networkId: 8,
        },
        {
          packageId: 2,
          networkId: 1,
        },
        {
          packageId: 2,
          networkId: 2,
        },
        {
          packageId: 2,
          networkId: 3,
        },
        {
          packageId: 2,
          networkId: 4,
        },
        {
          packageId: 2,
          networkId: 5,
        },
        {
          packageId: 2,
          networkId: 6,
        },
        {
          packageId: 2,
          networkId: 7,
        },
        {
          packageId: 2,
          networkId: 8,
        },
        {
          packageId: 2,
          networkId: 9,
        },
        {
          packageId: 2,
          networkId: 10,
        },
        {
          packageId: 2,
          networkId: 11,
        },
        {
          packageId: 3,
          networkId: 4,
        },
        {
          packageId: 3,
          networkId: 5,
        },
        {
          packageId: 3,
          networkId: 1,
        },
        {
          packageId: 3,
          networkId: 8,
        },
        {
          packageId: 3,
          networkId: 2,
        },
        {
          packageId: 3,
          networkId: 6,
        },
        {
          packageId: 3,
          networkId: 9,
        },
        {
          packageId: 3,
          networkId: 3,
        },
        {
          packageId: 4,
          networkId: 1,
        },
        {
          packageId: 4,
          networkId: 2,
        },
        {
          packageId: 4,
          networkId: 3,
        },
        {
          packageId: 4,
          networkId: 4,
        },
        {
          packageId: 4,
          networkId: 5,
        },
        {
          packageId: 4,
          networkId: 6,
        },
        {
          packageId: 4,
          networkId: 7,
        },
        {
          packageId: 4,
          networkId: 8,
        },
        {
          packageId: 4,
          networkId: 9,
        },
        {
          packageId: 4,
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
