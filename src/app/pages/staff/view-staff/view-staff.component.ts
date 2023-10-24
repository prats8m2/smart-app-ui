import { Component, OnInit } from '@angular/core';
import { StaffService } from '../services/staff.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/core/services/global.service';
import { ROUTING_PERMISSION } from 'src/app/constants/permission';
import { URL_ROUTES } from 'src/app/constants/routing';

@Component({
  selector: 'app-view-staff',
  templateUrl: './view-staff.component.html',
  styleUrls: ['./view-staff.component.scss'],
})
export class ViewStaffComponent implements OnInit {
  constructor(
    private staffService: StaffService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private globalService: GlobalService
  ) {}

  staffId: number;
  staffData: any = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.staffId = params.id;
      this.viewStaff(this.staffId);
    });
  }

  viewStaff(id: any) {
    this.staffService.viewStaff(id).then(res => {
      if (res.data) {
        this.staffData = res.data;
      }
    });
  }

  deleteStaff() {
    this.staffService.deleteStaff(this.staffId).then(res => {
      if (res.status) {
        this.globalService.checkForPermissionAndRoute(
          ROUTING_PERMISSION.LIST_STAFF,
          URL_ROUTES.LIST_STAFF
        );
      }
    });
  }

  updateStaff() {
    this.globalService.checkForPermissionAndRoute(
      ROUTING_PERMISSION.UPDATE_STAFF,
      URL_ROUTES.EDIT_STAFF + '?edit=true&&id=' + this.staffId
    );
  }
}
