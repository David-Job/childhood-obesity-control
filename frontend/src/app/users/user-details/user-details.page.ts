import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {
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
    this.userDetailsForm = this.fb.group(
      {
        firstName: [''],
        surname1: [''],
        surname2: [''],
        email: [''],
      },
      { updateOn: 'blur' }
    );
  }

  ngOnInit() {
    this.populateForm();
    this.userDetailsForm.valueChanges.subscribe((data) => {
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
    //this.readOnly = !this.readOnly;
    this.canEdit = !this.canEdit;
  }

  submitForm() {
  }

  updateUser() {
    let { firstName, surname1, surname2, email } = this.userDetailsForm.value;

    this.userService
      .update(this.id, {
        firstName: firstName,
        surname1: surname1,
        surname2: surname2,
        email: email,
      })
      .subscribe({
        next: (data) => {
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
