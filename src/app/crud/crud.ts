import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crud',
  imports: [CommonModule,FormsModule],
  templateUrl: './crud.html',
  styleUrl: './crud.css',
})
export class Crud {
students: any[] = [];
  rollNo: number = 0;
  name: string = '';
  editRollNo: number | null = null;

  ngOnInit() {
    const data = localStorage.getItem('students');
    this.students = data ? JSON.parse(data) : [];
  }

  addStudent() {
    if (!this.rollNo || !this.name) return;

    if (this.students.find(s => s.rollNo === this.rollNo)) {
      alert('Roll number already exists!');
      return;
    }

    this.students.push({
      rollNo: this.rollNo,
      name: this.name
    });

    this.save();
    this.clear();
  }

 
  editStudent(rollNo: number) {
    const student = this.students.find(s => s.rollNo === rollNo);
    if (student) {
      this.rollNo = student.rollNo;
      this.name = student.name;
      this.editRollNo = rollNo;
    }
  }

  
  updateStudent() {
    if (this.editRollNo === null) return;

    this.students = this.students.map(s =>
      s.rollNo === this.editRollNo
        ? { rollNo: this.rollNo, name: this.name }
        : s
    );

    this.save();
    this.clear();
  }


  deleteStudent(rollNo: number) {
    this.students = this.students.filter(s => s.rollNo !== rollNo);
    this.save();
  }

  save() {
    localStorage.setItem('students', JSON.stringify(this.students));
  }

  clear() {
    this.rollNo = 0;
    this.name = '';
    this.editRollNo = null;
  }
}
