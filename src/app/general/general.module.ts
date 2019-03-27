import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GeneralPage } from './general.page';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: GeneralPage
  }
];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GeneralPage]
})
export class GeneralPageModule {}
