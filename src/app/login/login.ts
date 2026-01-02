import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
user: any[] = [];
username: string = '';
password: string = '';
login() {
  if (this.username === 'admin' && this.password === 'admin') {
    alert('Login successful!');
  } else {
    alert('Invalid credentials. Please try again.');
  }
}
}
