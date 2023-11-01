require('dotenv').config()
const env = process.env.NODE_ENV || 'local';
const config = require(__dirname + '/../config/config.js')[env];
import { Sequelize } from "sequelize";

const { database, username, password, ...options } = config;

export const sequelize = new Sequelize(database, username, password, {
    ...options,
    define: {
        underscored:true
    }
});