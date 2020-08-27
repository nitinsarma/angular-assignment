import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export interface FeedbackList {
  project: string;
  ratings: number;
  comments: number;
}

@Component({
  selector: 'app-feedbacklist',
  templateUrl: './feedbacklist.component.html',
  styleUrls: ['./feedbacklist.component.css']
})


export class FeedbacklistComponent implements OnInit {
  feedbackList: any;
  displayedColumns: string[] = ['project', 'ratings', 'comments', 'action'];
  dataSource: any;
  loggedUser: string;
  editMode: boolean;
  editListData: {project: '', ratings: '', comments: ''};
  subscription: Subscription;
  editedItemIndex: number;
  editForm: FormGroup;

  constructor(private service :EmployeeServiceService) { }

  ngOnInit(): void {
    this.loggedUser = sessionStorage.getItem('loggedUser');
    this.editForm = new FormGroup({          
      comments: new FormControl('',Validators.required)
}) 
   this.feedbackList = this.service.listFeedback();
   this.feedbackList = [...new Set(this.feedbackList)];
   const ELEMENT_DATA: FeedbackList[] = this.feedbackList ;
   this.dataSource = ELEMENT_DATA;
   this.subscription = this.service.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
         this.editListData = Object.assign({},this.feedbackList[index]);
          this.editListData={
            project: this.editListData.project,
            ratings: this.editListData.ratings,
            comments: this.editListData.comments
          }
        }
      );
     
  }
  editData(index: number){
    this.service.startedEditing.next(index);
  }
  updateList(obj: {}){
  
   // this.feedbackList[this.editedItemIndex] = Object.assign({}, obj);
    //const ELEMENT_DATA: FeedbackList[] = this.feedbackList ;
    this.dataSource[this.editedItemIndex] = Object.assign({}, obj);
    this.dataSource = [...this.dataSource];
    this.editMode = false;
  }
  deleteList(index: number) {
    this.dataSource.splice(index, 1);
    this.dataSource = [...this.dataSource];
  }
}
