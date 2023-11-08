import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTableComponent } from './add-table/add-table.component';
import { ViewTableComponent } from './view-table/view-table.component';
import { ListTableComponent } from './list-table/list-table.component';

const routes: Routes = [
  {
    path: 'add-table',
    component: AddTableComponent,
  },
  {
    path: 'edit-table',
    component: AddTableComponent,
  },
  {
    path: 'view-table/:id',
    component: ViewTableComponent,
  },
  {
    path: 'list-table',
    component: ListTableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TableRoutingModule {}
