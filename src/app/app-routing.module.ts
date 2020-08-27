import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbacklistComponent } from './feedbacklist/feedbacklist.component';


const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path: 'empFeedback', component: FeedbackComponent},
  {path: 'feedbackList', component: FeedbacklistComponent},
  {path: "",redirectTo: '/login',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
