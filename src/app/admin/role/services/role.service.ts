import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ROLE } from 'src/app/constants/api';
import { IParams } from 'src/app/core/interface/params';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  constructor(private http: HttpClient) {}

  listRole(params: IParams) {
    return this.http
      .get(
        ROLE.LIST_ROLE +
          `/${params.accountId}/${params.pageNumber}/${params.limit}`
      )
      .toPromise()
      .then(response => {
        const result = JSON.parse(JSON.stringify(response));
        return result;
      });
  }
}
