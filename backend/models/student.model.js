const User = require("./user.model");
const Institution = require("./institution.model");
const Anthropometrics = require("./anthropometrics.model");

module.exports = (sequelize, Sequelize) => {
  const Student = sequelize.define("student", {});

  Student.hasOne(User, { foreignKey: { allowNull: true } });
  Student.belongsTo(Institution, { foreignKey: { allowNull: true } });
  Student.hasMany(Anthropometrics, { foreignKey: { allowNull: true } });

  return Student;
};
