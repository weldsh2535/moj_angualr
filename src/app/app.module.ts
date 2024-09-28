import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { TechComponent } from './tech/tech.component';
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import { SolutionPageComponent } from './solution-page/solution-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommentPageComponent } from './comment-page/comment-page.component';
import { DetailComponent } from './detail/detail.component';
import { FooterComponent } from './footer/footer.component';
import { TeamLeaderComponent } from './team-leader/team-leader.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    AdminComponent,
    UserComponent,
    TechComponent,
    HomeComponent,
    SolutionPageComponent,
    CommentPageComponent,
    DetailComponent,
    FooterComponent,
    TeamLeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,    
    MatSelectModule,
    MatTabsModule,
    MatInputModule,
    BrowserAnimationsModule,
    
    
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
