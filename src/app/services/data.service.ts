import { Injectable } from '@angular/core';
import { Student } from '../model/student';
import { ConnectionService } from './connection.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  studentsArray: Student[] = []

  constructor(private conServ: ConnectionService) {
    this.conServ.getStudents().then(students =>
      this.studentsArray.push(...students))
   }

  addStudent(student:Student){
    this.studentsArray.push(student);
    console.log(this.studentsArray);

  }
}
