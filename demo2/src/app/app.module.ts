import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentService } from './department.service';
import { DepartmentModule } from './department/department.module';
import { StudentModule } from './student/student.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,DepartmentModule,FormsModule,StudentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
