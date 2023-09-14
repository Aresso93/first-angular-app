import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from 'src/app/model/student';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.scss']
})
export class StudentCardComponent {
  @Input() studentData?:Student;

  @Output() absent: EventEmitter<Student> = new EventEmitter();

  makeAbsent(){
    this.absent.emit(this.studentData);
  }

}

