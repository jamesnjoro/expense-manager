require('dotenv').config()
const env = process.env.NODE_ENV || 'local';
const config = require(__dirname + '/../config/config.js')[env];
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(config.database, config.username, config.password, config);