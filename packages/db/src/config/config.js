require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER || 'pguser',
    password: process.env.DB_PASSWORD || 'pgpass',
    database: process.env.DB_NAME || 'payments',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT_MACHINE || 5432,
    dialect: 'postgres'
  },
  test: {
    username: 'pguser',
    password: 'pgpass',
    database: 'payments_test',
    host: 'localhost',
    port: 5432,
    dialect: 'postgres'
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT_MACHINE,
    dialect: 'postgres'
  }
};
