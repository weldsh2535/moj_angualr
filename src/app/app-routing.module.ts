import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CommentPageComponent } from './comment-page/comment-page.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SolutionPageComponent } from './solution-page/solution-page.component';

import { TechComponent } from './tech/tech.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent,},
  {path:'moj/admin/adm',component:AdminComponent},
  {path:'moj/tch/tech',component:TechComponent},
  {path:'moj/user',component:UserComponent},
  {path:'moj/tech/solution',component:SolutionPageComponent},
  {path:'comment',component:CommentPageComponent},
  {path:'detail/report',component:DetailComponent},
  {path:'detail/report/admin',component:AdminComponent},
  {path:'moj/tech/solution/moj/tch/tech',component:TechComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
