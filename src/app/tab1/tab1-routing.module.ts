import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { UpdatePage } from '../update/update.page';
import { DeletePage } from '../delete/delete.page';
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
    path: 'delete:id',
    component: DeletePage,
  },
  {
    path: 'update',
    loadChildren: () => import('../update/update.module').then(m => m.UpdatePageModule)
  },
  {
    path: 'delete',
    loadChildren: () => import('../delete/delete.module').then( m => m.DeletePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
