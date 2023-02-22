"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "packages",
      [
        {
          title: "Basic",
          price: 9.9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Gold",
          price: 37.9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Select",
          price: 17.9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Silver",
          price: 27.9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("packages", null, {});
  },
};
