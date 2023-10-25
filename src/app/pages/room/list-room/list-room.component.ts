import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTING_PERMISSION } from 'src/app/constants/permission';
import { URL_ROUTES } from 'src/app/constants/routing';
import { IParams } from 'src/app/core/interface/params';
import { GlobalService } from 'src/app/core/services/global.service';
import { UserService } from '../../dashboards/service/user/user.service';
import { DeviceService } from '../../device/service/device.service';
import { SiteService } from '../../site/service/site.service';
import { StaffService } from '../../staff/services/staff.service';
import { RoomService } from '../service/room.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-room',
  templateUrl: './list-room.component.html',
  styleUrls: ['./list-room.component.scss'],
})
export class ListRoomComponent implements OnInit {
  staffList: any = [];
  siteList: any = [];
  deviceList: any = [];
  accountList: any = [];
  roomList: any = [];
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
    private roomService: RoomService
  ) {}

  ngOnInit(): void {
    this.accountList = [];
    this.listAccountAPI();
  }

  routeToAddRoom() {
    this.globalService.checkForPermissionAndRoute(
      ROUTING_PERMISSION.ADD_ROOM,
      URL_ROUTES.ADD_ROOM
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
      this.roomService.listRooms(param).then(res => {
        this.roomList = [...res.data.rooms];
      });
    }, 1000);
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
    //call list rooms api
    let param: IParams = {
      limit: 10,
      pageNumber: 1,
      siteId: value,
    };
    this.roomService.listRooms(param).then(res => {
      this.roomList = [...res.data.rooms];
    });
  }

  deleteRoom(value: any) {
    if (
      this.globalService.checkForPermission(ROUTING_PERMISSION.DELETE_STAFF)
    ) {
      Swal.fire({
        title: 'Confirmation',
        text: 'Are you sure you want to remove this room?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#34c38f',
        cancelButtonColor: '#f46a6a',
        confirmButtonText: 'Yes',
      }).then(result => {
        if (result.isConfirmed) {
          this.roomService.deleteRoom(value).then(res => {
            if (res.status == true) {
              Swal.fire(
                'Deleted!',
                'Room deleted successfully',
                'success'
              ).then(r => {
                if (r.value) {
                  this.globalService.checkForPermissionAndRoute(
                    ROUTING_PERMISSION.LIST_ROOM,
                    URL_ROUTES.LIST_ROOM
                  );
                }
              });
            }
          });
        }
      });
    }
  }

  editRoom(value: any) {
    this.globalService.checkForPermissionAndRoute(
      ROUTING_PERMISSION.UPDATE_ROOM,
      URL_ROUTES.EDIT_ROOM + '?edit=true&&id=' + value
    );
  }

  viewRoom(value: any) {
    this.globalService.checkForPermissionAndRoute(
      ROUTING_PERMISSION.VIEW_ROOM,
      URL_ROUTES.VIEW_ROOM + value
    );
  }
}
