module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    firstName: { type: Sequelize.STRING },
    surname1: { type: Sequelize.STRING },
    surname2: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
  });

  return User;
};
