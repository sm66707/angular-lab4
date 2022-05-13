import { Injectable } from '@angular/core';
import { Department } from './_models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private depts:Department[]=[
    new Department(100,"sd","alex"),
    new Department(200,"os","tanta"),
    new Department(300,"ai","cairo"),
  ];
  getAllDepartments(){
    return this.depts;
  }
  AddDepartment(dept:Department){
    this.depts.push(new Department(dept._id,dept.name,dept.location));
  }
  getDepartment(id:number){
     for(let i=0;i<this.depts.length;i++){
       if(this.depts[i]._id==id)
       return this.depts[i];
     }
     return null;
  }
  constructor() { }
}
