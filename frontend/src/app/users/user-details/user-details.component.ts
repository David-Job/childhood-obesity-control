import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  protected id: any;
  protected userDetailsForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private fb: FormBuilder
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.userDetailsForm = this.fb.group({
      firstName: [''],
      surname1: [''],
      surname2: [''],
      email: [''],
    });
  }

  ngOnInit() {
    this.populateForm();
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

  submitForm() {}
}
