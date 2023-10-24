require('dotenv').config();
const pg  = require('pg')

module.exports = {
  local: {
    database: 'expenses',
    username: 'postgres',
    password: 'rootpass',
    dialect: 'postgres',
    dialectModule: pg,
    host: 'localhost',
    logging: console.log,
    migrationStorage: 'sequelize',
    port: 5432,
    underscored: true
  }
}
