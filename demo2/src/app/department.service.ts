import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from './_models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  depts:Department[]=[];
  private url:string="http://localhost:8080/departments/"
  getAllDepartments(){
    return this.http.get<Department[]>(this.url);
  }
  AddDepartment(dept:Department){
    return this.http.post<Department>(this.url,dept);

  }
  editDepartment(dept: Department, id: number) {
    
    return this.http.put<Department>(this.url + id, dept);
  }
  getDepartment(id:number){
    return this.http.get<Department>(this.url + id);
  }
  deleteDepartment(id: number) {
    return this.http.delete<Department>(this.url + id);
  }
 
  constructor(public http:HttpClient) { }
}
