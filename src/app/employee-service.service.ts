import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EmployeeServiceService {
  storeFeedback= [];
  startedEditing = new Subject<number>();
  constructor() { }

  addFeedback(obj:any){
    console.log(obj);
    this.storeFeedback.push(obj);
    }

    listFeedback(){
        return this.storeFeedback;
    }
  
}

  