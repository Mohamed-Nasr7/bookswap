import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(books: any, name?: any): any {
    
    if(name === undefined) return books;

    return books.filter(book=>{
      return book.Title.includes(name);
    })

  }

}
