"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "networks",
      [
        {
          title: "ABC",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "BET",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Bravo ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "CBS",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "CW",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Freeform",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "HBO",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "NBC",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Nickelodeon",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Showtime",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "STARZ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("networks", null, {});
  },
};
