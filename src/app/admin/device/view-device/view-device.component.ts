import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/core/services/global.service';
import { DeviceService } from '../service/device.service';
import { ROUTING_PERMISSION } from 'src/app/constants/permission';
import { URL_ROUTES } from 'src/app/constants/routing';

@Component({
  selector: 'app-view-device',
  templateUrl: './view-device.component.html',
  styleUrls: ['./view-device.component.scss'],
})
export class ViewDeviceComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private globalService: GlobalService,
    private deviceService: DeviceService
  ) {}

  deviceId: number;
  deviceData: any = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.deviceId = params.id;
      this.viewDeviceAPI(this.deviceId);
    });
  }

  viewDeviceAPI(id: any) {
    this.deviceService.viewDevice(id).then(res => {
      if (res.data) {
        this.deviceData = res.data;
      }
    });
  }

  updateDevice() {
    this.globalService.checkForPermissionAndRoute(
      ROUTING_PERMISSION.UPDATE_DEVICE,
      URL_ROUTES.EDIT_DEVICE + '?edit=true&&id=' + this.deviceId
    );
  }

  deleteDevice() {
    if (
      this.globalService.checkForPermission(ROUTING_PERMISSION.DELETE_DEVICE)
    ) {
      this.deviceService.deleteDevice(this.deviceId).then(res => {
        if (res.status) {
          this.globalService.checkForPermissionAndRoute(
            ROUTING_PERMISSION.LIST_DEVICE,
            URL_ROUTES.LIST_DEVICE
          );
        }
      });
    }
  }
}
