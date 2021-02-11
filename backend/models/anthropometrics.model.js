module.exports = (sequelize, Sequelize) => {
  const Anthropometrics = sequelize.define("anthropometrics", {
    height: { type: Sequelize.FLOAT },
    weight: { type: Sequelize.FLOAT },
    birthDate: { type: Sequelize.DATE },
  });

  Anthropometrics.associate = (models) => {
    Anthropometrics.belongsTo(models.student);
  };

  return Anthropometrics;
};
