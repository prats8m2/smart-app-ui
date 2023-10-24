import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDeviceComponent } from './add-device/add-device.component';
import { ViewDeviceComponent } from './view-device/view-device.component';
import { ListDeviceComponent } from './list-device/list-device.component';

const routes: Routes = [
  {
    path: 'add-device',
    component: AddDeviceComponent,
  },
  {
    path: 'edit-device',
    component: AddDeviceComponent,
  },
  {
    path: 'view-device/:id',
    component: ViewDeviceComponent,
  },
  {
    path: 'list-device',
    component: ListDeviceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeviceRoutingModule {}
