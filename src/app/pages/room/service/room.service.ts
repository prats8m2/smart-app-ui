import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
}
