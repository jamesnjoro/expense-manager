"use strict";
const buildFake = require("../factories");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("expenditure_user", await buildFake("expenditure-user", 10), {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("expenditure_user", null, {});
  },
};
