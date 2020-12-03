const { Sequelize, Model, DataTypes } = require('sequelize');
const config = require('../config/config').development;

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  { host: config.host, dialect: config.host },
);

sequelize.define();

Sequelize.prototype.define;
