import { User } from './models/user.model';
import { Message } from './models/message.model';
import { Book } from './models/book.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  userUrl:string = "https://jsonplaceholder.typicode.com/users";
  bookUrl:string = "https://jsonplaceholder.typicode.com/albums";
  mesUrl:string = "https://jsonplaceholder.typicode.com/users";

  constructor(private _http:HttpClient) { }

  getUsers(){
    return this._http.get(this.userUrl)
  }

  getBooks(){
    return this._http.get(this.bookUrl)
  }

  getMessages(){
    return this._http.get(this.mesUrl)
  }



  deleteUSr(user:User){
    return this._http.delete(`${this.userUrl}/${user.id}`)
  }
  
  deleteBK(book:Book){
    return this._http.delete(`${this.bookUrl}/${book.id}`)
  }

  deleteUMsg(msg:Message){
    return this._http.delete(`${this.mesUrl}/${msg.id}`)
  }

}
