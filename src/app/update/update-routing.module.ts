import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatePage } from './update.page';
import { DeletePage } from '../delete/delete.page';

const routes: Routes = [
  {
    path: ':id',
    component: UpdatePage
  },
  {
    path: 'delete:id',
    component: DeletePage,
  },
  {
    path: 'delete',
    loadChildren: () => import('../delete/delete.module').then( m => m.DeletePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatePageRoutingModule {}
