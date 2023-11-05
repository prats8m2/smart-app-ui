import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../service/user/user.service';
import { IParams } from 'src/app/core/interface/params';
import { Router } from '@angular/router';
import { URL_ROUTES } from 'src/app/constants/routing';
import Swal from 'sweetalert2';
import { GlobalService } from 'src/app/core/services/global.service';
import { ROUTING_PERMISSION } from 'src/app/constants/permission';
import { ROLE } from 'src/app/constants/api';
import { APP_ROLE } from 'src/app/constants/core';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss'],
})
export class ListUserComponent implements OnInit {
  constructor(
    public userService: UserService,
    private router: Router,
    private globalService: GlobalService
  ) {}

  usersList: any = [];

  userParams: IParams = {
    limit: 10,
    pageNumber: 1,
  };

  ngOnInit(): void {
    this.listUserAPI();
  }

  listUserAPI() {
    this.userService.listUser(this.userParams).then(res => {
      this.usersList = [...res.data.users];
    });
  }

  editUser(id: any) {
    this.globalService.checkForPermissionAndRoute(
      ROUTING_PERMISSION.UPDATE_USER,
      URL_ROUTES.ADD_USER + '?edit=true&&id=' + id
    );
  }

  viewUser(id: any) {
    this.globalService.checkForPermissionAndRoute(
      ROUTING_PERMISSION.VIEW_USER,
      URL_ROUTES.VIEW_USER + id
    );
  }

  routeToAddUser() {
    this.globalService.checkForPermissionAndRoute(
      ROUTING_PERMISSION.ADD_USER,
      URL_ROUTES.ADD_USER
    );
  }

  deleteUser(id: any) {
    if (this.globalService.checkForPermission(ROUTING_PERMISSION.DELETE_USER)) {
      Swal.fire({
        title: 'Confirmation',
        text: 'Are you sure you want to delete this user?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#34c38f',
        cancelButtonColor: '#f46a6a',
        confirmButtonText: 'Yes',
      }).then(result => {
        if (result.isConfirmed) {
          this.userService.deleteUser(id).then(res => {
            if (res.status == true) {
              Swal.fire(
                'Deleted!',
                'User deleted successfully',
                'success'
              ).then(r => {
                if (r.value) {
                  this.globalService.checkForPermissionAndRoute(
                    ROUTING_PERMISSION.LIST_USER,
                    URL_ROUTES.LIST_USER
                  );
                }
              });
            }
          });
        }
      });
    }
  }

  confirm() {}
}
