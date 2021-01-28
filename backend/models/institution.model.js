const Student = require("./student.model");
const Teacher = require("./teacher.model");

module.exports = (sequelize, Sequelize) => {
  const Institution = sequelize.define(
    "institution",
    {
      name: { type: Sequelize.STRING },
      physicalAddress: { type: Sequelize.STRING },
      province: { type: Sequelize.STRING },
      latitude: { type: Sequelize.DOUBLE },
      longitude: { type: Sequelize.DOUBLE },
    },
    { timestamps: false }
  );

  Institution.associate = (models) => {
    Institution.hasMany(models.student, { foreignKey: { allowNull: true } });
    Institution.hasMany(models.teacher, { foreignKey: { allowNull: true } });
  };

  return Institution;
};
