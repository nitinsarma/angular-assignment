import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { StarRatingComponent } from './star-rating.component';
import { FeedbacklistComponent } from './feedbacklist/feedbacklist.component';
import { RetrieveNamePipe } from './retrivename.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StarRatingComponent,
    FeedbackComponent,
    FeedbacklistComponent,
    RetrieveNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[],
})
export class AppModule { }
