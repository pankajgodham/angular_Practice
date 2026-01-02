import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
users:any[] = [];
username: string = '';
password: string = '';
 ngOnInit() {
    const data = localStorage.getItem('user');
    console.log(data);
    
    this.users = data ? JSON.parse(data) : [];
  }

login() {
  const user = this.users.find(
    user =>
      user.username === this.username &&
      user.password === this.password
  );

  if (user) {
    alert('Login successful!');
  } else {
    alert('Invalid credentials. Please try again.');
  }
}
}
