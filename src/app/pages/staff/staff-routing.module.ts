import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { ViewStaffComponent } from './view-staff/view-staff.component';
import { ListStaffComponent } from './list-staff/list-staff.component';

const routes: Routes = [
  {
    path: 'add-staff',
    component: AddStaffComponent,
  },
  {
    path: 'edit-staff',
    component: AddStaffComponent,
  },
  {
    path: 'view-staff/:id',
    component: ViewStaffComponent,
  },
  {
    path: 'list-staff',
    component: ListStaffComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffRoutingModule {}
