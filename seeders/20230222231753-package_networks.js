"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "package_networks",
      [
        {
          provider_package_id: 1,
          network_id: 1,
        },
        {
          provider_package_id: 1,
          network_id: 4,
        },
        {
          provider_package_id: 1,
          network_id: 5,
        },
        {
          provider_package_id: 1,
          network_id: 8,
        },
        {
          provider_package_id: 2,
          network_id: 1,
        },
        {
          provider_package_id: 2,
          network_id: 2,
        },
        {
          provider_package_id: 2,
          network_id: 3,
        },
        {
          provider_package_id: 2,
          network_id: 4,
        },
        {
          provider_package_id: 2,
          network_id: 5,
        },
        {
          provider_package_id: 2,
          network_id: 6,
        },
        {
          provider_package_id: 2,
          network_id: 7,
        },
        {
          provider_package_id: 2,
          network_id: 8,
        },
        {
          provider_package_id: 2,
          network_id: 9,
        },
        {
          provider_package_id: 2,
          network_id: 10,
        },
        {
          provider_package_id: 2,
          network_id: 11,
        },
        {
          provider_package_id: 3,
          network_id: 4,
        },
        {
          provider_package_id: 3,
          network_id: 5,
        },
        {
          provider_package_id: 3,
          network_id: 1,
        },
        {
          provider_package_id: 3,
          network_id: 8,
        },
        {
          provider_package_id: 3,
          network_id: 2,
        },
        {
          provider_package_id: 3,
          network_id: 6,
        },
        {
          provider_package_id: 3,
          network_id: 9,
        },
        {
          provider_package_id: 3,
          network_id: 3,
        },
        {
          provider_package_id: 4,
          network_id: 1,
        },
        {
          provider_package_id: 4,
          network_id: 2,
        },
        {
          provider_package_id: 4,
          network_id: 3,
        },
        {
          provider_package_id: 4,
          network_id: 4,
        },
        {
          provider_package_id: 4,
          network_id: 5,
        },
        {
          provider_package_id: 4,
          network_id: 6,
        },
        {
          provider_package_id: 4,
          network_id: 7,
        },
        {
          provider_package_id: 4,
          network_id: 8,
        },
        {
          provider_package_id: 4,
          network_id: 9,
        },
        {
          provider_package_id: 4,
          network_id: 10,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("package_networks", null, {});
  },
};
