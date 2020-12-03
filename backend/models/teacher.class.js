const User = require('./user.class');

class Teacher extends User {
  constructor(firstName, surname1, surname2, role, institution) {
    super(firstName, surname1, surname2, role);
    this.institution = institution;
  }
}

module.exports = Teacher;
