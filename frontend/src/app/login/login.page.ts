import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group(
      {
        email: [''],
        password: [''],
      },
      { updateOn: 'blur' }
    );
  }

  ngOnInit() {}

  // TODO: Create an authorization service that yields a token for the current sesion
  // when the recieved credentials are valid
  logIn() {
    console.log('button works!!!!');
  }
}
