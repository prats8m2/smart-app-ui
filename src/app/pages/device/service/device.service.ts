import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DEVICE } from 'src/app/constants/api';
import { IParams } from 'src/app/core/interface/params';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  constructor(private http: HttpClient) {}

  addDevice(deviceForm: FormGroup) {
    const { code, roomId, site, account } = deviceForm.value;

    return this.http
      .post(DEVICE.ADD_DEVICE, {
        code: code,
        roomId: roomId,
        siteId: site,
        accountId: account,
      })
      .toPromise()
      .then(response => {
        const result = JSON.parse(JSON.stringify(response));
        return result;
      });
  }

  listDevices(params: IParams) {
    return this.http
      .get(
        DEVICE.LIST_DEVICE +
          `/${params.siteId}/${params.pageNumber}/${params.limit}`
      )
      .toPromise()
      .then(response => {
        const result = JSON.parse(JSON.stringify(response));
        return result;
      });
  }

  viewDevice(id: any) {
    return this.http
      .get(DEVICE.VIEW_DEVICE + id)
      .toPromise()
      .then(response => {
        const result = JSON.parse(JSON.stringify(response));
        return result;
      });
  }

  deleteDevice(id: any) {
    return this.http
      .delete(DEVICE.DELETE_DEVICE + id)
      .toPromise()
      .then(response => {
        const result = JSON.parse(JSON.stringify(response));
        return result;
      });
  }
}
