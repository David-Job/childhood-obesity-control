import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/services/user.service';
import { User } from '../../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  private id: any;
  private user: User;
  private userForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    this.userForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      surname1: [null, Validators.required],
      surname2: [null, Validators.required],
      email: [null, Validators.required],
    });

    this.userService.read(this.id).subscribe({
      next: (data) => {
        this.userForm.setValue(
          new User(data.firstName, data.surname1, data.surname2, data.email)
        );
      },
      error: (err) => console.error(err),
    });
  }

  submitForm() {
    console.log(this.userForm.value);
  }
}
