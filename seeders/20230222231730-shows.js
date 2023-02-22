"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "shows",
      [
        {
          title: "American Gods",
          imdbRating: 7.7,
          networkId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "American Idol",
          imdbRating: 4.1,
          networkId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Below Deck",
          imdbRating: 7.3,
          networkId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Big Little Lies",
          imdbRating: 8.5,
          networkId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Black-ish",
          imdbRating: 7.1,
          networkId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Bunheads",
          imdbRating: 7.6,
          networkId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Dexter",
          imdbRating: 8.6,
          networkId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Everything's Gonna Be Okay",
          imdbRating: 7.3,
          networkId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Mom",
          imdbRating: 7.2,
          networkId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Outlander",
          imdbRating: 8.4,
          networkId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Rebel",
          imdbRating: 5.4,
          networkId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Riverdale",
          imdbRating: 6.8,
          networkId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Silicon Valley",
          imdbRating: 8.5,
          networkId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Southern Charm",
          imdbRating: 6.2,
          networkId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Spongebob SquarePants",
          imdbRating: 8.2,
          networkId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Rocket Power",
          imdbRating: 6.2,
          networkId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Amazing Race",
          imdbRating: 7.6,
          networkId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Fosters",
          imdbRating: 7.9,
          networkId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Top Chef",
          imdbRating: 7.6,
          networkId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Tyler Perry's The Oval",
          imdbRating: 4,
          networkId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Zoey's Extraordinary Playlist",
          imdbRating: 8.1,
          networkId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("shows", null, {});
  },
};
