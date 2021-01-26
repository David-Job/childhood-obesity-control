const Student = require("./student.model");
const Teacher = require("./teacher.model");

module.exports = (sequelize, Sequelize) => {
  const Institution = sequelize.define("institution", {
    name: { type: Sequelize.STRING },
    physicalAddress: { type: Sequelize.STRING },
    province: { type: Sequelize.STRING },
    latitude: { type: Sequelize.DOUBLE },
    longitude: { type: Sequelize.DOUBLE },
  });

  Institution.hasMany(Student, { foreignKey: { allowNull: true } });
  Institution.hasMany(Teacher, { foreignKey: { allowNull: true } });

  return Institution;
};
