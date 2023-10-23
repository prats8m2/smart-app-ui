import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { URL_ROUTES } from 'src/app/constants/routing';
import { GlobalService } from 'src/app/core/services/global.service';
import { ROUTING_PERMISSION } from 'src/app/constants/permission';

@Component({
  selector: 'app-crypto',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss'],
})
export class ViewUserComponent implements OnInit {
  // bread crumb items
  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private globalService: GlobalService
  ) {}
  userId: number;
  userData: any = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params.id;
      this.viewUserApi(this.userId);
    });
  }

  viewUserApi(id: any) {
    this.userService.viewUser(id).then(res => {
      if (res.data) {
        this.userData = res.data;
      }
    });
  }

  deleteUser() {
    this.userService.deleteUser(this.userId).then(res => {
      if (res.status) {
        this.globalService.checkForPermissionAndRoute(
          ROUTING_PERMISSION.LIST_USER,
          URL_ROUTES.LIST_USER
        );
      }
    });
  }

  updateUser() {
    this.globalService.checkForPermissionAndRoute(
      ROUTING_PERMISSION.UPDATE_USER,
      URL_ROUTES.EDIT_USER + '?edit=true&&id=' + this.userId
    );
  }
}
