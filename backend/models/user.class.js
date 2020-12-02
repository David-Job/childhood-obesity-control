//var User = function (firstName, surname1, surname2, role) {
//if (this.constructor === User) {
//throw new Error('User is an abstract class');
//}

//this.firstName = firstName;
//this.surname1 = surname1;
//this.surname2 = surname2;
//this.role = role;
//};

class User {
  constructor() {
    if (this.constructor === User) {
      throw new Error('User is an abstract class');
    }
  }

  constructor(firstName, surname1, surname2, role) {
    if (this.constructor === User) {
      throw new Error('User is an abstract class');
    }
  }
}

module.exports = User;
