"use strict";
const buildFake = require("../factories");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("tags", await buildFake("tag", 10), {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tags", null, {});
  },
};
