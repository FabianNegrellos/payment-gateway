const { Sequelize } = require("sequelize");
const config = require("./config/config");
require('dotenv').config();

const env = process.env.NODE_ENV || "development";
const dbConfig = config[env];
console.log('dbConfig', dbConfig);

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: 'postgres',
    logging: false
  }
);

module.exports = sequelize;




