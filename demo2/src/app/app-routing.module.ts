import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthorizedGuard } from './authorized.guard';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"contactus",component:ContactusComponent,canActivate:[AuthorizedGuard]},
  {path:"about",component:AboutComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"",component:HomeComponent},
  // { path: "students", loadChildren: () => import('./student/student.module').then(m => m.StudentModule) },
  {path:"departments",loadChildren:()=>import('./department/department.module').then(m=>m.DepartmentModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
