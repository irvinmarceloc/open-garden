import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatePageRoutingModule } from './update-routing.module';

import { UpdatePage } from './update.page';

import { ComponentsModule } from '../components/components.module';

import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatePageRoutingModule,
    ComponentsModule,
    RouterModule.forChild([
      {
        path: '',
        component: UpdatePage      
    }
    ])
  ],
  declarations: [UpdatePage]
})
export class UpdatePageModule {}
