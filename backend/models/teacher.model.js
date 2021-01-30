module.exports = (sequelize, Sequelize) => {
  const Teacher = sequelize.define("teacher", {}, { timestamps: false });

  Teacher.associate = (models) => {
    Teacher.belongsTo(models.user, { foreignKey: { allowNull: true } });
    Teacher.hasMany(models.student, { foreignKey: { allowNull: true } });
  };

  return Teacher;
};
