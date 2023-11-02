"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "tags",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        expenditure_id: {
          type: Sequelize.INTEGER,
          references: {
            key: "id",
            model: {
              tableName: "expenditures",
            },
          },
          unique: "unique_expenditure_product",
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING,
          unique: "unique_expenditure_product",
        },
        type: {
          allowNull: false,
          type: Sequelize.STRING,
          unique: "unique_expenditure_product",
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      {
        uniqueKeys: {
          unique_expenditure_product: {
            fields: ["expenditure_id", "name", "type"],
          },
        },
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("tags");
  },
};
