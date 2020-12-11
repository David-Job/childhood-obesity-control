import { development as config } from '../config/config';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  { host: config.host, dialect: config.host },
);

export default sequelize;
