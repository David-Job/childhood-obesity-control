import './Model.class';

export default class User extends Model {
  constructor(firstName, surname1, surname2, role) {
    if (this.constructor === User) {
      throw new Error('User is an abstract class');
    }

    this.firstName = firstName;
    this.surname1 = surname1;
    this.surname2 = surname2;
    this.role = role;
  }

  get firstName() {
    return this.firstName;
  }

  set firstName(firstName) {
    this.firstName = firstName;
  }

  get surname1() {
    return this.surname1;
  }

  set surname1(surname1) {
    this.surname1 = surname1;
  }

  get surname2() {
    return this.surname2;
  }

  set surname2(surname2) {
    this.surname2 = surname2;
  }

  get role() {
    return this.role;
  }

  set role(role) {
    this.role = role;
  }
}
