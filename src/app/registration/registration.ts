import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  imports: [FormsModule],
  templateUrl: './registration.html',
  styleUrl: './registration.css',
})
export class Registration {
  user: any[] = [];
  
  username: string = '';
  password: string = '';
  ngOnInit() {
    const data = localStorage.getItem('user');
    this.user = data ? JSON.parse(data) : [];
  }
registration() {
    const newUser = {
      username: this.username,
      password: this.password,
    };
    this.user.push(newUser);
    localStorage.setItem('user', JSON.stringify(this.user));
    console.log('Registered Users:', this.user);
  }
}
