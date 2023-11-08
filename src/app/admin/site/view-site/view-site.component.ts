import { Component, OnInit } from '@angular/core';
import { SiteService } from '../service/site.service';
import { ActivatedRoute, Router } from '@angular/router';
import { URL_ROUTES } from 'src/app/constants/routing';
import { GlobalService } from 'src/app/core/services/global.service';
import { ROUTING_PERMISSION } from 'src/app/constants/permission';

@Component({
  selector: 'app-view-site',
  templateUrl: './view-site.component.html',
  styleUrls: ['./view-site.component.scss'],
})
export class ViewSiteComponent implements OnInit {
  constructor(
    private siteService: SiteService,
    private activatedRoute: ActivatedRoute,
    private globalService: GlobalService
  ) {}

  siteId: number;
  siteData: any = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.siteId = params.id;
      this.viewSiteApi(this.siteId);
    });
  }

  viewSiteApi(id: any) {
    this.siteService.viewSite(id).then(res => {
      if (res.data) {
        this.siteData = res.data;
      }
    });
  }

  deleteSite() {
    this.siteService.deleteSite(this.siteId).then(res => {
      if (res.status) {
        this.globalService.checkForPermissionAndRoute(
          ROUTING_PERMISSION.LIST_SITE,
          URL_ROUTES.LIST_SITE
        );
      }
    });
  }

  updateSite() {
    this.globalService.checkForPermissionAndRoute(
      ROUTING_PERMISSION.UPDATE_SITE,
      URL_ROUTES.EDIT_SITE + '?edit=true&&id=' + this.siteId
    );
  }
}
