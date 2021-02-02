import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Routes, RouterModule } from '@angular/router';
import { Tab1PageRoutingModule } from './tab1-routing.module';

import { UpdatePageModule } from '../update/update.module';
import { DeletePageModule } from '../delete/delete.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    UpdatePageModule,
    DeletePageModule,
    ComponentsModule,
    RouterModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
