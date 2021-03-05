import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.page.html',
  styleUrls: ['./add-user.page.scss'],
})
export class AddUserPage implements OnInit {
  addUserForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.addUserForm = this.fb.group(
      {
        firstName: [''],
        surname1: [''],
        surname2: [''],
        email: [''],
      },
      { updateOn: 'blur' }
    );
  }

  ngOnInit() {}

  addUser() {
    let formValue = this.addUserForm.value;
    this.userService.create(formValue).subscribe({
      next: (msg) => {
        this.router.navigateByUrl('/users');
      },
      error: (err) => console.error(err),
    });
  }
}
