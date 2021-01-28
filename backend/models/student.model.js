const User = require("./user.model");
const Institution = require("./institution.model");
const Anthropometrics = require("./anthropometrics.model");

module.exports = (sequelize, Sequelize) => {
  const Student = sequelize.define("student", {}, { timestamps: false });

  Student.associate = (models) => {
    Student.hasOne(models.user, { foreignKey: { allowNull: true } });
    Student.belongsTo(models.institution, { foreignKey: { allowNull: true } });
    Student.hasMany(models.anthropometrics, {
      foreignKey: { allowNull: true },
    });
  };

  return Student;
};
