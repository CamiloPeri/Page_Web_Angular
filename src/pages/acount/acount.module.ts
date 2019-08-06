import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

 //pages//
import { Acountpage } from './acount.page';

//Componets//

import {FormsComponent} from '../../components/forms/forms.component'







const routes: Routes = [
  {
    path: '',
    component: Acountpage
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    Acountpage,
    FormsComponent,
    

  ]
})
export class AcountModule { }
