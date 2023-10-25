import { Injectable } from '@angular/core';

import { AbstractControl, FormControl } from '@angular/forms';

import { StorageService } from './storage.service';

import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { StorageType } from 'src/app/constants/storage-type';
import { IDecodeToken } from '../interface/decode-token';
import { IAPIResponse } from '../interface/api-response';
import { URL_ROUTES } from 'src/app/constants/routing';
@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  accessToken!: string | null;
  decodeToken!: IDecodeToken;
  userRole!: string;
  reportUrl!: string;
  public isSidenavOpened: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  constructor(private router: Router) {}
  handleSuccessService(result: IAPIResponse, showToast = true) {
    if (result.status == true) {
      console.log('Success API');

      return true;
    }
  }

  getDecodeToken() {
    const accessToken = StorageService.get(StorageType.ACCESS_TOKEN);
    if (accessToken) return JSON.parse(atob(accessToken.split('.')[1]));
    else this.router.navigateByUrl('');
  }

  getUserRole(value: string) {
    const accessToken = StorageService.get(StorageType.ACCESS_TOKEN);
    let decodeToken;
    if (accessToken) {
      decodeToken = JSON.parse(atob(accessToken.split('.')[1]));
    } else {
      this.router.navigateByUrl('');
    }
    let userRole = decodeToken.role.name.toLowerCase();
    let permissions = decodeToken.role.permissions;
    let account = decodeToken.account;

    if (userRole != 'super-admin' && userRole != 'client-admin') {
      userRole = 'user';
    }
    switch (value) {
      case 'decodeToken':
        return decodeToken;
      case 'userRole':
        return userRole;
      case 'permissions':
        return permissions;
      case 'account':
        return account;
    }
  }

  checkForPermissionAndRoute(permission: any, routerLink: string) {
    let userPermission = this.getUserRole('permissions');
    let permissionName = userPermission.map((per: any) => per.name);
    if (permissionName.includes(permission)) {
      console.log('PERMISSION GRANTED');
      this.router.navigateByUrl(routerLink);

      return true;
    } else {
      this.router.navigateByUrl(URL_ROUTES.ACCESS_DENIED);
      return false;
    }
  }

  checkForPermission(permission: any) {
    let userPermission = this.getUserRole('permissions');
    let permissionName = userPermission.map((per: any) => per.name);
    if (permissionName.includes(permission)) {
      console.log('true');
      return true;
    } else {
      return false;
    }
  }
}
