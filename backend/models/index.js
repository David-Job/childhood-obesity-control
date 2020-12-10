import { Sequelize } from 'sequelize';
import { development as config } from '../config/config';

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  { host: config.host, dialect: config.host },
);

const db = { sequelize: sequelize, Sequelize: Sequelize };

export default db;
