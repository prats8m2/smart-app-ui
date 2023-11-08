import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRoomComponent } from './add-room/add-room.component';
import { ViewRoomComponent } from './view-room/view-room.component';
import { ListRoomComponent } from './list-room/list-room.component';

const routes: Routes = [
  {
    path: 'add-room',
    component: AddRoomComponent,
  },
  {
    path: 'edit-room',
    component: AddRoomComponent,
  },
  {
    path: 'view-room/:id',
    component: ViewRoomComponent,
  },
  {
    path: 'list-room',
    component: ListRoomComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeviceRoutingModule {}
