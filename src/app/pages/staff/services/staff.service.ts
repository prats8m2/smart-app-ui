import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { STAFF } from 'src/app/constants/api';
import { IParams } from 'src/app/core/interface/params';

@Injectable({
  providedIn: 'root',
})
export class StaffService {
  constructor(private http: HttpClient) {}

  listStaff(params: IParams) {
    return this.http
      .get(
        STAFF.LIST_STAFF +
          `/${params.roleId}/${params.pageNumber}/${params.limit}`
      )
      .toPromise()
      .then(response => {
        const result = JSON.parse(JSON.stringify(response));
        return result;
      });
  }
}
