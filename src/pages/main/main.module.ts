import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { MainPage } from './main.page';
import {SectionComponent} from '../../components/section/section.component'

const routes: Routes = [
  {
    path: '',
    component: MainPage
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    MainPage,
    SectionComponent
  ]
})
export class MainModule { }
