import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTING_PERMISSION } from 'src/app/constants/permission';
import { URL_ROUTES } from 'src/app/constants/routing';
import { IParams } from 'src/app/core/interface/params';
import { GlobalService } from 'src/app/core/services/global.service';
import { UserService } from '../../dashboards/service/user/user.service';
import { RoleService } from '../../role/services/role.service';
import { StaffService } from '../../staff/services/staff.service';
import { SiteService } from '../../site/service/site.service';
import { DeviceService } from '../service/device.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-device',
  templateUrl: './list-device.component.html',
  styleUrls: ['./list-device.component.scss'],
})
export class ListDeviceComponent implements OnInit {
  staffList: any = [];
  siteList: any = [];
  deviceList: any = [];
  accountList: any = [];
  accountParams: IParams = {
    limit: 10,
    pageNumber: 1,
  };
  constructor(
    private router: Router,
    private globalService: GlobalService,
    private staffService: StaffService,
    private siteService: SiteService,
    private userService: UserService,
    private deviceService: DeviceService
  ) {}

  ngOnInit(): void {
    this.accountList = [];
    this.listAccountAPI();
  }

  routeToAddDevice() {
    this.globalService.checkForPermissionAndRoute(
      ROUTING_PERMISSION.ADD_DEVICE,
      URL_ROUTES.ADD_DEVICE
    );
  }

  listAccountAPI() {
    this.userService.listAccounts(this.accountParams).then(res => {
      if (res.data) {
        this.accountList = [...res.data.accounts];
      }
    });
    setTimeout(() => {
      let param: IParams = {
        limit: 10,
        pageNumber: 1,
        accountId: this.accountList[0].id,
      };
      this.listSiteAPI(param);
    }, 1000);
  }

  listSiteAPI(param: IParams) {
    this.siteService.listSite(param).then(res => {
      if (res.data) {
        this.siteList = [...res.data.sites];
      }
    });

    setTimeout(() => {
      let param: IParams = {
        limit: 10,
        pageNumber: 1,
        siteId: this.siteList[0].id,
      };
      this.deviceService.listDevices(param).then(res => {
        this.deviceList = [...res.data.devices];
      });
    }, 1000);

    console.log(this.siteList);
  }

  changeAccountValue(value: any) {
    let param: IParams = {
      limit: 10,
      pageNumber: 1,
      accountId: value,
    };
    this.listSiteAPI(param);
  }
  changeSiteValue(value: any) {
    //call list devices API

    let param: IParams = {
      limit: 10,
      pageNumber: 1,
      siteId: value,
    };
    this.deviceService.listDevices(param).then(res => {
      this.deviceList = [...res.data.devices];
    });
  }

  editDevice(id: any) {
    this.globalService.checkForPermissionAndRoute(
      ROUTING_PERMISSION.UPDATE_DEVICE,
      URL_ROUTES.EDIT_DEVICE + '?edit=true&&id=' + id
    );
  }

  deleteDevice(id: any) {
    if (this.globalService.checkForPermission(ROUTING_PERMISSION.DELETE_SITE)) {
      Swal.fire({
        title: 'Confirmation',
        text: 'Are you sure you want to delete this device?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#34c38f',
        cancelButtonColor: '#f46a6a',
        confirmButtonText: 'Yes',
      }).then(result => {
        if (result.isConfirmed) {
          this.deviceService.deleteDevice(id).then(res => {
            if (res.status == true) {
              Swal.fire(
                'Deleted!',
                'Site deleted successfully',
                'success'
              ).then(r => {
                if (r.value) {
                  this.globalService.checkForPermissionAndRoute(
                    ROUTING_PERMISSION.LIST_DEVICE,
                    URL_ROUTES.LIST_DEVICE
                  );
                }
              });
            }
          });
        }
      });
    }
  }

  viewDevice(id: any) {
    this.globalService.checkForPermissionAndRoute(
      ROUTING_PERMISSION.VIEW_DEVICE,
      URL_ROUTES.VIEW_DEVICE + id
    );
  }
}
