import { AuthService } from './../../services/auth.service';

import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  hide = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  getErrorMessageEmail() {
    return this.loginForm.get('email').hasError('required') ? 'You must enter a value' :
      this.loginForm.get('email').hasError('email') ? 'Not a valid email' :
        '';
  }

  getErrorMessagePassword() {
    return this.loginForm.get('password')
      .hasError('required') ? 'You must enter a value' : '';
  }

  login() {
    this.authService.Login(this.loginForm.value['email'], this.loginForm.value['password']);
  }

  signInWithGoogle() {
    this.authService.GoogleAuth();
  }

  

  ngOnInit() {
    this.createForm();
  }
}
