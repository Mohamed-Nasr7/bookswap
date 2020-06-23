import { LogService } from './../../log.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private logService:LogService,
    public _router:Router) { }

  logging:boolean=false;
  username:string="";


  ngOnInit() {

    this.logService.getStatus().subscribe(response=>{
      this.logging = response;

      let email = localStorage.getItem("User");
      if(email){
        this.username = this.cutEmail(email);
      }
    }, error=>{})
 
  }

  /* cutting username from email */
  cutEmail(email){
    let splitFrom:number = email.indexOf('@');
    return email.slice(0, splitFrom);
  }

}
