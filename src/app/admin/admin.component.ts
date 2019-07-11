import { Component, OnInit } from '@angular/core';


import { AdminService } from './admin.service';
import { Book } from './models/book.model';
import { User } from './models/user.model';
import {Message} from './models/message.model';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})




export class AdminComponent implements OnInit {
  
  
  users: User[]=[];
  
  books: Book[]=[];

  messages: Message[]=[];

  
  adminName:string;

  

  constructor( private _adminService:AdminService) { }

  ngOnInit() {

    /* Saving admin name in localStorage */
    let email = localStorage.getItem("Admin");
    if(email){
      this.adminName = this.cutEmail(email);
    }


    /* Get Users */
    this._adminService.getUsers().subscribe(resp=>{
      this.users = resp as User[];
    }, error=>{})


    /* Get Books */
    this._adminService.getBooks().subscribe(resp=>{
      this.books = resp as Book[];
    }, error=>{})


    this._adminService.getMessages().subscribe(resp=>{
      this.messages = resp as Message[];
    }, error=>{})

  }



  
  /* cut name from email */
  cutEmail(email){
    let splitFrom:number = email.indexOf('@');
    return email.slice(0, splitFrom);
  }



  /* Delete Users */
  deleteUser(user:User,index:number)
  {
    this._adminService.deleteUSr(user).subscribe(res=>{
      this.users.splice(index,1);
      console.log(user);
    });
  }
  
  /* Delete Books */
  deleteBook(book:Book,index:number)
  {  
    this._adminService.deleteBK(book).subscribe(res=>{
      this.books.splice(index,1);
      
    });
  }

  /* Delete Message */
  deleteMessage(message:Message,index:number)
  {  
    this._adminService.deleteUMsg(message).subscribe(res=>{
      this.messages.splice(index,1);
      console.log(message);
    });
  }

}
