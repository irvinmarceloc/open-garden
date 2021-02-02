import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../components/components.module';

import { DeletePageRoutingModule } from './delete-routing.module';

import { DeletePage } from './delete.page';

import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DeletePageRoutingModule,
    ComponentsModule,
    RouterModule
  ],
  declarations: [DeletePage]
})
export class DeletePageModule {}
