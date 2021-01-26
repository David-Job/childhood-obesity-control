const User = require("./user.model");
const Institution = require("./institution.model");
const Student = require("./student.model");

module.exports = (sequelize, Sequelize) => {
  const Teacher = sequelize.define("teacher", {});

  Teacher.hasOne(User, { foreignKey: { allowNull: true } });
  Teacher.hasMany(Student, { foreignKey: { allowNull: true } });
  Teacher.belongsTo(Institution, { foreignKey: { allowNull: true } });

  return Teacher;
};
