import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';


import { LoginPage } from './login.page';
import {HeadComponent} from '../../components/head/head.component'

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    LoginPage,
    HeadComponent
  
  
  ]
})
export class LoginModule { }
