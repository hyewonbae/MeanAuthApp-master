import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { NgFlashMessagesModule } from 'ng-flash-messages';
import { AuthGuard } from './guards/auth.guard';
import { AdminmainComponent } from './components/adminmain/adminmain.component';
import { AddstoreComponent } from './components/addstore/addstore.component';
import { StorelistComponent } from './components/storelist/storelist.component';
import { ReviewComponent } from './components/review/review.component';
import { UsermainComponent } from './components/usermain/usermain.component';


const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path:'adminmain', component: AdminmainComponent, canActivate:[AuthGuard]},
  {path:'addstore', component: AddstoreComponent, canActivate:[AuthGuard]},
  {path:'storelist', component: StorelistComponent, canActivate:[AuthGuard]},
  {path:'review', component: ReviewComponent, canActivate:[AuthGuard]},
  {path:'usermain', component: UsermainComponent, canActivate:[AuthGuard]}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    AdminmainComponent,
    AddstoreComponent,
    StorelistComponent,
    ReviewComponent,
    UsermainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    NgFlashMessagesModule
  ],
  providers: [ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
