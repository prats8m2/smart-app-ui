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

  checkEmptyValue(valueReceived: string | number | undefined) {
    if (valueReceived === null || valueReceived === '') {
      return 'NA';
    }
    return valueReceived;
  }

  chipNameProvider(fullName: string | undefined | null) {
    const splitNameArray: string[] | undefined = fullName?.trim()?.split(' ');
    let chipName = '';
    if (splitNameArray) {
      if (splitNameArray.length > 1 && splitNameArray[1] !== 'null') {
        chipName =
          splitNameArray[0].charAt(0) +
          splitNameArray[splitNameArray.length - 1].charAt(0);
      } else {
        chipName =
          splitNameArray[0].charAt(0) +
          splitNameArray[0].charAt(splitNameArray[0].length - 1);
      }
    }
    return chipName.toUpperCase();
  }

  toControl(absCtrl: AbstractControl): FormControl {
    const ctrl = absCtrl as FormControl;
    return ctrl;
  }

  checkMobileField(mobileNumber: string, countryCode: string) {
    if (
      mobileNumber !== null &&
      mobileNumber !== '' &&
      mobileNumber !== undefined
    ) {
      return countryCode + mobileNumber.toString();
    } else {
      return null;
    }
  }

  setMobileField(value: string, mobileNumber: string) {
    let numberValue!: string;
    let countryCode!: string;
    if (mobileNumber !== undefined && mobileNumber !== null) {
      const length = mobileNumber.length;
      const splitIndex = length - 10;
      (countryCode = mobileNumber.slice(0, splitIndex)),
        (numberValue = mobileNumber.slice(splitIndex, length));
    } else {
      numberValue = '';
      countryCode = '+91';
    }
    switch (value) {
      case 'code':
        return countryCode;
      case 'number':
        return numberValue;
      default:
        return '';
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
    }
  }

  camelCase(input: string): string {
    const words = input.split(' ');
    if (words.length === 1) {
      return words[0].toLowerCase();
    }

    const capitalizedWords = words.map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
    });

    return capitalizedWords.join('');
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
