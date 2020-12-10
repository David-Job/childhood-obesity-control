import { User } from './user.class';

export default class Student extends User {
  constructor(
    firstName,
    surname1,
    surname2,
    role,
    institution,
    data,
  ) {
    super(firstName, surname1, surname2, role);
    this.institution = institution;
    this.data = data;
  }
}
