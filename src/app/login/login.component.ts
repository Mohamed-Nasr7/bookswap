import { LogService } from './../log.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  form:FormGroup;
  adminForm:FormGroup;


  constructor(private _formBuilder: FormBuilder,
    private router:Router,
    private logService:LogService) { }


  ngOnInit() {

    this.form = this._formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })


    this.adminForm = this._formBuilder.group({
      adminName: ['', [Validators.required]],
      adminPass: ['', [Validators.required]]
    })
  }



  login(){
    if(this.form.valid){
      
      let name = this.form.controls['userName'].value;

      localStorage.setItem("User",name);
      this.logService.setStatus(true);
      this.router.navigateByUrl("/profile");

    }
  }

  
  
  adminLogin(){
    if(this.adminForm.valid){
      let adname = this.adminForm.controls['adminName'].value;

      localStorage.setItem("Admin",adname);     
      this.router.navigateByUrl("/admin");
    }
  }


}
