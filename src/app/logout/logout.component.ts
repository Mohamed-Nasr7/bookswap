import { LogService } from './../log.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router,
    private logService:LogService) { }

  ngOnInit() {

    localStorage.removeItem("User");
    this.logService.setStatus(false)
    this.router.navigateByUrl("/home");
  }

}
