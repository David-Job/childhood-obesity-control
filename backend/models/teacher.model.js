const User = require("./user.model");
const Institution = require("./institution.model");
const Student = require("./student.model");

module.exports = (sequelize, Sequelize) => {
  const Teacher = sequelize.define("teacher", {}, { timestamps: false });

  Teacher.associate = (models) => {
    Teacher.hasOne(models.user, { foreignKey: { allowNull: true } });
    Teacher.hasMany(models.student, { foreignKey: { allowNull: true } });
  };

  return Teacher;
};
