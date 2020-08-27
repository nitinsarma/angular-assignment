import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormControl , Validators } from '@angular/forms';
import { StarRatingColor } from '../star-rating.component';
import { EmployeeServiceService } from '../employee-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
loggedUser: string;
form: FormGroup;
rating:number = 1;
list: any;
  starCount:number = 5;
  starColor:StarRatingColor = StarRatingColor.accent;

  constructor(private service :EmployeeServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.loggedUser = sessionStorage.getItem('loggedUser');
    this.form = new FormGroup({          
      empName:new FormControl(null,Validators.required), 
      empId:new FormControl(null,Validators.required),
      project:new FormControl(null,Validators.required),
      ratings: new FormControl(null, null),
      comments: new FormControl(null,Validators.required)
}) 
  }
  onRatingChanged(rating){
    this.rating = rating;
  }
  onSubmitFeedBack(data){
    console.log(data);
    data.value.ratings = this.rating;
    this.service.addFeedback(data.value);
    this.router.navigate(['/feedbackList']);
  }
  onCancel() {
    this.form.reset();
  }
}

