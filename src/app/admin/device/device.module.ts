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
import { DeviceRoutingModule } from './device-routing.module';
import { AddDeviceComponent } from './add-device/add-device.component';
import { ViewDeviceComponent } from './view-device/view-device.component';
import { ListDeviceComponent } from './list-device/list-device.component';

@NgModule({
  declarations: [AddDeviceComponent, ViewDeviceComponent, ListDeviceComponent],
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
export class DeviceModule {}
