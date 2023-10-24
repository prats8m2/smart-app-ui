import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SITE, STAFF } from 'src/app/constants/api';
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

  addStaff(staffForm: FormGroup) {
    const {
      email,
      username,
      password,
      firstName,
      lastName,
      phone,
      role,
      site,
      account,
    } = staffForm.value;

    return this.http
      .post(STAFF.ADD_STAFF, {
        email: email,
        username: username,
        password: password,
        firstName: firstName,
        lastName: lastName,
        mobile: phone,
        role: role,
        sites: site,
        accountId: account,
      })
      .toPromise()
      .then(response => {
        const result = JSON.parse(JSON.stringify(response));
        return result;
      });
  }

  viewStaff(id: any) {
    return this.http
      .get(STAFF.VIEW_STAFF + id)
      .toPromise()
      .then(response => {
        const result = JSON.parse(JSON.stringify(response));
        return result;
      });
  }

  updateStaff(staffForm: any) {
    const {
      id,
      email,
      username,
      password,
      firstName,
      lastName,
      phone,
      role,
      site,
      account,
    } = staffForm.value;

    return this.http
      .put(STAFF.UPDATE_STAFF, {
        id: id,
        email: email,
        username: username,
        password: password,
        firstName: firstName,
        lastName: lastName,
        mobile: phone,
        role: role,
        sites: site,
        accountId: account,
      })
      .toPromise()
      .then(response => {
        const result = JSON.parse(JSON.stringify(response));
        return result;
      });
  }

  deleteStaff(id: number) {
    return this.http
      .delete(STAFF.DELETE_STAFF + id.toString())
      .toPromise()
      .then(response => {
        const result = JSON.parse(JSON.stringify(response));
        return result;
      });
  }
}
