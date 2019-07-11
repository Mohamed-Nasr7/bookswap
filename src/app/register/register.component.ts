import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import custom validator to validate that password and confirm password fields match
import { MustMatch } from './match';
import { BookUser } from './user.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  registerForm: FormGroup;
  
    submitted = false;

  constructor(private formBuilder: FormBuilder,
    private _router:Router,

    ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      phone: ['', [Validators.required,Validators.minLength(6),Validators.maxLength(14),Validators.pattern("^[0-9]*$")]],
      government: ['', Validators.required],
      city: ['', Validators.required],
      street: ['', Validators.required],
      zip: ['', Validators.required],


  }, {
      validator: MustMatch('password', 'confirmPassword')
  });
  }
// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }
onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }

  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
}
}


