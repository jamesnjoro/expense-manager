"use strict";
const buildFake = require("../factories");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("expenditures", await buildFake("expenditure", 10), {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("expenditures", null, {});
  },
};
