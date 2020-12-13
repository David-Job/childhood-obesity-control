const config = require('../config/config').development;
const { Sequelize } = require('sequelize');

const db = new Sequelize(
  config.database,
  config.username,
  config.password,
  { host: config.host, dialect: config.dialect },
);

module.exports = db;
