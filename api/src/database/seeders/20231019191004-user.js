"use strict";
const buildFake = require("../factories");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", await buildFake("user", 10), {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
