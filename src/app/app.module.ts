import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AddtaskComponent } from './component/addtask/addtask.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ForgetpasswordComponent } from './component/forgetpassword/forgetpassword.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    AddtaskComponent,
    LoginComponent,
    RegisterComponent,
    ForgetpasswordComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
