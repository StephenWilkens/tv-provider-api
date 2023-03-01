// "use strict";
// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up(queryInterface, Sequelize) {
//     await queryInterface.createTable("package_networks", {
//       provider_package_id: {
//         type: Sequelize.INTEGER,
//         allowNull: false,
//         references: {
//           model: "provider_packages",
//           key: "id",
//         },
//         onDelete: "CASCADE",
//       },
//       network_id: {
//         type: Sequelize.INTEGER,
//         allowNull: false,
//         references: {
//           model: "networks",
//           key: "id",
//         },
//         onDelete: "CASCADE",
//       },
//     });
//   },
//   async down(queryInterface, Sequelize) {
//     await queryInterface.dropTable("package_networks");
//   },
// };

"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("package_networks", {
      provider_package_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      network_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("package_networks");
  },
};
