import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentService } from 'src/app/department.service';
import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {
  id=0;
  department:Department|null=new Department(0,"","");
  constructor(public ac:ActivatedRoute,public deptSer:DepartmentService) { }

  ngOnInit(): void {
    this.ac.params.subscribe(data => {
      this.deptSer.getDepartment(data['id']).subscribe(dept => {
        this.department = dept;
      });
    });
  }

}
