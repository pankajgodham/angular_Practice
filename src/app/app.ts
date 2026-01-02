import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { CommonModule } from '@angular/common';
import { Registration } from './registration/registration';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,Login,CommonModule,Registration],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  display=true;
  username="";
  email=""
  name="Angular";
  x=20;
  y=30;
  count=0;
   a:number=10;
   b:number=20;
   c:number=0;

   students=[
    {name:"pankaj",age:12,email:"p@gmail.com"},
    {name:"yash",age:12,email:"y@gmail.com"},
    {name:"umang",age:12,email:"u@gmail.com"},
    {name:"preet",age:12,email:"pr@gmail.com"},
    {name:"het",age:12,email:"h@gmail.com"}

   ]

   sum():number{
    return this.c = this.a+this.b;
    
    

   }
   decrement(){
    if( this.count>0){
      this.count--;
    console.log(this.count);
    }
    
   }
   reset(){
    this.count=0;
   }

  increment(){
    this.count++;
    console.log(this.count);
    
  }
  alert(){
    alert("alert pop-up");
    
  }

  event(event: MouseEvent) {
    console.log(MouseEvent.name);
    //console.log(event.target.name);
    console.log(event.type);
    
    
  }
  update(event:any){
    console.log(event.target.value);
    
  }

  getName(event:Event){
    const username=(event.target as HTMLInputElement).value;
    this.username=username;
    //console.log(event.target.value);
    console.log(this.username);
    
  }
  Getemail(val:string){
    console.log(val);
    this.email=val;
    
  }

  hide(){
    this.display=false;
  }
  show(){
    this.display=true;
  }
}
