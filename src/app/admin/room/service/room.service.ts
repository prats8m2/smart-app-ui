import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ROOM, SITE } from 'src/app/constants/api';
import { IParams } from 'src/app/core/interface/params';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  constructor(private http: HttpClient) {}

  listRooms(params: IParams) {
    return this.http
      .get(
        ROOM.LIST_ROOM +
          `/${params.siteId}/${params.pageNumber}/${params.limit}`
      )
      .toPromise()
      .then(response => {
        const result = JSON.parse(JSON.stringify(response));
        return result;
      });
  }

  addRoom(roomForm: FormGroup) {
    const { name, site, device, wifi, account } = roomForm.value;

    return this.http
      .post(ROOM.ADD_ROOM, {
        name: name,
        wifi: wifi,
        siteId: site,
        deviceId: device,
        accountId: account,
      })
      .toPromise()
      .then(response => {
        const result = JSON.parse(JSON.stringify(response));
        return result;
      });
  }

  deleteRoom(id: any) {
    return this.http
      .delete(ROOM.DELETE_ROOM + id)
      .toPromise()
      .then(response => {
        const result = JSON.parse(JSON.stringify(response));
        return result;
      });
  }

  viewRoom(id: any) {
    return this.http
      .get(ROOM.VIEW_ROOM + id)
      .toPromise()
      .then(response => {
        const result = JSON.parse(JSON.stringify(response));
        return result;
      });
  }
}
