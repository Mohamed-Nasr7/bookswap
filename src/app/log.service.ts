import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  logged = new Subject<boolean>();

  constructor() {
    this.logged.next(false);
    
  }

  
  setStatus(status:boolean){
    this.logged.next(status);
  }


  getStatus(){
    return this.logged.asObservable();
  }


}
