import { Component, OnInit } from '@angular/core';
import { IParams } from 'src/app/core/interface/params';
import { SiteModule } from '../site.module';
import { SiteService } from '../service/site.service';
import { Router } from '@angular/router';
import { URL_ROUTES } from 'src/app/constants/routing';
import Swal from 'sweetalert2';
import { GlobalService } from 'src/app/core/services/global.service';
import { ROUTING_PERMISSION } from 'src/app/constants/permission';

@Component({
  selector: 'app-list-site',
  templateUrl: './list-site.component.html',
  styleUrls: ['./list-site.component.scss'],
})
export class ListSiteComponent implements OnInit {
  sitesList: any = [];

  siteParams: IParams = {
    limit: 10,
    pageNumber: 1,
    accountId: 7,
  };

  constructor(
    private siteService: SiteService,
    private router: Router,
    private globalService: GlobalService
  ) {}

  ngOnInit(): void {
    this.listSiteAPI();
  }

  listSiteAPI() {
    this.siteService.listSite(this.siteParams).then(res => {
      this.sitesList = [...res.data.sites];
    });
  }

  editSite(id: any) {
    this.globalService.checkForPermissionAndRoute(
      ROUTING_PERMISSION.UPDATE_SITE,
      URL_ROUTES.EDIT_SITE + '?edit=true&&id=' + id
    );
  }

  viewSite(id: any) {
    this.globalService.checkForPermissionAndRoute(
      ROUTING_PERMISSION.VIEW_SITE,
      URL_ROUTES.VIEW_SITE + id
    );
  }

  routeToAddSite() {
    this.globalService.checkForPermissionAndRoute(
      ROUTING_PERMISSION.ADD_SITE,
      URL_ROUTES.ADD_SITE
    );
  }

  deleteSite(id: any) {
    if (this.globalService.checkForPermission(ROUTING_PERMISSION.DELETE_SITE)) {
      Swal.fire({
        title: 'Confirmation',
        text: 'Are you sure you want to delete this site?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#34c38f',
        cancelButtonColor: '#f46a6a',
        confirmButtonText: 'Yes',
      }).then(result => {
        if (result.isConfirmed) {
          this.siteService.deleteSite(id).then(res => {
            if (res.status == true) {
              Swal.fire(
                'Deleted!',
                'Site deleted successfully',
                'success'
              ).then(r => {
                if (r.value) {
                  this.globalService.checkForPermissionAndRoute(
                    ROUTING_PERMISSION.LIST_SITE,
                    URL_ROUTES.LIST_SITE
                  );
                }
              });
            }
          });
        }
      });
    }
  }
}
