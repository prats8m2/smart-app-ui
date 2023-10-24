import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTING_PERMISSION } from 'src/app/constants/permission';
import { URL_ROUTES } from 'src/app/constants/routing';
import { GlobalService } from 'src/app/core/services/global.service';
import { StaffService } from '../services/staff.service';
import { RoleService } from '../../role/services/role.service';
import { IParams } from 'src/app/core/interface/params';
import Swal from 'sweetalert2';
import { UserService } from '../../dashboards/service/user/user.service';

@Component({
  selector: 'app-list-staff',
  templateUrl: './list-staff.component.html',
  styleUrls: ['./list-staff.component.scss'],
})
export class ListStaffComponent implements OnInit {
  constructor(
    private router: Router,
    private globalService: GlobalService,
    private staffService: StaffService,
    private roleService: RoleService,
    private userService: UserService
  ) {}

  staffList: any = [];
  roleList: any = [];
  accountList: any = [];
  accountParams: IParams = {
    limit: 10,
    pageNumber: 1,
  };

  ngOnInit(): void {
    this.accountList = [];
    this.listAccountAPI();
  }

  listStaffAPI(param: IParams) {
    this.staffService.listStaff(param).then(res => {
      this.staffList = [...res.data.users];
    });
  }
  routeToAddStaff() {
    this.globalService.checkForPermissionAndRoute(
      ROUTING_PERMISSION.ADD_STAFF,
      URL_ROUTES.ADD_STAFF
    );
  }

  viewStaff(staffId: number) {
    this.globalService.checkForPermissionAndRoute(
      ROUTING_PERMISSION.VIEW_STAFF,
      URL_ROUTES.VIEW_STAFF + staffId
    );
  }

  editStaff(staffId: number) {
    this.globalService.checkForPermissionAndRoute(
      ROUTING_PERMISSION.UPDATE_STAFF,
      URL_ROUTES.EDIT_STAFF + '?edit=true&&id=' + staffId
    );
  }

  deleteStaff(staffId: number) {
    if (
      this.globalService.checkForPermission(ROUTING_PERMISSION.DELETE_STAFF)
    ) {
      Swal.fire({
        title: 'Confirmation',
        text: 'Are you sure you want to delete this staff?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#34c38f',
        cancelButtonColor: '#f46a6a',
        confirmButtonText: 'Yes',
      }).then(result => {
        if (result.isConfirmed) {
          this.staffService.deleteStaff(staffId).then(res => {
            if (res.status == true) {
              Swal.fire(
                'Deleted!',
                'Staff deleted successfully',
                'success'
              ).then(r => {
                if (r.value) {
                  this.globalService.checkForPermissionAndRoute(
                    ROUTING_PERMISSION.LIST_STAFF,
                    URL_ROUTES.LIST_STAFF
                  );
                }
              });
            }
          });
        }
      });
    }
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
      this.listRoleAPI(param);
    }, 1000);
  }

  listRoleAPI(param: IParams) {
    this.roleService.listRole(param).then(res => {
      if (res.data) {
        this.roleList = [...res.data.roles];
      }
    });

    setTimeout(() => {
      let param: IParams = {
        limit: 10,
        pageNumber: 1,
        roleId: this.roleList[0].id,
      };

      this.listStaffAPI(param);
    }, 1000);
  }

  changeRoleValue(event: any) {
    let param: IParams = {
      limit: 10,
      pageNumber: 1,
      roleId: event,
    };
    this.staffService.listStaff(param).then(res => {
      this.staffList = [...res.data.users];
    });
  }

  changeAccountValue(event: any) {
    this.roleList = [];
    let param: IParams = {
      limit: 10,
      pageNumber: 1,
      accountId: event,
    };

    this.listRoleAPI(param);
  }
}
