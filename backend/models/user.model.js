//const Student = require("./student.model");
//const Teacher = require("./teacher.model");

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    "user",
    {
      firstName: { type: Sequelize.STRING },
      surname1: { type: Sequelize.STRING },
      surname2: { type: Sequelize.STRING },
      email: { type: Sequelize.STRING },
    },
    { timestamps: false }
  );

  //User.belongsTo(Student, { foreignKey: { allowNull: true } });
  //User.belongsTo(Teacher, { foreignKey: { allowNull: true } });

  return User;
};
