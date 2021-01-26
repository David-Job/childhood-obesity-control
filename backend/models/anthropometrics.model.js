const Student = require("./student.model");

module.exports = (sequelize, Sequelize) => {
  const Anthropometrics = sequelize.define("anthropometrics", {
    height: { type: Sequelize.FLOAT },
    weight: { type: Sequelize.FLOAT },
    birthDate: { type: Sequelize.DATE },
  });

  Anthropometrics.belongsTo(Student, { foreignKey: { allowNull: true } });

  return Anthropometrics;
};
