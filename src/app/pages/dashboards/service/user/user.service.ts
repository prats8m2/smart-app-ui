import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { USER } from 'src/app/constants/api';
import { IParams } from 'src/app/core/interface/params';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  addUser(userForm: FormGroup) {
    const { firstName, lastName, username, email, password, accountName } =
      userForm.value;

    return this.http
      .post(USER.ADD_USER, {
        email: email,
        username: username,
        password: password,
        accountName: accountName,
        firstName: firstName,
        lastName: lastName,
      })
      .toPromise()
      .then(response => {
        const result = JSON.parse(JSON.stringify(response));
        return result;
      });
  }

  listUser(params: IParams) {
    return this.http
      .get(USER.LIST_USER + `/${params.pageNumber}/${params.limit}`)
      .toPromise()
      .then(response => {
        const result = JSON.parse(JSON.stringify(response));
        return result;
      });
  }

  deleteUser(id: number) {
    return this.http
      .delete(USER.DELETE_USER + id.toString())
      .toPromise()
      .then(response => {
        const result = JSON.parse(JSON.stringify(response));
        return result;
      });
  }

  viewUser(id: any) {
    return this.http
      .get(USER.VIEW_USER + id)
      .toPromise()
      .then(response => {
        const result = JSON.parse(JSON.stringify(response));
        return result;
      });
  }
  updateUser(userForm: any) {
    const { id, firstName, lastName, username, email, password, accountName } =
      userForm.value;

    return this.http
      .put(USER.UPDATE_USER, {
        id: id,
        email: email,
        username: username,
        password: password,
        accountName: accountName,
        firstName: firstName,
        lastName: lastName,
      })
      .toPromise()
      .then(response => {
        const result = JSON.parse(JSON.stringify(response));
        return result;
      });
  }

  listAccounts(params: IParams) {
    return this.http
      .get(USER.LIST_ACCOUNTS + `/${params.pageNumber}/${params.limit}`)
      .toPromise()
      .then(response => {
        const result = JSON.parse(JSON.stringify(response));
        return result;
      });
  }
}
