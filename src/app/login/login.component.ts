import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl , Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(
    private router: Router
  ) {
  }
   ngOnInit() {
    this.form = new FormGroup({          
      username:new FormControl(null,Validators.email), 
      password:new FormControl(null,Validators.required)
}) 
  }
   onSubmit(data: any) {
   sessionStorage.setItem('loggedUser', data.value.username);
   this.router.navigate(['/empFeedback']);
  }
}
