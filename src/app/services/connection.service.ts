import { Injectable } from '@angular/core';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  getStudents():Promise<Student[]> {
    return fetch('./assets/students.json').then(resp => resp.json())
  }

  constructor() { }
}
