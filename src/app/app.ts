import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  username="";
  name="Angular";
  x=20;
  y=30;
  count=0;
   a:number=10;
   b:number=20;
   c:number=0;

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
}
