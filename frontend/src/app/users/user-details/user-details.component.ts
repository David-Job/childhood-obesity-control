import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  id: any;
  canEdit = false;
  userDetailsForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.userDetailsForm = this.fb.group({
      firstName: [''],
      surname1: [''],
      surname2: [''],
      email: [''],
    }, { updateOn: 'blur' });
  }

  ngOnInit() {
    this.populateForm();
    this.userDetailsForm.valueChanges.subscribe((data) => {
      console.log('Form changes', data);
    });
  }

  populateForm() {
    this.userService.read(this.id).subscribe({
      next: (user) => {
        this.userDetailsForm.patchValue(user);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  toggleCanEdit() {
    console.log('button works!');
    //this.readOnly = !this.readOnly;
    this.canEdit = !this.canEdit;
  }

  submitForm() {
    console.log('submitForm');
    console.log(this.userDetailsForm.value);
  }

  updateUser() {
    let { firstName, surname1, surname2, email } = this.userDetailsForm.value;
    console.log(firstName);
    console.log(surname1);
    console.log(surname2);
    console.log(email);

    this.userService
      .update(this.id, {
        firstName: firstName,
        surname1: surname1,
        surname2: surname2,
        email: email,
      })
      .subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigate(['users']);
        },
        error: (err) => console.error(err),
      });
  }

  deleteUser() {
    this.userService.delete(this.id).subscribe({
      next: (_) => {
        this.router.navigate(['users']);
      },
      error: (err) => console.error(err),
    });
  }
}
