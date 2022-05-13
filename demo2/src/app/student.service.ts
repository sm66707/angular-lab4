import { Injectable } from '@angular/core';
import { Student } from './_models/student';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private stds:Student[]=[
    new Student(100,"ahmed","very good"),
    new Student(200,"ali","good"),
    new Student(300,"mahmoud","Excellent"),
  ];
  getAllStudents(){
    return this.stds;
  }
  AddStudent(std:Student){
    this.stds.push(new Student(std._id,std.name,std.grade));
  }
  getStudent(id:number){
     for(let i=0;i<this.stds.length;i++){
       if(this.stds[i]._id==id)
       return this.stds[i];
     }
     return null;
  }
  constructor() { }
}
