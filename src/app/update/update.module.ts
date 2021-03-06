import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { IonicModule } from '@ionic/angular';

import { UpdatePageRoutingModule } from './update-routing.module';

import { UpdatePage } from './update.page';

import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UpdatePageRoutingModule,
    RouterModule
  ],
  declarations: [UpdatePage]
})
export class UpdatePageModule {}
