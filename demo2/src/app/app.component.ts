import { Component } from '@angular/core';
import { DepartmentService } from './department.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'demo2';
  constructor(public deptser:DepartmentService){
    
  }
 
}
