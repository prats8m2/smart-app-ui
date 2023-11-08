import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NgbDropdownModule,
  NgbTooltipModule,
  NgbNavModule,
} from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SimplebarAngularModule } from 'simplebar-angular';
import { UIModule } from 'src/app/shared/ui/ui.module';
import { WidgetModule } from 'src/app/shared/widget/widget.module';
import { DeviceRoutingModule } from './room-routing.module';
import { AddRoomComponent } from './add-room/add-room.component';
import { ViewRoomComponent } from './view-room/view-room.component';
import { ListRoomComponent } from './list-room/list-room.component';

@NgModule({
  declarations: [AddRoomComponent, ViewRoomComponent, ListRoomComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DeviceRoutingModule,
    UIModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbNavModule,
    WidgetModule,
    NgApexchartsModule,
    SimplebarAngularModule,
  ],
})
export class RoomModule {}
