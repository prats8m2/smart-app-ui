import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { ViewMenuComponent } from './view-menu/view-menu.component';
import { ListMenuComponent } from './list-menu/list-menu.component';

const routes: Routes = [
  {
    path: 'add-menu',
    component: AddMenuComponent,
  },
  {
    path: 'edit-menu',
    component: AddMenuComponent,
  },
  {
    path: 'view-menu/:id',
    component: ViewMenuComponent,
  },
  {
    path: 'list-menu',
    component: ListMenuComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuRoutingModule {}
