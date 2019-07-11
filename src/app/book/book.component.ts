import { BookService } from './book.service';
import { Component, OnInit } from '@angular/core';
import { Book } from './book.model';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: Book[]=[];
  name:string;


  constructor(private _bookService:BookService) { }

  ngOnInit() {
    this._bookService.getBook().subscribe(resp=>{
      this.books = resp as Book[];
    }, error=>{})
  }

  

}
