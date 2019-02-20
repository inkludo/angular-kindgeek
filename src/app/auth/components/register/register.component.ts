import { AuthService } from './../../services/auth.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService,
    private router: Router,
    private fb: FormBuilder) { }

  registerForm: FormGroup;
  hide = true;

    
  createForm() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email] ],
      password: ['',Validators.required]
    });
  }

  getErrorMessageEmail() {
    return this.registerForm.get('email').hasError('required') ? 'You must enter a value' :
        this.registerForm.get('email').hasError('email') ? 'Not a valid email' :
            '';
  }

  getErrorMessagePassword() {
    return this.registerForm.get('password')
      .hasError('required') ? 'You must enter a value'  : '';
  }


  ngOnInit() {
    this.createForm();
  }

}
