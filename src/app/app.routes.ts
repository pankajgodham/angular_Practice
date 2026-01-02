import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Registration } from './registration/registration';
import { Crud } from './crud/crud';
import { Basic } from './basic/basic';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'registration', component: Registration },
  { path: 'crud', component: Crud },
  {path:'basic', component:Basic}
    
];
