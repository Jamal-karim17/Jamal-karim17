import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AddtaskComponent } from './component/addtask/addtask.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ForgetpasswordComponent } from './component/forgetpassword/forgetpassword.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'addtask',
    component:AddtaskComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
