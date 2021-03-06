const { readdirSync } = require("fs");
const path = require("path");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];

const { Sequelize } = require("sequelize");

let db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && // Ignore hidden files
      file !== basename &&
      file.slice(-3) === ".js" // Match js extension
    );
  })
  .forEach((file) => {
    // Import the model creation function and call it
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
    console.log(`Loaded model ${model.name}`);
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
    console.log(`Associated model ${modelName}`);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
