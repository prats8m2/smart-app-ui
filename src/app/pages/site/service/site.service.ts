import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SITE, USER } from 'src/app/constants/api';
import { IParams } from 'src/app/core/interface/params';

@Injectable({
  providedIn: 'root',
})
export class SiteService {
  constructor(private http: HttpClient) {}

  addSite(siteForm: FormGroup) {
    const { account, address, siteName, type, wifiDetails } = siteForm.value;

    return this.http
      .post(SITE.ADD_SITE, {
        name: siteName,
        type: parseInt(type),
        address: address,
        wifiDetails: wifiDetails,
        accountId: account,
      })
      .toPromise()
      .then(response => {
        const result = JSON.parse(JSON.stringify(response));
        return result;
      });
  }

  listSite(params: IParams) {
    return this.http
      .get(
        SITE.LIST_SITE +
          `/${params.accountId}/${params.pageNumber}/${params.limit}`
      )
      .toPromise()
      .then(response => {
        const result = JSON.parse(JSON.stringify(response));
        return result;
      });
  }

  viewSite(id: any) {
    return this.http
      .get(SITE.VIEW_SITE + id)
      .toPromise()
      .then(response => {
        const result = JSON.parse(JSON.stringify(response));
        return result;
      });
  }

  updateSite(userForm: any) {
    const { id, account, address, siteName, type, wifiDetails } =
      userForm.value;

    return this.http
      .put(SITE.UPDATE_SITE, {
        id,
        accountId: account,
        name: siteName,
        address: address,
        wifiDetails,
        type: parseInt(type),
      })
      .toPromise()
      .then(response => {
        const result = JSON.parse(JSON.stringify(response));
        return result;
      });
  }

  deleteSite(id: number) {
    return this.http
      .delete(SITE.DELETE_SITE + id)
      .toPromise()
      .then(response => {
        const result = JSON.parse(JSON.stringify(response));
        return result;
      });
  }
}
