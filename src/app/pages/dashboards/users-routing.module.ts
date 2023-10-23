import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddUserComponent } from './add-user/add-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ViewUserComponent } from './view-user/view-user.component';

const routes: Routes = [
  {
    path: 'add-account',
    component: AddUserComponent,
  },
  {
    path: 'edit-account',
    component: AddUserComponent,
  },
  {
    path: 'view-account/:id',
    component: ViewUserComponent,
  },
  {
    path: 'list-account',
    component: ListUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardsRoutingModule {}
