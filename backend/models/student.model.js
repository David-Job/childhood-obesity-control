module.exports = (sequelize, Sequelize) => {
  const Student = sequelize.define("student");

  Student.associate = (models) => {
    // belongsTo... -> this model holds the foreign key
    // has... -> the referenced model holds the foreign key
    Student.belongsTo(models.user);
    Student.belongsTo(models.institution);
    Student.hasMany(models.anthropometrics);
  };

  return Student;
};
