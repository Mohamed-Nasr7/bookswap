import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  url:string = "https://jsonplaceholder.typicode.com/comments?postId=1";

  constructor(private http:HttpClient) { }

  getBook(){
    return this.http.get(this.url)
  }

}
