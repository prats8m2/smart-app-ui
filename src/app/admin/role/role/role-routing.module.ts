import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRoleComponent } from '../add-role/add-role.component';
import { ViewRoleComponent } from '../view-role/view-role.component';
import { ListRoleComponent } from '../list-role/list-role.component';

const routes: Routes = [
  {
    path: 'add-role',
    component: AddRoleComponent,
  },
  {
    path: 'edit-role',
    component: AddRoleComponent,
  },
  {
    path: 'view-role/:id',
    component: ViewRoleComponent,
  },
  {
    path: 'list-role',
    component: ListRoleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoleRoutingModule {}
