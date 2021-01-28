const Student = require("./student.model");

module.exports = (sequelize, Sequelize) => {
  const Anthropometrics = sequelize.define("anthropometrics", {
    height: { type: Sequelize.FLOAT },
    weight: { type: Sequelize.FLOAT },
    birthDate: { type: Sequelize.DATE },
  });

  Anthropometrics.associate = (models) => {
    // associations can be defined here
    Anthropometrics.belongsTo(models.student, {
      foreignKey: { allowNull: true },
    });
  };

  return Anthropometrics;
};
