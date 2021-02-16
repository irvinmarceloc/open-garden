import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { UpdatePage } from '../update/update.page';
const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'update:id',
    component: UpdatePage,
  },
  {
    path: 'update',
    loadChildren: () => import('../update/update.module').then(m => m.UpdatePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
